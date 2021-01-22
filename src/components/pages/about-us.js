import React from "react"

import ImageSlider from "../images/image-slider"
import carouselImages from "../../mock-data/carousel-mock-imgs"
import florist from "../../../static/images/about-page/florist.png"

function AboutUs() {
    
    return (
        <div className="about-page-wrapper">
            <ImageSlider slides={carouselImages}/>
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