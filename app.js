const https = require('https')
const url = require('url')
const port = 8888

https.createServer(function(req, res) {
    const q = url.parse(req.url, true)
    console.log(q.query)
    res.writeHead(200, {
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
    })
    res.end(q.query)
}).listen(port)

console.log("server listening on port:" + port)