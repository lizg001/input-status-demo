import React, { useState } from 'react'
import WebIM from '../../utils/WebIM'
import { Input, Button } from "antd";


const LoginStatus = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const changeUsername = (e) => {
        const target = e.target;
        setUsername(target.value);
    };
    const changePassword = (e) => {
        const target = e.target;
        setPassword(target.value);
    };

    const onLogin = () => {
        let option = {
            user: username,
            pwd: password
        }
        WebIM.conn.open(option);
    }

    return (
        <div>
            <label>user:</label>
            <Input
                placeholder="请输入用户名"
                className="inputStyle"
                onChange={(e) => changeUsername(e)}
            />
            <label>pwd:</label>
            <Input
                placeholder="请输入密码"
                className="inputStyle"
                onChange={(e) => changePassword(e)}
            />
            <Button
                className="buttonStyle"
                type="primary"
                htmlType="submit"
                onClick={onLogin}
            >
                LoginIM
            </Button>
        </div>
    )
}

export default LoginStatus;