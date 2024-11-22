// server.js
const http = require('http');
const url = require('url');

// 创建服务器并响应请求
const server = http.createServer((req, res) => {
  // 获取请求的 URL 和方法
  const { pathname } = url.parse(req.url, true);
  const method = req.method;

  // 设置响应头
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // 根据不同的路由和请求方法响应不同内容
  if (method === 'GET') {
    if (pathname === '/') {
      res.end('Welcome to the home page!');
    } else if (pathname === '/hello') {
      res.end('Hello, World!');
    } else if (pathname === '/about') {
      res.end('This is a sample Node.js server.');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end(`Method ${method} Not Allowed`);
  }
});

// 启动服务器并监听端口
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
