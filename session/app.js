const express = require("express");
const cookieparser = require("cookie-parser");
const session = require("express-session");

const app = express();

app.use(cookieparser());
app.use(session({
    secret: "skillqode_session",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.get("/", (request, response) => {
    request.session.username = "newskill";
    request.session.email = "paresh@gmail.com";
    response.send({ "msg": "session created" })
})

app.get("/getvalue", (request, response) => {
    console.log(request.session.username)
    response.send({ "username": request.cookies.username })
})

app.get("/delete", (request, response) => {
    request.session.destroy();
    response.send("SESSION DESTROYED")
})

app.listen(9990, () => {
    console.log("server connect on http://localhost:9990");
})