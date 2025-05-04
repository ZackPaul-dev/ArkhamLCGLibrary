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
    res.setHeader('Content-Type', 'text/javascript');
    res.sendFile(path.join(__dirname, 'js', 'main.js'))
})

app.get('/css/style.css', function(req, res){
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'css', 'style.css'))
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})