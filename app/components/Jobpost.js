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

class Jobpost extends Component {
  constructor(props){
    super(props);

  }


  render() {
    return (
      <div>
        <Jumbotron>
          <div className="container">
            <h1>Know of a Job?!</h1>
            <Grid>
              <Row>
<p>this is all a dream</p>
              </Row>
            </Grid>
          </div>
        </Jumbotron>
      </div>
    )
  }
}




export default Jobpost;
