import List from "../List/List";
import React, {useState} from "react";

import AddSvg from "../../assets/img/plus.svg";
import './AddList.scss'
import Badge from "../Badge/Badge";

import closeSvg from "../../assets/img/close.svg"

const AddList =({colors})=> {

let [visiblePopup, setVisiblePopup] = useState(false)
let [selectedColor, selectColor] = useState(colors[0].id)

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
          <img onClick={()=> setVisiblePopup(false)} src={closeSvg} alt="Close button" className="add-list_popup-close-btn"/>
           <input className="field" type="text" placeholder="Название списка"/>
           <div className="add-list_popup-colors">


                   {
                       colors.map(color =>  <Badge onClick={()=> selectColor(color.id)} key={color.id} color={color.name}
                       className={selectedColor=== color.id  && "active" }/> )
                   }

           </div>
           <button className="button">Добавить</button>
    </div>}
    </div>
};


export default AddList