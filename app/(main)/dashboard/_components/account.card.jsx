"use client"
import React, {useEffect} from 'react';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import useFetch from "@/hooks/use-fetch";
import {toast} from "sonner";
import {updateDefaultAccount} from "@/actions/account";



const AccountCard = ({ account }) => {
    const { name, type, balance, id, isDefault } = account;

    const {
        loading:updateDefaultLoading,
        fn:updateDefaultFn,
        data:updateAccount,
        error,
    } = useFetch(updateDefaultAccount);

    const handleDefaultChange =async (event)=>{
        event.preventDefault();

        if(isDefault){
            toast.warning("You are using default account");
            return;
        }
        await updateDefaultFn(id);
    };

    useEffect(() =>{
        if (updateAccount?.success) {
            toast.success("Account updated successfully.");
        }
    },[updateAccount, updateDefaultLoading]);


    useEffect(() =>{
        if (error) {
            toast.error(error.message || "An error occurred.");
        }
    },[error]);


    return (
        <Card className="rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300">
            <Link href={`/account/${id}`}>
            <CardHeader className="flex items-center justify-between pb-2">
                <CardTitle className="text-[#0d9488] text-lg font-semibold">
                    {name}
                </CardTitle>
                <Switch checked={isDefault} onClick={handleDefaultChange}
                disabled={updateDefaultLoading}/>
            </CardHeader>

            <CardContent>
                <div className="text-3xl font-bold text-gray-900">
                    ${parseFloat(balance).toFixed(2)}
                </div>
                <div className="text-xs text-muted-foreground capitalize mt-1">
                    {type.toLowerCase()} account
                </div>
            </CardContent>

            <CardFooter className="flex justify-between pt-3 border-t text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                    <ArrowUpRight className="h-4 w-4 text-green-500" />
                    <span>Income</span>
                </div>
                <div className="flex items-center space-x-1">
                    <ArrowDownRight className="h-4 w-4 text-red-500" />
                    <span>Expense</span>
                </div>
            </CardFooter>
            </Link>
        </Card>
    );
};

export default AccountCard;
