import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { User } from "./user";
import { SignIn, SignOut } from "./auth";
export default async function Home(){
  const session = await getServerSession(authOptions);

  return (
    <>
    {session == null ? <SignIn /> : <SignOut />}
    <h1>Server Session</h1>
    <pre>{JSON.stringify(session)}</pre>
    <h1>Client Session</h1>
    <h2><User/></h2>
    </>
    
  )
}