const server = require('http').createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT} ...`);
});

let readyPlayerCount = 0;

// on function come from event emitter interface that our socket sever uses to register an event listener
io.on('connection', (socket) => {
    console.log('user connected', socket.id);

    socket.on('ready', () => {
        console.log('Player ready', socket.id);
        readyPlayerCount++;

        if(readyPlayerCount === 2){
            //broadcast('startGame');
        }
    })
})