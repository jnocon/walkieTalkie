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
import { Thumbnail, ListGroup, ListGroupItem, Image } from 'react-bootstrap';

class JobBoard extends Component {
  constructor(props){
    super(props);
    this.state={
      jobs: []
    }

  }
  componentWillMount() {
    const script = document.createElement("script");
    const script2 = document.createElement("script");

script.src = "//platform.linkedin.com/in.js";
script2.src = "https://www.glassdoor.com/static/js/api/widget/v1.js";
script.async = true;
script2.async = true;

document.body.appendChild(script);
document.body.appendChild(script2);

  }
  componentDidMount() {
    console.log('in Job list')
    var context = this;
    axios.get('/core/jobs')
    .then(result=>{
      console.log('got the jobs ', result.data)
      context.setState({
        jobs: result.data
      })
    })
    .catch(err=> {
      console.log('error fetching jobs', err)
    })
  }

  render() {
    console.log('in render of joblist and jobs are ', this.state.jobs)
    var jobs = this.state.jobs.reverse();
    return (
      <div>
        <Jumbotron>
          <div className="container jobContainer">
            <h1>Job Board</h1>
            <Grid>
              <Row>
                <Col xs={12} md={8}>

                  <ListGroup>
                  {jobs.map((job, i) => (
                    <ListGroupItem key={i}>
                      <a href={job.link} target="_blank"><h3>{job.title}</h3></a>


                      <h4>{job.company}</h4>
                        <h5>{job.location}</h5>
                          <h5>{job.salary}</h5>

                    </ListGroupItem>
                  ))}
                </ListGroup>
                  </Col>
                  <Col xs={6} md={4} >
                    <h2>Search for Jobs</h2>

                    <script type="IN/JYMBII" data-format="inline"></script>

                <div className="gdWidget">
                  <a href="https://www.glassdoor.com/api/api.htm?version=1&action=search-salaries&t.s=w-m&t.a=c&format=300x250" target="_blank">Search Salaries </a> or see
                    <a href="https://www.glassdoor.com/Reviews/index.htm?&t.s=w-m&t.a=c" target="_blank"> company reviews</a>,
                      <a href="https://www.glassdoor.com/Salaries/index.htm?&t.s=w-m&t.a=c" target="_blank">salary</a> info,
                      and <a href="https://www.glassdoor.com/Interview/index.htm?&t.s=w-m&t.a=c" target="_blank">interview questions</a>
                      for thousands of <a href="https://www.glassdoor.com/index.htm?&t.s=w-m&t.a=c" target="_blank">jobs</a>.

                </div>
              </Col>
              </Row>
            </Grid>
          </div>
        </Jumbotron>
      </div>
    )
  }
}




export default JobBoard;
