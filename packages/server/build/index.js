"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = require("ws");
var port = 8080;
var wsServer = new ws_1.WebSocketServer({ port: port });
wsServer.on('connection', function (ws) {
    ws.on('message', function (message) {
        //@ts-expect-error
        var newMessage = JSON.parse(message);
        console.log("passed: ".concat(JSON.stringify(newMessage)));
        wsServer.clients.forEach(function (e) {
            if (e.protocol === 'client')
                e.send(JSON.stringify({ newMessage: newMessage }));
        });
    });
});
