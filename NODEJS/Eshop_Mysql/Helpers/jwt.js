const { expressjwt: jwt } = require("express-jwt");


const authJwt = () => {
    const SECRET = process.env.SECRET;
    ;
    return jwt({
        secret: SECRET,
        algorithms: ["HS256"]
    })
        .unless({
            path:
                [
                    "/users/login",
                    "/users/register"
                ]
        });

}

module.exports = authJwt;


