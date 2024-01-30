import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

const SharedLayout = () => {
  return (<>
    <Outlet></Outlet>
    <Footer></Footer>
  </>
  )
}

export default SharedLayout