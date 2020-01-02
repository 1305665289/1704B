import React, {useState} from 'react';

interface PropTypes {
  desc?: string
}

const App: React.FC<PropTypes> = (props) => {
  const [number, setNumber] = useState(0);


  // function click(e: React.MouseEvent, type:string): void{
  //   type=='+'?setNumber(number+1): setNumber(number-1);
  // }

  let a:Object = 100;

  let b:any[] = [];
  let c:Array<any> = [];

  b = ['100','200'];


  const click2:(e: React.MouseEvent, type:string)=>void = (e, type)=>{
    type=='+'?setNumber(number+1): setNumber(number-1);
  }

  return (
    <div className="App">
      <button onClick={e=>click2(e, '+')}>+</button>
      <span>{number}</span>
      <button onClick={e=>click2(e, '-')}>-</button>
    </div>
  );
}

export default App;
