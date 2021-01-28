import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import axios from "axios"


import ProductCard from "../product-cards/product-cards"


const ShopAll = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/")
        .then(response => {
           setProducts(response.data)
        })
        .catch(error => console.log("error, ", error))
    }, [])

    return (
        <div className="product-container">
            {products.map(product => {
                return (
                    <ProductCard 
                        key={product._id}
                        _id={product._id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.price}
                    />
                )
            })}
        </div>
    )
}

export default ShopAll