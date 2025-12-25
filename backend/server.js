const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/api" && req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        });
        res.end(JSON.stringify({ message: "Hello, I'm Backend" }));
    }
});

server.listen(3000, () => {
    console.log("Backend running on port 3000");
});
