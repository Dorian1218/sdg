import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'

const ItemCardClicked = () => {
  return (
    <Card className="w-[500px] h-[500px] border-2 flex flex-col justify-between">
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

export default ItemCardClicked