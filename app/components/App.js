import React from 'react';
import axios from 'axios';
import LoginSignupView from './LoginSignupView.js';
import ViewNavBar from './ViewNavbar.js';
import Chatroom from './Chatroom.js';
import ChatSelection from './ChatSelection.js';
import Dashboard from './Dashboard.js'
import JobBoard from './JobBoard.js'
import UserProfile from './userProfile.js'
import ResourceList from './resourceList.js'
import UserProfileStatic from './userProfileStatic.js'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userId : null,
      name : null,
      roomId : null,
      roomSearch : null,
      login_signup_view : true,
      chat_view : false,
      mounted : false,
      dashboard_view : false,
      jobBoard_view : false,
      resource_view : false,
      jobpost_view : false,
      userprofile_view: false,
      userprofilestatic_view: false
    }
    
    this.componentWillMount = this.componentWillMount.bind(this);
    this.handleUserSignupLogin = this.handleUserSignupLogin.bind(this);
    this.handleUserLogout = this.handleUserLogout.bind(this);
    this.handleChatSelection = this.handleChatSelection.bind(this);
    this.handleChatExit = this.handleChatExit.bind(this);
    this.handleRoomChange = this.handleRoomChange.bind(this);
    this.handleDashboardClick = this.handleDashboardClick.bind(this);


    this.handleJobBoardClick = this.handleJobBoardClick.bind(this);
    this.handleResourceClick = this.handleResourceClick.bind(this);

    this.handleUserProfileClick = this.handleUserProfileClick.bind(this);
    this.handleUserProfileStaticClick = this.handleUserProfileStaticClick.bind(this);


  }

  componentWillMount(){
   axios.get('/checkSession')
   .then(res => {
     if (res.data.id) {
      if (res.data.roomId) {
        this.setState({
          userId : res.data.id,
          name : res.data.firstname,
          roomId : res.data.roomId,
          mounted : true,
          login_signup_view : false,
          chat_view : true
        })
      } else {
        this.setState({
          userId : res.data.id,
          name : res.data.firstname,
          mounted : true,
          login_signup_view : false
        })
      }
     } else {
       this.setState({
         mounted : true
       })
     }
   })
   .catch(err => {
     console.log(err);
   })
  }

 handleUserSignupLogin(res){
   console.log("jesse look here", res)
   this.setState({
     userId : res.id,
     name : res.firstname,
     login_signup_view  : false
   })
 }

 handleUserLogout(){
   var self = this;
   axios.post('/logout', {id :this.state.userId})
   .then(res => {
     self.setState({
       userId : null,
       roomId : null,
       name : null,
       chat_view : false,
       login_signup_view : true
     })
   })
   .catch(err => {
     console.log(err);
   })
 }

 handleChatSelection(inputRoomId, searchOptions, result){
   this.setState({
     roomId : inputRoomId,
     roomSearch : {'option' : searchOptions, 'res' : result},
     chat_view : true,
     userprofile_view: false,
     resource_view: false,
     jobBoard_view: false,
     dashboard_view: false
   })
 }

 handleChatExit(){
   var self = this;
   self.setState({
     userprofile_view: false,
     resource_view: false,
     jobBoard_view: false,
     dashboard_view: false
   })
   if (this.state.roomId) {
    axios.post('/exitChat', {id : this.state.userId})
    .then(res => {
      self.setState({
        chat_view : false,
        roomId : null
      })
    })
    .catch(err => {
      console.log(err);
    })
   }
 }

 handleDashboardClick() {
   console.log('dashboard clicked, dashbord view is', this.state.dashboard_view)
   this.setState({
     dashboard_view: true,
     userprofile_view: false,
     resource_view: false,
     jobBoard_view: false,
     chat_view: false
   })
 }

 handleJobBoardClick() {
   this.setState({
     jobBoard_view: true,
     userprofile_view: false,
     resource_view: false,
     dashboard_view: false,
     chat_view: false
   })

 }

 handleResourceClick() {
   this.setState({
     resource_view: true,
     jobBoard_view: false,
     dashboard_view: false,
     chat_view: false,
     userprofile_view: false
   })




 }

 handleUserProfileClick() {
   console.log('up clicked, up view is', this.state.userprofile_view)
   this.setState({
     userprofile_view: true,
     resource_view: false,
     jobBoard_view: false,
     dashboard_view: false,
     chat_view: false
   })
 }

  handleUserProfileStaticClick() {
   console.log('up clicked, up view is', this.state.userprofile_view)
   this.setState({
     userprofilestatic_view: true,
     jobpost_view: false,
     jobBoard_view: false,
     dashboard_view: false,
     chat_view: false,
     userprofile_view: false
   })
 }


 handleRoomChange(newRoom) {
   this.setState({
     roomId : newRoom,
   })
 }

  render() {
    return (
            <div>
        <ViewNavBar logout = {this.handleUserLogout}
                    home = {this.handleChatExit}
                    userId = {this.state.userId}
                    handleDashboardClick = {this.handleDashboardClick}
                    handleUserProfileClick = {this.handleUserProfileClick}
                    handleUserProfileStaticClick = {this.handleUserProfileStaticClick}/>
       {
         this.state.mounted ?
         (this.state.login_signup_view ?
         (<LoginSignupView userSignupLogin = {this.handleUserSignupLogin}/>)
         : (this.state.chat_view ? <Chatroom roomChange = {this.handleRoomChange}
                                             userId = {this.state.userId}
                                             roomId = {this.state.roomId}
                                             name = {this.state.name}
                                             searchResults = {this.state.roomSearch}/>

        : this.state.userprofile_view ? <UserProfile userId = {this.state.userId} />
        : this.state.userprofilestatic_view ? <UserProfileStatic userId = {this.state.userId} />
        : this.state.dashboard_view ? <Dashboard showJobs = {this.handleJobBoardClick}
                                                 showResources = {this.handleResourceClick}/>
        : this.state.jobBoard_view ? <JobBoard/>
      : this.state.resource_view ? <ResourceList/>

        : this.state.userprofile_view ? <UserProfile />
        : this.state.dashboard_view ? <Dashboard showJobs = {this.handleJobBoardClick}
                                                 postJob = {this.handleJobpostClick}/>
        : this.state.jobBoard_view ? <JobBoard/>
        : this.state.jobpost_view ? <Jobpost/>

        : <ChatSelection selectRoom = {this.handleChatSelection}/>))
        :(<div></div>)
       }
      </div>
    )
  }
}

export default App
