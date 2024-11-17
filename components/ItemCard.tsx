"use client"

import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Post } from '@prisma/client'


const ItemCard = ({id, title, city, state, pictures, desc, price, uploadId}: Post) => {
    
const router = useRouter()
    return (
        <Card className="w-[300px] h-[300px] border-2 flex flex-col justify-between hover: cursor-pointer" onClick={() => router.push(`/product/${id}`)}>
            <CardHeader className='p-2'>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className='border flex justify-center relative h-full w-full items-center'>
                <Image src="/laptop.jpg" alt="" fill={true} className='p-3'/>
            </CardContent>
            <CardFooter className='p-2'>
                <CardDescription>{city}, {state}</CardDescription>
            </CardFooter>
        </Card>

    )
}

export default ItemCard