import React from 'react'
import './styles/contact.css'
import { faEnvelope, faPhone, faHouse } from '@fortawesome/free-solid-svg-icons'
import NavBar from '../components/NavBar/NavBar'
import ContactOption from '../components/contact/ContactOption'

export const JobOffers = () => {
  return (<>
    <header>
      <div className="redGradientL" id="gradient1"></div>
      <NavBar></NavBar>
      <div className="mainText">
        <p className="fontHeader1">Nabídka poic</p>
        <p className="fontParagraph">Jsme vám k dispozici pro jakékoli otázky nebo připomínky, které byste měli. Máte dotaz? Rádi Vám ochotně a s radostí pomůžeme.</p>
      </div>
    </header>
    <main>
      
    </main>
  </>)
}

export default JobOffers;