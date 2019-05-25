import React, { PureComponent } from 'react'
import hero from '../images/save-the-date.jpg'
import '../css/components/Hero.css'
import Cooutdown from './Countdown'

class Hero extends PureComponent {
  render () {
    return (
      <>
        <h1>Hannah & Mike</h1>
        <h2>are getting hitched</h2>
        <section className='hero'>
          <div className='timer-container'>
            <img className='imagey' src={hero} alt='Hannah and Mike' />
            <Cooutdown />
          </div>
        </section>
      </>
    )
  }
}

export default Hero
