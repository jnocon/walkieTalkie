import React, { Component } from 'react'
import axios from 'axios';
import InterestsItem from './UserClickInterestsView'
import { Popover } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import Popout from 'react-popout'
import UserProfileStatic from './userProfileStatic.js'

class UserItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interests: [],
      userSocket: this.props.socketId,
      userPopout: false
    }
  //bind all functions here
  this.componentDidMount = this.componentDidMount.bind(this);
  this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  this.handleUserPopout = this.handleUserPopout.bind(this)
  }

  componentWillReceiveProps(nextProps){
    if (this.props.socketId !== nextProps.socketId) {
      this.setState({
        userSocket : nextProps.socketId
      })
    }
  }

  componentDidMount() {
    axios.get('/getUserInterest', { params : {id : this.props.user.id}})
    .then(res => {
      this.setState({
        interests: res.data
      })
    })
    .catch(err => {
      console.log('error in getting users interest: ', err);
    })
  }

   handleUserPopout() {
     console.log("PROPS = ", this.props)
    this.setState({
      userPopout: true
    })
  }
    
  render() {
    var alertInstance = (
      <Alert className="loginSignupAlert" bsStyle="warning">
        Damn bro... let this user say something before you start clicking...Shieettttt
      </Alert>
    );
    var addPopover = (
      <Popover id="popover-trigger-click-root-close" title="User Interests">
        {this.state.interests.map((interest, index) => {
          return <ul key={index}><InterestsItem int={interest.Interest}/></ul>
        })}
        <Button onClick={this.handleUserPopout}>User Profile Popout</Button>
        <div>
          {
            this.state.userSocket ? (<Button onClick={(e) => {this.props.privateChat(this.state.userSocket, this.props.user.firstname)}}>Invite to Private Chat</Button>)
            : alertInstance
          }
        </div>
         <div>
        { this.state.userPopout ? <Popout title='User Profile' onClosing={this.popupClosed}>
        <UserProfileStatic userId = {this.props.user.id} />
      </Popout> : <div></div> }
      </div>
        
      </Popover>
     );
     
    return (
    <div>
    <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={addPopover}>
          <b>{this.props.user.firstname}</b>
    </OverlayTrigger>
    </div>
    )
  }
}


export default UserItem