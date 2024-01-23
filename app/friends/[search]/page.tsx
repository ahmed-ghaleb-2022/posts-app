import { getServerSession } from "next-auth";
import authOptions from "../../utils/auth";
import prisma from "../../utils/db"
import { redirect } from "next/navigation";
import { User } from "../../types/user";
import Image from "next/image";
import FriendCard from "@/app/components/FriendCard";


async function getData ( authId?: string ,search?: string) {
    const data = await prisma.user.findMany({
        where: {
            id: {
                not: authId
            },
            name: {
                contains: search,
                mode: "insensitive"
            }
        }
    })
    return data
}


const Friends = async ({ params }: { params: { search: string } }) => {
    const session = await getServerSession(authOptions)

    if (!session) {
        return redirect("/auth")
    }

    const users = await getData((session?.user as User)?.id, params.search)

    return (
        <div className="flex flex-col items-center h-[calc(100vh-120px)] bg-gray-100 pt-4 overflow-y-scroll">
            <div className="w-full max-w-lg p-4 " >
                {
                    users?.map((user) => (
                        <FriendCard key={user.id} user={user} />
                    ))
                }
            </div>
        </div>
      );
}
 
export default Friends ;