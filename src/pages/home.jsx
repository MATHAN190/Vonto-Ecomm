import React from 'react'
import NavBar from '../components/NavBar'
import ProductCard from '../components/ProductCard'
import BannerSlider from '../components/Dynamic_img'
import Home_Category from '../components/Home_Category'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <BannerSlider/>
      <ProductCard/>
      <Home_Category/>
     
    </div>
   
  )
}

export default Home