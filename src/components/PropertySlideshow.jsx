import { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import BoxArrowIcon from "./Icons/BoxArrowIcon"


export default function PropertySlideshow({property}){

    const [imageIndex, setImageIndex] = useState(0)

    const prevIndex = (imageIndex - 1 + property.images.length) % property.images.length
    const nextIndex = (imageIndex + 1) % property.images.length

    const propertyImages = property.images.map((image, index) => (
        <img src={`/src/assets/properties/${image}`} onClick={() => {
            if (index === prevIndex ) updateImage(-1)
            else if (index === nextIndex) updateImage(1)
        }}/>
    ))

    function updateImage(direction){
        setImageIndex((prevIndex) => {
            const newIndex = prevIndex + direction
            if (newIndex < 0) return propertyImages.length - 1
            if (newIndex >= propertyImages.length) return 0
            return newIndex
        })
    }

    return(
        <div className="property-slideshow">
                {propertyImages[prevIndex]}
                <div  onClick={() => updateImage(-1)}>
                    <BoxArrowIcon />
                </div>
                {propertyImages[imageIndex]}
                <div onClick={() => updateImage(1)} >
                    <BoxArrowIcon rotate="180deg"/>
                </div>
                {propertyImages[nextIndex]}
        </div>
    )
}