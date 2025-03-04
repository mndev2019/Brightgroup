import React from 'react'
import Banner from './Banner'
import About from './About'
import Categories from './Categories'
import ReviewInsta from '../../Component/ReviewInsta'
import Actionbox from './Actionbox'

const Home = () => {
    return (
        <>
          <Banner/>
          <About/>
          <Categories/>
          <Actionbox/>
          <ReviewInsta/>
        </>
    )
}

export default Home
