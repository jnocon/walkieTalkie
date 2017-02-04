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


class ResourcePost extends Component {
  constructor(props){
    super(props);
    this.submitResource = this.submitResource.bind(this)

  }
  submitResource(e) {
    e.preventDefault()
    let resourceTitle=document.getElementById('resourceTitle')
    let resourceSubject=document.getElementById('resourceSubject')
    let resourceLink=document.getElementById('resourceLink')
    let scope = this;

    console.log('got this title', resourceTitle.value)
    console.log('got this Subject', resourceSubject.value)

    console.log('got this url', resourceLink.value)


    axios.post('/core/saveResource', {
      resourceObj: {
        title: resourceTitle.value,
        subject: resourceSubject.value,
        link: resourceLink.value
      }
    })
    .then(result => {
      console.log('result is', result)
      scope.props.toggleModal();
      scope.props.showResources();
    })
    .catch(error => {
      console.log('error in posting Resource to database', error)
    })
  }
  render() {
    return (
      <Modal show={this.props.show}
        onHide={this.props.toggleModal}>
        <Modal.Body>
            <h1>Post A Resource</h1>
            <p>Post Helpful Resources</p>
                <Form horizontal>
                  <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                      Resource Title
                    </Col>
                    <Col sm={10}>
                      <FormControl type="resourceTitle" id="resourceTitle" placeholder="Enter Resource Title" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                      Subject
                    </Col>
                    <Col sm={10}>
                      <FormControl type="resourceSubject" id="resourceSubject" placeholder="Enter Subject" />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalResourceLink">
                    <Col componentClass={ControlLabel} sm={2}>
                      Resource Link
                    </Col>
                    <Col sm={10}>
                      <FormControl type="resourceLink" id="resourceLink" placeholder="Enter Resource Link" />
                    </Col>
                  </FormGroup>

                  <FormGroup>
                    <Col smOffset={2} sm={10}>
                      <Button onClick={this.submitResource} type="submit">
                        Post Resource
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
        </Modal.Body>

      </Modal>
    )
  }
}




export default ResourcePost;
