import { z } from "zod";

// Validate account creation form fields
export const accountSchema = z.object({
  name: z.string().min(1, "Name is required"),
  type: z.enum(["CURRENT", "SAVINGS"]),
  balance: z.string().min(1, "Initial balance is required"),
  isDefault: z.boolean().default(false),
});

// Validate
export const transactionSchema = z.object({
  type: z.enum(["INCOME","EXPENSE"]),
  amount: z.string().min(1, "Amount is required"),
  description: z.string().optional(),
  date: z.string({ required_error: "Date is required" }),
  accountId: z.string().min(1, "Account ID is required"),
  category: z.string().min(1, "Category is required"),
  isRecurring: z.boolean().default(false),
  recurringInterval: z
      .enum(["DAILY","WEEKLY","MONTHLY","YEARLY"])
      .optional(),
}).superRefine((data, ctx) =>{
  if (data.isRecurring && !data.recurringInterval) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Recurring interval is required for recurring transactions",
      path:["recurringInterval"]
    });
  }
});