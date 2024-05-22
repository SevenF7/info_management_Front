// 路由表写法

// 懒加载
import React, { Children, lazy } from "react"
import Home from "../views/Home"
import Login from "../views/Login"
// Navigate重定向组件
import { Navigate } from "react-router-dom"

const Register = lazy(() => import("../views/Register"))
const User = lazy(() => import("../views/User"))
const Page1 = lazy(() => import("../views/Page1"))
const Page2 = lazy(() => import("../views/Page2"))
const Page301 = lazy(() => import("../views/Page301"))

const withLoadingComponent = (comp) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)

const routes = [
    // 嵌套路由
    {
        path: "/",  // 默认跳转到page1
        element: <Navigate to="/page1" />
    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/page1",
                element: withLoadingComponent(<Page1 />)
            },
            {
                path: "/page2",
                element: withLoadingComponent(<Page2 />)
            },
            {
                path: "/page3/page301",
                element: withLoadingComponent(<Page301 />)
            }
        ]
    },
    {
        path: "/login", // 登录页面
        element: <Login />
    },
    {
        path: "register",
        element: withLoadingComponent(<Register />)
    },
    {
        // 未知路由自动跳转到首页（或者修改为跳转到404error页面）
        path:"*",
        element: <Navigate to="/page1" />
    }
    // {
    //     path: "/home",
    //     element: <Home />
    // },
    // {
    //     path: "/about",
    //     element: withLoadingComponent(<About />)
    // },
    // {
    //     path: "/user",
    //     element: withLoadingComponent(<User />)
    // }
]

export default routes