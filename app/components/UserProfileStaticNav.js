import React, { Component } from 'react';

import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
// import { FieldGroup } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { HelpBlock } from 'react-bootstrap';
import { ControlLabel, Form, Checkbox } from 'react-bootstrap';



class UserProfileStaticNav extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div>
       <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
        <NavItem eventKey="1" href="/home">Contact Info</NavItem>
        <NavItem eventKey="2" title="Item">Github</NavItem>
      </Nav>

       <Col xs={8}>
       <div>
    <div className='basicInfo'>
        <h4> Email: {this.props.userProfile.upEmail} </h4>
    </div>

     <div className='basicInfo'>
        <h4> Phone Number: {this.props.userProfile.upPhone} </h4>
    </div>

       <div className='basicInfo'>
        <h4> Skype Handle: {this.props.userProfile.upSkype} </h4>
    </div>

     <div className='basicInfo'>
        <h4> GitHub Username: {this.props.userProfile.upGitHub} </h4>
    </div>

     <div className='basicInfo'>
        <h4 > LinkedIn: <a href={this.props.userProfile.upLinkedIn}>{this.props.userProfile.upLinkedIn} </a> </h4>
    </div>

  </div>
       </Col>      
      </div>  
    )
  }
}

export default UserProfileStaticNav;

  // <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
  //       <NavItem eventKey="1" href="/home">Contact Info</NavItem>
  //       <NavItem eventKey="2" title="Item">Github</NavItem>
  //     </Nav>

  //     <Col xs={4}>
  //         <Form>
            //  <FieldGroup
            //     id="formControlsText"
            //     type="text"
            //     label="Email"
            //     placeholder="Enter Email"
            // />
  //            <FieldGroup
  //               id="formControlsText"
  //               type="text"
  //               label="Phone Number"
  //               placeholder="Enter Phone Number"
  //           />
  //            <FieldGroup
  //               id="formControlsText"
  //               type="text"
  //               label="LinkedIn"
  //               placeholder="Enter LinkedIn Url"
  //           />
  //           <FieldGroup
  //               id="formControlsText"
  //               type="text"
  //               label="LinkedIn"
  //               placeholder="Enter LinkedIn Url"
  //           />
  //         </Form>
  //         <div>
  //           <Button type="submit">
  //               Save Info
  //           </Button>
  //         </div>
  //       </Col>