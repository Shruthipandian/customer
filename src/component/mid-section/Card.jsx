import React from 'react'
import "./Card.scss"

function Card() {
    return (
        <div className="card_outer">

<div className="card">
            
            <div className="card_element">
                <div className="card_ele_top">
                    <img src="./asset/EmailPhone.svg" alt="" srcset="" />
                    <h5>Contact Anna</h5>
                </div>
                <div className="card_ele_info">
                    <p>annaanne@qliro.com</p>
                    <p>+46721234567</p>
                    
                </div>

            </div>

            <div className="card_element">
                <div className="card_ele_top">
                    <img src="./asset/Shipping.svg" alt="" srcset="" />
                    <h5>Shipping Address</h5>
                </div>
                <div className="card_ele_info">
                <p>Qlirovagen 123,</p>
                    <p>12345 Stockhold, Sweden</p>
                    
                </div>

            </div>

            <div className="card_element">
                <div className="card_ele_top">
                    <img src="./asset/Invoice.svg" alt="" srcset="" />
                    <h5>Invoice Address</h5>
                </div>
                <div className="card_ele_info">
                    <p>Qlirovagen 123,</p>
                    <p>12345 Stockhold, Sweden</p>
                    
                </div>

            </div>

        </div>

        </div>
    )
}

export default Card
