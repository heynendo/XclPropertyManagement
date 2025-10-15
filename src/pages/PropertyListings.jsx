import '../styles/properties.css'
import properties from '../data/properties.json'
import PropertyCard from '../components/PropertyCard'
import { scrollToTop } from '../functions/scrollToTop'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PropertyListings(){

    useEffect(() => {
        scrollToTop()
    })

    const navigate = useNavigate()
    
    return(
        <div className="property-listings">
            <h2>Our Properties</h2>
            <p>
                XCL Management has designed, built and proudly maintains many different office complexes in Orland Park. We are dedicated to making sure our tenants can focus on their business, and leave all of the maintenance and service aspects of their office to us. XCL is vested in the Orland Park community and serves small and medium sized businesses.
            </p>
            <p>
                We invite you to explore each of our properties to learn more. Our team at XCL is always standing by to provide help or answer any of your questions.
            </p>
            <button onClick={() => navigate('map')}>See Property Map</button>
            {Object.values(properties).map(property => (
                <PropertyCard property={property} key={property.name}/>
            ))}
        </div>
    )
}