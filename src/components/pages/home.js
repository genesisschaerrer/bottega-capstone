import React, { useState } from "react"
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import socialMedia from "../../../static/images/home-page/social-media.png"


const Home = () => {

    return (
        <div className="homepage-container">

            <div className="hero-picture">MOSS & TIMBER</div>

            <div className="hero-container">

                <div className="hero-message">
                    <div className="hero-container-quote">uniquely curated for you</div> 
                    <div className="homepage-container-message">
                        <div>Moss & Timber is a boutique flower shop in St. George, Ut. At Moss & Timber we are dedicated to bringing you stunning floral designs that will elevate the ambiance of any event. 
                            we create all aspects of floral decor from everyday gifts, sympathy tributes, weddings and corporate events. 
                        </div>
                    </div>
                </div>

                <Link  className="about-us-home-btn" to="/about">ABOUT US</Link>

                <div className="shop-category-container">
                    <Link to="/shop-plants">
                        <div className="shop-plants">PLANTS</div>
                    </Link>

                    <Link to="shop-flowers">
                        <div className="shop-flowers">FLOWERS</div>
                    </Link>
                </div>

            </div>

            <Link className="shop-all-btn" to="/shopall">SHOP ALL</Link>

            <div className="address">
                2141 HARMONY CIRCLE, ST. GEORGE UT 84790 | 435.555.5555
            </div>

            <div className="map-social-media-container">

                <div className="map-info-flex"> 
                    <div className="visit-us">VISIT US</div>
                    <div className="map">
                        <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.3122197692396!2d-113.57213248440985!3d37.07387005994554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ca5ab30a63b251%3A0x44950d2affeb5ee7!2s2141%20Harmony%20Cir%2C%20St.%20George%2C%20UT%2084790!5e0!3m2!1sen!2sus!4v1611353917805!5m2!1sen!2sus"></iframe>
                    </div>
                </div>

                <div className="social-media-flex">
                    <div className="follow-us">FOLLOW US</div>
                    <div className="ig-post">
                        <a  className="ig-link" href="https://www.instagram.com/bottega.capstone/" target="_blank" ><img className="social-media-post" style={{"height": "350px", "width": "350px"}} src={socialMedia}/></a> 
                        {/* style={{"height": "400px", "width": "400px"}}                    */}
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Home