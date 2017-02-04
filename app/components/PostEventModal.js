import React, { Component } from 'react';
import Container from './GoogleMaps/Container.js';
import { Modal } from 'react-bootstrap';
import axios from 'axios';

class PostEventModal extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
    this.submitEvent=this.submitEvent.bind(this)
  }

  submitEvent(e) {
    e.preventDefault()
    let url=document.getElementById('eventUrl')
    console.log('got this url', url.value)
    axios.post('/saveEvent', {
      eventObj: {
        url: url.value,
        title: 'test',
        organizer: 'test',
        location: 'test',
        description: 'test'
      }
    })
    .then(result => {
      console.log('result is', result)
      url.value = ''
    })
    .catch(error => {
      console.log('error in posting event to database', error)
    })
  }

  render(){
    return (
        <Modal show={this.props.show}
        onHide={this.props.toggleModal}>
          <Modal.Body>
            <form>
              <p>Paste your EventBrite url here:</p>
              <input type='text' id='eventUrl' />
              <button onClick={this.submitEvent}>Submit!</button>
            </form>
          </Modal.Body>
    </Modal>
    )
  }
}

export default PostEventModal;
