/* global fetch */
import React, { Component, createRef } from 'react'
import '../css/components/RSVP.css'
import Modal from './Modal'

class RSVP extends Component {
  constructor () {
    super()

    this.to = 'mike@mikereinhard.com'
    const subject = `RSVP for Hannah and Mike's Wedding`
    const body = 'Name: \nAttending?: \nNumber attending: \nSong suggestion:'
    this.mailto = `mailto:${this.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    this.guestSelect = createRef()
    this.baseFormState = {
      name: '',
      attending: null,
      guests: '0',
      song: '',
      error: null,
      nameError: false,
      attendError: false,
      errorCount: 0,
      loading: false
    }

    this.state = {
      ...this.baseFormState,
      modalActive: false
    }
  }

  updateName = (e) => {
    if (e.target.value === '') {
      this.setState({
        name: '',
        error: 'Please add a name',
        nameError: true,
        errorCount: this.state.errorCount + 1
      })
      return
    }

    this.setState({
      name: e.target.value,
      error: '',
      nameError: false
    })
  }

  updateAttending = (e) => {
    if (e.target.value === 'yes') {
      this.setState({
        attending: true,
        guests: (this.state.guests === '0') ? '1' : this.state.guests,
        error: '',
        attendError: false,
        errorCount: this.state.errorCount + 1
      })
    } else {
      this.setState({
        attending: false,
        guests: '0',
        error: '',
        attendError: false
      })
    }
  }

  // listenCheck = (event) => {
  //   const radio = event.target.firstChild
  //   this.currentRadio = {
  //     target: radio
  //   }
  //   document.addEventListener('keyup', this.selectRadioOption, false)
  // }

  // unlistenCheck = (event) => {
  //   document.removeEventListener('keyup', this.selectRadioOption, false)
  // }

  // selectRadioOption = (event) => {
  //   if (event.keyCode === 13 || event.keyCode === 32) {
  //     event.preventDefault()
  //     this.updateAttending(this.currentRadio)
  //   }
  // }

  updateGuests = (e) => {
    this.setState({
      guests: e.target.value
    })
  }

  pluralGuests () {
    return (this.state.guests === '1') ? '' : 's'
  }

  updateSong = (e) => {
    this.setState({
      song: e.target.value
    })
  }

  validateAndSend = async (e) => {
    e.preventDefault()

    if (this.state.loading) return

    if (this.state.name.trim() === '') {
      this.setState({
        error: 'Please add a name',
        nameError: true,
        errorCount: this.state.errorCount + 1
      })
      return
    }

    if (this.state.attending === null) {
      this.setState({
        error: 'Please indicate your attendance',
        attendError: true,
        errorCount: this.state.errorCount + 1
      })
      return
    }

    this.setState({
      loading: true
    })

    const url = window.location.href + 'rsvp/add'
    const data = {
      name: this.state.name,
      attending: this.state.attending,
      guests: this.state.guests,
      song: this.state.song
    }
    const fetchData = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    }

    try {
      const result = await fetch(url, fetchData)
      if (result.status < 300) {
        const json = await result.json()
        if (json.data) {
          this.success()
        } else if (json.error) {
          throw new Error(`[${url}] Status ${result.status}: ${json.error}`)
        } else {
          throw new Error(`[${url}] Status ${result.status}: unknown error: ${json}`)
        }
      } else {
        throw new Error(`[${url}] Status ${result.status}: ${result.statusText}`)
      }
    } catch (error) {
      console.log(error)
      this.setState({
        error: <pre>{error.toString()}</pre>,
        errorCount: this.state.errorCount + 10
      })
    } finally {
      this.setState({
        loading: false
      })
    }
  }

  success () {
    this.setState({
      modalActive: true
    })
  }

  successContent () {
    if (this.state.attending) {
      return (
        <>
          <p>We will set aside <strong>{this.state.guests}</strong> seat{this.pluralGuests()} for <strong>{this.state.name}</strong> at both our ceremony and reception.</p>
          <p>We can't wait to see you on August 3rd at 6:30pm!</p>
        </>
      )
    }

    return (
      <>
        <p>We are sad to hear you can't attend!</p>
        <p>Please stay in touch and look for photos from our wedding on Facebook soon after August 3rd!</p>
      </>
    )
  }

  render () {
    return (
      <>
        <section className='rsvp'>
          <h2 className='light'>rsvp</h2>
          <div className='container'>
            <p>Kindly RSVP by July 13, 2019</p>
            <form onSubmit={this.validateAndSend}>
              <div className='form-item'>
                <input type='text' name='name' className={this.state.nameError ? 'error' : ''} placeholder='Name(s)' value={this.state.name} onChange={this.updateName} />
              </div>
              <div className={`form-item ${this.state.attendError ? 'error' : ''}`} >
                <label className='radio-label'>
                  <input
                    type='radio'
                    name='attending'
                    value='yes'
                    checked={this.state.attending !== null && this.state.attending === true}
                    onChange={this.updateAttending} />
                  Defintely!
                </label>
                <label className='radio-label'>
                  <input
                    type='radio'
                    name='attending'
                    value='no'
                    checked={this.state.attending !== null && this.state.attending === false}
                    onChange={this.updateAttending} />
                  Sadly, no.
                </label>
              </div>
              <div className='form-item'>
                <label className={this.state.attending ? 'select-label' : 'select-label disabled-select'}>
                  <select ref={this.guestSelect} name='guests' className={`sel-${this.state.guests}`} value={this.state.guests} onChange={this.updateGuests} disabled={!this.state.attending}>
                    <option value='0' disabled={this.state.attending}>0</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                  </select>
                  guest{this.pluralGuests()} will attend
                </label>
              </div>
              <div className='form-item'>
                <label>
                  I promise to dance if you play:
                  <input type='text' name='song' value={this.state.song} placeholder={`"Can't Help Falling In Love" by Elvis`} onChange={this.updateSong} />
                </label>
              </div>
              <span className='error-message'>{this.state.error}</span>
              <br />
              <button type='submit' className={`${(this.state.loading) ? 'is-loading ' : ''}button white`}>Send</button>
              { this.state.errorCount > 4 && (
                <div className='submit-help'>
                  <p>Having trouble submiting your RSVP?</p>
                  <a href={this.mailto}>Email us instead at {this.to}</a>
                </div>
              )}
            </form>
          </div>
        </section>
        <Modal active={this.state.modalActive} onClose={this.onClose}>
          <h2>Success!</h2>
          <p>Thank you for your RSVP!</p>
          {this.successContent()}
        </Modal>
      </>
    )
  }

  onClose = () => {
    this.setState({
      modalActive: false,
      ...this.baseFormState
    })
  }
}

export default RSVP
