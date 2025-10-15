import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import properties from '../data/properties.json'
import { scrollToTop } from "../functions/scrollToTop"

export default function ContactForm({option}){


    //FIXME: add a state variable to optionally set the property on load

    useEffect(() => {
        scrollToTop()
    })

    const navigate = useNavigate()

    const defaultInputs = {
        name: '',
        property: '',
        subject: '',
        business: '',
        message: ''
    }
    const [userInput, setUserInput] = useState(defaultInputs)

    function updateInputs(e) {
        const { name, value } = e.target
        setUserInput(prev => ({
            ...prev,
            [name]: value
        }))
    }
    function submitForm(e){
        e.preventDefault()
    }

    const title = option === 'support' ? "Service & Maintenance Request" : "Request Information"

    return(
        <div className="contact-form">
            <div className="head">
                <button onClick={() => navigate('/contact')}>Back</button>
                <h2>{title}</h2>
            </div>
            <form onSubmit={submitForm}>
                <div className="name">
                    <label htmlFor="name">Name</label>
                    <input 
                        id="name"
                        name="name"
                        type="text"
                        value={userInput.name}
                        onChange={updateInputs}
                        required
                    />
                </div>
                <div className="property">
                    <label htmlFor="property">Property</label>
                    <select id="property">
                        {Object.values(properties).map(property => (
                            <option key={property.name}>{property.name}</option>
                        ))}
                    </select>
                </div>
                <div className="subject">
                    <label htmlFor="subject">Subject*</label>
                    <input 
                        id="subject"
                        name="subject"
                        type="text"
                        value={userInput.subject}
                        onChange={updateInputs}
                    />
                </div>
                <div className="business">
                    <label htmlFor="business">Business*</label>
                    <input 
                        id="business"
                        name="business"
                        type="text"
                        value={userInput.business}
                        onChange={updateInputs}
                    />
                </div>
                <div className="message">
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