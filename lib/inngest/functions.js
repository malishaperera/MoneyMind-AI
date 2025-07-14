import { inngest } from "./client";
import { db } from "@/lib/prisma";
import {sendEmail} from "@/actions/send-email";
import EmailTemplate from "@/emails/template";

export const checkBudgetAlert = inngest.createFunction(
    { name: "Check Budget Alerts" },
    { cron: "0 */6 * * *" }, // every 6 hours
    async ({ step }) => {
        const budgets = await db.budget.findMany({
            include: {
                user: {
                    include: {
                        accounts: true,
                    },
                },
            },
        });

        for (const budget of budgets) {
            const defaultAccount = budget.user.accounts.find(a => a.isDefault);
            if (!defaultAccount) continue;

            await step.run(`check-budget-${budget.id}`, async () => {
                const currentDate = new Date();
                const startOfMonth = new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    1
                );
                const endOfMonth = new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth() + 1,
                    0
                );


                const expenses = await db.transaction.aggregate({
                    where: {
                        userId: budget.userId,
                        accountId: defaultAccount.id,
                        type: "EXPENSE",
                        date: {
                            gte: startOfMonth,
                            lte: endOfMonth,
                        },
                    },
                    _sum: {
                        amount: true,
                    },
                });

                const totalExpenses = expenses._sum.amount?.toNumber() || 0;
                const budgetAmount = budget.amount.toNumber();
                const percentageUsed = (totalExpenses / budgetAmount) * 100;


                if (
                    percentageUsed >= 80 &&
                    (!budget.lastAlertSent || isNewMonth(new Date(budget.lastAlertSent), new Date()))
                ) {
                    //Send Email

                    await sendEmail({
                        to: budget.user.email,
                        subject:`Budget Alerts for${defaultAccount.name}`,
                        react:EmailTemplate({
                            userName: budget.user.name,
                            type:"budget-alerts",
                            data:{
                                percentageUsed,
                                budgetAmount: parseInt(budgetAmount).toFixed(1),
                                totalExpenses: parseInt(totalExpenses).toFixed(1),
                                accountName: defaultAccount.name,
                            }
                        })
                    })

                    //Update lastAlertSent
                    try {
                        await db.budget.update({
                            where: { id: budget.id },
                            data: { lastAlertSent: new Date() },
                        });
                    } catch (e) {
                        console.error(`Failed to update alert time for budget ${budget.id}`, e);
                    }
                }
            });
        }
    }
);

function isNewMonth(lastDate, nowDate) {
    return (
        lastDate.getMonth() !== nowDate.getMonth() ||
        lastDate.getFullYear() !== nowDate.getFullYear()
    );
}