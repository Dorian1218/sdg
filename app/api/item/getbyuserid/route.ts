import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const id = req.nextUrl.searchParams.get('id') as string

    const posts = await prisma.post.findMany({
        where: {
            uploadId: id
        }
    })

    return NextResponse.json(posts)
}