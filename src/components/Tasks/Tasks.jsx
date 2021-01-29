import React from 'react'

import './Tasks.scss';
import penSvg from '../../assets/img/pen.svg'
import axios from "axios";

import AddTaskForm from "./addTaskForm";
import Task from "./Task";
import {Link} from "react-router-dom";



const Tasks = ({list, onEditTitle, onEditTask, onAddTask, onRemoveTask, withoutEmpty, onCompleteTask}) => {

const editTitle =() => {
    const newTitle = window.prompt('Название списка', list.name)
    if(newTitle){
        onEditTitle(list.id, newTitle)

        axios.patch('http://localhost:3001/lists/'+ list.id,
            {name: newTitle}).catch(()=> {
            alert('Не удалось обновить название списка')
        })
    }

}




    return <div className="tasks">
        <Link to={`/lists/${list.id}`}><h2 style={{color: list.color.hex}} className="tasks_title">
            {list.name}
            <img onClick={editTitle} src={penSvg} alt="edit"/>
        </h2></Link>

        <div className="tasks_items">
            {!withoutEmpty && list.tasks && !list.tasks.length && <h2>Задачи отсутствуют</h2>}
            {
                list.tasks && list.tasks.map( task => (
                    <Task  onComplete={onCompleteTask} list={list} onEdit={onEditTask} onRemove={onRemoveTask} key={task.id} {...task} />
                ))

            }

          <AddTaskForm key={list.id} list={list}  onAddTask={onAddTask} />

        </div>



    </div>
}
export default Tasks;