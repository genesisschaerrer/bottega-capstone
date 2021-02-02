import React, {useState, useEffect} from "react"
import axios from "axios"

import CustumerReview from "../reviews/client-review"
import ImageSlider from "../images/image-slider"
import florist from "../../../static/images/about-page/florist.png"


function AboutUs() {
    const [ carouselImages, setCarouselImages] = useState([])

    useEffect(() => {
        axios("https://gms-ecommerce-node-api.herokuapp.com/about")
        .then(response => {
            setCarouselImages(response.data)
        })
        .catch(error => console.log("error, ", error)) 
    },[])
 
    
    return (
        <div className="about-page-wrapper">
            <ImageSlider carouselImages={carouselImages}/>
            <div className="box-container">
                <CustumerReview                   
                    review="Moss and Timber always has the highest quality flowers, they are so flexible and deliver everything on time."
                    client="- Olivia"
                />
                <CustumerReview                    
                    review="We hired Moss and Timber as the florist for our wedding and they went above and beyond! They met every single one of our expectations"
                    client="- Brandon"
                />
                <CustumerReview
                    review="The owner is so lovely and nice, she pays the highest attention to detail! She truly listens to what you want, and does a great job working with yout budget."
                    client="- Marie"
                />
            </div>
            <div className="mission-statement-container">
                <div className="about-us-background-div-img"
                    style={{
                        background: "url("+ florist +") no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                >
                    <div className="mission-statement-box-container">
                        <div className="mission-statement-title">OUR PROMISE</div>
                        <div className="mission-statement-message">Moss & Timber is a boutique flower shop in St. George, Ut. At Moss & Timber we are dedicated to bringing you stunning floral designs that will elevate the ambiance of any setting.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs