import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const id = req.nextUrl.searchParams.get('id') as string
    const post = await prisma.post.findUnique({
        where: {
            id: id
        }
    })

    return NextResponse.json(post)
}