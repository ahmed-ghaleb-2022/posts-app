"use client"
import Link from "next/link";
import { useState } from "react";


const SearchInput = () => {
    const [search, setSearch] = useState<string>("");
    return (
        <div
            className="w-full max-w-lg  p-4 flex items-center ">

            <input type="text" name="search" id="search"
                value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..." className="w-full p-2 border border-gray-300 rounded-s-md outline-none" />

            {
                search === "" ? (
                    <span
                        className="bg-gray-300 p-2 rounded-e-md cursor-pointer"
                    >
                        Search
                    </span>
                ) : (
                    <Link href={`/friends/${search}`}
                        className="bg-gray-300 p-2 rounded-e-md">
                            Search
                    </Link>
                )
            }




        </div>
    );
}

export default SearchInput;