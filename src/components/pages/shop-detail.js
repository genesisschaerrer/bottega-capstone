import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"


const ShopDetail = () => {
    const {id} = useParams()
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/")
        .then(response => {
           setProducts(response.data)
        })
        .catch(error => console.log("error, ", error))
    }, [])


    const productDetail = products.filter(products => products._id === id).map(product => {
        return (
            <div className="show-product-container" key={product._id}>

                <div className="product-name-detail-page">{product.name}</div>

                    <div className="display-container">
                        <img className="card-img" src={product.imageUrl} />
                         <div className="product-info-wrapper">
                           <div className="product-description">{product.description}</div>
                            <div className="product-price">${product.price}.00</div>
                            <div className="cart-quantity-container">{cart.length < 2 ? `${cart.length} item in cart`: `${cart.length} items in cart`}</div>
                            <button className="btn" onClick={() => setCart([...cart, product])}>Add To Cart</button>
                            <button className="btn">Checkout</button>
                         </div>
                    </div>

            </div>
        )
    })
        console.log(cart)
        return (
            <div className="detail-page-container">
                {productDetail}
            </div>
        )
}

export default ShopDetail