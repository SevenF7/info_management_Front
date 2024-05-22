import React from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.scss';

const { Title } = Typography;

const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // 实现跳转
    const navigateTo = useNavigate();
    const handleRegister = () => {
        navigateTo("/register");
    };

    return (
        // 登录
        <div className={styles.container}>
            {/* 表单 */}
            <Form
                name="login"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className={styles.form}
            >
                {/* 标题 */}
                <div className={styles.header}>
                    <UserOutlined className={styles.icon} />
                    <Title level={3} className={styles.title}>信息管理系统</Title>
                </div>
                {/* 表单内容 */}
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入用户名!' }]}
                >
                    <Input placeholder="用户名" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码!' }]}
                >
                    <Input.Password placeholder="密码" />
                </Form.Item>

                <Form.Item
                    name="captcha"
                    rules={[{ required: true, message: '请输入正确的验证码!' }]}
                >
                    <Input placeholder="验证码" />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>记住我</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className={styles.button}>
                        登录
                    </Button>
                </Form.Item>

                <Form.Item>
                    <Button type="link" onClick={handleRegister} className={styles.button}>
                        注册
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
