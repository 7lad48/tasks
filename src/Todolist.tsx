import React, {ChangeEvent, useState} from 'react';
import {FilterType} from "./App";
import Button from "./Button";
import Input from "./Input";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id:number)=>void
    changeFilter: (value:FilterType)=>void
    addTask: (task:string)=>void
    changeIsDone: (id:number)=>void
}

export function Todolist(props: PropsType) {
    const showAllTasks = () => props.changeFilter('all')
    const showActiveTasks = () => props.changeFilter('active')
    const showCompletedTasks = () => props.changeFilter('completed')

    const tasks = props.tasks.map( (task) => {
        const removeTask = () => props.removeTask(task.id)
        const toggleIsDone = () => props.changeIsDone(task.id)
        return <li key={task.id}>
            <input onChange={toggleIsDone} type="checkbox" checked={task.isDone}/>
            <span>{task.title}</span>
            <button onClick={removeTask}>X</button>
        </li>
    })
    const [inputField, setInputField] = useState('');
    const inputChange = (event:ChangeEvent<HTMLInputElement>) => {
        setInputField(event.currentTarget.value);
    }
    const addTaskBtnHandler = () => {
        if(inputField.trim()){
            props.addTask(inputField);
        }
        setInputField('');
    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            {/*<input onChange={inputChange} value={inputField}/>*/}
            {/*<button onClick={addTaskBtnHandler}>+</button>*/}
            <Input inputChange={inputChange} inputField={inputField}/>
            <Button name={'add'} callBack={addTaskBtnHandler}/>
        </div>
        <ul>{tasks}</ul>
        <div>
            <button onClick={showAllTasks}>All</button>
            <button onClick={showActiveTasks}>Active</button>
            <button onClick={showCompletedTasks}>Completed</button>
        </div>
    </div>
}
