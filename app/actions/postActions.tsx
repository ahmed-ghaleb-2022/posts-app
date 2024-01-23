"use server"
import { revalidatePath } from "next/cache"
import prisma from "../utils/db"

export async function create(formData: FormData){
    const post = formData.get("post") as string
    const userId = formData.get("userId") as string

    await prisma.post.create({
        data: {
            content: post,
            authorId: userId
        }
    })

    revalidatePath("/posts")
}