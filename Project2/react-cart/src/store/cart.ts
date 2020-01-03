import React from 'react'
import {ItemType} from '../utils/type'
import {observable, action} from 'mobx'

export default class CartStore{
    @observable
    list: ItemType[] = []

    @action
    setList(list: ItemType[]){
        this.list = list;
    }

    @action
    changeCheck(id:number, checked:boolean){
        let newList = [...this.list];
        let index = newList.findIndex(value=>value.id===id);
        newList[index].checked = checked;
        this.list = newList;
    }
    
    @action
    changeNum(id:number, type:string){
        let newList = [...this.list];
        let index = newList.findIndex(value=>value.id===id);
        type=='+'?newList[index].num++: newList[index].num--;
        if (newList[index].num <= 0){
          newList[index].num = 1;
        }
        this.list = newList;
    }
}