import React from 'react'
import "./Table.scss"
import Data from "../../data.json"

function Table() {
    return (
        <div className="table">
            <div className="table_heading">
                <h5>Anna's Order</h5>
                <div className="help_icon">
                   <i class="fa fa-info-circle" aria-hidden="true"></i>
                    <h5>Help</h5>
                </div>
            </div>

            <div className="table_body">
                <div className="table_column_header">
                    <div className="col-12">
                        <h5>Order Number</h5>
                    </div>

                    <div className="col-12">
                        <h5>Created</h5>
                    </div>

                    <div className="col-12">
                        <h5>Store</h5>
                    </div>

                    <div className="col-12">
                        <h5>Payment method</h5>
                    </div>

                    <div className="col-12">
                        <h5>Payment status</h5>
                    </div>

                    <div className="col-12">
                        <h5>Amount</h5>
                    </div>
                </div>


                {Data.map(post => {
                    return(
                        <div className="table_column">
                    <div className={"table_column_side " + (post.first_color)}>
                        <p>{post.first_txt}</p>
                    </div>
                    <div className="table_column_header">
                    <div className="col-1 col-12">
                        <h5 className="num-txt">{post.second_txt}</h5>
                        <img src={post.second_img} alt="" />
                    </div>

                    <div className="col-2 col-12">
                        <h5>{post.third_txt}</h5>
                    </div>

                    <div className="col-3 col-12">
                        <img src={post.four_img} alt="" />
                        <h5>{post.four_txt}</h5>
                    </div>

                    <div className="col-4 col-12">
                        <img src={post.five_img} alt="" />
                        <h5>{post.five_txt}</h5>
                    </div>

                    <div className="col-5 col-12">
                    <i className={'fa fa-circle ' + (post.six_icon)} ></i>
                        <h5>{post.six_txt}</h5>
                    </div>

                    <div className="col-6 col-12">
                        <h5>{post.seven_txt}</h5>
                    </div>
                </div>
                </div>
                    )
                })}


                {/* <div className="table_column">
                    <div className="table_column_side bg-gray">
                        <p>online</p>
                    </div>
                    <div className="table_column_header">
                    <div className="col-1 col-12">
                        <h5 className="num-txt">1234567890</h5>
                        <img src="./asset/corner-down-right.svg" alt="" />
                    </div>

                    <div className="col-2 col-12">
                        <h5>05 maj, 12:33</h5>
                    </div>

                    <div className="col-3 col-12">
                        <img src="./asset/uk 1.svg" alt="" />
                        <h5>Butli X</h5>
                    </div>

                    <div className="col-4 col-12">
                        <img src="./asset/Qliro.svg" alt="" />
                        <h5>Invoice</h5>
                    </div>

                    <div className="col-5 col-12">
                    <i class="fa fa-circle green"></i>
                        <h5>Paid</h5>
                    </div>

                    <div className="col-6 col-12">
                        <h5>2160 kr</h5>
                    </div>
                </div>
                </div>

                <div className="table_column">
                    <div className="table_column_side bg-black">
                        <p>Instore</p>
                    </div>
                    <div className="table_column_header">
                    <div className="col-1 col-12">
                        <h5 className="num-txt">1234567890</h5>
                        <img src="./asset/corner-down-right.svg" alt="" />
                    </div>

                    <div className="col-2 col-12">
                        <h5>16 maj, 12:33</h5>
                    </div>

                    <div className="col-3 col-12">
                        <img src="./asset/svenska.svg" alt="" />
                        <h5>Butli X</h5>
                    </div>

                    <div className="col-4 col-12">
                        <img src="./asset/VISA.png" alt="" />
                        <h5>Card, ****1234</h5>
                    </div>

                    <div className="col-5 col-12">
                    <i class="fa fa-circle orange"></i>
                        <h5>In process</h5>
                    </div>

                    <div className="col-6 col-12">
                        <h5>3890 kr</h5>
                    </div>
                </div>
                </div>

                <div className="table_column">
                    <div className="table_column_side bg-orange">
                        <p>Manual</p>
                    </div>
                    <div className="table_column_header">
                    <div className="col-1 col-12">
                        <h5 className="num-txt">1234567890</h5>
                        <img src="./asset/corner-down-right.svg" alt="" />
                    </div>

                    <div className="col-2 col-12">
                        <h5>20 maj, 12:33</h5>
                    </div>

                    <div className="col-3 col-12">
                        <img src="./asset/Norska.svg" alt="" />
                        <h5>Butli X</h5>
                    </div>

                    <div className="col-4 col-12">
                        <img src="./asset/AMEX.png" alt="" />
                        <h5>Card, ****1234</h5>
                    </div>

                    <div className="col-5 col-12">
                    <i class="fa fa-circle red"></i>
                        <h5>Failed</h5>
                    </div>

                    <div className="col-6 col-12">
                        <h5>1134 kr</h5>
                    </div>
                </div>
                </div>

                <div className="table_column">
                    <div className="table_column_side bg-gray">
                        <p>online</p>
                        <img src="./asset/Upsell.svg" alt="" />    
                    </div>
                    
                    <div className="table_column_header">
                    <div className="col-1 col-12">
                        <h5 className="num-txt">1234567890</h5>
                        <img src="./asset/corner-down-right.svg" alt="" />
                    </div>

                    <div className="col-2 col-12">
                        <h5>24 maj, 12:33</h5>
                    </div>

                    <div className="col-3 col-12">
                        <img src="./asset/Svenska.svg" alt="" />
                        <h5>Butli X</h5>
                    </div>

                    <div className="col-4 col-12">
                        <img src="./asset/paypal.png" alt="" />
                        <h5>Paypal</h5>
                    </div>

                    <div className="col-5 col-12">
                    <i class="fa fa-circle orange"></i>
                        <h5>In progress</h5>
                    </div>

                    <div className="col-6 col-12">
                        <h5>567 kr</h5>
                    </div>
                </div>
                </div>

                <div className="table_column">
                    <div className="table_column_side bg-black">
                        <p>Instore</p>
                    </div>
                    <div className="table_column_header">
                    <div className="col-1 col-12">
                        <h5 className="num-txt">1234567890</h5>
                        <img src="./asset/corner-down-right.svg" alt="" />
                    </div>

                    <div className="col-2 col-12">
                        <h5>30 maj, 12:33</h5>
                    </div>

                    <div className="col-3 col-12">
                        <img src="./asset/Norska.svg" alt="" />
                        <h5>Butli X</h5>
                    </div>

                    <div className="col-4 col-12">
                        <img src="./asset/Trustly_Checkout_Logotype_Horizontal_Black_RGB 1.svg" alt="" />
                        <h5>Trustly</h5>
                    </div>

                    <div className="col-5 col-12">
                    <i class="fa fa-circle green"></i>
                        <h5>Paid</h5>
                    </div>

                    <div className="col-6 col-12">
                        <h5>8970 kr</h5>
                    </div>
                </div>
                </div> */}

            </div>

        </div>
    )
}

export default Table
