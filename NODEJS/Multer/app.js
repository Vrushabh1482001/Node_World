const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
require("dotenv/config");
const PORT = process.env.PORT;

const imageStorage = multer.diskStorage({
    destination: "images",
    filename: (req, file, cb) => {
        cb(
            null,
            file.fieldname + "_" + Date.now() + path.extname(file.originalname)
        );
    },
});

const imageUpload = multer({
    storage: imageStorage,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) {
            return cb(new Error("Please upload a Image"));
        }
        cb(undefined, true);
    },
});

app.post(
    "/uploadImage",
    imageUpload.single("image"),
    (req, res) => {
        res.send(req.file);
    },
    (error, req, res, next) => {
        res.status(400).send({ error: error.message });
    }
);

app.listen(PORT, () => {
    console.log(`Listen Port : ${PORT}`);
})