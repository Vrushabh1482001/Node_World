const fs = require("fs");
// fs.readFile("/Users/vrushabh/Documents/node_world/NODEJS/File/First.txt", "utf8", (error, data) => {
//     if (error) console.log(error);
//     else console.log(data);
// });

// fs.copyFile("file1.txt", "file1(copy).txt", (error) => {
//     if (error) console.log(error);
// });

// fs.readFile("/Users/vrushabh/Documents/node_world/NODEJS/File/First.txt", "utf8", (error, data) => {
//     if (error) console.log(error);
//     else fs.writeFile("/Users/vrushabh/Documents/node_world/NODEJS/File/First(copy).txt", data, (error) => {
//         if (error) console.log(error);
//         else console.log("file copy.....!!!!");
//     });
// });

// let data = "vrushabh";

// fs.writeFile("file1.txt", data, (error) => {
//     if (error) console.log(error);
//     else console.log("file write .....!!!!");
// });

// fs.rename("file1.txt", "file12.txt", (error) => {
//     if (error) console.log(error);
//     else console.log("file write .....!!!!");
// })

// fs.stat("/Users/vrushabh/Documents/node_world/NODEJS/File/First.txt", (error, data) => {
//     if (error) console.log(error);
//     else console.log( data);
// });

// fs.unlink("/Users/vrushabh/Documents/node_world/NODEJS/File/First().txt", (error) => {
//     if (error) console.log(error);
//     else console.log("file delete......!!!!");
// });


const os = require("os")
console.log("Cpu information : " + os.cpus());