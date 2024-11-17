"use client"

import ItemCard from '@/components/ItemCard'
import { Post } from '@prisma/client'
import React, { use, useEffect, useState } from 'react'

const page = ({ params }: { params: Promise<{ userId: string }> }) => {
  const [cards, setCards] = useState([])
  const { userId } = use(params)

  useEffect(() => {
    fetch(`http://localhost:3000/api/item/getbyuserid?id=${userId}`).then((res) => {
      return res?.json()
    }).then((data) => {
      setCards(data)
    })
  }, [])
  return (
    <div>
      Your Items:
      <div className="flex flex-wrap gap-5">
        {cards.map((card: Post) => (
          <ItemCard key={card.id} id={card.id} title={card.title} city={card.city} state={card.state} pictures={card.pictures} desc={card.desc} price={card.price} uploadId={card.uploadId} createdAt={card.createdAt} updatedAt={card.updatedAt} />
        ))}
      </div>
    </div>
  )
}

export default page