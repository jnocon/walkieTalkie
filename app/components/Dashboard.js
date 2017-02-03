import React, { Component } from 'react';
import ChatLine from './ChatLineItem';
import UserItem from './UserItem';
import ChatJoinModal from './ChatJoinModal.js';
import PostEventModal from './PostEventModal.js'
import EventList from './EventList.js'
import io from 'socket.io-client';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Thumbnail } from 'react-bootstrap';



class Dashboard extends Component {
  constructor(props){
    super(props);

    this.state={
      showPostEventModal: false,
      showEventlist: false
    }
    this.togglePostEventModal = this.togglePostEventModal.bind(this)
    this.toggleEventList = this.toggleEventList.bind(this)
  }

  togglePostEventModal() {
    this.setState({
      showPostEventModal: !this.state.showPostEventModal
    })
  }

  toggleEventList() {
    this.setState({
      showEventlist: !this.state.showEventlist
    })
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <div className="container">
            <h1>Dashboard</h1>
            <p>Fast track your goals using our resource dashboard</p>
            <Grid>
              <Col xs={6} md={4}>
                   <Thumbnail alt="242x200" src="/images/events.jpeg">
                     <h3>Events</h3>
                     <p>Description</p>
                     <p>
                       <Button onClick={this.toggleEventList} bsStyle="primary">View Events</Button>&nbsp;
                       <Button onClick={this.togglePostEventModal} bsStyle="default">Post Event</Button>
                     </p>
                   </Thumbnail>
                 </Col>
                 <Col xs={6} md={4}>
                   <Thumbnail alt="242x200" src="/images/job.jpg">
                     <h3>Jobs</h3>
                     <p>Description</p>

                     <p>
                       <Button bsStyle="primary"
                         onClick={() => { this.props.showJobs() }}>View Jobs</Button>&nbsp;
                       <Button bsStyle="default"
                         onClick={() => { this.props.postJob() }}>Post Job</Button>
                     </p>
                   </Thumbnail>
                 </Col>
                 <Col xs={6} md={4}>
                   <Thumbnail  alt="242x200" src="/images/codeshare.png">
                     <h3>Lectures</h3>
                     <p>Description</p>

                     <p>
                       <Button bsStyle="primary">View Lectures</Button>&nbsp;
                       <Button bsStyle="default">Host Lecture</Button>
                     </p>
                   </Thumbnail>
                 </Col>
            </Grid>
          </div>
        </Jumbotron>
        {this.state.showPostEventModal ? 
        <PostEventModal show={this.state.showPostEventModal} toggleModal={this.togglePostEventModal}/>
        : this.state.showEventlist ?
        <EventList />
        : <div></div>}
      </div>

    )
  }
}



export default Dashboard;
