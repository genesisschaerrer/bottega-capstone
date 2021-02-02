import React, {useState, useEffect, useRef, useContext} from "react"
import {Link} from "react-router-dom"
import axios from "axios"


import ProductForm from "../forms/product-form"
import {AdminContext} from "../context/admin-context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const AdminDashboard = () => {
    const [loggedIn, setLoggedIn] = useContext(AdminContext)
    const imageRef = useRef(null)

    const [editMode, setEditMode] = useState(false)
    const [apiUrl, setApiUrl] = useState("https://gms-ecommerce-node-api.herokuapp.com/")
    const [apiAction, setApiAction] = useState('post')

    const [products, setProducts] = useState([])
    const [productToEdit, setProductToEdit] = useState({})

    const [name, setName] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState("flower")
    const [inventory, setInvetory] = useState(0)

    const getAllProducts = () => {
        axios.get("https://gms-ecommerce-node-api.herokuapp.com/")
        .then(response => {
           setProducts(response.data)
        })
        .catch(error => console.log("error, ", error))
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    const productImageHandleDrop = () => {
        return {
            addedfile: file => {
                console.log(file)
                const formData = new FormData()

                formData.append("upload_preset", "moss-timber-products")
                formData.append("file", file)

                axios.post("https://api.cloudinary.com/v1_1/genesisschaerrer/image/upload", formData)
                    .then(res=> setImageUrl(res.data.secure_url)) 
                    .catch(err => console.log(err))
            }
        }
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        axios({
            method: apiAction,
            url: apiUrl,
            data: {name, description, price, category, inventory, imageUrl},
            headers: {
                "auth-token": localStorage.getItem("token")
            }
        })
            .then(() => {
                setName("")
                setImageUrl("")
                setDescription("")
                setPrice(0)
                setCategory("flower")
                setInvetory(0)
                imageRef.current.dropzone.removeAllFiles()
                setProductToEdit({})
                getAllProducts()
            }) 
            .catch(err => console.log("error: ", err))
    }

    const handleDelete = (id) => {
        console.log(id)
        axios.delete(`https://gms-ecommerce-node-api.herokuapp.com/product/${id}`, {
            headers: {
                "auth-token": localStorage.getItem("token")
            }
        })
            .then(() => getAllProducts())
            .catch(err => console.log("Delete error: ", err))

    }



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
                                    <a className="action-btn" onClick={() => handleDelete(product._id)}><FontAwesomeIcon icon="trash" className="trash" /></a> 
                                    <a className="action-btn" onClick={() => setProductToEdit(product)}><FontAwesomeIcon icon="edit" /></a>
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
                    handleSubmit={handleSubmit}
                    imageUrl={imageUrl}
                    setImageUrl={setImageUrl}

                    productImageHandleDrop={productImageHandleDrop}
                    imageRef={imageRef}

                    productToEdit={productToEdit}
                    setProductToEdit={setProductToEdit}

                    editMode={editMode}
                    setEditMode={setEditMode}
                    apiAction={apiAction}
                    setApiAction={setApiAction}
                    apiUrl={apiUrl}
                    setApiUrl={setApiUrl}
                />        
            </div>


 
            <Link className="edit-carousel-link" to="/edit-carousel">EDIT CAROUSEL</Link>

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