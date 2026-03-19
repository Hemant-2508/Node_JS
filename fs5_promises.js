// write the file using promises (don.txt)


// ============================================================WRITE=====================================================

// const fs=require("fs");
// fs.promises.writeFile("don.txt","Hello bhai khya haal hai.","utf-8")
// .then(console.log("file written successfully..!"))
// .catch((err)=>{
//     console.log(err);
// });

//==========================================READ==================================================================
// const fs=require("fs");
// fs.promises.readFile("don.txt","utf-8").then((data)=>{
//     console.log(data);
    
// })
// .catch((err)=>{
//     console.log(err);
    
// })

// ============================================================APPEND=====================================================


const fs=require("fs");
fs.promises.appendFile("don.txt"," Pandit ji ","utf-8").then(
    console.log("File is appended"))
.catch((err)=>{
    console.log(err);
    
})