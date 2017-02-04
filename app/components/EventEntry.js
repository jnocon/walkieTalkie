import React, { Component } from 'react';
import Container from './GoogleMaps/Container.js';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

class EventEntry extends Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: false
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    })
  }

        
  render(){
    let event = this.props.event
    return (     
      <div>
        <h1>{event.title}</h1>
        <p>By {event.organizer} at {event.location}</p>
        <p>{event.description}</p>
        <Button onClick={this.toggleModal}>show event</Button>
        <a href={event.url} target="_blank">See on eventbrite</a>
        {this.state.showModal ? 
          <Modal onHide={this.toggleModal} show={this.state.showModal} bsSize="large">
            <Modal.Body>
              <iframe src={event.url} width="98%" height="600px"></iframe>
            </Modal.Body>
          </Modal> : <div></div>
        }
      </div>
    )
  }
}

export default EventEntry;
