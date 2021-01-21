import React, {useState} from "react"


import carouselImages from "../../mock-data/carousel-mock-imgs"

const ImageSlider = () => {
    const [currentImage, setCurrent] = useState(0)
    const length = slides.length
  
    const carousel = carouselImages.map(image => {
        return(
            <div key={image.id}>
                <img className="carousel-item" src={image.imgUrl} />
            </div>
        )
    })
    
    return (
        <div>
            <div className="carousel-container">
                {carousel}
            </div>
        </div>
    )
    
}

export default ImageSlider