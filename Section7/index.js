const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
    });
    res.end('Done');
});

const PORT = 3333;

server.listen(PORT, () => {
    console.log(`Successfully connect with port ${PORT}`);
});