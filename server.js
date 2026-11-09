const http = require('http');

const port = process.env.PORT || 3000;
const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  response.end('CI/CD case 3 is deployed successfully.\n');
});

server.listen(port, () => console.log(`Server is running on port ${port}`));
