//Loading modules
const express = require("express");
const handlebars = require("express-handlebars");
// const bodyParser = require("body-parser"); deprecated
const app = express();
const admin = require("./routes/admin");

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
    app.get("/", (req, res)=>{
        res.send("Página inicial")
    })
    app.use("/admin", admin);

//Others
const PORT = 8081;
app.listen(PORT, () => {
    console.log("Server running...")
})