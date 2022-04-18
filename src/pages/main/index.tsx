import React from 'react'
import Categories from './categories'
import Contact from './contact'
import Front from './front'
import Profile from './profile'
import Footer from '../components/footer'

import './index.css'
import WhiteBox from '../components/white-box'

const Main = () => {

    return (
        <div className='main-p'>
            <Front/>
            <WhiteBox text="I am Barbara, a UK based destination wedding and couple photographer, I'm here for adventurous couples all around Europe."/>
            <Contact/>
            <WhiteBox text="It is important to find a person who will not only become your photographer, but also who you can trust, with whom you will feel comfortable."/>
            <Categories/>
            <WhiteBox text="I'm believe in going outside, picking a direction and traveling wherever my heart, and feet, take me.​"/>
            <Profile/>
            <Footer/>
        </div>
    )
}

export default Main