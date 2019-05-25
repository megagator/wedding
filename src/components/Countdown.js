import React, { Component, PureComponent, createRef } from 'react'
import '../css/components/Countdown.css'

import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format' // eslint-disable-line

class Countdown extends Component {
  constructor () {
    super()

    this.io = null
    this.cdContainer = createRef()
    this.happyDay = '2019-08-03 18:30:00'
    this.state = {
      paused: false,
      month: null,
      day: null,
      hour: null,
      minute: null,
      second: null
    }
  }

  componentDidMount () {
    this.calculate()
    this.loop()
    this.observe()
  }

  loop () {
    if (this.state.paused) return
    console.log('looping')
    setTimeout(() => {
      this.calculate()
      this.loop()
    }, 250)
  }

  observe () {
    console.log(this.cdContainer.current)
    const options = {
      rootMargin: '0px',
      threshold: [0, 0.1]
    }

    this.io = new window.IntersectionObserver(this.checkIfCountDownIsVisible, options)
    this.io.observe(this.cdContainer.current)
  }

  checkIfCountDownIsVisible = (entries, observer) => {
    const ratio = entries[0].intersectionRatio
    if (ratio && ratio > 0) {
      if (this.state.paused) {
        console.log('un-paused')
        this.setState({
          paused: false
        }, () => {
          this.calculate()
          this.loop()
        })
      }
    } else {
      console.log('paused')
      this.setState({
        paused: true
      })
    }
  }

  calculate () {
    const now = moment()
    const date = moment(this.happyDay)
    const timeDiff = moment.duration(date.diff(now))
    const timeDiffFormated = timeDiff.format('M D H m s SSS').split(' ')

    this.setState({
      month: timeDiffFormated[0],
      day: timeDiffFormated[1],
      hour: timeDiffFormated[2],
      minute: timeDiffFormated[3],
      second: timeDiffFormated[4]
    })
  }

  render () {
    return (
      <div ref={this.cdContainer} className='countdown'>
        <CountdownItem number={this.state.month} measrument='month' />
        <CountdownItem number={this.state.day} measrument='day' />
        <CountdownItem number={this.state.hour} measrument='hour' />
        <CountdownItem number={this.state.minute} measrument='minute' />
        <CountdownItem number={this.state.second} measrument='second' />
      </div>
    )
  }
}

export default Countdown

class CountdownItem extends PureComponent {
  pluralize (number, measrument) {
    if (number === '1') {
      return measrument
    } else {
      return measrument + 's'
    }
  }

  render () {
    if (this.props.number === '0' && this.props.measrument !== 'second') {
      return null
    } else {
      return (
        <div className='countdown-item'>
          <span>{this.props.number}</span>
          <i>{this.pluralize(this.props.number, this.props.measrument)}</i>
        </div>
      )
    }
  }
}
