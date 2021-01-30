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
                                    <div>{product._id}</div>
                                    <div>{product.description}</div>
                                    <div>{product.price}</div>
                                    <div>{product.inventory}</div>
                                </div>
                                <div className="block-three">
                                    <div onClick={() => handleDelete(product._id)}>DELETE</div>
                                    {/* <div onClick={() => setProductToEdit(product)}>EDIT</div> */}
                                </div>
                            </div>
                            )
                            })

    return (
        <div className="admin-dashboard-container">
            <h1>ADMIN DASHBOARD</h1>

            <div className="create-product-container">
                <h2>POST NEW PRODUCT</h2>
                <form>
                    <input 
                        type="text"
                        placeholder="NAME"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <input 
                        type="text"
                        placeholder="DESCRIPTION"
                        value={description}
                        onChange={e=> setDescription(e.target.value)}
                    /> 

                    <input 
                        type="number"
                        placeholder="PRICE"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    /> 

                    <label>CHOOSE CATEGORY</label>
                    <select name="category" onChange={e => {
                        const selectedCategory = e.target.value
                        setCategory(selectedCategory)
                    }}>
                        <optgroup label="CHOOSE OPTION">
                            <option value="flower">flower</option>
                            <option value="plant">plant</option>
                        </optgroup>
                    </select>


                    <input 
                        type="number"
                        placeholder="INVENTORY"
                        value={inventory}
                        onChange={e => setInvetory(e.target.value)}
                    />   
                    <button type="submit" onClick={handlePost}>SUBMIT</button>  
                 </form>       
            </div>


            <div className="update-product-container"> 
                <h2>UPDATE PRODUCT</h2>
                <ProductForm />
            </div>

            <div className="all-current-products">
                <h2>ALL CURRENT PRODUCTS</h2>
                <div className="dashboard-products-container">
                    {displayProducts}
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard