// dolly.txt  She is house wife.
const fs=require("fs");
const path=require("path");

const fileName="dolly.txt";
const filePath=path.join(__dirname,fileName);
fs.writeFile(filePath,"She is house wife.","utf-8",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File written successfully..!");
    }
});

