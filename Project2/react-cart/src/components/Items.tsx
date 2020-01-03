import React from 'react';
import {useObserver} from 'mobx-react-lite';
import useStore from '../utils/useStore';

interface ItemType {
    id: number,
    checked: boolean,
    name: string,
    num: number,
    price: number
}
interface PropsType {
    list?: ItemType[],
    changeCheck?: Function,
    changeNum?: Function
}

const Items: React.FC<PropsType> = props => {
    let store = useStore();
    let {cart} = store;

    let change = (e:React.ChangeEvent<HTMLInputElement>, id: number)=>{
        cart.changeCheck(id, e.target.checked);
    }

    return useObserver(()=><>{
        cart.list.map((item, index) => {
            return <li key={index}>
                <input type="checkbox" name="" id="" checked={item.checked} onChange={e=>change(e, item.id)}/>
                <span>{item.name}</span>
                <span>${item.price}</span>
                <div>
                    <button onClick={()=>cart.changeNum(item.id, '+')}>+</button>
                    <span>{item.num}</span>
                    <button onClick={()=>cart.changeNum(item.id, '-')}>-</button>
                </div>
            </li>
        })
    }</>)
}

export default Items;