import React, { Component } from 'react'
import ChatLine from './ChatLineItem'
import UserItem from './UserItem'
import ChatJoinModal from './ChatJoinModal.js'
import UserProfileBasicInfo from './UserProfileBasicInfoContainer.js'
import UserProfileNav from './UserProfileNav.js'
import UserProfilePictureColumn from './UserProfilePictureColumn.js'
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
import { FormGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Jumbotron } from 'react-bootstrap'
import { Thumbnail } from 'react-bootstrap'

class UserProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userProfile: {},
      success: false
    }

    this.handleUserProfileSave = this.handleUserProfileSave.bind(this)
  }

  componentWillMount () {
    var context = this
    axios.get('/getUserProfile', {headers:
          {id: this.props.userId}
    })
    .then(result => {
      context.setState({
          userProfile: result.data
        })
    })
  }

  handleUserProfileSave (event) {
    var context = this
    event.preventDefault()
    var userProfile = {}
    userProfile.id = this.props.userId
    userProfile.name = document.getElementById('upName').value
    if (userProfile.name === '') {
      userProfile.name = this.state.userProfile.upName
    }
    userProfile.image = document.getElementById('upImage').value
    if (userProfile.image === '') {
       userProfile.image = this.state.userProfile.upImage
     }
    userProfile.languages = document.getElementById('upLanguages').value
    if (userProfile.languages === '') {
       userProfile.languages = this.state.userProfile.upLanguages
     }
    userProfile.frameworks = document.getElementById('upFrameworks').value
    if (userProfile.frameworks === '') {
      userProfile.frameworks = this.state.userProfile.upFrameworks
    }
    userProfile.location = document.getElementById('upLocation').value
    if (userProfile.location === '') {
      userProfile.location = this.state.userProfile.upLocation
    }
    userProfile.handle = document.getElementById('upHandle').value
    if (userProfile.handle === '') {
      userProfile.handle = this.state.userProfile.firstname
    }
    userProfile.email = document.getElementById('upEmail').value
    if (userProfile.email === '') {
      userProfile.email = this.state.userProfile.upEmail
    }
    userProfile.phone = document.getElementById('upPhone').value
    if (userProfile.phone === '') {
      userProfile.phone = this.state.userProfile.upPhone
    }
    userProfile.skype = document.getElementById('upSkype').value
    if (userProfile.skype === '') {
      userProfile.skype = this.state.userProfile.upSkype
    }
    userProfile.linkedIn = document.getElementById('upLinkedIn').value
    if (userProfile.linkedIn === '') {
      userProfile.linkedIn = this.state.userProfile.upLinkedIn
    }
    userProfile.gitHub = document.getElementById('upGitHub').value
    if (userProfile.gitHub === '') {
      userProfile.gitHub = this.state.userProfile.upGitHub
    }
    console.log('userProfile = ', userProfile)

    axios.put('/saveUserProfile', userProfile)
    .then(res => {
      context.setState({
        success: true
      })
    })
  }

  render () {
    return (
      <div>
        <Col xs={4}>
          <div>
              <UserProfilePictureColumn handleUserProfileSave={this.handleUserProfileSave} userProfile={this.state.userProfile} success={this.state.success} />
            </div>
        </Col>
        <Col xs={8}>
          <div className='basicInfo'>
              <UserProfileBasicInfo handleUserProfileSave={this.handleUserProfileSave} userProfile={this.state.userProfile} />
            </div>

          <div className='userNav'>
              <UserProfileNav handleUserProfileSave={this.handleUserProfileSave} userProfile={this.state.userProfile} />
            </div>
        </Col>
      </div>
    )
  }
}

export default UserProfile
