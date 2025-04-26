const express = require ('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(_dirName + '/index.html')
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})