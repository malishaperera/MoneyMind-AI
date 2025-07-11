import { getAccountWithTransactions } from "@/actions/account";
import { notFound } from "next/navigation";
import {Suspense} from "react";
import TransactionTable from "@/app/(main)/account/_components/transaction-table";
import {BarLoader} from "react-spinners";

const AccountsPage = async ({ params }) => {
    const awaitedParams = await params;
    const { id } = awaitedParams;

    const accountData = await getAccountWithTransactions(id);

    if (!accountData) {
        notFound();
    }

    const { transactions, ...account } = accountData;

    return (
       <div className="space-y-8 px-5">
           <div className="flex gap-4 items-end justify-between">
           <div>
               <h1 className="text-5xl sm:text-6xl font-bold  capitalize">
                   {account.name}
               </h1>
               <p>{account.type.charAt(0).toUpperCase() + account.type.slice(1).toLowerCase()} Account</p>
           </div>
           <div className="text-right pb-2">
               <div className="text-xl sm:text-2xl font-bold">
                   ${parseFloat(account.balance).toFixed(2)}
               </div>
               <p className="text-xl sm:text-2xl font-bold">
                   {account._count.transactions}Transaction</p>
           </div>

           </div>
           {/*Chart*/}
           {/*Transaction*/}
           <Suspense
           fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea"/>}>
               {/*<TransactionTable transaction={transactions}/>*/}
               <TransactionTable transactions={transactions} />
               {/*csc*/}
           </Suspense>








       </div>
    );
};

export default AccountsPage;
