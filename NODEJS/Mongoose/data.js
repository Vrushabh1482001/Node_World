const bcrypt = require('bcryptjs');

const data = {
    users: [
        {
            name: "skillqode",
            password: bcrypt.hashSync("hr@skillqode.in", 8),
            isAdmin: true,
            email: "hr@skillqode.in",
        },
        {
            name: "skillqode1",
            password: bcrypt.hashSync("hr1@skillqode.in", 8),
            isAdmin: true,
            email: "hr1@skillqode.in",
        },

    ],
};

module.exports = data;