"use client"
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
const SigninWithGoogle = () => {
    return (
        <button
            className="w-full mt-4 py-2 px-4 flex items-center justify-center gap-2 border border-gray-500 rounded text-gray-900"
            onClick={() => {
                signIn("google", {
                    callbackUrl: `${window.location.origin}`
                })
            }}
        >
            <FcGoogle /> Continue with Google
        </button>
    );
}

export default SigninWithGoogle;