import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter , Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import './styles/index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import PropertyListings from './pages/PropertyListings'
import Property from './pages/Property'
import Contact from './pages/Contact'
import MotionWrapper from "./functions/MotionWrapper"
import ContactForm from './pages/ContactForm'
import PropertyMap from './pages/PropertyMap'

function AppRoutes(){
  const location = useLocation()

  return(
    <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Layout />}>
        <Route index element={<MotionWrapper> <Home /> </MotionWrapper>}/>
        <Route path="/properties" element={<MotionWrapper> <PropertyListings /> </MotionWrapper>}/>
        <Route path='/properties/:id' element={<MotionWrapper> <Property /></MotionWrapper>} />
        <Route path='/properties/map' element={<MotionWrapper> <PropertyMap /></MotionWrapper>} />
        <Route path="/contact" element={<MotionWrapper> <Contact /> </MotionWrapper>}/>
        <Route path='/contact/service-request' element={<MotionWrapper> <ContactForm option="support" /> </MotionWrapper>}/>
        <Route path='/contact/property-inquiry' element={<MotionWrapper> <ContactForm option="inquiry" /> </MotionWrapper>}/>
      </Route>
    </Routes>
    </AnimatePresence>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
