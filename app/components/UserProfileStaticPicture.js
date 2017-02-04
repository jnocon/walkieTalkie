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


class UserProfileStaticPicture extends Component {
  constructor (props) {
    super(props)
  }


render () {
  var image = 'http://www.rknrmedia.com/wp-content/uploads/2015/08/iStock_Man-in-blue-top.jpg'
  if (this.props.userProfile.upImage !== "Put Image URL Here") {
    image = this.props.userProfile.upImage
  }
    return (
      <div>
         <Col xs={8}>
          <Thumbnail className='userPic' src={image} />
          <div>
            <div className='pictureInfo'>
                <h3>Languages</h3>
                <p> {this.props.userProfile.upLanguages} </p>
            </div>
            <div className='pictureInfo'>
                <h3>Frameworks</h3>
                <p> {this.props.userProfile.upFrameworks} </p>
            </div>
          </div>
        </Col>
      </div>
    )
  }

}

export default UserProfileStaticPicture


