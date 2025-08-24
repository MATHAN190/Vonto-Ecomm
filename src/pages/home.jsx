import React from 'react'
import NavBar from '../components/NavBar'
import ProductCard from '../components/ProductCard'
import BannerSlider from '../components/Dynamic_img'
import Category from '../components/Category'

function Home() {
  return (
    <div>
      <BannerSlider/>
      <ProductCard/>
      <Category/>
    </div>
   
  )
}

export default Home