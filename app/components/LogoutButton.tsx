"use client"
import { signOut } from "next-auth/react";

const LogoutButton = () => {
   
        return (
            <button
                className="bg-sky-600 text-white py-2 px-4 rounded"
                onClick={() => {
                    signOut({ callbackUrl: `${window.location.origin}/auth` })}}
            >
                logout
            </button>
        );
    
}

export default LogoutButton;