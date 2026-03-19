const { log } = require("console");
const path = require("path");

console.log(__dirname); // return folder full path// 

console.log(__filename);// return path till current working file
// how to make path via JS
//school folder/students/data.txt
const filePath = path.join("folder","students","data.txt");

console.log(filePath);

const parseData = path.parse(filePath);
const resolvePath = path.resolve(filePath);
const extname = path.extname(filePath);
const basename = path.basename(filePath);
const dirname = path.dirname(filePath);
const seperator = path.sep;
console.log({parseData,resolvePath,extname,basename,dirname,seperator});


// 1 os module
// 2.path module
// 3.fs file 
// 4.http
// 5.taskscollege
// 6.EventSource