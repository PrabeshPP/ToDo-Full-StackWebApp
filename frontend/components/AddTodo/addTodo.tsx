const AddToDo=()=>{
    return <div className="h-[70%] w-[40%] bg-white ">
        <form className="h-[100%] w-[100%] flex items-center flex-col">
            <div className="h-[20%] w-[80%] flex flex-col">
                <label className="font-bold">Title</label>
                <input name="title" className="h-[80%] w-[100%] outline-none border-[2px] border-black pl-2"/>
            </div>
            <div className="h-[50%] w-[80%] flex flex-col justify-between">
                <label className="font-bold">Description</label>
                <textarea className="h-[80%] w-[100%] outline-none border-[2px] border-black pl-2 text-left" name="title"/>
            </div>
            
            <div className="h-[20%] w-[100%] flex flex-row justify-around pt-4">
                <div className="h-[90%] w-[45%] bg-green-500 flex justify-center items-center rounded-lg cursor-pointer text-white">Create</div>
                <div className="h-[90%] w-[45%] bg-red-500 flex justify-center items-center rounded-lg cursor-pointer text-white">Cancel</div>
            </div>
            

        </form>
    </div>
}

export default AddToDo;