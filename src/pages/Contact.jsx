import { useState, useEffect } from "react"
import { scrollToTop } from '../functions/scrollToTop'
import ContactCard from "../components/ContactCard"
import '../styles/contact.css'

export default function Contact(){

    useEffect(() => {
        scrollToTop()
    })

    return(
        <div className="contact">
            <h2>Contact Us</h2>
            <p>If you are looking to get in contact, you have options. Fill out either of the forms below to send us a message, email us at <a href="mailto:XclManagement7777@gmail.com">XclManagement7777@gmail.com</a>, or call us at <a href="tel:7084787777">708-478-7777</a>.</p>
            <div className="options">
                <ContactCard
                    option = 'support'
                    title = "Service & Maintenance Request"
                    buttonText = "Request Support"
                    pText = {
                        <>
                            Need to get in touch as a tenant? Send us a message here, we will get back to you within 24 hours. 
                            For emergencies, contact us directly at <a href="tel:7084787777">708-478-7777</a>.
                        </>
                    }
                />
                <div className="break" />
                <ContactCard
                    option = 'inquiry'
                    title = "Property Inquiry"
                    buttonText = "Request Info"
                    pText = {
                        <>
                            Let us know which property caught your eye — our team will get back to you with next steps.
                        </>
                    }
                />
            </div>
        </div>
    )
}