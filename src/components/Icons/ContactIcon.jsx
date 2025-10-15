

export default function ContactIcon({color = "#FFFFFF"}){
    return(
        <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
            <path fill={color} d="M4 24v-5H0V0h23v19h-9.3zm-2-7h4v3.7l7.3-3.7H21V2H2z"/>
            <path fill={color} d="M8 8H5v3h3zM13 8h-3v3h3zM18 8h-3v3h3z"/>
        </svg>
    )
}