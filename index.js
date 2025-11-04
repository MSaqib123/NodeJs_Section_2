//===================================
// 16 - Parsing Variables from URLs
//===================================
//#region 
const fs = require('fs');
const http = require('http');
const url = require('url');



// read data from file
const data = fs.readFileSync('./dev-data/data.json','utf-8');
const dataObj = JSON.parse(data);

// read html template
const templateOverview = fs.readFileSync('./templates/template-overview.html','utf-8');
const templateCard = fs.readFileSync('./templates/template-card.html','utf-8');
const templateProduct = fs.readFileSync('./templates/template-product.html','utf-8');

// Helper Methods
const replaceTemplate = (temp,product) =>{
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName)
    output = output.replace(/{%IMAGE%}/g, product.image)
    output = output.replace(/{%FROM%}/g, product.from)
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients)
    output = output.replace(/{%DESCRIPTION%}/g, product.description)
    output = output.replace(/{%QUANTITY%}/g, product.quantity)
    output = output.replace(/{%ID%}/g, product.id)
    output = output.replace(/{%PRICE%}/g, product.price)
    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic')

    return output;
}


// Server
const server = http.createServer((req,res)=> {
    // url 
    // console.log(req.url)
    // console.log(url.parse(req.url,true));
    // const pathname = req.url;
    const { query, pathname} = url.parse(req.url,true)
     


    // Overview page
    if(pathname === '/' || pathname === "/overview"){
        res.writeHead(200,{'content-type':'text/html'})
        const cardsHtml = dataObj.map(el=>replaceTemplate(templateCard,el)).join('') 
        const output = templateOverview.replace(/{%PRODUCT_CARDS%}/g, cardsHtml)
        res.end(output)
    }
    // Product page
    else if(pathname === "/product"){
        // console.log(query)

        res.writeHead(200,{'content-type':'text/html'})

        // filter product card base on id form object list of js
        const product = dataObj[query.id];
        const output = replaceTemplate(templateProduct,product)
        res.end(output);
    }
    // api page
    else if(pathname === "/api"){
        res.writeHead(200, {'Content-type':'application/json'});
        res.end(data)
    }
    // NOT Found
    else{
        res.writeHead(404,{
            'content-type':"text/html",
            'my-own-header':'hello-world'
        })
        res.end("<h1>Page not found!</h1>")
    }
})
server.listen(8300,'127.0.0.1',()=>{
    console.log("Listening to request on port 8000");
})


//#endregion


//===================================
// 16 - Parsing Variables from URLs
//===================================
//#region 
// const fs = require('fs');
// const http = require('http');
// const url = require('url');



// // read data from file
// const data = fs.readFileSync('./dev-data/data.json','utf-8');
// const dataObj = JSON.parse(data);

// // read html template
// const templateOverview = fs.readFileSync('./templates/template-overview.html','utf-8');
// const templateCard = fs.readFileSync('./templates/template-card.html','utf-8');
// const templateProduct = fs.readFileSync('./templates/template-product.html','utf-8');

// // Helper Methods
// const replaceTemplate = (temp,product) =>{
//     let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName)
//     output = output.replace(/{%IMAGE%}/g, product.image)
//     output = output.replace(/{%FROM%}/g, product.from)
//     output = output.replace(/{%NUTRIENTS%}/g, product.nutrients)
//     output = output.replace(/{%DESCRIPTION%}/g, product.description)
//     output = output.replace(/{%QUANTITY%}/g, product.quantity)
//     output = output.replace(/{%ID%}/g, product.id)
//     output = output.replace(/{%PRICE%}/g, product.price)
//     if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic')

//     return output;
// }


// // Server
// const server = http.createServer((req,res)=> {
//     // url 
//     // console.log(req.url)
//     // console.log(url.parse(req.url,true));
//     // const pathname = req.url;
//     const { query, pathname} = url.parse(req.url,true)
     


//     // Overview page
//     if(pathname === '/' || pathname === "/overview"){
//         res.writeHead(200,{'content-type':'text/html'})
//         const cardsHtml = dataObj.map(el=>replaceTemplate(templateCard,el)).join('') 
//         const output = templateOverview.replace(/{%PRODUCT_CARDS%}/g, cardsHtml)
//         res.end(output)
//     }
//     // Product page
//     else if(pathname === "/product"){
//         // console.log(query)

//         res.writeHead(200,{'content-type':'text/html'})

//         // filter product card base on id form object list of js
//         const product = dataObj[query.id];
//         const output = replaceTemplate(templateProduct,product)
//         res.end(output);
//     }
//     // api page
//     else if(pathname === "/api"){
//         res.writeHead(200, {'Content-type':'application/json'});
//         res.end(data)
//     }
//     // NOT Found
//     else{
//         res.writeHead(404,{
//             'content-type':"text/html",
//             'my-own-header':'hello-world'
//         })
//         res.end("<h1>Page not found!</h1>")
//     }
// })
// server.listen(8300,'127.0.0.1',()=>{
//     console.log("Listening to request on port 8000");
// })


//#endregion


//===================================
// 15 - HTML Templating Filling the Templates
//===================================
//#region 
// const fs = require('fs');
// const http = require('http');
// const url = require('url');


// // read data from file
// const data = fs.readFileSync('./dev-data/data.json','utf-8');
// const dataObj = JSON.parse(data);

// // read html template
// const templateOverview = fs.readFileSync('./templates/template-overview.html','utf-8');
// const templateCard = fs.readFileSync('./templates/template-card.html','utf-8');
// const templateProduct = fs.readFileSync('./templates/template-product.html','utf-8');

