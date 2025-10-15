import { useNavigate } from 'react-router-dom'
import arrow from '../assets/arrow_right.png'
import propertyMap from '../assets/property-map.png'

export default function PropertyMap(){

    const navigate = useNavigate()

    return(
        <div className="property-map">
            <div className="head">
                <button onClick={() => navigate('/properties')}> <img src={arrow}/> All Properties</button>
                <h2>Property Map</h2>
            </div>
            <img src={propertyMap}/>
        </div>
    )
}