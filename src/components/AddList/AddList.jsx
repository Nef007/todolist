import List from "../List/List";
import React, {useState} from "react";

import AddSvg from "../../assets/img/plus.svg";
import './AddList.scss'

const AddList =()=> {

let [visiblePopup, setVisiblePopup] = useState(false)

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
           <input className="field" type="text" placeholder="Название списка"/>
    </div>}
    </div>
};


export default AddList