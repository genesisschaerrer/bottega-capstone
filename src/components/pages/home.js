import React, { useState } from "react"
import {Link} from 'react-router-dom'

import LoginModal from "../modals/login-modal"

// images
import heroImage from "../../../static/images/home-page/hero-section.png"
import flowers from "../../../static/images/home-page/flowers.png"
import plants from "../../../static/images/home-page/plants.png"


const Home = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleModalClick = () => {
        setModalIsOpen(true)
    }

    return (
        <div className="homepage-container">
            <LoginModal  isOpen={modalIsOpen} />
            <div>
                <a onClick={handleModalClick}>Login</a>
            </div>

            <div className="hero-picture"
                style={{
                    background: "url("+ heroImage +") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >MOSS & TIMBER</div>

            <div className="hero-container">

                <div className="hero-message">
                    <div className="hero-container-quote">The Earl Laughts in flowers</div> 
                    <div className="homepage-container-message">
                        <div>Moss and Timber is a boutique flower shop in st. george, ut.  dedicated to providing beautiful and stunning floral designs to enhance the ambiance of your event. 
                            we create all aspects of floral decor from everyday gifts, sympathy tributes, weddings and corporate events. 
                        </div>
                        <Link  className="about-us-home-btn" to="/about">ABOUT US</Link>
                    </div>
                </div>

                <div className="shop-category-container">
                    <div className="shop-plants"
                        style={{
                        background: "url("+ plants +") no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                        }}
                    >SUCCULENTS</div>
                    <div className="shop-flowers"
                        style={{
                        background: "url("+ flowers +") no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                        }}
                    >FLOWERS</div>
                </div>

            </div>

            <Link className="shop-all-btn" to="/shopall">SHOP ALL</Link>

        </div>
        )

}

export default Home