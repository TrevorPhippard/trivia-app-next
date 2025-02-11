import express from 'express';
import { createServer } from 'http';
import { instrument } from '@socket.io/admin-ui';
import { Server } from 'socket.io'

const app = express()
const socketServer = createServer(app);

const io = new Server(socketServer, {
    cors: {
        origin: '*', // 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['socket-header'],
        credentials: true,
    },
    allowEIO3: true,
});

// Use the following line to integrate with Web PubSub for Socket.IO
if (process.env.NODE_ENV === "production") {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    useAzureSocketIO(io, {
        hub: "Hub", // The hub name can be any valid string.
        connectionString: process.env.CONNECTIONSTRING
    });
}

instrument(io, {
    auth: false,
    mode: 'development',
});

io.on('connection', (socket) => {
    socket.on('test', () => {
        socket.broadcast.emit('test')
    })
})

socketServer.listen(3001, () => {
    console.log('✔️ Server listening on port 3001')
})