import { getServerSession } from "next-auth";
import authOptions from "../utils/auth";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Navbar = async () => {
    const session = await getServerSession(authOptions)

    return (<div className="w-full shadow-lg text-gray-900 py-3 px-4 flex justify-between items-center">
        <div>

        </div>
        <div>
           <SearchInput />
        </div>
        {
            session ? <LogoutButton /> : <Link className="bg-sky-500 text-white py-2 px-4 rounded" href="/auth">Login</Link>
        }
    </div>);
}

export default Navbar;