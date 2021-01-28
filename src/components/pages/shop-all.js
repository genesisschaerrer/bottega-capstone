import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import axios from "axios"



const ShopAll = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/")
        .then(response => {
           setProducts(response.data)
        })
        .catch(error => console.log("error, ", error))
    }, [])

    const renderProducts = () => {
        return (
            products.map(product => {
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
        )          
    }

    return (
        <div className="product-container">
            {renderProducts()}
        </div>
    )
}

export default ShopAll