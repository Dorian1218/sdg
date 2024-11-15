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


const ItemCard = () => {
    return (
        <Card className="w-[300px] h-[300px] border-2 flex flex-col justify-between">
            <CardHeader className='p-2'>
                <CardTitle>Windows 10 Laptop</CardTitle>
            </CardHeader>
            <CardContent className='border flex justify-center relative h-full w-full items-center'>
                <Image src="/laptop.jpg" alt="" fill={true} className='p-3'/>
            </CardContent>
            <CardFooter className='p-2'>
                <CardDescription>City, ST</CardDescription>
            </CardFooter>
        </Card>

    )
}

export default ItemCard