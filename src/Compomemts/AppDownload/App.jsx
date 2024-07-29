import React from 'react'
import './Appd.css'
import { assets } from '../../assets/assets'

const App = () => {
  return (
    <div className='AppDownload' id='Appdownload'>
        <p>For Better Experience Download <br /> Tomaato App</p>

        <div className="Appdownloadplatform">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default App
