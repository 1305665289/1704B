import React, { memo } from 'react'

import hooks from '../../util/mockHooks';
const {useState, useEffect, useCallback, useMemo} = hooks;

const Classify: React.FC = ()=>{
    let [count, setCount] = useState(100);
    let [total, setTotal] = useState(0);

    useEffect(()=>{
        if (count % 5 == 0){
            setTotal(count*count);
        }
    }, [count]);

    return <div>
        <h3>{total}</h3>
        <button onClick={()=>setCount((count:number)=>count+1)}>+</button>
        <span>{count}</span>
        <button onClick={()=>setCount((count:number)=>count-1)}>-</button>
    </div>
}

export default Classify;