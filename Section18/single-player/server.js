const server = require('http').createServer();
const io = require('socket.io')(server);

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT} ...`);
});


// on function come from event emitter interface that our socket sever uses to register an event listener
io.on('connection', (socket) => {
    console.log('user connected');
})