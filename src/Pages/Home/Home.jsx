import React, { useState } from 'react'
import './Home.css';
import Header from '../../Compomemts/Header/Header';
import Exploremenu from '../../Compomemts/ExploreMenu/Exploremenu';
import Fooddisplay from '../../Compomemts/Fooddisplay/Fooddisplay';
import App from '../../Compomemts/AppDownload/App';

function Home() {
  const[category, setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <Exploremenu category = {category} setCategory = { setCategory}/>

      <Fooddisplay category= {category}/>
      <App/>
    </div>
  )
}

export default Home
