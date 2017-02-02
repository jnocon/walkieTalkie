import React, { Component } from 'react';
import ChatLine from './ChatLineItem';
import UserItem from './UserItem';
import ChatJoinModal from './ChatJoinModal.js';
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
                       <Button bsStyle="primary">View Events</Button>&nbsp;
                       <Button bsStyle="default">Post Event</Button>
                     </p>
                   </Thumbnail>
                 </Col>
                 <Col xs={6} md={4}>
                   <Thumbnail alt="242x200" src="/images/job.jpg">
                     <h3>Jobs</h3>
                     <p>Description</p>
                       <div class="gdWidget">
                       <a href="https://www.glassdoor.com/api/api.htm?version=1&action=search-salaries&t.s=w-m&t.a=c&format=300x250" target="_blank">
                       Search Salaries</a> or see
                       <a href="https://www.glassdoor.com/Reviews/index.htm?&t.s=w-m&t.a=c" target="_blank">company reviews</a>,
                       <a href="https://www.glassdoor.com/Salaries/index.htm?&t.s=w-m&t.a=c" target="_blank">salary</a> info,
                       and <a href="https://www.glassdoor.com/Interview/index.htm?&t.s=w-m&t.a=c" target="_blank">interview questions</a>
                       for thousands of <a href="https://www.glassdoor.com/index.htm?&t.s=w-m&t.a=c" target="_blank">jobs</a>.
                       </div>
                     <p>
                       <Button bsStyle="primary">View Jobs</Button>&nbsp;
                       <Button bsStyle="default">Post Job</Button>
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
      </div>
    )
  }
}



export default Dashboard;
