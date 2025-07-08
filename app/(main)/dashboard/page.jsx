import React from 'react'
import {Card, CardContent} from "@/components/ui/card";
import CreateAccountDrawer from "@/components/create-account-drawer";
import {Plus} from "lucide-react";
import {getUserAccounts} from "@/actions/dashboard";
import AccountCard from "@/app/(main)/dashboard/_components/account.card";

async function DashboardPage(){

    const accounts = await getUserAccounts();
    return (
        <div className="px-5">
            {/*Budget Progress*/}

            {/*Overview*/}

            {/*Accounts Grid*/}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <CreateAccountDrawer>
                    <Card className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer">
                        {/*<motion.div*/}
                        {/*    whileHover={{ scale: 1.05 }}*/}
                        {/*    whileTap={{ scale: 0.97 }}*/}
                        {/*    transition={{ type: "spring", stiffness: 300 }}*/}
                        {/*>*/}

                        <CardContent className="flex flex-col items-center justify-center py-5">
                            <Plus className="h-10 w-10 mb-2"/>
                            <p className="text-sm font-medium">Add New Account</p>

                        </CardContent>
                    </Card>

                    {/*</motion.div>*/}

                </CreateAccountDrawer>

                {accounts.length > 0 &&
                    accounts?.map((account) =>{
                        return <AccountCard key ={account.id} account={account}/>;
                    })
                }
            </div>
        </div>
    )
}
export default DashboardPage
