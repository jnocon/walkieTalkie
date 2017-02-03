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
import { ControlLabel, HelpBlock } from 'react-bootstrap';


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
            <p>Help others find a job by posting to our comunity</p>
            <Grid>
              <Row>
                <Form horizontal>
                  <FormGroup controlId="formHorizontalJobTitle">
                    <Col componentClass={ControlLabel} sm={2}>
                      Job Title
                    </Col>
                    <Col sm={10}>
                      <FormControl type="jobTitle" placeholder="JobTitle" />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalJobLink">
                    <Col componentClass={ControlLabel} sm={2}>
                      Job Link
                    </Col>
                    <Col sm={10}>
                      <FormControl type="jobLink" placeholder="jobLink" />
                    </Col>
                  </FormGroup>


                  <FormGroup>
                    <Col smOffset={2} sm={10}>
                      <Button type="submit">
                        Post Job
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </Row>
            </Grid>
          </div>
        </Jumbotron>
      </div>
    )
  }
}




export default Jobpost;
