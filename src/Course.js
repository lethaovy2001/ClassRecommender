import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

class Course extends React.Component {
  render() {
    return (
      <Card style={{ width: '33%', marginTop: '5px', marginBottom: '5px' }}>
        <Card.Body>
          <Card.Title>{this.props.data.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{this.props.data.number} - {this.getCredits()}</Card.Subtitle>
        </Card.Body>

        <div>
         {this.getSections()}
        </div>

        <Button variant="primary" onClick={() => alert(this.props.data.name)}>Add to cart</Button>
      </Card>
    )
  }

  getCredits() {
    if (this.props.data.credits === 1)
      return '1 credit';
    else
      return this.props.data.credits + ' credits';
  }

  getSections = () => {
    let sections = []
    let i = 0;

    for(const section of Object.entries(this.props.data.sections)) {
      if (section[0] !== '') {
        sections.push (
          <DropdownButton id="dropdown-basic-button" title={section[0]}>
            No discussion
          </DropdownButton>
        )
      } else {
        sections.push (
          <DropdownButton id="dropdown-basic-button" title={section[0]}>
            {this.getSubsections()}
          </DropdownButton>
        )
      }
    }
    return sections;
  }
  

  getSubsections = () => {
    let subsections = []
    for(const section of Object.entries(this.props.data.sections)) {
      
      for(const subsection of Object.entries(section[1].subsections)) {
        console.log(subsection[0]);
        subsections.push (
          <Dropdown.Item as="button">{subsection[0]}</Dropdown.Item>
        )
      }
    }
    return subsections;
  }

  handleClick = () => {
  }
}

export default Course;
