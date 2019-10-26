import React from 'react';
import './App.css';
import Course from './Course';

class CourseArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCourses: {}
    };
  }

  getCourses() {
    let courses = [];
    for(const course of Object.entries(this.props.data)) {
      courses.push (
        <Course key={course[0]} data={course[1]} callbackFromCard={this.callBackData}/>
      )
    }
    return courses;
  }

  callBackData = (data) => {
    this.setState({selectedCourses: data });
  }

  render() {
    return (
      <div style={{margin: '5px'}}>
        {this.getCourses()}
      </div>
    )
  }
}

export default CourseArea;
