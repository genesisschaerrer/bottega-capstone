import React, {useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ImageSlider = (props) => {
    const [currentImage, setCurrentImage] = useState(0)
    const length = props.carouselImages.length

    const nextSlide = () => {
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1)
    }

    const prevSlide = () => {
        setCurrentImage(currentImage === 0 ? length -1 : currentImage -1)
    }

  
    const carousel = props.carouselImages.map((image, index) => {
        return(
            <div key={image._id} className={index === currentImage ? 'active slide' : 'slide'}>
                {index === currentImage && (
                    <img className="carousel-img" src={image.carouselImgUrl} />
                )}
            </div>
        )
    }) 

    
    return (
        <div className="about-page-container">
            <div className="carousel-container">
                <div className="left-arrow" aria-label="previous slide" onClick={prevSlide}><FontAwesomeIcon style={{"fontSize": "1.5em"}} icon="arrow-alt-circle-left" /></div>
                <div className="right-arrow" aria-label="next slide" onClick={nextSlide}><FontAwesomeIcon style={{"fontSize": "1.5em"}} icon="arrow-alt-circle-right" /></div>
                {carousel}
            </div>
        </div>
    )
    
}

export default ImageSlider