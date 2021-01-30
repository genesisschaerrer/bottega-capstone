import React, {useState, useEffect} from "react"
import axios from "axios"

import CustumerReview from "../reviews/client-review"
import ImageSlider from "../images/image-slider"
import florist from "../../../static/images/about-page/florist.png"


function AboutUs() {
    const [ carouselImages, setCarouselImages] = useState([])

    useEffect(() => {
        axios("http://localhost:4000/about")
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
                    client="- Marie Claire"
                />
                <CustumerReview                    
                    review="We hired Moss and Timber as the florist for our wedding and they went above and beyond! They met every single one of our expectations"
                    client="- Kate"
                />
                <CustumerReview
                    review="The owner is so lovely and nice, she pays the highest attention to detail!"
                    client="- Marie Claire"
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
                        <div className="mission-statement-title">
                            TITLE
                        </div>
                        <div className="mission-statement-message">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs