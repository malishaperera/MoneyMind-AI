import { getAccountWithTransactions } from "@/actions/account";
import { notFound } from "next/navigation";

const AccountsPage = async ({ params }) => {
    const awaitedParams = await params;
    const { id } = awaitedParams;

    const accountData = await getAccountWithTransactions(id);

    if (!accountData) {
        notFound();
    }

    const { transactions, ...account } = accountData;

    return (
       <div>
           <div>
               <h1>{account.name}</h1>
               <p>{account.type.charAt(0).toUpperCase() + account.type.slice(1).toLowerCase()} Account</p>

           </div>

           <div>
               <div>
                   ${parseFloat(account.balance).toFixed(2)}
               </div>
               <p>{account._count.transactions}Transaction</p>
           </div>
       </div>
    );
};

export default AccountsPage;
