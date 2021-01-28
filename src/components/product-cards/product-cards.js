import React, {useState} from "react"
import {Link} from "react-router-dom"

const ProductCard = (props) => {
    return (
        <Link to={`/shop-detail/${props._id}`} key={props._id}>
            <div className="product-card">
                <div className="product-name">{props.name}</div>
                <img className="card-img" src={props.imageUrl} />
                <div className="product-price">${props.price}.00</div>
            </div> 
        </Link>
    )
}

export default ProductCard