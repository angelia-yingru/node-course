const http = require("http");

const server = http.createServer((request, response) => {
  //當你的server接收到request的時候要做什麼事
  response.statusCode(200);
  response.setHeader("Content_Type", "text/html;charset=UTF-8");
  response.end("<html><head>simple server</head><body><h1>Hello</h1></body></html>");
});

server.listen(3001, () => {
  console.log("Server running at port 3001");
});
