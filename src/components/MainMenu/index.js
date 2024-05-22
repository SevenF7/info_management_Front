import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { useNavigate, useLocation } from "react-router-dom"
import { Menu } from 'antd';
import { useState } from 'react';

const items = [
    {
        label: '栏目1',
        key: '/page1',
        icon: <PieChartOutlined />
    },
    {
        label: '栏目2',
        key: '/page2',
        icon: <DesktopOutlined />
    },
    {
        label: '栏目3',
        key: 'page3',
        icon: <UserOutlined />,
        children: [
            {
                label: '栏目301',
                key: '/page3/page301'
            },
            {
                label: '栏目302',
                key: '/page3/page302'
            },
            {
                label: '栏目303',
                key: '/page3/page303'
            }
        ]
    },
    {
        label: '栏目4',
        key: 'page4',
        icon: <TeamOutlined />,
        children: [
            {
                label: '栏目401',
                key: '/page4/page401'
            },
            {
                label: '栏目402',
                key: '/page4/page402'
            }
        ]
    },
    {
        label: '栏目5',
        key: '/page5',
        icon: <FileOutlined />
    }
]

const Comp = () => {
    const navigateTo = useNavigate();
    const currentRoute = useLocation();

    // 侧边栏点击事件
    const menuClick = (e) => {
        // console.log("nihao", e.key)

        // 点击跳转到对应的路径
        navigateTo(e.key)
    }

    // 使用currentRoute.pathname与每一个items中对象的key进行对比，返回其上一级的key，并将得到的key作为展开菜单的默认值
    let firstOpenKey = ""
    // find的查找函数
    function findKey(obj) {
        return obj.key === currentRoute.pathname;
    }
    // 循环查找
    for (let i = 0; i < items.length; i++) {
        if (items[i]['children'] && items[i]['children'].length > 0 && items[i]['children'].find(findKey)) {
            firstOpenKey = items[i].key;
            break;
        }
    }

    // 展开与回收时触发的事件
    // 初始化一个数组
    const [openKeys, setOpenKeys] = useState([firstOpenKey])
    const handleOpenChange = (keys) => {
        // console.log(keys)
        // 设置展开为数组最后一项
        setOpenKeys([keys[keys.length - 1]])
    }

    return (
        <Menu
            theme="dark"
            // 表示当前选中样式所在key
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline"
            items={items}
            onClick={menuClick}
            // 展开与回收时触发的事件
            onOpenChange={handleOpenChange}
            // 设置展开的列表
            openKeys={openKeys} />
    )
}

export default Comp;