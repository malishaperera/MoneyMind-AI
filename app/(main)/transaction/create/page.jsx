import React from "react";
import { getUserAccounts } from "@/actions/dashboard";
import { defaultCategories } from "@/data/categories";
import AddTransactionForm from "@/app/(main)/transaction/_components/transaction-form";
import {getTransaction} from "@/actions/transaction";

const AddTransactionPage = async ({searchParams}) => {
  const accounts = await getUserAccounts();

    const params = await searchParams;

    const editId = params?.edit;
  console.log("this idf"+editId);

  let initialData = null;
  if(editId){
      const transaction= await getTransaction(editId);
      initialData = transaction;
  }



  return (
    <div className="max-w-3xl mx-auto px-5">
        <h1 className="text-4xl font-bold text-[#0d9488] mb-8 border-b pb-2 border-[#facc15]">
            {editId ? "Edit" : "Add"} Transaction
        </h1>


        <AddTransactionForm
          accounts={accounts}
          categories={defaultCategories}
          editMode={!!editId}
          initialData={initialData}
      />
    </div>
  );
};
export default AddTransactionPage;
