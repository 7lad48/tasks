import React, {useState} from 'react';
import './App.css';
import {Todolist, TaskType} from './Todolist';

export type FilterType = 'all' | 'active' | 'completed'
function App() {
    const idGenerator = Math.floor( ( (Math.random()*1000 + Math.random()*1000) / (Math.random()*4 + Math.random()*4) ) * Math.random()*80 );
    const toDoTitle: string = "What to learn";
    const [tasks, setTasks] = useState<Array<TaskType>>([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
    ]);
    const [filter, setFilter] = useState<FilterType>('all');
    const removeTask = (id:number) => {
        const updatedTasks = tasks.filter(task => id !== task.id);
        setTasks(updatedTasks);
    }
    const addTask = (task:string) => {
        setTasks([...tasks, {id: idGenerator, title: task, isDone: false}]);
    }
    const filteredTasks = (filter:FilterType, tasks:Array<TaskType>): Array<TaskType> => {
        if (filter === 'active') {
            return tasks.filter(task => !task.isDone);
        } else {
            return filter === 'completed' ? tasks.filter(task => task.isDone) : tasks;
        }
    }
    const changeFilter = (value:FilterType) => {
        setFilter(value);
    }
    const changeIsDone = (id:number) => {
        const updatedTasks:Array<TaskType> = tasks.map(task => {
            if(id === task.id){
                task.isDone = !task.isDone
            }
            return task
        })
        setTasks(updatedTasks);
    }
    return (
        <div className="App">
            <Todolist
                title={toDoTitle}
                tasks={filteredTasks(filter, tasks)}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeIsDone={changeIsDone}
            />
        </div>
    );
}

export default App;
