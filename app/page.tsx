import { getServerSession } from "next-auth";
import authOptions from "./utils/auth";
import LogoutButton from "./components/LogoutButton";
import Link from "next/link";

// existing-file.tsx
import { User } from './types/user';

// ...rest of the code

export default async function Home() {

  const session = await getServerSession(authOptions)

  console.log((session?.user as User)?.id)
  return (
    <>
      <h1> Posts App</h1>

      {
        session ? <>
          <h2> Welcome {session.user?.name} </h2>
          <LogoutButton />
        </>
          : <>
            <h2> Welcome Guest </h2>
            <Link href="/auth">Login</Link>
          </>
      }

    </>
  );
}
