import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

class CourseDetail extends React.Component {
  render() {
    return (
      <Card style={{marginTop: '5px', marginBottom: '5px'}}>
        <Card.Body>
          <Card.Title>{this.props.data.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{this.props.data.number} - {this.getCredits()}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{this.props.data.description}</Card.Subtitle>
        </Card.Body>
        <Button variant="primary" style={{ width: '30%'}} onClick={() => alert(this.props.data.name)}>Detail</Button>
      </Card>
    )
  }

  getCredits() {
    if(this.props.data.credits === 1)
      return '1 credit';
    else
      return this.props.data.credits + ' credits';
  }
}

export default CourseDetail;
