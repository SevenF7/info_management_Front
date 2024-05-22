import logo from './logo.svg';
import Comp1 from "./components/Comp1"
import { Button, Flex } from 'antd';
import { UpCircleOutlined } from "@ant-design/icons"
import { Link, useRoutes } from "react-router-dom"
import router from "./router"


function App() {
  // 使用hook传递路由表
  const outlet = useRoutes(router)

  return (
    <div className="App">
      {/* 顶级组件
      <Comp1></Comp1>
      <Button type="primary">Primary Button</Button>
      <UpCircleOutlined style={{ fontSize:"40px" }}/> */}
      {/* <Link to="/home">Home</Link> |
      <Link to="/about">About</Link> |
      <Link to="/user">User</Link> */}
      {outlet}
    </div>
  );
}

export default App;
