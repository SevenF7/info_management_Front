import React from 'react';
import ReactDOM from 'react-dom/client';
// 样式初始化一般放在app之前，app中要覆盖初始化样式
import "reset-css"
// UI框架样式

// 全局样式
import "./assets/styles/global.scss"
// 组件的样式
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
