import classes from "../../styles/addtodo.module.scss";
import AddTodo from "../../components/AddTodo/addTodo";

export default function Page(){
    return <div className={classes.container}>
        <AddTodo/>
    </div>
}