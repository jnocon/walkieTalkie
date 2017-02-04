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
    this.submitJob = this.submitJob.bind(this)

  }
  submitJob(e) {
    e.preventDefault()
    let jobTitle=document.getElementById('jobTitle')
    let jobcCompany=document.getElementById('jobCompany')
    let jobLocation=document.getElementById('jobLocation')
    let jobSalary=document.getElementById('jobSalary')
    let jobLink=document.getElementById('jobLink')


    console.log('got this title', jobTitle.value)
    console.log('got this company', jobCompany.value)

    console.log('got this location', jobLocation.value)

    console.log('got this url', jobSalary.value)

    console.log('got this url', jobLink.value)


    axios.post('/core/saveJob', {
      jobObj: {
        title: jobTitle.value,
        company: jobCompany.value,
        location: jobLocation.value,
        salary: jobSalary.value,
        link: jobLink.value
      }
    })
    .then(result => {
      console.log('result is', result)
    })
    .catch(error => {
      console.log('error in posting Job to database', error)
    })
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
                      <FormControl type="jobTitle" id="jobTitle" placeholder="Enter Job Title" />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalJobCompany">
                    <Col componentClass={ControlLabel} sm={2}>
                      Company
                    </Col>
                    <Col sm={10}>
                      <FormControl type="jobCompany" id="jobCompany" placeholder="Enter Company" />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalJobLocation">
                    <Col componentClass={ControlLabel} sm={2}>
                    Job Location
                  </Col>
                    <Col sm={10}>
                      <FormControl type="jobLocation" id="jobLocation" placeholder="Enter Job Location" />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalJobSalary">
                    <Col componentClass={ControlLabel} sm={2}>
                      Job Salary
                    </Col>
                    <Col sm={10}>
                      <FormControl type="jobSalary" id="jobSalary" placeholder="Enter Job Salary " />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalJobLink">
                    <Col componentClass={ControlLabel} sm={2}>
                      Job Link
                    </Col>
                    <Col sm={10}>
                      <FormControl type="jobLink" id="jobLink" placeholder="Enter Job Posting Link" />
                    </Col>
                  </FormGroup>

                  <FormGroup>
                    <Col smOffset={2} sm={10}>
                      <Button onClick={this.submitJob} type="submit">
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
