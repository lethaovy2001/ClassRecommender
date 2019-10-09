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


        <DropdownButton id="dropdown-basic-button" title="Sections">
          {this.getSections()}
        </DropdownButton>

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
    let subsections = []
    let i = 0;
    console.log(this.props.data.sections);

    for(const section of Object.entries(this.props.data.sections)) {
      sections.push (
        <Dropdown.Item as="button" >{section[0]}</Dropdown.Item>
      )
      // for(const subsection of Object.entries({section[0]}.subsections)) {
      //   subsections.push (
      //     // <Dropdown.Item as="button" onClick={this.displaySubsections}>{section[0]}</Dropdown.Item>
      //   )
      // }
    }
    return sections;
  }

  // displaySubsections = () => {
  //   let sections = []
  //   let subsections = []
  //   for(const section of Object.entries(this.props.data.sections)) {
  //     sections.push (
  //       <Dropdown.Item as="button" onClick={this.displaySubsections}>{section[0]}</Dropdown.Item>
  //     )
  //     for(const subsection of Object.entries(section[0].subsections)) {
  //       subsections.push (
  //         <Dropdown.Item as="button" onClick={this.displaySubsections}>{section[0]}</Dropdown.Item>
  //       )
  //     }
  //   }
  //   // let subsections = []
  //   // let i = 0;
  //   // console.log(this.props.data.sections);

  //   // for(const section of Object.entries(this.props.data.sections) {
      
  //   //   subsections.push (
  //   //     <Dropdown.Item as="button" onClick={this.select}>{section[0]}</Dropdown.Item>
  //   //   )
  //   //   i++;
  //   // }
  //   return sections;
  // }

  handleClick = () => {
  }
}

export default Course;
