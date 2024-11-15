const express = require("express");
const path = require("path");


const app = express();

// respone as HTML
app.get("/", (req , res)=>{
    res.sendFile(path.resolve(__dirname,"pages/index.html"))
})

app.get("/about", (req , res)=>{
    res.send("This is about page!");
})


// when user go to page that none , show page not found
app.all("*/" , (req,res)=>{ // all = post and get
    res.status(404).send("Page not found");
})

// another way
// app.use("*", (req , res)=>{
//     res.status(404).send("Page not found")
// })

app.listen(3000 , ()=> {
    console.log("Server is listen on port 3000");
})