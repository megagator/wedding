import React, { PureComponent } from 'react'
import Hero from './Hero'
import Registry from './Registry'

class App extends PureComponent {
  render () {
    return (
      <main>
        <Hero />
        <Registry />
      </main>
    )
  }
}

export default App
