import React, { PureComponent } from 'react'
import Hero from './Hero'
import Registry from './Registry'
import Map from './Map'
import RSVP from './RSVP'
import Carousel from './Carousel'
import Footer from './Footer'

class App extends PureComponent {
  render () {
    return (
      <main>
        <Hero />
        <Map />
        <RSVP />
        <Registry />
        <Carousel />
        <Footer />
      </main>
    )
  }
}

export default App
