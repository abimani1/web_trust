import React from 'react'
import NavBar from '../NavBar'
import Hero from '../Hero'
import Featured from '../Featured'
import Discover from '../Discover'
import Fooder from '../Fooder'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <Featured/>
        <Discover/>
        <Fooder/>
    </div>
  )
}

export default Home