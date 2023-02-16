const express = require('express')
const mysql = require('mysql')
const hbs = require('hbs')
const path = require('path')
const port = 2700;
const app = express();
const bodyParser = require('body-parser');  

// Parsing middleware
app.use(express.urlencoded({ extended : false }));
app.use(express.json()); // New

const location =path.join(__dirname,"./public");
app.use(express.static(location));

app.set("view engine","hbs");

const htmlfilespath = path.join(__dirname+"/views/partials");
hbs.registerPartials(htmlfilespath);
// hbs.use(htmlfilespath)

app.use("/",require("./router/pages"));
app.listen(port,()=>{
    console.log("Server is listenong port  "+`${port}`)
});