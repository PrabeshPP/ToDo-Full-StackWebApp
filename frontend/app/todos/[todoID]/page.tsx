import { useRouter } from "next/router";



export default function Page({ params,
}: {
    params: { slug: String }
}) {
    const router=useRouter();
    const id:any=router.query.todoID;

    return <div>
        hii
        <p>{id}</p>
    </div>
}