import React, { Component } from 'react';
import ChatLine from './ChatLineItem';
import UserItem from './UserItem';
import ChatJoinModal from './ChatJoinModal.js';
import UserProfileBasicInfo from './UserProfileBasicInfoContainer.js'
import UserProfileNav from './UserProfileNav.js'
import UserProfilePictureColumn from './UserProfilePictureColumn.js'
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

class UserProfile extends Component {
  constructor(props){
    super(props);
  }

  render () {
      return (
          <div>
          <Col xs={4}>
            <div>
                <UserProfilePictureColumn />   
            </div>
           </Col>
           <Col xs={8}>
            <div className= "basicInfo">
                <UserProfileBasicInfo />     
            </div>
            
            <div className= "userNav">
                <UserProfileNav /> 
            </div>
           </Col> 
          </div>
      )
  }
}

export default UserProfile
