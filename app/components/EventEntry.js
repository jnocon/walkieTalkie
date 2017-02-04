import React, { Component } from 'react';
import Container from './GoogleMaps/Container.js';
import { Modal, Button, Row, Grid, Col } from 'react-bootstrap';
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
      <div className="event">
        <Grid>
          <Row>
            <Col xs={5} md={5}>
              <h2>{event.title}</h2>
              <p>{event.organizer} at {event.location}</p>
              <Button onClick={this.toggleModal}>show event</Button>
              <a href={event.url} target="_blank" style={{padding: 20+'px'}}>See on eventbrite</a>
            </Col>
            <Col xs={7} md={7}>
              <h2>Description</h2>
              <p>{event.description}</p>
            </Col>
          </Row>
        </Grid>
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
