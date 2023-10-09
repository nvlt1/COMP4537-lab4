const http = require('http')
const url = require('url')
const fs = require('fs')
const port = 8080

http.createServer((req, res) => {
    const q = url.parse(req.url, true)

    res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*'})
    if (q.pathname == "/search.html"){
        fs.readFile('./COMP4537/Labs/4/search.html', function(error, html) {
            if (error) {
                throw error
            }
            res.write(html)
            res.end()
        })
    }

    if (q.pathname == "/store.html"){
        fs.readFile('./COMP4537/Labs/4/store.html', function(error, html) {
            if (error) {
                throw error
            }
            res.write(html)
            res.end()
        })
    }
    
}).listen(port, () => {
    console.log("listening on port: " + port)
})


