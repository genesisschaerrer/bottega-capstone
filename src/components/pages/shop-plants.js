import React, {useState, useEffect} from "react"
import axios from "axios"


import ProductCard from "../product-cards/product-cards"


const shopPlants = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/")
        .then(response => {
           setProducts(response.data)
        })
        .catch(error => console.log("error, ", error))
    }, [])

    const plantProducts = () => products.filter(product => product.category === "plant").map(product => {
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
            {plantProducts()}
        </div>
    )
}

export default shopPlants