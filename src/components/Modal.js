import ReactDOM from 'react-dom'
import React, { PureComponent } from 'react'
import '../css/components/Modal.css'

class Modal extends PureComponent {
  render () {
    return ReactDOM.createPortal(
      (
        <div className={'modal' + (this.props.active ? ' is-active' : '')}>
          <div className='modal-background' onClick={this.props.onClose} />
          <div className='modal-content'>
            <button className='modal-close' onClick={this.props.onClose} />
            {this.props.children}
          </div>
        </div>
      ),
      document.body
    )
  }
}

export default Modal
