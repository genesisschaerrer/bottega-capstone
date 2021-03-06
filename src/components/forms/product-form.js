import React, {useEffect} from "react"
import DropzoneComponent from "react-dropzone-component"


import "../../../node_modules/react-dropzone-component/styles/filepicker.css"
import "../../../node_modules/dropzone/dist/min/dropzone.min.css"

const ProductForm = (props) => {

    const componentConfig = () => {
        return {
            iconFiletypes: [".jpg", ".png"],
            showFiletypeIcon: true,
            postUrl: "https://httpbin.org/post"
        }
    }

    const djsConfig = () => {
        return {
            addRemoveLinks: true,
            maxFiles: 1
        }
    }

    useEffect(() => {
        if(Object.keys(props.productToEdit).length){
        const {
            name,
            description,
            price,
            category, 
            inventory,
            imageUrl
        } = props.productToEdit

        props.setName(name)
        props.setDescription(description)
        props.setPrice(price)
        props.setCategory(category)
        props.setInvetory(inventory)
        props.setEditMode(true)
        props.setApiUrl(`https://gms-ecommerce-node-api.herokuapp.com/product/${props.productToEdit._id}`)
        props.setApiAction("patch"),
        props.setImageUrl(imageUrl)
        }
    },[props.productToEdit])


    return (
        <form className="new-product-form">
                    <input 
                        className="form-input add-margin"
                        type="text"
                        placeholder="PRODUCT NAME"
                        value={props.name}
                        onChange={e => props.setName(e.target.value)}
                    />

                    <textarea 
                        className="description-input add-less-margin"
                        type="text"
                        placeholder="PRODUCT DESCRIPTION"
                        value={props.description}
                        onChange={e=> props.setDescription(e.target.value)}
                    /> 

                    <label>PRODUCT PRICE</label>
                    <input 
                        className="form-input"
                        type="number"
                        placeholder="PRODUCT PRICE"
                        value={props.price}
                        onChange={e => props.setPrice(e.target.value)}
                    /> 

                    <label>CHOOSE CATEGORY</label>
                    <select 
                    className="form-input"
                    name="category" 
                    onChange={e => {
                        const selectedCategory = e.target.value
                        props.setCategory(selectedCategory)
                    }}>
                        <optgroup label="CHOOSE OPTION" className="form-input">
                            <option value="flower">flower</option>
                            <option value="plant">plant</option>
                        </optgroup>
                    </select>
                    
                    <label>INVENTORY AMOUNT</label>
                    <input 
                        className="form-input"
                        type="number"
                        placeholder="INVENTORY"
                        value={props.inventory}
                        onChange={e => props.setInvetory(e.target.value)}
                    /> 

                    {props.imageUrl && props.editMode ? 
                        <div style={{"display": "flex", 
                                    "flexDirection": "column", 
                                    "width": "50%", 
                                    "alignItems": "center", 
                                    "justifyContent": "space-between"}}>
                            <img src={props.imageUrl} style={{"width": "200px", "marginTop": "3em", "marginBottom": "1.7em"}} />
                            <div onClick={() => props.setImageUrl(null)} style={{"color": "#fff", 
                                                                                "border": "1px solid #6a040f",
                                                                                "background": "#6a040f",
                                                                                "padding": ".7em"}}>DELETE IMAGE</div>
                        </div>:
                        <DropzoneComponent
                        className="image-uploader"
                        ref={props.imageRef}
                        config={componentConfig()} 
                        djsConfig={djsConfig()}
                        eventHandlers={props.productImageHandleDrop()}
                        />
                    }

                    <button type="submit" onClick={props.handleSubmit}>SUBMIT</button> 
                 </form>
    )
}

export default ProductForm