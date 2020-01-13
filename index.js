const express = require('express');
const app = express();
const http = require('http').createServer(app);
const port = 3000;
let io = require('socket.io')(http);

io.on('connection', (socket)=>{
    console.log('User connected');
    
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

app.use(express.static(__dirname)); //css

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/pages/index.html`);
});

http.listen(port);