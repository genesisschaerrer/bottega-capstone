import React from "react"
import DropzoneComponent from "react-dropzone-component"


import "../../../node_modules/react-dropzone-component/styles/filepicker.css"
import "../../../node_modules/dropzone/dist/min/dropzone.min.css"

const ProductForm = (props) => {

    const componentConfig = () => {
        return {
            inconFiletypes: [".jpg", ".png"],
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

                    <DropzoneComponent
                        className="image-uploader"
                        ref={props.imageRef}
                        config={componentConfig()} 
                        djsConfig={djsConfig()}
                        eventHandlers={props.productImageHandleDrop()}
                    />

                    <button type="submit" onClick={props.handlePost}>SUBMIT</button> 
                 </form>
    )
}

export default ProductForm