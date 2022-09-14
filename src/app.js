const express = require('express');
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;
const routes = require(path.join(__dirname, '.','routes','routeMain.js'))


app.use(express.static("public"));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./src/views")

app.use('/', routes);
app.use('/crear',routes);

app.listen(port,() => console.log ("Server " + port + " ok"));