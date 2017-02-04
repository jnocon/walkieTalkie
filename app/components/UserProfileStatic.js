import React, { Component } from 'react'
import ChatLine from './ChatLineItem'
import UserItem from './UserItem'
import ChatJoinModal from './ChatJoinModal.js'
import UserProfileStaticBasicInfo from './UserProfileStaticBasicInfo.js'
import UserProfileStaticNav from './UserProfileStaticNav.js'
import UserProfileStaticPicture from './UserProfileStaticPicture.js'
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

class UserProfileStatic extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userProfile: {},
    }
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



  render () {
    return (
      <div className = 'fontUserProfile'>
        <Col xs={4}>
          <div>
              <UserProfileStaticPicture userProfile={this.state.userProfile} success={this.state.success} />
            </div>
        </Col>
        <Col xs={8}>
          <div className='basicInfo'>
              <UserProfileStaticBasicInfo userProfile={this.state.userProfile} />
            </div>

          <div className='userStaticNav'>
              <UserProfileStaticNav userProfile={this.state.userProfile} />
            </div>
        </Col>
      </div>
    )
  }
}

export default UserProfileStatic
