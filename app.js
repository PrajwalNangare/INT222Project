const express =require("express");
require("./db/conn");
const app = express();
const port = process.env.PORT || 3600;
const path = require("path");
const hbs = require("hbs");

//serving public file
const public_path = path.join(__dirname,"../public");
app.use(express.static(public_path));

//serving dynamic file
const dynamic_path = path.join(__dirname,"../templates/views");
app.set("view engine","hbs");
app.set("views", dynamic_path);


//serving dynamic file
const partials_path = path.join(__dirname,"../templates/partials");
hbs.registerPartials(partials_path)



app.get("/home",(req,res)=>{
    res.render("home")
});
app.get("/contact",(req,res)=>{
    res.render("contact")
});
app.get("/register",(req,res)=>{
    res.render("register")
});


app.listen(port,()=>{
    console.log(`the server is running port no ${port}`);
});
