import React from "react"
import products from "../../mock-data/mock-data"



function ShopDetail () {
     const productDetail = products.map(product => {
        if(product.id === 1){
        return (
            <div className="show-container" key={product.id}>

                <div className="product-name-detail-page">{product.name}</div>

                    <div className="display-container">
                        <img className="card-img" src={product.image} />
                         <div className="product-info-wrapper">
                            <div>{product.description}</div>
                            <div className="product-price">${product.price}.00</div>
                            <div>Quantity</div>
                            <button>Add To Cart</button>
                         </div>
                    </div>

            </div>
        )
            }
    })
        return (
            <div className="detail-page-container">
                {productDetail}
            </div>
        )
}

export default ShopDetail