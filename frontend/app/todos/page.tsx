import React from 'react'
import classes from "../../styles/todo.module.scss";
import TodoComponent from '../../components/Todo/todoComponent';

const todoList=[
    {
        id:1,
        title:"UI/UX Design",
        description:"Need to complete the task as soon as possible. I don't know what I am doing",
        isCompleted:false
    },
    {
        id:2,
        title:"UI/UX Design",
        description:"Need to complete the task as soon as possible",
        isCompleted:false
    },
    {
        id:3,
        title:"UI/UX Design",
        description:"Need to complete the task as soon as possible",
        isCompleted:false
    },
    {
        id:4,
        title:"UI/UX Design",
        description:"Need to complete the task as soon as possible",
        isCompleted:false
    },
    {
        id:5,
        title:"UI/UX Design",
        description:"Need to complete the task as soon as possible",
        isCompleted:false
    },
]

const page = () => {
  return (
    <div className={classes.container}>
       <TodoComponent todoList={todoList}/>
    </div>
  )
}

export default page