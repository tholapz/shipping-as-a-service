var restify = require("restify");
var server = restify.createServer();

function respond(req, res, next) {
    res.send('Hello Restify!');
}

server.get('/', respond);

var port = process.env.PORT || 5000;
server.listen(port, function() {
    console.log("Listening on " + port);
});