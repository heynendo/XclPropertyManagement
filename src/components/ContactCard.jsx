import { nav } from "motion/react-client"
import { useNavigate } from "react-router-dom"
import getPageWidth from '../functions/getPageWidth'
import arrow from '../assets/arrow_right.png'

export default function ContactCard({option, title, buttonText, pText}){

    const navigate = useNavigate()

    const width = getPageWidth()

    function sendToForm(){
        if (option === "support"){
            navigate('service-request')
        } else {
            navigate('property-inquiry')
        }
    }

    return(
        <div className="contact-card">
            <h3>{title}</h3>
            <div>
                <button onClick={() => sendToForm()}>
                    {width > 900 ? 
                        buttonText 
                        : 
                        <> GO <img src={arrow} alt="arrow" /> </>
                    }
                </button>
                <p>{pText}</p>
            </div>
        </div>
    )
}