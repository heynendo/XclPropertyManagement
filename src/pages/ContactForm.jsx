import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import properties from '../data/properties.json'
import { scrollToTop } from "../functions/scrollToTop"

export default function ContactForm({option}){

    const [error, setError] = useState({
        name: false,
        email: false,
        phone: false,
        property: false,
        message: false
    })
    //FIXME: add a state variable to optionally set the property on load

    useEffect(() => {
        scrollToTop()
    })

    const navigate = useNavigate()

    const defaultInputs = {
        name: '',
        email: '',
        phone: '',
        property: '',
        subject: '',
        business: '',
        message: ''
    }
    const [userInput, setUserInput] = useState(defaultInputs)

    function updateInputs(e) {
        const { name, value } = e.target
        let formattedValue = value

        if (name === 'phone') {
            // Remove all non-digit characters
            const digits = value.replace(/\D/g, '')

            // Format as XXX-XXX-XXXX (only if digits are present)
            if (digits.length <= 3) {
                formattedValue = digits
            } else if (digits.length <= 6) {
                formattedValue = `${digits.slice(0,3)}-${digits.slice(3)}`
            } else {
                formattedValue = `${digits.slice(0,3)}-${digits.slice(3,6)}-${digits.slice(6,10)}`
            }
        }

        setUserInput(prev => ({
            ...prev,
            [name]: formattedValue
        }))
    }
    function submitForm(e){
        e.preventDefault()
        alert("email setup in process..")
    }

    const title = option === 'support' ? "Service & Maintenance Request" : "Request Information"

    return(
        <div className="contact-form">
            <div className="head">
                <button onClick={() => navigate('/contact')}>Back</button>
                <h2>{title}</h2>
            </div>
            <form onSubmit={submitForm}>
                <div className={`name ${error.name ? 'error' : ''}`}>
                    <label htmlFor="name">Name</label>
                    <input 
                        id="name"
                        name="name"
                        type="text"
                        value={userInput.name}
                        onChange={updateInputs}
                        autoComplete="name"
                        required
                    />
                </div>
                <div className={`email ${error.email ? 'error' : ''}`}>
                    <label htmlFor="email">Email</label>
                    <input 
                        id="email"
                    name="email"
                    type="email"
                    value={userInput.email}
                    onChange={updateInputs}
                    autoComplete="email"
                    required
                    />
                </div>
                <div className={`phone ${error.phone ? 'error' : ''}`}>
                    <label htmlFor="phone">Phone</label>
                    <input 
                        id="phone"
                        name="phone"
                        type="tel"
                        value={userInput.phone}
                        onChange={updateInputs}
                        pattern="[0-9]{3}-?[0-9]{3}-?[0-9]{4}"
                        required
                    />
                </div>
                <div className={`property ${error.property ? 'error' : ''}`}>
                    <label htmlFor="property">Property</label>
                    <select id="property">
                        <option value="">
                            Select a Property
                        </option>
                        {Object.values(properties).map(property => (
                            <option key={property.name} value={property.name}>{property.name}</option>
                        ))}
                        <option value="general">General Inquiry / Not Listed</option>
                    </select>
                </div>
                <div className="business">
                    <label htmlFor="business">Business</label>
                    <input 
                        id="business"
                        name="business"
                        type="text"
                        value={userInput.business}
                        onChange={updateInputs}
                        autoComplete="off"
                    />
                </div>
                <div className="subject">
                    <label htmlFor="subject">Subject</label>
                    <input 
                        id="subject"
                        name="subject"
                        type="text"
                        value={userInput.subject}
                        onChange={updateInputs}
                        autoComplete="off"
                    />
                </div>
                <div className={`message ${error.message ? 'error' : ''}`}>
                    <label htmlFor="message">Message</label>
                    <textarea 
                        id="message"
                        name="message"
                        value={userInput.message}
                        onChange={updateInputs}
                        required
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}