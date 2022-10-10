import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Input, Button } from "antd";
import sendCmdMessage from './cmd'
const Message = () => {
    const inputStatus = useSelector(state => state?.inputStatus) || false;
    const [userId, setUserId] = useState("")
    const [content, setContent] = useState("")
    const changeUserId = (e) => {
        const { value } = e.target;
        setUserId(value)
    }

    const changeContent = (e) => {
        const { value } = e.target;
        if (value.length > 0) {
            sendCmdMessage(userId, 'onFocus');
        } else {
            sendCmdMessage(userId, 'onBlur')
        }
        setContent(value);
    }

    const handleFocus = (e) => {
        changeContent(e)
    }

    const hanldeBlur = (e) => {
        sendCmdMessage(userId, 'onBlur')
    }
    return (
        <div>
            <label>To：</label>
            <Input
                placeholder="请输入对方 ID"
                className="inputStyle"
                onChange={(e) => changeUserId(e)}
            />
            <label>Content:</label>
            {inputStatus && <div><span>对方正在输入...</span></div>}
            <Input
                placeholder="请输入内容"
                className="inputStyle"
                onChange={(e) => changeContent(e)}
                onBlur={hanldeBlur}
                onFocus={handleFocus}
            />

            <Button
                className="buttonStyle"
                type="primary"
                htmlType="submit"
            >
                SendText
            </Button>
        </div>
    )
}

export default Message;