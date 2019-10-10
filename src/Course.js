import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

class Course extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addedCourses: {}
    };
    this.addToCart = this.addToCart.bind(this);
  }

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

        <Button variant="primary" style={{width: '30%'}} onClick={() => alert(this.props.data.name)}>All</Button>
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

    for(const section of Object.entries(this.props.data.sections)) {
      sections.push (
        <DropdownButton id="dropdown-basic-button" title={section[0]} key={section}>
          {this.getSubsections(section)}
        </DropdownButton>
      )
    }
    return sections;
  }

  getSubsections(section) {
    let subsections = []
    subsections.push (
      <Dropdown.Item as="button" onSelect={this.addToCart} key={section}>{section[0]}</Dropdown.Item>
    )
      
    for(const subsection of Object.entries(section[1].subsections)) {
      subsections.push (
        <Dropdown.Item as="button" onSelect={this.addToCart} key={subsection}>{subsection[0]}</Dropdown.Item>
      )
    }
    return subsections;
  }

  addToCart() {
    this.setState({addedCourses:{...this.state.addedCourses,[this.props.data.name]: this.props.data}});
    console.log(this.state.addedCourses)
  }
  

  
}

export default Course;