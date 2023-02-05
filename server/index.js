const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();

// Create HTTP server
const server = http.createServer(app);

// Create WebSocket server
const wss = new WebSocket.Server({ server });

// Keep track of connected clients
let clients = [];

wss.on('connection', (ws, req) => {
    // generate unique id for each client
    console.log("New client connected");
    clients.push(ws);

    ws.on('message', (message) => {
        try {
            let data = JSON.parse(message);

            // Validate the structure of the client's message
            if (data.hasOwnProperty('name') && data.hasOwnProperty('data') && data.name === 'request' && data.data === 'new') {
                if (clients.length >= 2) {
                    let client1 = clients.shift();
                    let client2 = clients.shift();

                    client1.send(JSON.stringify({
                        trigger: 'offer'
                    }));
                    console.log("sending trigger Offer")
                    client1.on('message', (message) => {
                        let msg = JSON.parse(message);
                        console.log("sending Offer",msg.data)
                        if (msg.name === 'offer') {
                            client2.send(JSON.stringify({ trigger: 'answer', remoteDescription: msg.data }));
                        }
                    });

                    client2.on('message', (message) => {
                        let msg = JSON.parse(message);
                        console.log("Answer recvied",msg.data)
                        if (msg.name === 'answer') {
                            client1.send(JSON.stringify({ trigger: 'setanswer', setAnswer: msg.data }));
                        }
                    });
                }
            }
        } catch (error) {
            console.error("Error while processing message:", error.message);
        }
    });

    ws.on('close', () => {
        clients = clients.filter(client => client !== ws);
        console.log("Client disconnected");
    });
});

server.listen(3555,'192.168.1.109', () => {
    console.log('Server started on port 3555');
});
