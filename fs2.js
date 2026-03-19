// Read the content in another file data.txt.
 const fs=require("fs");
 const path=require("path");
 const fileName="data.txt";

 const filePath = path.join(__dirname,fileName);

const readFile = fs.readFileSync(filePath,"utf-8")
console.log(readFile.toString());


// If you want to add some data use append command 
const appendFile= fs.appendFileSync(filePath," Hello Brothers","utf-8");


// If you want to rename file name
// fs.renameSync("data.txt","hemant.txt");


