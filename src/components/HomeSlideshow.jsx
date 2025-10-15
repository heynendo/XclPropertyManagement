import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/slideshow.css'
import PauseIcon from './Icons/PauseIcon'
import PlayIcon from './Icons/PlayIcon'
import { useNavigate } from 'react-router-dom'

const images = [
    'src/assets/properties/OrlandGrove/OrlandGrove_1.PNG',
    'src/assets/properties/RaviniaCove/RaviniaCove_1.PNG',
    'src/assets/properties/RaviniaPoint/RaviniaPoint_1.PNG',
    'src/assets/properties/RaviniaWoods/RaviniaWoods_1.PNG'
]

export default function HomeSlideShow(){

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused){
                setCurrentIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                )
            }
        }, 5000)

        return () => clearInterval(interval)
    }, [isPaused])

    return(
        <div className="slideshow">

            <AnimatePresence mode="sync" initial={false}> 
                <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                className="slideshow-img"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75 }}
                />
            </AnimatePresence>

            <button onClick={() => navigate('/contact')}>Contact Us</button>
            <div className='selectors'>
                {isPaused ?
                    <PlayIcon color={"white"} onClick={() => setIsPaused(x => !x)} />  
                    :
                    <PauseIcon color={"white"} onClick={() => setIsPaused(x => !x)} />
                }
                {images.map((_, index) => (
                    <div key={index} className={`dot ${currentIndex === index ? 'selected' : ''}`} onClick={() => setCurrentIndex(index)}/>
                ))}
            </div>
        </div>
    )
}