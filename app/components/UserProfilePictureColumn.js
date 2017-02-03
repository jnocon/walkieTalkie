import React, { Component } from 'react'
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
import { Image } from 'react-bootstrap'
import { FieldGroup } from 'react-bootstrap'
import { ControlLabel } from 'react-bootstrap'


class UserProfilePictureColumn extends Component {
  constructor (props) {
    super(props)
  }

render () {
    return (
      <div>
         <Col xs={8}>
          <Thumbnail src='http://www.rknrmedia.com/wp-content/uploads/2015/08/iStock_Man-in-blue-top.jpg' rounded />
          <form>
            <FormGroup controlId='formControlsTextarea'>
            <ControlLabel>New Image Source</ControlLabel>
            <FormControl componentClass='textarea' placeholder='Put Image URL Here' />
          </FormGroup>

          <FormGroup controlId='formControlsTextarea'>
            <ControlLabel>Languages</ControlLabel>
            <FormControl componentClass='textarea' placeholder='JavaScript, C++, etc.,' />
          </FormGroup>
          <FormGroup controlId='formControlsTextarea'>
            <ControlLabel>Frameworks</ControlLabel>
            <FormControl componentClass='textarea' placeholder='Angular, Express, etc.,' />
          </FormGroup>
          </form>
          <Button type="submit">
            Save Info
          </Button>
        </Col>
      </div>
    )
  }

}

export default UserProfilePictureColumn


