const http = require('http')
//This will include http code inside the variable
const fs = require('fs')
const port  = 3000
//This tell the browser what port it'll be listening to 

const server = http.createServer(function(req, res){
	res.writeHead(200, {'content-type': 'text/html'})
	fs.readFile('index.htm', function(error, data){
		if(error){
			res.writeHead(404);
			res.write("error: File not found")
		}else{
			res.write(data)
		}
		res.end()
	})
	// res.write("Hi Guys! This is the first developement server that I've ever setup.")
	

})

server.listen(port, function(error){
	if(error){
		console.log("Something went wrong", error)
	}else{
		console.log("Server is listening on port "+ port)
	}
})