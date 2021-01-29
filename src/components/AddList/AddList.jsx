import List from "../List/List";
import React, {useEffect, useState} from "react";
import axios from "axios";

import './AddList.scss'
import Badge from "../Badge/Badge";

import AddSvg from "../../assets/img/plus.svg";
import closeSvg from "../../assets/img/close.svg"

const AddList =({colors, onAdd})=> {

let [visiblePopup, setVisiblePopup] = useState(false)
let [selectedColor, selectColor] = useState(3)
let [inputValue, setinputValue] = useState('')
let [isLoading, setisLoading] = useState(false)

  useEffect(()=> {
      if(Array.isArray(colors)) {
          selectColor(colors[0].id)
      }

  }, [colors])

    const onClose = () => {
        setVisiblePopup(false)
        setinputValue('')
        selectColor((colors[0].id));

    }

const addList =() => {
    if (!inputValue){
        alert('Введите значение')
        return;
    }

    setisLoading(true)
    axios.post('http://localhost:3001/lists', {
        name: inputValue,
        colorId: selectedColor
    }).then(({data}) => {
        const color = colors.filter(c => c.id === selectedColor)[0]
        const listObj = { ...data, color, tasks: []}
        onAdd(listObj)
        onClose();

    }).catch(()=> {
        alert("Ошибка при добавлении списка")
    }).finally(()=> {
        setisLoading(false)
    })



}

  return<div className="add-list">
    <List onClick={() => setVisiblePopup(!visiblePopup)}
          items={[
        {
            className: "list_add-button",
            icon: AddSvg,
            name: "Добавить список"

        }

    ]}

    />
      {visiblePopup && <div className="add-list_popup">
          <img onClick={onClose} src={closeSvg} alt="Close button" className="add-list_popup-close-btn"/>
           <input onChange={e => setinputValue(e.target.value) } value={inputValue} className="field" type="text" placeholder="Название списка"/>
           <div className="add-list_popup-colors">


                   {
                       colors.map(color =>  <Badge onClick={()=> selectColor(color.id)} key={color.id} color={color.name}
                       className={selectedColor=== color.id  && "active" }/> )
                   }

           </div>
           <button onClick={addList} className="button">
               {isLoading ? 'Добавление..' : 'Добавить' }
           </button>
    </div>}
    </div>
};


export default AddList