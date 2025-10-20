import { useNavigate, useParams } from 'react-router-dom'
import '../styles/property.css'
import properties from '../data/properties.json'
import PropertySlideshow from '../components/PropertySlideshow'
import PropertyContact from '../components/PropertyContact'
import { scrollToTop } from '../functions/scrollToTop'
import { useEffect } from 'react'

export default function Property(){

    useEffect(() => {
        scrollToTop()
    })

    const navigate = useNavigate()
    const { id } = useParams()
    const property = properties[id]

    return(
        <div className="property">
            <div className='head'>
                    <button onClick={() => navigate('/properties')}>Back</button>
                    <div className='main'>
                        <h2>{property.name}</h2>
                        <span>{property.address}</span>
                    </div>
            </div>
            <PropertySlideshow property={property}/>
            <div className='card'>
                <span>Property Info</span>
                <div className='break' />
                {property.longDetails.map((details, index) => (
                    <p className='details' key={index}>{details}</p>
                ))}
            </div>
            <PropertyContact property={property} />
        </div>
    )
}