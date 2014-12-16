"use strict"

var Hapi = require("hapi");

var server = new Hapi.Server();
server.connection({ port: 3001 });

server.route({
  method: "GET",
  path: "/api/articles/{id}",
  handler: function (request, reply) {
    var articleId = encodeURIComponent(request.params.id);
    reply("you requested article: ${articleId}!");
  }
});

server.start(function() {
  console.log("Server running at ${server.info.uri}");
});
