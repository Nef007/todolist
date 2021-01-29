import React, {useState} from 'react'
import AddSvg from "../../assets/img/plus.svg";
import axios from "axios";


const AddTaskForm = ({list, onAddTask}) => {

    const [visibleForm, setFormVisible] = useState(false)
    const [inputValue, setinputValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const toggleFormVisible = () => {
        setFormVisible(!visibleForm)
        setinputValue('')

    }

    const addTask = () => {

        const obj = {
            listId: list.id,
            text: inputValue,
            completed: false

        }


        setIsLoading(true)
        axios.post('http://localhost:3001/tasks', obj ).then(({data}) => {

            onAddTask(list.id, data)
            toggleFormVisible();
        }).catch(()=> {
            alert("Ошибка при добавлении задачи")
        })
            .finally(()=> {
            setIsLoading(false)
        })



    }

    return <div className="tasks_form">
        {!visibleForm ? <div onClick={toggleFormVisible} className="tasks_form_new">
                <img src={AddSvg} alt="addicon"/>
                <span>Новая задача</span>
            </div>
            :
            <div className="tasks_form_block">
                <input  onChange={e => setinputValue(e.target.value)} value={inputValue} className="field" type="text" placeholder="Текст задачи"/>
                <button disabled={isLoading} onClick={addTask} className="button">{isLoading ? 'Добавление...' :   'Добавить задачу'}</button>
                <button onClick={toggleFormVisible} className="button button_grey">Отмена</button>
            </div>

        }
    </div>
}
export default AddTaskForm;