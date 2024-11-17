"use client"

import ItemCardClicked from '@/components/ItemCardClicked'
import { Post } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library'
import React, { use, useEffect, useState } from 'react'

const page = ({ params }: { params: Promise<{ id: number }> }) => {
  const [item, setItem] = useState<Post>()
  const { id } = use(params) 
  useEffect(() => {
    fetch(`http://localhost:3000/api/item/getbyid/?id=${id}`).then((res) => {
      return res?.json()
    }).then((data) => {
      setItem(data)
    })
  }, [])
  return (
    <div>
      <h1>Product {id}</h1>
      <div className='flex'>
        <ItemCardClicked id={id} title={item?.title as string} city={item?.city as string} state={item?.state as string} pictures={item?.pictures as string[]} desc={item?.desc as string} price={item?.price as Decimal} uploadId={item?.uploadId as string} createdAt={item?.createdAt as Date} updatedAt={item?.updatedAt as Date}/>
        <div className='w-1/2 px-5'>
          <p className='text-xl'>Item</p>
        </div>
      </div>
    </div>
  )
}

export default page