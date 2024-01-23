import { getServerSession } from "next-auth";
import authOptions from "../utils/auth";
import Form from "../components/Form";
import { redirect } from "next/navigation";
import { User } from "../types/user";
import { create } from "../actions/postActions";
import  prisma  from "../utils/db";
import Image from "next/image";


async function getData (Id: string){
    const data = await prisma.post.findMany({
        where: {
            authorId : Id
        },
        orderBy: {
            createdAt: "desc"
          }
    })

    return data
}


const Posts = async () => {
    const session = await getServerSession(authOptions)

    if (!session) {
        return redirect("/auth")
    }

    const posts = await getData((session?.user as User)?.id)
    
    return ( <div className="flex flex-col items-center  h-screen bg-gray-100">
        <h1>Posts</h1>

        <Form action={create} userId={(session?.user as User)?.id} userImage={session?.user?.image || undefined} className="max-w-lg flex flex-col items-end bg-white shadow-md" />

        {
            posts?.map((post) => (

                <div key={post.id} className="w-full max-w-lg bg-white shadow-md p-4 rounded-lg my-2">
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            {
                                session?.user?.image ? <Image src={session?.user?.image} alt="" width={40} height={40} className="w-full h-full object-cover" /> : null
                            }
                            
                        </div>
                        <div className="ml-2">
                            <p className="font-bold">{session?.user?.name}</p>
                        </div>
                    </div>
                    <p>{post.content}</p>
                </div>

            ))
        }
    </div> );
}
 
export default Posts;