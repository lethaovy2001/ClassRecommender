import React from 'react';
import './App.css';
import Course from './Course';
import PrevCourse from './PrevCourse';

class CourseArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likedCourses: {}
    };
  }

  getCourses() {
    let courses = [];
    for(const course of Object.entries(this.props.data)) {
      courses.push (
        <Course key={course[0]} data={course[1]}/>
      )
    }
    return courses;
  }

  getPrevCourses() {
    let courses = [];
    for(const course of Object.entries(this.props.data)) {
      courses.push (
        <PrevCourse key={course[0]} data={course[1]}/>
      )
    }
    return courses;
  }

  // callBackData = (data) => {
  //   this.state.likedCourses.push({data});
  //   console.log(this.state.likedCourses);
  //   // this.setState({likedCourses: data});
  // }

  // sendData = () => {
  //   this.props.callbackFromCourseArea(this.state.likedCourses);
  // }

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
