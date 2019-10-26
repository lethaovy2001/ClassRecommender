import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

class CourseCart extends React.Component {
  getCourses() {
    let courses = [];

    for(const course of Object.entries(this.props.data)) {
      courses.push (
        <Course key={course[0]} data={course[1]}/>
      )
    }
    return courses;
  }

  render() {
    return (
      <Card style={{ width: '33%', marginTop: '5px', marginBottom: '5px' }}>
        <Card.Body>
          <Card.Title>{this.props.data.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{this.props.data.number} - {this.getCredits()}</Card.Subtitle>
        </Card.Body>

        <Button variant="primary" style={{width: '30%'}} onClick={() => alert(this.props.data.name)}>Remove</Button>
      </Card>
    )
  }

  getCredits() {
    if (this.props.data.credits === 1)
      return '1 credit';
    else
      return this.props.data.credits + ' credits';
  }
}

export default Course;