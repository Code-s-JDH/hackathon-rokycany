import React from 'react'
import './styles/contact.css'
import { faEnvelope, faPhone, faHouse } from '@fortawesome/free-solid-svg-icons'
import NavBar from '../components/NavBar/NavBar'
import ItemList from '../components/joboffer/itemList/ItemList'

export const JobOffers = () => {
  return (
    <>
      <header>
        <div className="redGradientL" id="gradient1"></div>
        <NavBar></NavBar>
        <div className="mainText">
          <p className="fontHeader1">Nabídka pozic</p>
          <p className="fontParagraph">Jsi student a chceš si vyzkoušet práci v IT oboru? Přijď do RTsoft, plzeňské IT společnosti, která nabízí softwarová řešení na míru pro různé obory a klienty. V RT soft se budeš podílet na zajímavých a smysluplných projektech, budeš se učit od zkušených profesionálů a budeš mít možnost se rozvíjet a zdokonalovat své dovednosti.</p>
        </div>
      </header>
      <main>
       <ItemList></ItemList>
      </main>
    </>)
}

export default JobOffers;