import React, {useState, useEffect, useContext} from "react"
import {useParams, Link} from "react-router-dom"
import axios from "axios"


import {CartContext} from "../context/cart-context"

const ShopDetail = () => {
    const {id} = useParams()
    const [cart, setCart] = useContext(CartContext)
    const [products, setProducts] = useState([])
    let [quantity, setQuantity] = useState(0)


    useEffect(() => {
        axios.get("http://localhost:4000/")
        .then(response => {
           setProducts(response.data)
        })
        .catch(error => console.log("error, ", error))
    }, [])

    const addToCart = () => {
        let getProperItem = products.filter(products => products._id === id)
        let items = []

        for(let i=1; i <= quantity; i++){
               items.push(...getProperItem)
        }
        setCart([...cart, ...items])
    }

    const productDetail = products.filter(products => products._id === id).map(product => {
        return (
            <div className="show-product-container" key={product._id}>

                <div className="product-name-detail-page">{product.name}</div>

                    <div className="display-container">
                        <img className="card-img" src={product.imageUrl} />
                         <div className="product-info-wrapper">
                           <div className="product-description">{product.description}</div>
                            <div className="product-price">${product.price}.00</div>
                            <div className="cart-quantity-container">
                                <button className="decrement" onClick={() => quantity > 0 ? setQuantity(quantity - 1): null}>-</button>
                                <div>{quantity}</div>
                                <button className="add" onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                            <div className="btn-wrapper">
                                <div className="btn" onClick={quantity > 0 ? addToCart: null}>Add To Cart</div>
                                <Link to="/cart" className="btn">CHECKOUT</Link>
                            </div>
                         </div>
                    </div>

            </div>
        )
    })

    return (
        <div className="detail-page-container">
            {productDetail}
        </div>
    )
}

export default ShopDetail
