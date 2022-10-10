import WebIM from '../../utils/WebIM'

const sendCmdMessage = (userId, actionType) => {
    if (userId.match(/^\s*$/)) return
    let option = {
        chatType: 'singleChat',      // 会话类型，设置为单聊。      
        type: 'cmd',                 // 消息类型，设置为命令消息。
        to: userId,                // 消息接收方。
        action: actionType,           // 用户自定义操作。对于命令消息，该字段必填。
    }

    let msg = WebIM.message.create(option)
    WebIM.conn.send(msg).then(() => {
        console.log('success');  // 消息发送成功。
    }).catch((e) => {
        console.log("fail");     // 如禁言获拉黑后消息发送会失败。
    });
}
export default sendCmdMessage;