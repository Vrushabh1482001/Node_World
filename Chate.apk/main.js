// Javascript
// Note that to avoid browser-compatibility issues, this sample uses the import command to import the SDK and the vite to package the JS file.
import AC from 'agora-chat'

// Replaces <Your app key> with your app key.
const appKey = "<Your app key>";
// Initializes the Web client.
const conn = new AC.connection({
    appKey: appKey,
});
// Adds the event handler.
conn.addEventHandler("connection&message", {
    // Occurs when the app is connected to Agora Chat.
    onConnected: () => {
        document
            .getElementById("log")
            .appendChild(document.createElement("div"))
            .append("Connect success !");
    },
    // Occurs when the app is disconnected from Agora Chat.
    onDisconnected: () => {
        document
            .getElementById("log")
            .appendChild(document.createElement("div"))
            .append("Logout success !");
    },
    // Occurs when a text message is received.
    onTextMessage: (message) => {
        console.log(message);
        document
            .getElementById("log")
            .appendChild(document.createElement("div"))
            .append("Message from: " + message.from + " Message: " + message.msg);
    },
    // Occurs when the token is about to expire.
    onTokenWillExpire: (params) => {
        document
            .getElementById("log")
            .appendChild(document.createElement("div"))
            .append("Token is about to expire");
    },
    // Occurs when the token has expired. 
    onTokenExpired: (params) => {
        document
            .getElementById("log")
            .appendChild(document.createElement("div"))
            .append("The token has expired");
    },
    onError: (error) => {
        console.log("on error", error);
    },
});

// Defines the functions of the buttons.
window.onload = function () {
    // Logs into Agora Chat.
    document.getElementById("login").onclick = function () {
        document
            .getElementById("log")
            .appendChild(document.createElement("div"))
            .append("Logging in...");
        const userId = document.getElementById("userID").value.toString();
        const token = document.getElementById("token").value.toString();
        conn.open({
            user: userId,
            agoraToken: token,
        });
    };
    // Logs out.
    document.getElementById("logout").onclick = function () {
        conn.close();
        document
            .getElementById("log")
            .appendChild(document.createElement("div"))
            .append("logout");
    };
    // Sends a peer-to-peer message.
    document.getElementById("send_peer_message").onclick = function () {
        let peerId = document.getElementById("peerId").value.toString();
        let peerMessage = document.getElementById("peerMessage").value.toString();
        let option = {
            chatType: "singleChat", // Sets the chat type as single chat.
            type: "txt", // Sets the message type.
            to: peerId, // Sets the recipient of the message with user ID.
            msg: peerMessage, // Sets the message content.
        };
        let msg = AC.message.create(option);
        conn
            .send(msg)
            .then((res) => {
                console.log("send private text success");
                document
                    .getElementById("log")
                    .appendChild(document.createElement("div"))
                    .append("Message send to: " + peerId + " Message: " + peerMessage);
            })
            .catch(() => {
                console.log("send private text fail");
            });
    };
};
