import React, { PureComponent } from 'react'
import Hero from './Hero'
import Registry from './Registry'
import Map from './Map'
import RSVP from './RSVP'
import Footer from './Footer'

class App extends PureComponent {
  render () {
    return (
      <main>
        <Hero />
        <Registry />
        <Map />
        <RSVP />
        <Footer />
      </main>
    )
  }
}

export default App
