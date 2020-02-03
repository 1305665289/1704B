import React,{useState, useEffect} from 'react';
import './App.css';
import {getHospitalProvince} from '../services/index'
// 引入模块
import Hospital from '../components/Hospital';

const App = () => {

  return (
    <div className="App">
      {/* 医疗救治医院查询 */}
      <Hospital/>
    </div>
  );
}

export default App;
