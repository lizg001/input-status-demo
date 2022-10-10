/**
 * git do not control webim.config.js
 * everyone should copy webim.config.js.demo to webim.config.js
 * and have their own configs.
 * In this way , others won't be influenced by this config while git pull.
 *
 */

// for react native
// var location = {
//     protocol: "https"
// }

function getUrl() {
    var apiUrl = (window.location.protocol === "https:" ? "https:" : "http:") + "//a1.easemob.com"
    var xmppUrl = "//im-api-v2.easemob.com/ws"
    if (window.location.href.indexOf("webim-h5.easemob.com") !== -1 || window.location.href.indexOf("localhost") !== -1 || window.location.href.indexOf("172.17.2.168") !== -1) {
        apiUrl = (window.location.protocol === "https:" ? "https:" : "http:") + "//a1.easemob.com"
        xmppUrl = "//im-api-v2.easemob.com/ws"
    }
    return {
        apiUrl: apiUrl,
        xmppUrl: xmppUrl
    }
}


var config = {
    /*
     * Application AppKey
     */
    // appkey: "1107180814253417#myeasuichatdemo",
    // appkey: "41351358#427351",
    appkey: "easemob-demo#sdk111",
    // appkey: "easemob-demo#cloudclass",
    // appkey: "gdpwq123#rests",
    // appkey: "1104210408175095#online-store",
    // appkey: "hx-ps#api4vip6",
    // appkey: "cx-dev#cxstudy",
    // appkey: "easygroup#nagri",

    /*
     * Application Host
     */
    Host: "easemob.com",
    /*
     * Whether to use HTTPS
     * @parameter {Boolean} true or false
     */
    https: true,
    isHttpDNS: true,
    /*
     * isMultiLoginSessions
     * true: A visitor can sign in to multiple webpages and receive messages at all the webpages.
     * false: A visitor can sign in to only one webpage and receive messages at the webpage.
     */
    isMultiLoginSessions: false,
    /**
     * Whether to use window.doQuery()
     * @parameter {Boolean} true or false
     */
    isWindowSDK: false,
    /**
     * isSandBox=true:  xmppURL: 'im-api.sandbox.easemob.com',  apiURL: '//a1.sdb.easemob.com',
     * isSandBox=false: xmppURL: 'im-api.easemob.com',          apiURL: '//a1.easemob.com',
     * @parameter {Boolean} true or false
     */
    isSandBox: false,
    /**
     * Whether to console.log in strophe.log()
     * @parameter {Boolean} true or false
     */
    isDebug: false,
    /**
     * Whether to show logs in strophe
     * @parameter {Boolean} true or false
     */
    isStropheLog: false,
    /**
     * will auto connect the xmpp server autoReconnectNumMax times in background when client is offline.
     * won't auto connect if autoReconnectNumMax=0.
     */
    autoReconnectNumMax: 5,
    /**
     * the interval secons between each atuo reconnectting.
     * works only if autoReconnectMaxNum >= 2.
     */
    autoReconnectInterval: 2,
    /**
     * webrtc supports WebKit and https only
     */
    isWebRTC:
        window.RTCPeerConnection && /^https\:$/.test(window.location.protocol),
    /**
     *  cn: chinese
     *  us: english
     */
    i18n: "cn",
    /*
     * Set to auto sign-in
     */
    isAutoLogin: true,
    /**
     * Size of message cache for person to person
     */
    p2pMessageCacheSize: 500,
    /**
     * When a message arrived, the receiver send an ack message to the
     * sender, in order to tell the sender the message has delivered.
     * See call back function onReceivedMessage
     */
    delivery: false,
    /**
     * Size of message cache for group chating like group, chatroom etc
     */
    groupMessageCacheSize: 200,
    /**
     * 5 actual logging methods, ordered and available:
     * 'TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR'
     */

    loglevel: "ERROR",

    /**
     * enable localstorage for history messages
     */
    enableLocalStorage: true,

    useOwnUploadFun: true,

    deviceId: "webim_test",
};

export default config;

