const http = require("http");
const host = 'localhost';
const port = 8000;
const fs = require('fs');
const files = [];

const requestListener = (req, res) => {

    if (req.url === '/get' && req.method === 'GET') {
        res.writeHead(200);

        fs.readdirSync('./files').forEach(file => {

            files.push(file);
        });
        res.end(`${files}`);

    } else if (req.url === '/delete' && req.method === 'DELETE') {
        res.writeHead(200);
        res.end('success');
    } else if (req.url === '/post' && req.method === 'POST') {
        res.writeHead(200);
        res.end('success');
    } else if (req.url === '/redirect' && req.method === 'GET') {
        res.writeHead(200);
        res.end("Server is available on HTTP//localhost/redirected");
    };

    res.writeHead(405);
    res.end("Method is not allowed");

};
const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});