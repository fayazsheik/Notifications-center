
import NotificationCenter from '../NotificationCenter';
import Slidebar from '../Slidebar';
import './home.css'
const Home=()=>{
  return(
    <div className="home-container">
      <NotificationCenter/>
      <div className='slidebar'>
        <Slidebar/>
      </div>
      
    </div>
  )
}

export default Home;