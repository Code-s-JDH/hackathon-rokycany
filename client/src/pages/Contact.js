import React from 'react'
import './styles/contact.css'
import { faEnvelope, faPhone, faHouse } from '@fortawesome/free-solid-svg-icons'
import NavBar from '../components/NavBar/NavBar'
import ContactOption from '../components/contact/ContactOption'

export const Contact = () => {
  return (<>
    <header>
      <div className="redGradientL" id="gradient1"></div>
      <NavBar></NavBar>
      <div className="mainText">
        <p className="fontHeader1">Kontaktujte nás</p>
        <p className="fontParagraph">Jsme vám k dispozici pro jakékoli otázky nebo připomínky, které byste měli. Máte dotaz? Rádi Vám ochotně a s radostí pomůžeme.</p>
      </div>
    </header>
    <main>
      <section className="contactOptions">
        <ContactOption
          contactOptionIcon={faEnvelope}
          contactOptionName={"Napište nám"}
          contactOptionDesc={"info@rtsoft.cz"}
        />
        <ContactOption
          contactOptionIcon={faPhone}
          contactOptionName={"Zavolejte nám"}
          contactOptionDesc={"+420 607 903 403"}
        />
        <ContactOption
          contactOptionIcon={faHouse}
          contactOptionName={"Kde nás najdete?"}
          contactOptionDesc={"Lobezská 39 Plzeň"}
        />
      </section>
    </main>
  </>)
}

export default Contact