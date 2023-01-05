const http = require("http");
const server = http.createServer((req, res) => {
    res.write("<h1>Hello</h1>");
    console.log("connected");
    res.end();
}).listen(3003, () => {
    console.log("server connected on port 3003");
});