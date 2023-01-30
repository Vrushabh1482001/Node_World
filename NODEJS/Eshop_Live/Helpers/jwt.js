const { expressjwt: jwt } = require("express-jwt");
require("dotenv/config");

const authJwt = () => {
    const SECRET = process.env.SECRET;
    // const api = process.env.API_URL;
    return jwt({
        secret: SECRET,
        algorithms: ["HS256"],
        // isRevoked: isRevoked,
    })
        .unless({ path: ["/user/login"] });

}

module.exports = authJwt();


// const { expressjwt: jwt } = require("express-jwt");


// function authJwt() {
//     const SECRET = process.env.SECRET;
//     const api = process.env.API_URL;
//     return jwt({
//         secret: SECRET,
//         algorithms: ["HS256"],
//     });

// }
// module.exports = authJwt;




// const express = require('express');
// const { expressjwt: jwt } = require("express-jwt");
// const router = express.Router();


// router.get("/",
//     jwt({ secret: "Vrushabh", algorithms: ["HS256"] }),

// );

// module.exports = router;


// const express = require('express');
// const { expressjwt: jwt } = require("express-jwt");
// const router = express.Router();



// const hello = jwt({ secret: "Vrushabh", algorithms: ["HS256"] },
//     function (req, res) {
//         if (!req.auth.admin) return res.sendStatus(401);
//         res.sendStatus(200);
//     });


// module.exports = hello;