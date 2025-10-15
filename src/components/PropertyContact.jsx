import { Link } from "react-router-dom"
import ContactIcon from "./Icons/ContactIcon"

export default function PropertyContact({property}){

    return(
        <Link to='/contact' className="property-contact">
            <span>Interested in this property? Contact us today!</span>
            <ContactIcon color={"#D9801B"} />
        </Link>
    )
}