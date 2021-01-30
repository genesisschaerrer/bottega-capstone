import React, {useState, useContext, useEffect} from "react"
import axios from "axios"

import {CartContext} from "../context/cart-context"

const Cart = () => {
    const [cart, setCart] = useContext(CartContext)
    let totalPrice = cart.map(cartItem => cartItem.price)
    totalPrice = totalPrice.reduce((acc, curr) => acc + curr, 0)


    const removeCartItem = (id) => {
        let indexStart = cart.findIndex(x => x._id === id)
        let indexEnd = indexStart + 1

        let newCart = [...cart]
        newCart.splice(indexStart, indexEnd)

        setCart(newCart)
    }


    console.log(cart)
    
    let orderSummary = cart.map((product, idx) => {
        return (
            <div key={idx}>
                <div className="summary-product-name">{product.name}</div>
                <div className="product-summary-wrapper">
                    <img className="product-thumbnail" src={product.imageUrl} alt={product.name} />
                    <div className="prduct-price">{`$${product.price}.00`}</div>
                    <div className="remove-cart-item" onClick={() => removeCartItem(product._id)}>Delete Me</div>
                </div>
            </div>
        )
    })

    const handleSubmit = () => {
        cart.forEach(item => {
            return (
                axios.patch("http://localhost/patch/:id") 
            )
        })
    }

    return (
        <div className="checkout-review-container">
            <h1 className="cart-header">ORDER SUMMARY</h1>
            <div className="order-summary-container">
                {orderSummary}
                <div className="total-price">TOTAL PRICE: ${totalPrice}.00</div>

                <button className="place-order-btn" onClick={handleSubmit}>PLACE ORDER</button>
            </div>
        </div>
    )
}

export default Cart