import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import styles from './register.module.scss';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const Register = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const validatePassword = (_, value) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/;
        if (value && !regex.test(value)) {
            return Promise.reject('密码必须包含大小写字母及数字，且长度为8-16位');
        }
        return Promise.resolve();
    };

    // 实现跳转
    const navigateTo = useNavigate();
    const handleLogin = () => {
        navigateTo("/login");
    };

    return (
        <div className={styles.container}>
            <Form
                name="register"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className={styles.form}
            >
                <div className={styles.header}>
                    <UserAddOutlined className={styles.icon} />
                    <Title level={3} className={styles.title}>注册</Title>
                </div>
                <Form.Item
                    name="email"
                    rules={[
                        { required: true, message: '请输入邮箱!' },
                        { type: 'email', message: '请输入有效的邮箱地址!' },
                    ]}
                >
                    <Input placeholder="邮箱" />
                </Form.Item>

                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入用户名!' }]}
                >
                    <Input placeholder="用户名" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        { required: true, message: '请输入密码!' },
                        { validator: validatePassword },
                    ]}
                >
                    <Input.Password placeholder="密码" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className={styles.button}>
                        注册
                    </Button>
                </Form.Item>

                <Form.Item>
                    <Button type="link" onClick={handleLogin} className={styles.button}>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Register;