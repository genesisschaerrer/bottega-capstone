import React, {useState} from "react"
import axios from "axios"
import products from "../../mock-data/mock-data"





const ShopAll = () => {
    const [products, setProducts] = useState([])

    const getAllProducts = () => {
        axios.get("http://localhost:4000/")
            .then(response => {
               return setProducts(response.data)
            })
    }

    const renderProducts = () => {
        return (
            products.map(product => {
                return (
                    <div className="product-card" key={product.id}>
                        <div className="product-name">{product.name}</div>
                        <img className="card-img" src={product.imageUrl} />
                        <div className="product-price">${product.price}.00</div>
                    </div> 
                )
            })     
        )          
    }

    return (
        <div className="product-container" getAllProducts={getAllProducts()}>
            {renderProducts()}
        </div>
    )
}

export default ShopAll