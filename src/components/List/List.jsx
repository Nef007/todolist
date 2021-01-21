import React from 'react';
import cn from 'classnames';
import './List.scss'
import Badge from "../Badge/Badge";

const List =({items, isRemovable, onClick})=>{

return  <ul onClick={onClick} className="list">
    {
        items.map((item, index) =>
            <li key={index} className={cn(item.className, {'active': item.active})}>
                <i>{item.icon ?  <img src={item.icon} alt=""/>
                : ( <Badge color={item.color}/>) }

                </i>
                <span>{item.name}</span>
            </li>


        )
    }

</ul>

}
export default List