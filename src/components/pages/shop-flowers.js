import React, {useState, useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"


import ProductCard from "../product-cards/product-cards"


const shopFlowers = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        console.log("got to useEffect")
        axios.get("http://localhost:4000/")
        .then(response => {
            console.log("here is response", response)
           setProducts(response.data)
        })
        .catch(error => console.log("error, ", error))
    }, [])


    console.log(products)


        const flowerProducts = () => products.filter(product => product.category === "flower").map(product => {
            return (
                <ProductCard 
                    key={product._id}
                    _id={product._id}
                    name={product.name}
                    imageUrl={product.imageUrl}
                    price={product.price}
                />
            )
        })

    return (
        <div className="product-container">
            {flowerProducts()}
        </div>
    )
}

export default shopFlowers