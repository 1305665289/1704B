import React from 'react';
import './List.css';

interface PropTypes {
    list: ItemType[],
    changeChecked: Function,
    deleteItem: Function
}

interface ItemType{
    checked: boolean,
    title: string|number,
    id: number
}

export default (props: PropTypes)=>{
    return <>{
        props.list.map((item: ItemType, index: number)=>{
            return <li key={index} style={{textDecoration: item.checked?'line-through':''}}>
                <input type="checkbox" name="" id="" checked={item.checked} onChange={()=>props.changeChecked(item.id)}/>
                <p>{item.title}</p>
                <button onClick={()=>props.deleteItem(item.id)}>删除</button>
            </li>
        })
    }</>
}