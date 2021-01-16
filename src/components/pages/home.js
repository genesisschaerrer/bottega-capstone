import React, { Component } from "react"
import {Link} from 'react-router-dom'

class Home extends Component {
    constructor(){
        super()
    }

    render(){
        return (
            <div className="homepage-container">

                <div className="hero-picture">MOSS & TIMBER</div>

                <div className="hero-container">

                    <div className="hero-message">
                       <div className="hero-container-quote">The Earl Laughts in flowers</div> 
                       <div className="homepage-container-message">
                            <div>Moss and Timber is a flower shop located in STG</div>
                            <Link to="/about">ABOUT US</Link>
                       </div>
                    </div>

                    <div className="shop-category-container">
                        <div>SUCCULENTS</div>
                        <div>FLOWERS</div>
                    </div>

                </div>

                <Link className="shop-all-btn" to="/shopall">SHOP ALL</Link>

            </div>
        )
    }
}

export default Home