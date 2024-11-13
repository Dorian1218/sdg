import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

interface Props {
    email: string
    name: string
    userImage: string
}

const AuthNav = ({ email, name, userImage }: Props) => {
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button className='relative w-10 h-10 rounded-full'>
                    <Avatar>
                        <AvatarImage src={userImage} />
                        <AvatarFallback className='text-black'>{name.slice(0, 3).toUpperCase()}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align='end' forceMount>
                <DropdownMenuLabel>
                    <div className='flex flex-col space-y-1'>
                        <p>{name}</p>
                        <p className='text-sm text-gray-500'>{email}</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <LogoutLink className='hover: cursor-pointer'><Button className='w-full' variant="destructive">Log out</Button></LogoutLink>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default AuthNav