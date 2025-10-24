import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import properties from '../data/properties.json'
import { scrollToTop } from "../functions/scrollToTop"

export default function ContactForm({option}){

    const API_URL = import.meta.env.DEV
        ? "http://localhost:8787/" // localhost dev
        : "https://emailserver-resend.heynen-donovan.workers.dev/"

    const defaultErrors = {
        name: false,
        email: false,
        phone: false,
        property: false,
        message: false
    }

    const defaultInputs = {
        site: 'xcl-property',
        type: option === 'support' ? "Service & Maintenance Request" : "Property Inquiry",
        name: '',
        email: '',
        phone: '',
        property: '',
        subject: '',
        business: '',
        message: ''
    }
    const [error, setError] = useState(defaultErrors)
    const [userInput, setUserInput] = useState(defaultInputs)
    //FIXME: add a state variable to optionally set the property on load

    useEffect(() => {
        scrollToTop()
    })

    const navigate = useNavigate()

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

    async function submitForm(e) {
        e.preventDefault()

        const newError = {
            name: userInput.name.trim().length < 2,
            email: !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(userInput.email),
            phone: (() => {
            const phoneDigits = userInput.phone.replace(/\D/g, "")
            const formattedCorrectly = /^\d{3}-\d{3}-\d{4}$/.test(userInput.phone)
            const isValidRange = !/^0+$/.test(phoneDigits) && phoneDigits.length === 10
            return !(formattedCorrectly && isValidRange)
            })(),
            property: !userInput.property,
            message: userInput.message.trim().length < 10,
        }

        setError(newError)

        const hasError = Object.values(newError).some(Boolean)
        if (hasError) {
            alert('Please correct the highlighted fields.')
            return
        }else {
            setError(defaultErrors)
            console.log(userInput)
            try {
                const res = await fetch(API_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userInput),
                })
                if (res.ok) {
                    console.log("Form submitted:", userInput)
                    alert("Message sent.")
                    setUserInput(defaultInputs)
                } else {
                    console.error("Failed to send message:", await res.text())
                    alert("Failed to send message")
                }
            } catch (err) {
                console.error(err)
                alert("There was a problem sending your message. Please try again later.")
            }
        }
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
                    <select 
                        id="property"
                        name="property"
                        value={userInput.property}
                        onChange={updateInputs}
                        required
                    >
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