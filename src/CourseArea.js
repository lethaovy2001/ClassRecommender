import React from 'react';
import './App.css';
import Course from './Course';
import PrevCourse from './PrevCourse';

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

  getPrevCourses() {
    let courses = [];
    for(const course of Object.entries(this.props.data)) {
      courses.push (
        <PrevCourse key={course[0]} data={course[1]} callbackFromCard={this.callBackData}/>
      )
    }
    return courses;
  }

  callBackData = (data) => {
    this.setState({selectedCourses: data});
  }

  render() {
    if (this.props.likeStatus === false) {
      return (
        <div style={{margin: '5px'}}>
          {this.getCourses()}
        </div>
      )
    } else {
      return (
        <div style={{margin: '5px'}}>
          {this.getPrevCourses()}
        </div>
      )
    }
    
  }
}

export default CourseArea;
