import React, { Component, PureComponent } from 'react'
import hero from '../images/save-the-date.jpg'
import '../css/components/Hero.css'
// import leaf from '../images/wc-leaf-long.png'
import Cooutdown from './Countdown'

class Hero extends PureComponent {
  render () {
    return (
      <>
        <section className='hero-title'>
          <div className='content'>
            <h1>Hannah & Mike</h1>
            <h2 className='dark'>are getting hitched</h2>
            <h3>August 3rd, 2019 <span className='de-emphasize'>at</span> <EventTime /></h3>
          </div>
        </section>
        <section className='hero'>
          <div className='timer-container'>
            <div className='imagey-wrapper'>
              <img className='imagey' src={hero} alt='Hannah and Mike' />
            </div>
            <Cooutdown />
          </div>
        </section>
      </>
    )
  }
}

class EventTime extends Component {
  constructor () {
    super()

    this.state = {
      twentyFourHourTime: true
    }
  }

  swap = () => {
    this.setState({
      twentyFourHourTime: !this.state.twentyFourHourTime
    })
  }

  render () {
    if (this.state.twentyFourHourTime) {
      return <span className='help' onClick={this.swap} onMouseEnter={this.swap} onMouseLeave={this.swap}>Eighteen Hundred Thirty</span>
    } else {
      return <span className='help' onClick={this.swap} onMouseEnter={this.swap} onMouseLeave={this.swap}>Six Thirty Post Meridiem</span>
    }
  }
}

export default Hero
