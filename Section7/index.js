const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        // 'Content-Type': 'text/plain',
        'Content-Type': 'application/json',
    });
    res.end(JSON.stringify({
        id: 1,
        name: 'Alaa',
    }));
});

const PORT = 3333;

server.listen(PORT, () => {
    console.log(`Successfully connect with port ${PORT}`);
});