import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import landingImage from '../assets/manwithlaptop.png'
import './styles/style.css'

const LandingPage = () => {
  return (
    <header className='headerFull'>
      <NavBar></NavBar>
      <div className="mainText">
        <p className="fontHeader1">Najděte svojí vysněnou práci v IT.</p>
        <p className="fontParagraph">V RTsoft nabízíme široké možnosti v oblasti IT, kde můžete rozvíjet své schopnosti a dosáhnout svých kariérních cílů. Spojte se s námi a začněte svou cestu k úspěchu v digitálním světě!</p>
        <Link class="button1">learn more</Link>
      </div>
      <div className="backgroundBuilding"><img src={landingImage} alt=""></img></div>
    </header>
  )
}

export default LandingPage;