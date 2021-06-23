//Loading modules
const express = require("express");
const handlebars = require("express-handlebars");
// const bodyParser = require("body-parser"); deprecated
const app = express();
// const mongoose = require("mongoose")

//Config
    //Body Parser
    // app.use(bodyParser.urlencoded({extended: true}));
    // app.use(bodyParser.json());
        app.use(express.urlencoded({extended: true}));
        app.use(express.json());
    //Handlebars
        app.engine("handlebars", handlebars({defaultLayout: "main"}));
        app.set("view engine", "handlebars");



//Routes
    app.get("/teste", (req, res)=>{
        res.send("teste");
    })

//Others
const PORT = 8081;
app.listen(PORT, () => {
    console.log("Server running...")
})