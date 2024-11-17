"use client"

import Image from "next/image";
import AuthNav from "@/components/AuthNav";
import ItemCard from "@/components/ItemCard";
import { useEffect, useState } from "react";
import { Post } from "@prisma/client";
export default function Home() {
  const [cards, setCards] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/api/item/get").then((res) => {
      return res.json()
    }).then((data) => {
      setCards(data)
    })
    console.log(cards)
  }, [])
  return (
    <div>
      <p className="text-2xl bold mb-2">Browse All</p>
      <div className="flex flex-wrap gap-5">
        {cards.map((card: Post) => (
          <ItemCard key={card.id} id = {card.id} title={card.title} city={card.city} state={card.state} pictures={card.pictures} desc={card.desc} price={card.price} uploadId={card.uploadId} createdAt={card.createdAt} updatedAt={card.updatedAt}/>
        ))}
      </div>
    </div>
  );
}