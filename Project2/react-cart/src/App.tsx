import React, { useEffect } from 'react'
import Items from './components/Items';
import useStore from './utils/useStore';
import {useObserver} from 'mobx-react-lite';


interface ItemType {
  id: number,
  checked: boolean,
  name: string,
  num: number,
  price: number
}

const initialState = [
  {
    "id": 1,
    "checked": false,
    "name": "钱涛",
    "num": 49,
    "price": 732
  },
  {
    "id": 2,
    "checked": false,
    "name": "吴艳",
    "num": 61,
    "price": 27
  },
  {
    "id": 3,
    "checked": true,
    "name": "魏娜",
    "num": 65,
    "price": 481
  },
  {
    "id": 4,
    "checked": true,
    "name": "锺洋",
    "num": 8,
    "price": 316
  },
  {
    "id": 5,
    "checked": false,
    "name": "彭丽",
    "num": 99,
    "price": 517
  },
  {
    "id": 6,
    "checked": true,
    "name": "马杰",
    "num": 28,
    "price": 59
  },
  {
    "id": 7,
    "checked": false,
    "name": "方军",
    "num": 49,
    "price": 86
  },
  {
    "id": 8,
    "checked": false,
    "name": "姜平",
    "num": 7,
    "price": 140
  },
  {
    "id": 9,
    "checked": false,
    "name": "侯明",
    "num": 55,
    "price": 139
  },
  {
    "id": 10,
    "checked": false,
    "name": "傅杰",
    "num": 13,
    "price": 63
  },
  {
    "id": 11,
    "checked": false,
    "name": "黄秀兰",
    "num": 34,
    "price": 658
  },
  {
    "id": 12,
    "checked": false,
    "name": "孙洋",
    "num": 15,
    "price": 942
  },
  {
    "id": 13,
    "checked": false,
    "name": "廖秀兰",
    "num": 41,
    "price": 737
  },
  {
    "id": 14,
    "checked": false,
    "name": "傅娜",
    "num": 95,
    "price": 403
  },
  {
    "id": 15,
    "checked": true,
    "name": "孟磊",
    "num": 15,
    "price": 524
  },
  {
    "id": 16,
    "checked": true,
    "name": "张静",
    "num": 43,
    "price": 763
  }
]
const App: React.FC = () => {
  let store = useStore();
  let {cart} = store;
  // console.log('list...', cart.list, 'store....', store);

  // 模拟didMount
  useEffect(() => {
    cart.setList(initialState);
  }, []);

  let totalNum = cart.list.reduce((total: number, item: ItemType) => {
    if (item.checked) {
      return total += item.num;
    } else {
      return total;
    }
  }, 0)

  let totalPrice = cart.list.reduce((total: number, item: ItemType) => {
    if (item.checked) {
      return total += item.num * item.price;
    } else {
      return total;
    }
  }, 0)

  return useObserver(()=><>
    <Items></Items>
    <p>{cart.list.length}</p>
    <footer>
      <span>总数:{totalNum}</span>
      <span>总价：${totalPrice}</span>
      <button>立即支付</button>
    </footer>
  </>)
}

export default App;