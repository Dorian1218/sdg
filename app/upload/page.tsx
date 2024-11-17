"use client"

import { Input } from '@/components/ui/input'
import React, { ChangeEvent, useRef, useState, useTransition } from 'react'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Post } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library'
import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import convertBlobUrlToFile from '@/lib/convertBlobUrlToFile'
import { uploadImage } from '@/lib/uploadImage'

interface FileState {
    file: File | null;
}

const page = () => {
    const [data, setData] = useState({
        title: "",
        desc: "",
        city: "",
        state: "",
        price: ""
    })
    const [urlArray, setUrlArray] = useState<any>([])
    const [imageURL, setImageURL] = useState<string[]>([])
    const imageInputRef = useRef<HTMLInputElement>(null)
    const [isPending, startTransition] = useTransition()
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const fileArray = Array.from(event.target.files)
            const newImageUrl = fileArray.map((file) => URL.createObjectURL(file))
            setImageURL([...imageURL, ...newImageUrl])
        }
    };
    const handleFile = async (id: number) => {
        startTransition(async () => {
            for (const url of imageURL) {
                const imageFile = await convertBlobUrlToFile(url)
                const { imageUrl, error } = await uploadImage({
                    file: imageFile,
                    bucket: "images",
                    id: id
                })
                setUrlArray([...urlArray, ...imageUrl])
            }
        })
    }
    let id : any
    const handleUpload = () => {
        console.log(data)
        fetch("http://localhost:3000/api/item/create", { method: "POST", body: JSON.stringify(data) }).then((res) => {
            return res.json()
        }).then((data) => {
            handleFile(data.id)
            id = data.id
        })
    }
    return (
        <div className='flex flex-col gap-y-3 justify-center w-full max-w-sm items-center'>
            <Input placeholder='Item title' className='border-black border-2' value={data?.title} onChange={(e) => { setData({ ...data, title: e?.target?.value }) }} />
            <Input placeholder='Description' className='border-black border-2' value={data?.desc} onChange={(e) => { setData({ ...data, desc: e?.target?.value }) }} />
            <div className="w-full max-w-sm items-center gap-1.5 flex">
                <Input placeholder='City' className='border-black border-2' value={data?.city} onChange={(e) => { setData({ ...data, city: e?.target?.value }) }} />
                <Input placeholder='State' className='border-black border-2' value={data?.state} onChange={(e) => { setData({ ...data, state: e?.target?.value }) }} />
            </div>
            <Input placeholder="Price" className='border-black border-2' value={data?.price?.toString()} onChange={(e) => { setData({ ...data, price: e?.target?.value }) }} />
            <Input id="picture" type="file" className='border-black border-2' onChange={handleFileChange} multiple ref={imageInputRef} disabled={isPending} />
            <div className='flex gap-x-3'>
                {imageURL.map((url, index) => (
                    <Image
                        key={url}
                        src={url}
                        width={300}
                        height={300}
                        alt={`${index}`}
                    />
                ))}
            </div>
            <Button className='w-full max-w-sm' onClick={handleUpload}>Upload</Button>
        </div>
    )
}

export default page