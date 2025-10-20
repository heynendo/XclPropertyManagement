import { useState, useEffect } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import BoxArrowIcon from "./Icons/BoxArrowIcon"
import getPageWidth from "../functions/getPageWidth"
import { MoonLoader } from "react-spinners"

export default function PropertySlideshow({property}){

    const [imageIndex, setImageIndex] = useState(0)
    const [loading, setLoading] = useState(true)

    const width = getPageWidth()

    const prevIndex = (imageIndex - 1 + property.images.length) % property.images.length
    const nextIndex = (imageIndex + 1) % property.images.length

    useEffect(() => {
        if (!property?.images?.length) return
        const startTime = performance.now()

        let loadedCount = 0
        const total = property.images.length

        property.images.forEach(src => {
            const img = new Image()
            img.src = src
            img.onload = img.onerror = () => {
                loadedCount++
                if (loadedCount === total) {
                    const duration = ((performance.now() - startTime) / 1000).toFixed(2)
                    console.log(`All ${total} images loaded in ${duration}s`)
                    setLoading(false)
                }
            }
        })
    }, [property.images])


    function updateImage(direction){
        setImageIndex((prevIndex) => {
            const newIndex = prevIndex + direction
            if (newIndex < 0) return property.images.length - 1
            if (newIndex >= property.images.length) return 0
            return newIndex
        })
    }
    if (loading) {
        return(
        <div className="property-slideshow loading">
            <p>Loading {property.name} images..</p>
            <MoonLoader 
                color={"white"}
                size={75}
                speedMultiplier={0.6}
            />
        </div>
    )}
    return(
        <div className="property-slideshow">
                {width > 600 &&
                <AnimatePresence mode="wait">    
                    <motion.img 
                        className="slideshow-img"
                        src={property.images[prevIndex]}
                        onClick={() => updateImage(-1)}
                        key={prevIndex}
                        initial={{x: "-100%"}}
                        animate={{x: 0}}
                        exit={{x: "-100%"}}
                        transition={{ duration: 0.25 }}
                    />
                </AnimatePresence>}
                <div  onClick={() => updateImage(-1)}>
                    <BoxArrowIcon />
                </div>
                <AnimatePresence mode="wait">
                    <motion.img 
                        className="slideshow-img"
                        src={property.images[imageIndex]}
                        key={imageIndex}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{ duration: 0.25 }}
                    />
                </AnimatePresence>
                <div onClick={() => updateImage(1)} >
                    <BoxArrowIcon rotate="180deg"/>
                </div>
                {width > 600 &&
                <AnimatePresence mode="wait">
                    <motion.img 
                        className="slideshow-img"
                        src={property.images[nextIndex]}
                        onClick={() => updateImage(1)}
                        key={nextIndex}
                        initial={{x: "100%"}}
                        animate={{x: 0}}
                        exit={{x: "100%"}}
                        transition={{ duration: 0.25 }}
                    />
                </AnimatePresence>}
        </div>
    )
}