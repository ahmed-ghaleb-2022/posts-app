"use client"
import { signIn } from "next-auth/react";
import { BsGithub } from "react-icons/bs";
const SigninWithGithub = () => {
    return (
        <button
            className="w-full mt-4 py-2 px-4 flex items-center justify-center gap-2 border border-gray-500 rounded text-gray-900"
            onClick={() => {
                signIn("github", {
                    callbackUrl: `${window.location.origin}`
                })
            }}
        >
           <BsGithub /> Continue with GitHub
        </button>
    );
}

export default SigninWithGithub;