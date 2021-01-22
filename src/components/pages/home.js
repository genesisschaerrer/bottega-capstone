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
                    backgroundAttachment: "fixed",
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

            <div className="address">
                2141 HARMONY CIRCLE, ST. GEORGE UT 84790 | 435.555.5555
            </div>

            <div className="map-social-media-container">
                <div className="map">
                <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.3122197692396!2d-113.57213248440985!3d37.07387005994554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ca5ab30a63b251%3A0x44950d2affeb5ee7!2s2141%20Harmony%20Cir%2C%20St.%20George%2C%20UT%2084790!5e0!3m2!1sen!2sus!4v1611353917805!5m2!1sen!2sus"></iframe>
                </div>
                <div className="social-media-info">
                    <div>
                        Want to stay update on our latest designs? 
                    </div>
                    <div>
                        Make sure you are following us
                    </div>
                    <div>
                        MAKE ME AN IG LINK
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Home