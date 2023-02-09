# Agora chat sdk Introduction

Agora chat sdk provides complete instant messaging function development capabilities, shields/encapsulate and block its internal complex details, and provides a relatively simple and concise API interface to facilitate third-party applications to quickly integrate instant messaging functions for PC/mobile Web applications

---

## Chat SDK can be integrated in the following way:

1. Install

```bash
npm install agora-chat --save
```

2. Import agora-chat

```javascript
import AC from 'agora-chat';
```

3. Initialize the SDK

```javascript
const conn = new AC.connection({
	appKey: '<your app key>',
});
```

4. Login chat server

```javascript
const options = {
	user: 'userID',
	agoraToken: 'agoraToken',
};
conn.open(options);
```

5. Send a message

```javascript
let option = {
	chatType: 'singleChat',
	type: 'txt',
	to: 'userID',
	msg: 'message content',
};
let msg = AC.message.create(option);
conn.send(msg)
	.then(() => {
		console.log('send private text Success');
	})
	.catch((e) => {
		console.log('Send private text error');
	});
```

## Reference

-   [Agora Chat SDK Product Overview](https://docs.agora.io/en/agora-chat/overview/product-overview?platform=Web)
-   [Agora Chat SDK API Reference](https://api-ref.agora.io/en/chat-sdk/web/1.x/index.html)

## Related resources

-   Check our [FAQ](https://docs.agora.io/en/faq) to see if your issue has been recorded.
-   Dive into [Agora SDK Samples](https://github.com/AgoraIO) to see more tutorials
-   Take a look at [Agora Use Case](https://github.com/AgoraIO-usecase) for more complicated real use case
-   Repositories managed by developer communities can be found at [Agora Community](https://github.com/AgoraIO-Community)
-   If you encounter problems during integration, feel free to ask questions in [Stack Overflow](https://stackoverflow.com/questions/tagged/agora.io)
