import React, { Component } from 'react';
import Container from './GoogleMaps/Container.js';
import { Modal, Popover, Tooltip, Button, OverlayTrigger } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import axios from 'axios';

//from PostEventModal

const Example = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div>
        {//<p>Insert Giphy</p>
        }

        <Button
          // bsStyle="primary"
          bsSize="small"
          onClick={this.open}
        >
          <img height="42.75" width="81" src="http://ec2-50-19-249-57.compute-1.amazonaws.com/system/companies/158-logo-giphy_l.jpg?1400273381" />
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Search Giphy</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{"height" : "100%", "width" : "568px"}}>
            <img src="http://ec2-50-19-249-57.compute-1.amazonaws.com/system/companies/158-logo-giphy_l.jpg?1400273381" />
            </div>
            <h4>Text in a modal</h4>
            <p>Created by: 4Bros1Appp</p>

            {/*
            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>
            */
            }
            <hr />
             <FormGroup>
                        <FormControl type="text" placeholder={this.props.valueExample} />
              </FormGroup>
                          
          </Modal.Body>
          <Modal.Footer>

            Some Footer Text
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

export default Example;
