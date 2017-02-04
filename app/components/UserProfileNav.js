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



class UserProfileNav extends Component {
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
       <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder={this.props.userProfile.upEmail} id='upEmail' />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Phone Number
      </Col>
      <Col sm={10}>
        <FormControl type="phoneNumber" placeholder={this.props.userProfile.upPhone}  id='upPhone' />
      </Col>
    </FormGroup>

      <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Skype
      </Col>
      <Col sm={10}>
        <FormControl type="skype" placeholder={this.props.userProfile.upSkype} id='upSkype' />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Github
      </Col>
      <Col sm={10}>
        <FormControl type="github" placeholder={this.props.userProfile.upGitHub}  id='upGitHub' />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        LinkedIn
      </Col>
      <Col sm={10}>
        <FormControl type="linkedIn" placeholder={this.props.userProfile.upLinkedIn}  id='upLinkedIn' />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button type="submit" onClick = {this.props.handleUserProfileSave}>
          Save Info
        </Button>
      </Col>
    </FormGroup>
  </Form>
       </Col>

     
      
      </div>
    
      
      
    )
  }
}

export default UserProfileNav;

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