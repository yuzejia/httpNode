// server.js
const http = require('http');

// 创建服务器并响应请求
const server = http.createServer((req, res) => {
  // 设置响应头
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // 响应客户端
  res.end('Hello, Node.js server!');
});

// 启动服务器并监听端口
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
