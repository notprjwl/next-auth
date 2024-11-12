import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    // const session = await getServerSession(authOptions);
    
    // if (!session) {
    //     redirect('/api/auth/signin')
    // }

    return <>secret sauce</>
}



// 'use client';
// import { useSession } from "next-auth/react";
// export default function Dashboard() {
//     const { status } = useSession({
//         required: true,
//         onUnauthenticated() {
//             console.log('not logged in')
//         },
//     });
//     if (status =='loading') {
//         return "loading or unauthorized"
//     }

//     return <> secret sauce </>
// }
