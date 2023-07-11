import React, { useEffect, useState } from 'react'
import styles from './colorShower.module.css'

const ColorShower = () => {
    const [color, setColor] = useState<string>("no color yet")

    // ws.OPEN
    
    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080', 'client')

        ws.onopen = () => {
            console.log('Socket connection opened.')
        }

        ws.onmessage = (event) => {
            setColor(JSON.parse(event.data).newMessage.color)
            console.log(JSON.parse(event.data).newMessage.color)
        }
        
    }, [])
    
    return (
        <div className={styles.container}>
            <p className={styles.centerCircle} style={{backgroundColor: `${color}`}}>
            </p>
        </div>
    )
}

export default ColorShower