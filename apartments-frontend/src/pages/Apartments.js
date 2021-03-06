import React, { Component } from 'react';
import '../css/App.css'
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap'

class Apartments extends Component {
  render() {
    
    return (
      <Row>
        <Col xs={12}>
        <h1>Listings</h1>
          <ListGroup>
            {this.props.apartments.map((apartment, index) =>{
              return (
                <ListGroupItem key= {apartment.id}>
                <div className="container">
                  <div className="col-sm" className='apartment-apt_number'>
                    Apartment Number: {apartment.apt_number}
                  </div>
                  <div className="col-sm"className='apartment-address'>
                  Address:  {apartment.address}
                  </div>
                  <div className="col-sm"  className='apartment-city'>
                    City: {apartment.city}
                  </div>
                  <div className="col-sm" className='apartment-zip'>
                  Zip Code:  {apartment.zip}
                  </div>
                  <div className="col-sm" className='apartment-state'>
                    State: {apartment.state}
                  </div>
                  <div className="col-sm" className='apartment-country'>
                  Country:  {apartment.country}
                  </div>
                  <div className="col-sm" className='apartment-name'>
                  Name:  {apartment.name}
                  </div>
                  <div className="col-sm" className='apartment-phone'>
                  Phone Number:  {apartment.phone}
                  </div>
                  <div className="col-sm" className='apartment-contact'>
                  Contact Hours:  {apartment.contact}
                  </div>
                </div>
                </ListGroupItem>
              )
            })}
          </ListGroup>
        </Col>
      </Row>
    );
  }
}
export default Apartments
