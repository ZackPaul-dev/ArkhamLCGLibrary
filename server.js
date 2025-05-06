const path = require('path');
const express = require ('express');
const app = express();
const PORT = 8000;
const cors = require('cors');


app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get("/js/main.js", function(req, res){
    res.setHeader('Content-Type', 'text/javascript', Access-Control-Allow-Origin: "https://arkhamdb.com/");
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


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})