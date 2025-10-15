import '../styles/home.css'
import HomeCard from '../components/HomeCard'
import hereToHelpIcon from '../assets/hereToHelp-icon.png'
import propertyInterestIcon from '../assets/propertyInterest-icon.png'
import { useNavigate, Link } from 'react-router-dom'
import HomeSlideShow from '../components/HomeSlideshow'
import { scrollToTop } from '../functions/scrollToTop'
import { useEffect } from 'react'

function Home(){

    useEffect(() => {
        scrollToTop()
    })

    const navigate = useNavigate()

    return(
        <div className="home">
            <div className='heading'>
                <div className='text'>
                    <h1>Family Owned Property Management in Orland Park, IL</h1>
                    <span>leasing high quality office suites since 1993</span>
                </div>
                <HomeSlideShow />
            </div>
            <div className='cards'>
                <HomeCard title="Here to Help You"
                    body1={<img src={hereToHelpIcon}/>}
                    body2={<p>As the owners, managers, and maintenance team for all our properties, we ensure each building and its surroundings are well maintained, allowing you to focus on your business.</p>}
                />
                <HomeCard title="Service & Maintenance"
                    body1={<p>Current tenants can request support by clicking below to complete a service form. Our team typically responds within 24-48 hours. If there is an emergency, please call us directly at <a href="tel:7084787777">708-478-7777</a></p>}
                    body2={<button onClick={() => navigate('/contact/service-request')}>Request Support</button>}
                />
                <HomeCard title="Interested in a Property?"
                    body1={<img src={propertyInterestIcon}/>}
                    body2={<p>We manage a large variety of offices in the Orland Park area. Check out the <Link to='/properties'>Properties</Link> page to see if we have what you're looking for.</p>}
                />
            </div>
        </div>
    )
}

export default Home