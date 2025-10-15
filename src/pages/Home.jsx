import '../styles/home.css'
import HomeCard from '../components/HomeCard'
import hereToHelpIcon from '../assets/hereToHelp-icon.PNG'
import propertyInterestIcon from '../assets/propertyInterest-icon.PNG'
import { useNavigate } from 'react-router-dom'
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
                    body2={<p>As the owners, managers, and maintenance for each of our properties, you can trust the buildings and surroundings at every property will be well taken care of so you can focus on your business needs.</p>}
                />
                <HomeCard title="Service & Maintenance"
                    body1={<p>If you are a current tenant and are looking for support, please click below and fill out a form. We will get back to you within 24-48 hours or less. For emergency requests, please contact us directly at 708-478-7777.</p>}
                    body2={<button onClick={() => navigate('/contact/service-request')}>Request Support</button>}
                />
                <HomeCard title="Interested in a Property?"
                    body1={<img src={propertyInterestIcon}/>}
                    body2={<p>We manage a large variety of offices in the Orland Park area. Check out our Properties page to see if we have what you're looking for.</p>}
                />
            </div>
        </div>
    )
}

export default Home