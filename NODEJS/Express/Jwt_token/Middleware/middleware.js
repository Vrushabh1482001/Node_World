const tokenobj = require("../Token/token");
const jwtToken = require("jsonwebtoken");
const fs = require("fs");

/*const middleware = (req, res, next) => {
    if (tokenObj.token == req.headers.token) {
        next();
    }
    else {
        res.json({ msg: "Fail Module....!" })
    }
};*/



const midleware = (req, res, next) => {
    if (tokenobj.token == req.headers.token) {

        jwtToken.verify(tokenobj.token, 'skill', (err, decoded) => {
            if (err) {
                res.json({ token: "expire" });
            }
            else {
                console.log(decoded);
                next();
                res.json({ token: "valid" });
            }
        });
    }
    else {
        res.json({ msg: "fail in module1.....!" })
    }
}

/* const midleware = (req, res, next) => {
    if (tokenobj.token == req.headers.token) {

        jwtToken.verify(tokenobj.token, 'skill', (err, decoded) => {
            if (err) {
                res.json({ error: err });
            }
            else {
                console.log(decoded);
                next();
                res.json({ token: "valid" });
            }
        });
    }
    else {
        res.json({ msg: "fail in module1.....!" })
    }
} */

module.exports = midleware;