


// File system in Synchronous 
// write the content in another file data.txt.
const fs = require("fs");
const path = require("path");

const fileName = "data.txt";

const filePath = path.join(__dirname,fileName);

fs.writeFileSync(filePath,"Hemant is a good boy","utf-8");
console.log(filePath);