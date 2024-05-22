import React, { useState } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import { Outlet, useNavigate } from "react-router-dom"
import MainMenu from "../components/MainMenu"

const { Header, Content, Footer, Sider } = Layout;

const View = () => {
    const [collapsed, setCollapsed] = useState(false);

    // const navigateTo = useNavigate();

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();


    return (
        <Layout style={{ minHeight: '100vh', }}>
            {/* 左侧边栏 */}
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                {/* MainMenu */}
                <MainMenu></MainMenu>
            </Sider>
            <Layout>
                {/* 头部 */}
                <Header style={{ paddingLeft: "16px", background: colorBgContainer, }}>
                    <Breadcrumb style={{ lineHeight: "64px" }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                {/* 右侧内容 */}
                <Content style={{ margin: '16px 16px 0', background: colorBgContainer }}>
                    {/* <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG, }}>
                        Bill is a cat.
                    </div> */}
                    {/* 窗口内容 */}
                    <Outlet></Outlet>
                </Content>
                <Footer style={{ textAlign: 'center', padding: 0, lineHeight: "48px" }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default View;