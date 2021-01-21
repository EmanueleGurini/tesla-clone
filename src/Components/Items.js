import React from 'react'
import './Items.css'
import Buttons from './Buttons.js' 
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Footer from './Footer.js'

function Items({ title, desc, descLink, backgroundImg, leftBtnText, leftBtnLink, rightBtnText,rightBtnLink, twoButtons, first, last }) {
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
                    <Buttons imp="primary" text={leftBtnText} link={leftBtnLink} />
                    {
                        twoButtons &&
                        <Buttons imp="secondary" text={rightBtnText} link={rightBtnLink} last={last}/>
                    }
                </div>
                {
                    first && (
                        <div className="item__expand">
                            <ExpandMoreIcon />
                        </div>
                    )
                }

                {
                    last && (
                        <Footer />
                    )
                }
            </div>
        </div>
    )
}

export default Items
