import Image from "next/image";

interface User {
    id: string;
    name: string;
    image: string;
    friend ?: boolean;
}

interface FriendCardProps {
    user: User;
    friend ?: boolean;
}

const FriendCard = ({ user, friend }: FriendCardProps ) => {
    return ( 
        <div className="w-full bg-white shadow-md p-4 rounded-lg my-2 flex items-center justify-between gap-5">
            <div className="flex items-center gap-4">
                {user.image ? <Image src={user.image} alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover" /> : null}
                <h1>{user.name}</h1>
            </div>

            {!friend && <span 
            className="bg-sky-600 text-white py-2 px-4 rounded cursor-pointer">
                send Request
            </span>}

        </div>
     );
}
 
export default FriendCard;