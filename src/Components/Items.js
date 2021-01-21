import React from 'react'
import './Items.css'
import Buttons from './Buttons.js' 

function Items({ title, desc, descLink, backgroundImg }) {
    return (
        <div className="items" style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className="items__container">
                <div className="items__text">
                    <h2>{ title }</h2>
                    <p>{ desc }<a href="https://www.tesla.com/support/delivery-options?redirect=no" target="_blanck">{ descLink }</a></p>
                </div>
                <div className="items__buttons">
                    <Buttons />
                    <Buttons />
                </div>
            </div>
        </div>
    )
}

export default Items
