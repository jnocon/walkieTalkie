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
import { Thumbnail, ListGroup, ListGroupItem } from 'react-bootstrap';

class ResourceList extends Component {
  constructor(props){
    super(props);
    this.state={
      resources: []
    }

  }
  componentDidMount() {
    console.log('in Resource list')
    var context = this;
    axios.get('/core/resources')
    .then(result=>{
      console.log('got the resources ', result.data)
      context.setState({
        resources: result.data
      })
    })
    .catch(err=> {
      console.log('error fetching resources', err)
    })
  }

  render() {
    console.log('in render of resourceList and resources are ', this.state.resources)
    var resources = this.state.resources.reverse();
    return (
      <div>
        <Jumbotron>
          <div className="container">
            <h1>Resource List</h1>
            <Grid>
              <Row>
                <Col xs={12} md={8}>

                  <ListGroup>
                  {resources.map((resource, i) => (
                    <ListGroupItem key={i}>
                      <a href={resource.link} target="_blank"><h3>{resource.title}</h3></a>
                      <h4>{resource.subject}</h4>
                    </ListGroupItem>
                  ))}
                </ListGroup>
                  </Col>
                  <Col xs={6} md={4} >

              </Col>
              </Row>
            </Grid>
          </div>
        </Jumbotron>
      </div>
    )
  }
}




export default ResourceList;
