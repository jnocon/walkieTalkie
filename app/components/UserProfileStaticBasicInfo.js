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

class UserProfileStaticBasicInfo extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Col xs={6}>
          <div >
             <div className='basicInfo' className='userStatic'>
                <h1> {this.props.userProfile.upName} </h1>
            </div>
          </div>
          <div>
              <p>Status <Label bsStyle="success">Online</Label></p>
          </div>
          <div>
            <Button type="submit" onClick = {this.props.handleUserProfileSave}>
                Start A Private Chat
            </Button>
          </div>
        </Col>
        <Col xs={3}>
          <div>
             <div className='basicInfo'>
                <h3 className= 'header'>Location</h3>
                <h4> {this.props.userProfile.upLocation} </h4>
            </div>
          </div>
        </Col>
        <Col xs={3}>
          <div>
            <div className='basicInfo'>
                <h3 className= 'header'>Handle</h3>
                <h4> {this.props.userProfile.firstname} </h4>
            </div>
          </div>
        </Col>
      </div>
    )
  }

}

export default UserProfileStaticBasicInfo
