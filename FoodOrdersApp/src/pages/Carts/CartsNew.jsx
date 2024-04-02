import { useState } from "react"
import { useNavigate } from "react-router-dom"

import "../../styles/carts.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function CartsNew() {

    const navigate = useNavigate();

  return (
    <div className="container">
            <section className="box">
                <h1>Carts</h1>
                <div className="path">
                    <p className="path-link" onClick={() => {navigate("/carts")}}>Carts</p>
                    <p className="path-arrows">&#47;&#47;&#47;</p>
                    <p className="path-link" onClick={() => {navigate("/carts/new")}}>New cart</p>
                </div>
                <div className="form">
                    <div className="line">
                        <div className="layer selects">

                            <div className="input-container">
                                <label htmlFor="restaurant">Restaurant:</label>
                                <select name="restaurant" id="restaurant">
                                    <option value="choose">--- Choose restaurant ---</option>
                                    <option value="r1">Restaurant 1</option>
                                    <option value="r2">Restaurant 2</option>
                                    <option value="r3">Restaurant 3</option>
                                    <option value="r4">Restaurant 4</option>
                                    <option value="r5">Restaurant 5</option>
                                    <option value="r6">Restaurant 6</option>
                                </select>
                            </div>

                            <div className="input-container">
                                <label htmlFor="organization">Organization:</label>
                                <select name="organization" id="organization">
                                    <option value="choose">--- Choose organization ---</option>
                                    <option value="o1">Organization 1</option>
                                    <option value="o2">Organization 2</option>
                                    <option value="o3">Organization 3</option>
                                    <option value="o4">Organization 4</option>
                                    <option value="o5">Organization 5</option>
                                    <option value="o6">Organization 6</option>
                                </select>
                            </div>

                        </div>
                    </div>
                    <div className="line top-bottom">
                        <div className="layer top">

                            <div className="input-container">
                                <label htmlFor="bank-account-number">Bank account number:</label>
                                <input type="text" id="bank-account-number"/>
                            </div>

                            <div className="input-container">
                                <label htmlFor="phone-number">Phone number:</label>
                                <input type="text" id="phone-number"/>
                            </div>

                        </div>
                        <div className="layer bottom">

                            <div className="input-container">
                                <label htmlFor="city">City:</label>
                                <input type="text" id="city"/>
                            </div>

                            <div className="input-container">
                                <label htmlFor="street">Street:</label>
                                <input type="text" id="street"/>
                            </div>

                            <div className="input-container">
                                <label htmlFor="building">Building:</label>
                                <input type="text" id="building"/>
                            </div>

                            <div className="input-container">
                                <label htmlFor="premises">Premises:</label>
                                <input type="text" id="premises"/>
                            </div>

                        </div>
                    </div>
                    <div className="line left-right">
                        <div className="layer left">

                            <div className="input-container">
                                <label htmlFor="min-price">Minimum cart price:</label>
                                <input type="text" id="min-price"/>
                            </div>

                            <div className="input-container">
                                <label htmlFor="delivery-price">Delivery price:</label>
                                <input type="text" id="delivery-price"/>
                            </div>

                            <div className="input-container">
                                <label htmlFor="free-delivery-price">Free delivery price:</label>
                                <input type="text" id="free-delivery-price"/>
                            </div>

                        </div>
                        <div className="layer right">

                            <div className="input-container">
                                <label htmlFor="notes">Notes:</label>
                                <textarea name="notes" id="notes"></textarea>                          
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="control-buttons">
                    <button onClick={() => {navigate("/carts")}}>Go back</button>
                    <button>Create cart</button>
                </div>
            </section>
        </div>
  )
}
