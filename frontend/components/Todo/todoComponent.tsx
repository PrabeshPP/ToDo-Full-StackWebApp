import classes from "./todoComponent.module.scss";
import {TiTick} from "react-icons/ti";
import {AiFillDelete,AiOutlineArrowRight} from "react-icons/ai";
import Link from "next/link"

interface todo{
    id:number,
    title:string,
    description:string,
    isCompleted:boolean
}

const TodoComponent=(props:{todoList:Array<todo>})=>{
    return (
        <div className={classes.box}>
            {
                props.todoList.map((todoItem)=>{
                    return <div key={todoItem.id} className={classes.card}>
                        <div className={classes.titleBox}>
                            <p className={classes.title}>{todoItem.title}</p>
                        </div>
                        <div className={classes.descriptionBox}>
                            <p>{todoItem.description}</p>
                        </div>
                        <div className={classes.buttonBox}>
                            <div className={classes.addButton}>{
                                <TiTick/>
                            }</div>
                            <div className={classes.deleteButton}>
                                {
                                    <AiFillDelete/>
                                }
                            </div>
                        </div>
                        <Link href={`/todos/${todoItem.id}`} className={classes.moreBox}>
                                <AiOutlineArrowRight/>
                        </Link>
                    </div>
                })
            }
        </div>
    )
}

export default TodoComponent;