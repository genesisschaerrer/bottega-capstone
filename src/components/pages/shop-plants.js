import React, {useState, useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
const shopPlants = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/")
        .then(response => {
           setProducts(response.data)
        })
        .catch(error => console.log("error, ", error))
    }, [])

        const plantProducts = products.filter(products => products.category === "plant").map(product => {
                return (
                    <Link to={`/shop-detail/${product._id}`} key={product._id}>
                        <div className="product-card">
                            <div className="product-name">{product.name}</div>
                            <img className="card-img" src={product.imageUrl} />
                            <div className="product-price">${product.price}.00</div>
                        </div> 
                    </Link>
                )
            })     
        console.log(products)  
        console.log(plantProducts)

    return (
        <div className="product-container">
            {plantProducts}
        </div>
    )
}

export default shopPlants