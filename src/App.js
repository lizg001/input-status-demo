import React, { useEffect } from 'react'
import WebIM from './utils/WebIM'
import LoginStatus from './component/loginStatus'
import Message from './component/message'
import store from './redux/store'
import { updateInputStatusAction } from './redux/actions'
import "antd/dist/antd.css";
import "./App.css"
function App() {
  useEffect(() => {
    WebIM.conn.addEventHandler("loginStatus", {
      onOpened: () => {
        console.log('Login Success!');
      },
      onClosed: () => {
        console.log('Logout!');
      }
    });
    WebIM.conn.addEventHandler("message", {
      onTextMessage: (msg) => {
        console.log('onTextMessage', msg);
      },
      onCmdMessage: (msg) => {
        console.log('onCmdMessage', msg);
        if (msg.action === "onFocus") {
          store.dispatch(updateInputStatusAction(true))
        } else {
          store.dispatch(updateInputStatusAction(false))
        }
      },
    })
  }, [])

  return (
    <div className="App">
      <LoginStatus />
      <Message />
    </div>
  );
}

export default App;
