export default function ContactEmail({
    name,
    email,
    phone,
    property,
    type, // inquiry or service request
    subject = '',
    business = '',
    message
}){

    const domain = "http://localhost:5173"

    return(
        <div className="contact-email">
            <div className='head'>
                <div>
                    <img src={`${domain}/logo.png`} alt="Logo" />
                    <h2>New Message from {name}</h2>
                </div>
                <div className='card'>
                    <h2>Contact</h2>
                    <span>Email: <p>{email}</p></span>
                    <span>Phone: <p>{phone}</p></span>
                </div>
            </div>
            {property !== 'general' && <span>Property: <p>{property}</p></span>}
            {business !== '' && <span>Business: <p>{business}</p></span>}
            <div className='card'>
                <span>
                    {type}
                    {subject !== '' && <p>{subject}</p>}
                </span>
                <p>{message}</p>
            </div>
        </div>
    )
}