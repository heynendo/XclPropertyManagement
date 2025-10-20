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
            <p>We’d love to hear from you. Fill out one of the forms below to send us a message, email us at <a href="mailto:XclManagement7777@gmail.com">XclManagement7777@gmail.com</a>, or call <a href="tel:7084787777">708-478-7777</a> to reach our team.</p>
            <div className="options">
                <ContactCard
                    option = 'support'
                    title = "Service & Maintenance Request"
                    buttonText = "Request Support"
                    pText = {
                        <>
                            Tenants can submit a message below, and our team will respond within 24 hours. For emergencies, please contact us directly at <a href="tel:7084787777">708-478-7777</a>.
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
                            Let us know which property caught your eye — our team will get back to you with the next steps.
                        </>
                    }
                />
            </div>
        </div>
    )
}