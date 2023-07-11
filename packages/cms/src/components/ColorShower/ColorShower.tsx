import React, { useEffect, useState } from 'react'
import styles from './colorShower.module.css'

const ColorShower = () => {
    const colorChoices = ['blue', 'green', 'yellow', 'red']
    // ws.OPEN
    let ws: any
    const sendColor = (e: string) => {
        ws.send(JSON.stringify({ color: e }))

    }
    useEffect(() => {
        ws = new WebSocket('ws://localhost:8080')

        ws.onopen = () => {
            console.log('Socket connection opened.')
        }

    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.buttonsContainer}>
                {colorChoices.map(e => <button
                    key={e}
                    onClick={() => sendColor(e)}
                    style={{ backgroundColor: `${e}` }}
                />)}
            </div>
        </div>
    )
}

export default ColorShower