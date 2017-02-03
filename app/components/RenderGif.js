import React, { Component }  from 'react';
import { Thumbnail } from 'react-bootstrap';


class RenderGif extends Component {
  constructor(props){
    super(props)
  }

  //      <img src={this.props.value} height="300" width="500" />
  // <div dangerouslySetInnerHTML={template}/>
  render(){
    console.log('this is Render Gif')
    console.log(this.props);
    return (

          <img src ={this.props.value} /> 

    )
  }
}

export default RenderGif;