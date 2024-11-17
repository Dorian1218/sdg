import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json()
    const {title, city, state, desc, price} = body
    const {getUser} = getKindeServerSession()
    const user = await getUser()

    if (!user || user === null) {
        throw new Error("Something went wrong...")
    }

    const post = await prisma.post.create({
        data: {
            title: title,
            city: city,
            state: state,
            desc: desc,
            price: price,
            uploadId: user.id,
            pictures: []
        }
    })

    return NextResponse.json(post)
}