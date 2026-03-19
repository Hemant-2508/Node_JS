const fs= require("fs");
fs.readFile("dolly.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
        
    }
    else{
        console.log(data);
    }
});
//------------------------------------------------------------------------------------------------------------------
// const fs = require("fs");
// const path=require("path");

// const fileName=dolly.txt;
// const filePath=path.join(__dirname,fileName);

// fs.readFile(filePath,"utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// });

//---------------------------------------------------------------------------------------------------------------------------
// in append file
//---------------------------------------------------------------------------------------------------------------------------
// const fs= require("fs");
// fs.appendFile("dolly.txt","Hello Baby","utf-8",(err)=>{
//     if(err){
//         console.log(err);
        
//     }
//     else{
//         console.log("File written successfully");
//     }
// });