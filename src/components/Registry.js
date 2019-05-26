import React, { PureComponent } from 'react'
import '../css/components/Registry.css'
import amazon from '../svg/amazon.svg'
import bedbathandbeyond from '../svg/bedbathbeyond.svg'
import crateandbarrel from '../svg/cratebarrel.svg'

class Registry extends PureComponent {
  render () {
    return (
      <section className='registry'>
        <h2 className='dark'>We're registered at...</h2>
        <div className='container'>
          <a className='registery-item amazon' href='https://www.amazon.com/wedding/mike-reinhard-hannah-stoker-orlando-august-2019/registry/260B2VBVY89D7'>
            <img src={amazon} alt='amazon.com' />
          </a>
          <a className='registery-item bbb' href='https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/547286125?eventType=Wedding'>
            <img src={bedbathandbeyond} alt='bedbathbeyond.com' />
          </a>
          <a className='registery-item cb' href='https://www.crateandbarrel.com/gift-registry/hannah-stoker-and-mike-reinhard/r5963049'>
            <img src={crateandbarrel} alt='crateandbarrel.com' />
          </a>
        </div>
      </section>
    )
  }
}

export default Registry
