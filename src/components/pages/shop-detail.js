import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"

// const reducer = (state, action) => {
//     switch(action.type){
//         case "setCount":
//             return {...state, count: action.count + action.amt}
//     }
// }
const ShopDetail = () => {
    const {id} = useParams()
    // const [state, dispatch] = useReducer(reducer, {count: 0})
    const [products, setProducts] = useState([])
    let [quantity, setQuantity] = useState(0)
    // const {cart, setCart} = AppContext()
    // let [count, setCount] = setCount(0)


    useEffect(() => {
        axios.get("http://localhost:4000/")
        .then(response => {
           setProducts(response.data)
        })
        .catch(error => console.log("error, ", error))
    }, [])


    const removeCartItem = e => {
        // console.log(cart)
        // let removedItem = cart.pop()
        // setCart(cart.filter(products => {
        //     return products !== removedItem
        // }))
    }

    const addToCart = () => {
        const items = []
        // Loop per qty
        // push to empty array

        // After loop
        // setCart([...cart, ...items])
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
                            {/* <button className="btn" onClick={() => setCart([...cart, product])}>Add To Cart</button> */}
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