import React, {useState, useContext, useEffect} from "react"
import axios from "axios"
import StripeCheckout from "react-stripe-checkout"

import {CartContext} from "../context/cart-context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Cart = () => { 
    // const [purchaseAmount, setPurchaseAmount] = useState(0)
    const [cart, setCart] = useContext(CartContext)
    let totalPrice = []

    let totalPriceBeforeTaxes = cart.map(cartItem => cartItem.price)
    totalPriceBeforeTaxes = totalPriceBeforeTaxes.reduce((acc, curr) => acc + curr, 0)
    totalPrice.push(totalPriceBeforeTaxes)
    let taxes = totalPriceBeforeTaxes * .04
    totalPrice.push(taxes)
    let shipping = 16
    totalPrice.push(shipping)
    totalPrice = totalPrice.reduce((acc, curr) => acc + curr, 0)
    

    const removeCartItem = (id) => {
        let indexStart = cart.findIndex(x => x._id === id)
        let indexEnd = indexStart + 1

        let newCart = [...cart]
        newCart.splice(indexStart, indexEnd)

        setCart(newCart)
    }
    
    let orderSummary = cart.map((product, idx) => {
        return (
            <div key={idx}>
                <div className="summary-product-name">{product.name}</div>
                <div className="product-summary-wrapper">
                    <img className="product-thumbnail" src={product.imageUrl} alt={product.name} />
                    <div className="prduct-price">{`$${product.price}.00`}</div>
                    <FontAwesomeIcon icon="trash" className="trash" onClick={() => removeCartItem(product._id)}/>
                </div>
            </div>
        )
    })

    const makePayment = (token)  => {
        const body = {
            token,
            totalPrice
        }

        axios.post("https://gms-ecommerce-node-api.herokuapp.com/payment", {body})
            .then(response => {
                console.log("Responge: ", response)
                const {status} = response.status
                console.log("Status: ", status)
                handleSubmit()
            })
            .catch(error => console.log(error))

    }

    const handleSubmit = () => {
        axios.patch("https://gms-ecommerce-node-api.herokuapp.com/purchase/update-inventory", cart)
            .then(() => setCart([]))
            .catch(error => console.log("place order error", error))
    }

    return (
        <div className="checkout-review-container">
            <h1 className="cart-header">ORDER SUMMARY</h1>
            <div className="order-summary-container">
                {orderSummary}

                {cart.length > 0 ?                 
                <div className="price-container">
                    
                    <div className="price-breakdown-wrapper">
                        <div className="price-text">
                        <div>Subtotal:</div>
                        <div>Taxes:</div>
                        <div>Shipping:</div>
                        <div className="total-price">FINAL TOTAL:</div>
                        </div>

                        <div className="price-numbers">
                        <div>${totalPriceBeforeTaxes}.00</div>
                        <div>${taxes}</div>
                        <div>${shipping}.00</div>
                        <div className="total-price">${totalPrice}</div>
                        </div>
                    </div>

                    {/* <button className="place-order-btn" onClick={handleSubmit}>PLACE ORDER</button> */}
                    <StripeCheckout 
                    stripeKey={process.env.REACT_APP_KEY}
                    token={makePayment}
                    name="goods"
                    amount={totalPrice * 100}
                    >
                    <button className="place-order-btn">PLACE ORDER</button> 
                    </StripeCheckout>
                </div>:
                <div className="empty-cart-container">
                    <h1 className="oops">Oops...</h1>
                    <div className="empty-cart">EMPTY CART</div>
                </div>}
            </div>
        </div>
    )
}

export default Cart