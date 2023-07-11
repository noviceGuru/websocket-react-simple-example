import { WebSocketServer } from 'ws'

const port = 8080

const wsServer = new WebSocketServer({ port: port })

wsServer.on('connection', ws => {
    ws.on('message', message => {
        //@ts-ignore
        const newMessage = JSON.parse(message)
        console.log(`passed: ${newMessage}`)
        wsServer.clients.forEach(e => {
            if (e.protocol === 'client') e.send(JSON.stringify({newMessage}))
        })
    })
})

