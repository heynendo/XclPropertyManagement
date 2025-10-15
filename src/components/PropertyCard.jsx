import { useNavigate } from "react-router-dom"
import getPageWidth from '../functions/getPageWidth'


export default function PropertyCard({property}){

    const navigate = useNavigate()
    const propertyImgSrc = `/src/assets/properties/${property.images[0]}` 

    const width = getPageWidth()

    return(
        <div className="property-card">
            {width > 900 ? 
            <>
            <img className="property-img" src={propertyImgSrc} />
            <div className="container">
                <div className="head">
                    <h3>{property.name}</h3>
                    <button className="contact-button" onClick={() => navigate('/contact/property-inquiry')}>
                        Contact for Availability
                    </button>
                </div>
                <div className="break" />
                <p>{property.shortDetails}</p>
                <span className="property-details" onClick={() => navigate(`${property.name.replace(' ', '')}`)}>
                    see property details
                </span>
            </div>
            </>
            :
            <>
            <div className="head">
                <img className="property-img" src={propertyImgSrc} />
                <div className="container">
                    <h3>{property.name}</h3>
                    <div className="break" />
                    <button className="contact-button" onClick={() => navigate('/contact/property-inquiry')}>
                        Contact for Availability
                    </button>
                </div>
            </div>
            <p>{property.shortDetails}</p>
            <span className="property-details" onClick={() => navigate(`${property.name.replace(' ', '')}`)}>
                see property details
            </span>
            </>
            }
        </div>
    )
}