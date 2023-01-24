const expressJwt = require("express-jwt");

function authJwt() {
    const secret = process.env.secret;
    const api = process.env.API_URL;
    return expressJwt({
        secret,
        algorithms: ["HS256"],
        isRevoked: isRevoked,
    });

}

module.exports = authJwt;