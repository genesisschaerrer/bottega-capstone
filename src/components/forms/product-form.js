import React from "react"

const ProductForm = (props) => {
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
                    <button type="submit" onClick={props.handlePost}>SUBMIT</button>  
                 </form>
    )
}

export default ProductForm