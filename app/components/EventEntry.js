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
    return (     
      <div>
        <Button onClick={this.toggleModal}>show event</Button>
        {this.state.showModal ? 
          <Modal onHide={this.toggleModal} show={this.state.showModal} bsSize="large">
            <Modal.Body>
              <iframe src={this.props.eventUrl} width="98%" height="600px"></iframe>
            </Modal.Body>
          </Modal> : <div></div>
        }
      </div>
    )
  }
}

export default EventEntry;
