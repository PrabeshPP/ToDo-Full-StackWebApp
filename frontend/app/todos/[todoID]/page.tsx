



export default function Page({ params,
}: {
    params: { todoID: String }
}) {
    

    return <div>
        {params.todoID}
        
    </div>
}