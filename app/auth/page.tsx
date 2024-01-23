import { getServerSession } from "next-auth";
import SigninWithGithub from "../components/SigninWithGithub";
import authOptions from "../utils/auth";
import { redirect } from "next/navigation";
import SigninWithGoogle from "../components/SigninWithGoogle";
const AuthRoute = async () => {
    const session = await getServerSession(authOptions)

    if (session) {
        return redirect("/")
    }
    return ( 
    <div
    className="flex flex-col items-center justify-center h-screen bg-gray-100"
    >
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center w-96">
            <h1 className="text-2xl font-bold mb-6 pb-4 border-b-2 w-full text-center">Sign Up/Sign in</h1>
            
            <SigninWithGithub />
            <SigninWithGoogle />
        </div>
    </div>
     );
}
 
export default AuthRoute;