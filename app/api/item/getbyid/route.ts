import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const idString = req.nextUrl.searchParams.get('id')
    const id = idString ? parseInt(idString, 10) : null
    const post = await prisma.post.findUnique({
        where: {
            id: id as unknown as number
        }
    })

    return NextResponse.json(post)
}