// // Helper Methods
// const replaceTemplate = (temp,product) =>{
//     let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName)
//     output = output.replace(/{%IMAGE%}/g, product.image)
//     output = output.replace(/{%FROM%}/g, product.from)
//     output = output.replace(/{%NUTRIENTS%}/g, product.nutrients)
//     output = output.replace(/{%DESCRIPTION%}/g, product.description)
//     output = output.replace(/{%QUANTITY%}/g, product.quantity)
//     output = output.replace(/{%ID%}/g, product.id)
//     if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic')

//     return output;
// }


// // Server
// const server = http.createServer((req,res)=> {
//     // console.log(req)
//     const pathname = req.url;

//     // Overview page
//     if(pathname === '/' || pathname === "/overview"){
//         res.writeHead(200,{'content-type':'text/html'})

//         const cardsHtml = dataObj.map(el=>replaceTemplate(templateCard,el)).join('') 
//         //convert to string by join
//         //console.log(cardsHtml);
//         // res.end(templateOverview)

//         const output = templateOverview.replace(/{%PRODUCT_CARDS%}/g, cardsHtml)
//         res.end(output)
//     }
//     // Product page
//     else if(pathname === "/product"){
//         res.end("This is the product");
//     }
//     // api page
//     else if(pathname === "/api"){
//         res.writeHead(200, {'Content-type':'application/json'});
//         res.end(data)

//         // fs.readFile('./dev-data/data.json','utf-8',(err,data)=>{
//         //     res.writeHead(200, {'Content-type':'application/json'});
//         //     res.end(data)
//         // });
//     }
//     // NOT Found
//     else{
//         res.writeHead(404,{
//             'content-type':"text/html",
//             'my-own-header':'hello-world'
//         })
//         res.end("<h1>Page not found!</h1>")
//     }
// })

// server.listen(8300,'127.0.0.1',()=>{
//     console.log("Listening to request on port 8000");
// })


//#endregion






//===================================
// 13 - Building a Very Simple API
//===================================
//#region 
// const fs = require('fs');
// const http = require('http');
// const url = require('url');


// // read data from file
// const data = fs.readFileSync('./dev-data/data.json','utf-8');


// // Server
// const server = http.createServer((req,res)=> {
//     // console.log(req)
//     const pathname = req.url;
//     if(pathname === '/' || pathname === "/overview"){
//         res.end("This is the overview");
//     }
//     else if(pathname === "/product"){
//         res.end("This is the product");
//     }
//     else if(pathname === "/api"){
        
//         res.writeHead(200, {'Content-type':'application/json'});
//         res.end(data)

//         // fs.readFile('./dev-data/data.json','utf-8',(err,data)=>{
//         //     res.writeHead(200, {'Content-type':'application/json'});
//         //     res.end(data)
//         // });
//     }
//     else{
//         res.writeHead(404,{
//             'content-type':"text/html",
//             'my-own-header':'hello-world'
//         })
//         res.end("<h1>Page not found!</h1>")
//     }
// })

// server.listen(8300,'127.0.0.1',()=>{
//     console.log("Listening to request on port 8000");
// })


//#endregion






//===================================
// 12 - Routing
//===================================
//#region 
// const fs = require('fs');
// const http = require('http');
// const url = require('url');


// // Server
// const server = http.createServer((req,res)=> {
//     // console.log(req)
//     const pathname = req.url;
//     if(pathname === '/' || pathname === "/overview"){
//         res.end("This is the overview");
//     }
//     else if(pathname === "/product"){
//         res.end("This is the product");
//     }
//     else{      
//         // res.writeHead(404,"Page Not found");

//         // adding response-header  
//         // 1. stantandr header   etc :  text/html , text/text ..... pdf ....,, file , img
//         // 2. custom header    we can add custom header
//         res.writeHead(404,{
//             'content-type':"text/html",
//             'my-own-header':'hello-world'
//         })
//         res.end("<h1>Page not found!</h1>")
//     }
// })

// server.listen(8300,'127.0.0.1',()=>{
//     console.log("Listening to request on port 8000");
// })

// //server keep runing until we do not stop
// //becuase of event loop used on server and listen
// // after runing the server  node index.js    
// // user server on browser   127.0.0.1:8000


//#endregion





//===================================
// 11 - Creating a Simple Web Server
//===================================
//#region 
// const fs = require('fs');
// const http = require('http');


// // Server
// const server = http.createServer((req,res)=> {
//     // console.log(req)
//     res.end("Hello from Server");
// })

// server.listen(8000,'127.0.0.1',()=>{
//     console.log("Listening to request on port 8000");
// })

// //server keep runing until we do not stop
// //becuase of event loop used on server and listen
// // after runing the server  node index.js    
// // user server on browser   127.0.0.1:8000


//#endregion




// //===================================
// // 10 - Reading and Writing Files Asynchronously
// //===================================
//#region 
// const fs = require('fs');

// //==== Read Text ====
// // async method follow  callback function 

// // success 2nd  ya chlaa ge
// // fs.readFile('./txt/start.txt','utf-8',/*Call back function*/(err,data1)=>{
// fs.readFile('./txt/star.txt','utf-8',/*Call back function*/(err,data1)=>{
//     //create erro by wrong file name
//     if(err) return console.log(err);

//     fs.readFile(`./txt/${data1}.txt`,'utf-8',/*Call back function*/(err,data2)=>{
//         console.log(data2)
//         fs.readFile(`./txt/append.txt`,'utf-8',/*Call back function*/(err,data3)=>{
//             console.log(data3)
//             fs.writeFile('./txt/final.txt',`${data2}\n${data3}`, 'utf-8',error=>{
//                 console.log('file has been written');
//             })
//         });
//     });
// });
// // success 1st phlaa ya chlaa ge
// console.log("will read file!");


// //==== Write text ====

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