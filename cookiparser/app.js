const express = require("express");
const cookieparser = require("cookie-parser");
const app = express();
app.use(cookieparser());
app.get("/", (request, response) => {
    response.cookie("username", "skillqode", { maxAge: 5 * 60 * 1000, httpOnly: true })
    response.json({ "msg": "cookie created" })
})
app.get("/get", (request, response) => {
    console.log(request.cookies.username)
    response.json({ "username": request.cookies.username })
})
app.get("/delete", (request, response) => {
    response.clearCookie();
    response.json({ "msg": "cookie DELETED" })
})
app.listen(5500, () => {
    console.log("server connect on http://localhost:5050");
});