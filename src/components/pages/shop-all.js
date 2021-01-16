import React from "react"
import products from "../../mock-data/mock-data"



function ShopAll() {
     const productDisplay = products.map(product => {
        return (
            <div className="product-card" key={product.id}>
                <div className="product-name">{product.name}</div>
                <img className="card-img" src={product.image} />
                <div className="product-price">${product.price}.00</div>
            </div>
        )
    })
        return (
            <div className="product-container">
                {productDisplay}
            </div>
        )
}

export default ShopAll