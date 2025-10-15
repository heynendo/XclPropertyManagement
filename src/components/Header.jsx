import { Link, useLocation } from "react-router-dom"
import logo from '../assets/logo.png'
import hamburgerMenu from '../assets/hamburger-menu.png'
import '../styles/header.css'
import { Fragment, useEffect, useState } from "react"
import getPageWidth from "../functions/getPageWidth"
import getPageHeight from '../functions/getPageHeight'
import ContactIcon from "./Icons/ContactIcon"
import PropertiesIcon from "./Icons/PropertiesIcon"
import HomeIcon from "./Icons/HomeIcon"
import DropDownIcon from "./Icons/DropdownIcon"
import properties from '../data/properties.json'
import { motion, AnimatePresence } from "framer-motion"


function Header(){

    const [propertiesDropdown, setPropertiesDropdown] = useState(false)
    const [contactDropdown, setContactDropdown] = useState(false)
    const [mobileDropdown, setMobileDropdown] = useState(false)
    const [propertiesDropdown_Mobile, setPropertiesDropdown_Mobile] = useState(false)
    const [contactDropdown_Mobile, setContactDropdown_Mobile] = useState(false)

    const width = getPageWidth()
    const height = getPageHeight()

    const location = useLocation() // gives current URL path
    const isHome = location.pathname === "/"
    const isProperties = location.pathname.startsWith("/properties")
    const isContact = location.pathname.startsWith("/contact")

    //changes to/from mobile size, close all dropdowns
    useEffect(() => {
        setPropertiesDropdown(false)
        setContactDropdown(false)
        setMobileDropdown(false)
    },[width > 900])


    return(
        <>
        {(propertiesDropdown || contactDropdown || mobileDropdown) &&
            <div className="background-blur" onClick={() => {
                setMobileDropdown(false)
                setContactDropdown(false)
                setPropertiesDropdown(false)
            }}/>
        }
        <header>
            {width > 900 ?
            <>
            <Link to='/'>
                <img src={logo} />
            </Link>
            <div className="main-links">
                <span><Link to='/' className={isHome ? "active" : ""}>Home</Link></span>
                <span>
                    <Link to='/properties' className={isProperties ? "active" : ""}>Properties</Link>
                    <div onClick={() => { 
                        setPropertiesDropdown(x => !x)
                        setContactDropdown(false)
                    }}>
                        <DropDownIcon rotate={propertiesDropdown}/>
                    </div>    
                </span>
                <span>
                    <Link to='/contact' className={isContact ? "active" : ""}>Contact</Link>
                    <div onClick={() => { 
                        setContactDropdown(x => !x)
                        setPropertiesDropdown(false)
                    }}>
                        <DropDownIcon rotate={contactDropdown}/>
                    </div>
                </span>
            </div>
            <AnimatePresence>
            {propertiesDropdown &&
            <motion.div className="dropdown properties-dropdown"
                initial={{ x: "100%"}}
                animate={{ x: 0}}
                exit={{ x: "100%"}}
                transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
                style={{ height: `${height - 76}px` }}
            >
                {Object.values(properties).map(property => (
                    <Fragment key={property.name}>
                    <Link to={`/properties/${property.name.replace(' ', '')}`}>{property.name}</Link>
                    <div className="break"/>
                    </Fragment>
                ))}
                <Link to="properties/map">Property Map</Link>
                <div className="break"/>
            </motion.div>
            }
            </AnimatePresence>
            <AnimatePresence>
            {contactDropdown &&
            <motion.div className="dropdown contact-dropdown"
                initial={{ x: "100%"}}
                animate={{ x: 0}}
                exit={{ x: "100%"}}
                transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
                style={{ height: `${height - 76}px` }}
            >
                <Link to='/contact/service-request'>Service Request</Link>
                <div className="break"/>
                <Link to='/contact/property-inquiry'>Property Inquiry</Link>
                <div className="break"/>
            </motion.div>}
            </AnimatePresence>
            </>
            :
            <>
            <Link to='/'>
                <img src={logo} className="logo-sm"/>
            </Link>
            <img src={hamburgerMenu} className="hamburger-menu" onClick={() => setMobileDropdown(x => !x)}/>
            <AnimatePresence>
            {mobileDropdown &&
            <motion.div className="dropdown-mobile"
                initial={{ x: "-100%"}}
                animate={{ x: 0}}
                exit={{ x: "-100%"}}
                transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
                style={{ height: `${height}px` }}
            >
                <Link to='/'>
                    <img src={logo} className="logo-sm"/>
                </Link>
                <div className="main-links">
                    <div className="dropdown-link">
                        <Link to='/'>
                            <HomeIcon />
                            Home
                        </Link>
                    </div>
                    <div className="break" />
                    <div className="dropdown-link">
                        <Link to='/properties'>
                            <PropertiesIcon />
                            Properties
                        </Link>
                        <div onClick={() => setPropertiesDropdown_Mobile(x => !x)}>
                            <DropDownIcon rotate={propertiesDropdown_Mobile}/>
                        </div>
                    </div>
                    <div className="break" />
                    <AnimatePresence>
                        {propertiesDropdown_Mobile &&
                        <div className="more">
                            {Object.values(properties).map(property => (
                            <Fragment key={property.name}>
                                <Link className="sub-link" to={`/properties/${property.name.replace(' ', '')}`}> 
                                    {property.name}
                                </Link>
                                <div className="break" />
                            </Fragment>
                            ))}
                            <Link className="sub-link" to='/properties/map'> 
                                Property Map
                            </Link>
                            <div className="break" />
                        </div>
                        }
                    </AnimatePresence>
                    <div className="dropdown-link">
                        <Link to='/contact'>
                            <ContactIcon color={"#2a5389"}/>
                            Contact
                        </Link>
                        <div onClick={() => setContactDropdown_Mobile(x => !x)}>
                            <DropDownIcon rotate={contactDropdown_Mobile}/>
                        </div>
                    </div>
                    <div className="break" />
                    {contactDropdown_Mobile &&
                    <div className="more">
                        <Link className="sub-link" to='/contact/service-request'>
                            Service Request
                        </Link>
                        <div className="break" />
                        <Link className="sub-link" to='/contact/property-inquiry'>
                            Property Inquiry
                        </Link>
                        <div className="break" />
                    </div>
                    }
                </div>
            </motion.div>
            }
            </AnimatePresence>
            </>
            }
        </header>
        </>
    )
}


export default Header