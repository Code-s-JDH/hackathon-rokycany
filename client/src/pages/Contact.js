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
          contactOptionDesc={"jelen.lukas@email.cz"}
        />
        <ContactOption
          contactOptionIcon={faPhone}
          contactOptionName={"Zavolejte nám"}
          contactOptionDesc={"+420 607 903 403"}
        />
        <ContactOption
          contactOptionIcon={faHouse}
          contactOptionName={"Kde nás najdete?"}
          contactOptionDesc={"lorem lorem"}
        />
      </section>
      <section className="questions">
        <div>
          <p className="fontSectionName leftText">Dotazy&#128129;</p>
          <p className="fontHeader leftText">Nebojte se zeptat.</p>
          <p className="fontParagraph leftText">Pokud máte dotaz ohledně objednávky nebo fakturace, prosím uveďte číslo objednávky nebo faktury, pokud je k dispozici. Budeme se snažit odpovědět co nejdříve a pomoci Vám s jakýmkoli dotazem nebo problémem, se kterým se na nás obrátíte.</p>
        </div>
        <div>
          <div className="questionForm">
            <form action="">
              <div>
                <input type="text" placeholder="Vaše jméno" className="fontHeader5"></input>
                <input type="text" placeholder="Zadejte e-mail" className="fontHeader5"></input>
              </div>
              <div>
                <textarea name="" id="" cols="30" rows="11" placeholder="Zeptejte se na cokoli" className="fontHeader5"></textarea>
              </div>
              <button type="submit">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
          <div className="blueGradientR"></div>
        </div>
      </section>
    </main>
  </>)
}

export default Contact