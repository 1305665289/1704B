import React,{useState} from 'react';
import './List.css';

interface PropTypes {
    addItem: Function
}

export default (props: PropTypes)=>{
    const [value, setValue] = useState<string>();

    function click():void{
        if (!value) return;
        props.addItem(value);
    }

    function onChange(e: React.ChangeEvent<HTMLInputElement>){
        setValue(e.target.value);
    }

    return <>
        <input type="text" value={value} onChange={onChange}/>
        <button onClick={click}>添加</button>
    </>
}