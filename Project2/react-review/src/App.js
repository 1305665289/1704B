import React from 'react';
import logo from './logo.svg';
import './App.css';
import A from './components/ComA';
import B from './components/ComB';
import WithTip from './hoc/WithTip';

import WithLoading from './hoc/WithLoading';


let NewA = WithTip(A);
let NewB = WithTip(B);

let LoadingA = WithLoading(A);
let LoadingB = WithLoading(B);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <React.Fragment>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </React.Fragment>
        <h3>用高阶组件withTip修饰的组件</h3>
        <NewA/>
        <NewB/>

        <h3>用高阶组件withLoading修饰的组件</h3>
        <LoadingA/>
        <LoadingB/>
      </header>
    </div>
  );
}

export default App;
