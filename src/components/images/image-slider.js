import React, {useState} from "react"


import carouselImages from "../../mock-data/carousel-mock-imgs"

const ImageSlider = (props) => {
    const [currentImage, setCurrentImage] = useState(0)
    const length = props.slides.length

    const nextSlide = () => {
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1)
    }

    const prevSlide = () => {
        setCurrentImage(currentImage === 0 ? length -1 : currentImage -1)
    }

  
    const carousel = carouselImages.map((image, index) => {
        return(
            <div key={image.id} className={index === currentImage ? 'active slide' : 'slide'}>
                {index === currentImage && (
                    <img className="carousel-img" src={image.imgUrl} />
                )}
            </div>
        )
    })
    console.log(currentImage)
    
    return (
        <div className="about-page-container">
            <div className="carousel-container">
                <div className="left-arrow" aria-label="previous slide" onClick={prevSlide}>{"<"}</div>
                <div className="right-arrow" aria-label="next slide" onClick={nextSlide}>{">"}</div>
                {carousel}
            </div>
        </div>
    )
    
}

export default ImageSlider