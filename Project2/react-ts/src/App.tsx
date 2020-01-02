import React,{useState, useEffect} from 'react';
import List from './components/List';
import Header from './components/Header';


interface ItemType{
  checked: boolean,
  title: string|number,
  id: number
}

export default ()=>{
  const [list, setList] = useState<ItemType[]>([]);

  useEffect(()=>{
    let list:ItemType[] = [];
    for (let i=0;i<10;i++){
      list.push({
        id: i,
        title: `我是第${i}条item`,
        checked: Math.random()<.5
      })
    }
    setList(list);
  }, []);

  function addItem(title: string):void{
    let newList:ItemType[] = [...list];
    newList.push({
      id: list.length,
      title,
      checked: false
    })
    setList(newList);
  }

  function changeChecked(id: number):void{
    let newList:ItemType[] = [...list];
    let index = newList.findIndex(item=>item.id===id);
    newList[index].checked = !newList[index].checked;
    setList(newList);
  }

  function deleteItem(id: number):void{
    let newList:ItemType[] = [...list];
    let index = newList.findIndex(item=>item.id===id);
    newList.splice(index, 1);
    setList(newList);
  }

  return <>
    <Header addItem={addItem}/>
    <List list={list} changeChecked={changeChecked} deleteItem={deleteItem}/>
  </>
}