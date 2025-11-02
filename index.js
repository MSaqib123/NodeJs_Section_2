
//===================================
// 10 - Reading and Writing Files Asynchronously
//===================================
//#region 
const fs = require('fs');

//==== Read Text ====
// async method follow  callback function 

// success 2nd  ya chlaa ge
// fs.readFile('./txt/start.txt','utf-8',/*Call back function*/(err,data1)=>{
fs.readFile('./txt/star.txt','utf-8',/*Call back function*/(err,data1)=>{
    //create erro by wrong file name
    if(err) return console.log(err);

    fs.readFile(`./txt/${data1}.txt`,'utf-8',/*Call back function*/(err,data2)=>{
        console.log(data2)
        fs.readFile(`./txt/append.txt`,'utf-8',/*Call back function*/(err,data3)=>{
            console.log(data3)
            fs.writeFile('./txt/final.txt',`${data2}\n${data3}`, 'utf-8',error=>{
                console.log('file has been written');
            })
        });
    });
});
// success 1st phlaa ya chlaa ge
console.log("will read file!");


//==== Write text ====

//#endregion



//===================================
// 9 - Blocking and NonBlocking Asynchronous Nature of Nodejs
//===================================
//#region 
                // theory of  Asynchronous vs  Synchronous
//#endregion


//===================================
// 8 - Reading and Writing Files  (Synchronous  Blocking Coding)
//===================================
//#region 
// const fs = require('fs');

// //==== Read Text ====
// const textIn = fs.readFileSync('./txt/input.txt','utf-8');
// console.log(textIn)

// //==== Write text ====
// const textOut = `This is what we know about avocado : ${textIn}.\nCreated on ${Date.now()}`
// fs.writeFileSync('./txt/output.txt',textOut);
// console.log('fileOut');
//#endregion


//===================================
// 7 - Using Modules 1 Core Modules
//===================================
//#region 7 - Using Modules 1 Core Modules
// //======== Node Modules ========

// // file system   = read
// // https://nodejs.org/docs/latest-v20.x/api/fs.html   document
// const fs = require(fs);




// //======== code ========
// const hello = 'Pakistan Zindabad'
// console.log(hello);

//#endregion