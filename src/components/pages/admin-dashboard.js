import React, {useState, useEffect} from "react"
import axios from "axios"


import ProductForm from "../forms/product-form"


const AdminDashboard = () => {
    const [products, setProducts] = useState([])
    const [productToEdit, setProductToEdit] = useState([])
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState("flower")
    const [inventory, setInvetory] = useState(0)

    useEffect(() => {
        axios.get("http://localhost:4000/")
        .then(response => {
           setProducts(response.data)
        })
        .catch(error => console.log("error, ", error))

        //return something but what TODO
    }, [products])


    const handlePost = (e) => {
        e.preventDefault()
        axios.post("http://localhost:4000/", {name, description, price, category, inventory})
            .then(() => {
                setName("")
                setDescription("")
                setPrice(0)
                setCategory("flower")
                setInvetory(0)
            }) 
            .catch(err => console.log("error: ", err))
    }

    const handleDelete = (id) => {
        console.log(id)
        axios.delete(`http://localhost:4000/product/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log("Delete error: ", err))

    }

    // const handleEdit = (id) => {
    //     console.log(id)
    // }

    // console.log(productToEdit)



    let displayProducts = products.map(product => {
                            return ( 
                            <div className="individual-product-wrapper" key={product._id}>
                                <div className="block-one">
                                    <div className="dashboard-product-name">{product.name}</div>
                                    <img className="dashboard-thumbnail" src={product.imageUrl} />
                                </div>
                                <div className="block-two">
                                    <div><span style={{fontWeight:"bold"}}>PRODUCT ID: </span>{product._id}</div>
                                    <div><span style={{fontWeight:"bold"}}>DESCRIPTION: </span>{product.description}</div>
                                    <div><span style={{fontWeight:"bold"}}>PRICE: </span>${product.price}.00</div>
                                    <div><span style={{fontWeight:"bold"}}>INVENTORY AMOUNT: </span>{product.inventory}</div>
                                </div>
                                <div className="block-three">
                                    <div className="action-btn" onClick={() => handleDelete(product._id)}>DELETE</div>
                                    <div className="action-btn" onClick={() => setProductToEdit(product)}>EDIT</div>
                                </div>
                            </div>
                            )
                            })

    return (
        <div className="admin-dashboard-container">
            <h1 className="dashboard-title">ADMIN DASHBOARD</h1>

            <div className="create-product-container">
                <h2 className="post-form-title">POST NEW PRODUCT</h2>
                <ProductForm 
                    name={name}
                    setName={setName}
                    description={description}
                    setDescription={setDescription}
                    price={price}
                    setPrice={setPrice}
                    category={category}
                    setCategory={setCategory}
                    inventory={inventory}
                    setInvetory={setInvetory}
                    handlePost={handlePost}
                />        
            </div>


            <div className="update-product-container"> 
                <h2>UPDATE PRODUCT</h2>
                {/* <ProductForm /> */}
            </div>

            <div className="all-current-products">
                <h2 className="all-products-header">ALL CURRENT PRODUCTS</h2>
                <div className="dashboard-products-container">
                    {displayProducts}
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard