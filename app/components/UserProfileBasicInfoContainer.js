import React, { Component } from 'react'
import ChatLine from './ChatLineItem'
import UserItem from './UserItem'
import ChatJoinModal from './ChatJoinModal.js'
import io from 'socket.io-client'
import axios from 'axios'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Alert } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Grid } from 'react-bootstrap'
import { Panel } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Thumbnail } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { FieldGroup } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Label } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';

class UserProfileBasicInfo extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Col xs={6}>
          <form >
            <FormGroup bsSize='large'>
             <FormControl type='text' placeholder='Your Name' />
           </FormGroup>
          </form>
          <div>
              <p>Status <Label bsStyle="success">Online</Label></p>
          </div>
          <div>
            <Button type="submit">
                Save Info
            </Button>
          </div>
        </Col>
        <Col xs={3}>
          <form>
            <FormGroup bsSize='small'>
               <FormControl type='text' placeholder='Location' />
             </FormGroup>
          </form>
        </Col>
        <Col xs={3}>
          <form>
            <FormGroup bsSize='small'>
              <FormControl type='text' placeholder='Chat Handle' />
            </FormGroup>
          </form>
        </Col>
      </div>
    )
  }

}

export default UserProfileBasicInfo
