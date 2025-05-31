const path = require('path');
const express = require ('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

app.use(cors());

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get("/js/main.js", function(req, res){
    res.setHeader('Content-Type', 'text/javascript');
    res.sendFile(path.join(__dirname, 'js', 'main.js'))
})

app.get('/css/style.css', function(req, res){
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'css', 'style.css'))
})

app.get('/css/normalize.css', function(req, res){
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'css', 'normalize.css'))
})

/*app.get('/:cName', (req, res) =>{
fetch("https://arkhamdb.com/api/public/card/01001.json")
.then(res => res.json())
.then(data => {
    console.log(data)
})
.catch(err =>{
    console.log(`error${err}`)
})
})*/

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})