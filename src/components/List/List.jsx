import React from 'react';
import cn from 'classnames';
import './List.scss'
import Badge from "../Badge/Badge";

import isRemove from '../../assets/img/remove.svg'
import axios from "axios";

const List =({items, isRemovable, onClick, onRemove, onClickItem, activeItem})=>{

    const  removeList = (item) => {
            if (window.confirm("Действительно удалить?")) {

                axios.delete('http://localhost:3001/lists/' + item.id).then(()=> {

                    onRemove(item.id)

                })

            }
    }

return  <ul onClick={onClick} className="list">
    {
        items.map((item, index) =>
            <li   onClick={()=> {  if (onClickItem) onClickItem(item)}} key={index} className={cn(item.className,
                {active: item.active ? item.active  : activeItem && activeItem.id === item.id })}   >
                <i>{item.icon ?  <img src={item.icon} alt=""/>
                : ( <Badge color={item.color.name}/>) }

                </i>
                <span>{item.name}{item.tasks  &&  `(${item.tasks.length})` }</span>
                {isRemovable && <img onClick={() => removeList(item)} className="list_removeIcon" src={isRemove} alt ="Remove icon"/>}
            </li>


        )
    }

</ul>

}
export default List