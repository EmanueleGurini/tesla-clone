import React from 'react'
import './Buttons.css'

function Buttons({ imp, text, link, last }) {
    return (
        <div className={`button ${imp === 'secondary' ? 'button__white' : ''} ${last === 'last' ? 'hello' : ''}`}>
            <a href={link}>{ text }</a>
        </div>
    )
}

export default Buttons
