import React from "react"

const ProductForm = (props) => {
    return (
        <form>
                    <input 
                        type="text"
                        placeholder="NAME"
                    />

                    <input 
                        type="text"
                        placeholder="DESCRIPTION"
                    /> 

                    <input 
                        type="number"
                        placeholder="PRICE"
                    /> 

                    <label>CHOOSE CATEGORY</label>
                    <select name="category">
                        <optgroup label="CHOOSE OPTION">
                            <option value="flower">flower</option>
                            <option value="plant">plant</option>
                        </optgroup>
                    </select>


                    <input 
                        type="number"
                        placeholder="INVENTORY"
                    />   
                <button>SUBMIT</button>  
        </form>
    )
}

export default ProductForm