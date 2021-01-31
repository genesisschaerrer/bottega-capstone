import React, {useState, useEffect, useRef} from "react"
import axios from "axios"
import DropzoneComponent from "react-dropzone-component"


import "../../../node_modules/react-dropzone-component/styles/filepicker.css"
import "../../../node_modules/dropzone/dist/min/dropzone.min.css"

const EditCarousel = () => {
    const [carouselImages, setCarouselImages] = useState([])
    const [carouselImgUrl, setCarouselImgUrl] = useState("")
    const imageRef = useRef(null)

    const getAllCarouselImages = () => {
        axios.get("http://localhost:4000/about")
        .then(response => setCarouselImages(response.data))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        getAllCarouselImages()
    }, [])

    const componentConfig = () => {
        return {
            inconFiletypes: [".jpg", ".png"],
            showFiletypeIcon: true,
            postUrl: "https://httpbin.org/post"
        }
    }

    const djsConfig = () => {
        return {
            addRemoveLinks: true,
            maxFiles: 1
        }
    }

    const handleDrop = () => {
        return {
            addedfile: file => {
                console.log(file)
                const formData = new FormData()

                formData.append("upload_preset", "moss-timber-carousel")
                formData.append("file", file)

                axios.post("https://api.cloudinary.com/v1_1/genesisschaerrer/image/upload", formData)
                    .then(res => setCarouselImgUrl(res.data.secure_url)) 
                    .catch(err => console.log(err))
            }
        }
    }

    const handlePost = (e) => {
        e.preventDefault
        axios.post("http://localhost:4000/about", {carouselImgUrl})
            .then(() => {
                setCarouselImgUrl("")
                imageRef.current.dropzone.removeAllFiles()
                getAllCarouselImages()
            })
            .catch(error => console.log("error: ", error))
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/about/${id}`)
            .then(() => getAllCarouselImages())
            .catch(error => console.log("Delete error: ", error))
    }

    return (
        <div className="carousel-page-container">
            <div className="carousel-form">
                <h1>ADD NEW CAROUSEL IMAGE</h1>
                <DropzoneComponent
                        className="carousel-image-uploader"
                        ref={imageRef}
                        config={componentConfig()} 
                        djsConfig={djsConfig()}
                        eventHandlers={handleDrop()}

                    />
                <button onClick={handlePost}>SUBMIT</button>
            </div>
            

            <div className="carousel-img-container">
                {carouselImages.map(img =>{
                    return (
                        <div className="carousel-flex" key={img._id}>
                            <img className="carousel-img" src={img.carouselImgUrl} />
                            <div onClick={() => handleDelete(img._id)}>DELETE</div>
                        </div>
                    )
                })}   
            </div>

        </div>
    )
}

export default EditCarousel