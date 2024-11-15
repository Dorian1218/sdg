import ItemCardClicked from '@/components/ItemCardClicked'
import React from 'react'

const page = ({params }: {params: {id: string}}) => {
  return (
    <div>
      <h1>Product {params.id}</h1>
      <ItemCardClicked />
    </div>
  )
}

export default page