import React, {useState, useContext, useEffect} from "react"

import {CartContext} from "../context/cart-context"

const Cart = () => {
    const [cart, setCart] = useContext(CartContext)
    let orderSummary

    const removeCartItem = (id) => {
        let indexStart = cart.findIndex(x => x._id === id)
        let indexEnd = indexStart + 1

        cart.splice(indexStart, indexEnd)
    }

    useEffect(()=> {
        orderSummary = cart.map(product => {
            return (
                <div key={product._key}>
                    <div className="summary-product-name">{product.name}</div>
                    <div className="product-summary-wrapper">
                        <img className="product-thumbnail" src={product.imageUrl} alt={product.name} />
                        <div className="prduct-price">{product.price}</div>
                        <div className="remove-cart-item" onClick={() => removeCartItem(product._id)}>Delete Me</div>
                    </div>
                </div>
            )
        })
    }, [cart])

    console.log(cart)
    
    // let orderSummary = cart.map(product => {
    //     return (
    //         <div key={product._key}>
    //             <div className="summary-product-name">{product.name}</div>
    //             <div className="product-summary-wrapper">
    //                 <img className="product-thumbnail" src={product.imageUrl} alt={product.name} />
    //                 <div className="prduct-price">{product.price}</div>
    //                 <div className="remove-cart-item" onClick={() => removeCartItem(product._id)}>Delete Me</div>
    //             </div>
    //         </div>
    //     )
    // })

    return (
        <div className="checkout-review-container">
            <h1 className="cart-header">CHECKOUT REVIEW</h1>
            <div className="order-summary-container">
                {orderSummary}
            </div>


            <div>TOTAL PRICE: $0.00</div>
            <button>PLACE ORDER</button>
        </div>
    )
}

export default Cart