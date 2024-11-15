const express = require("express");

const app = express();

app.get("/", (req , res)=>{
    res.send("This is home page!");
})

app.get("/about", (req , res)=>{
    res.send("This is about page!");
})

// when user go to page that none , show page not found
// app.all("*/" , (req,res)=>{ // all = post and get
//     res.status(404).send("Page not found");
// })

// another way
app.use("*", (req , res)=>{
    res.status(404).send("Page not found")
})

app.listen(3000 , ()=> {
    console.log("Server is listen on port 3000");
})