import React from 'react'
import { getKindeServerSession, LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import AuthNav from "@/components/AuthNav";
import { Button } from "@/components/ui/button";
import { Input } from './ui/input';
const { getUser } = getKindeServerSession()

const Navbar = async () => {
    const user = await getUser()
    return (
        <div className="flex justify-between">
            <p className="text-2xl text-blue-600">SecondChance</p>
            {user ? (
                <AuthNav email={user.email as string} name={user.given_name as string} userImage={user.picture as string} last={user.family_name as string} />
            ) : (
                <div className="flex gap-4 items-center">
                    <LoginLink><Button className="bg-blue-600 hover:bg-blue-800">Sign in</Button></LoginLink>
                    <RegisterLink>Sign up</RegisterLink>
                </div>
            )}
        </div>
    )
}

export default Navbar