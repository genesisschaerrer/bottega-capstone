import React, {useState, useContext, useEffect} from "react"
import axios from "axios"

import {CartContext} from "../context/cart-context"

const Cart = () => { 
    const [cart, setCart] = useContext(CartContext)
    let totalPrice = []

    let totalPriceBeforeTaxes = cart.map(cartItem => cartItem.price)
    totalPriceBeforeTaxes = totalPriceBeforeTaxes.reduce((acc, curr) => acc + curr, 0)
    totalPrice.push(totalPriceBeforeTaxes)
    let taxes = totalPriceBeforeTaxes * .0485
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
                    <div className="remove-cart-item" onClick={() => removeCartItem(product._id)}>Delete Me</div>
                </div>
            </div>
        )
    })

    const handleSubmit = () => {
        axios.patch("http://localhost:4000/purchase/update-inventory", cart)
            .then(() => setCart([]))
            .catch(error => console.log("place order error", error))
    }

    return (
        <div className="checkout-review-container">
            <h1 className="cart-header">ORDER SUMMARY</h1>
            <div className="order-summary-container">
                {orderSummary}

                {cart.length > 0 ?                 
                <div className="price-wrapper">
                    <div>TOTAL PRICE: ${totalPriceBeforeTaxes}.00</div>
                    <div>Taxes: ${taxes}</div>
                    <div>SHIPPING: ${shipping}.00</div>
                    <div className="total-price">FINAL TOTAL: ${totalPrice}</div>
                </div>:
                null}

                <button className="place-order-btn" onClick={handleSubmit}>PLACE ORDER</button>
            </div>
        </div>
    )
}

export default Cart