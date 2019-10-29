import React from 'react';
import './App.css';
import Course from './Course';
import PrevCourse from './PrevCourse';
import Button from 'react-bootstrap/Button'

class CourseArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likedCourses: [],
      isModalOpened: false
    };
  }

  getCourses() {
    let courses = [];
    for (const course of Object.entries(this.props.data)) {
      courses.push(
        <Course key={course[0]} data={course[1]} />
      )
    }
    return courses;
  }

  getPrevCourses() {
    let courses = [];
    for (const course of Object.entries(this.props.data)) {
      courses.push(
        <PrevCourse key={course[0]} data={course[1]} callbackPrevCourse={this.callBackData} />
      )
    }
    return courses;
  }

  callBackData = (data) => {
    this.state.likedCourses.push(data);
    console.log(this.state.likedCourses);
  }

  sendData() {
    this.props.callBackFromCourseArea(this.state.likedCourses);
    this.setState({ isDoneClicked: true });
  }

  render() {

    if (this.props.likeStatus === false) {
      return (
        <div style={{ margin: '5px' }}>
          {this.getCourses()}
        </div>
      )
    } else {
      return (
        <div style={{ margin: '5px' }}>
          {this.getPrevCourses()}
          <Button variant="primary" style={{ width: '33%', marginRight: '15px' }} onClick={() => this.sendData()}>Done</Button>
        </div>
      )
    }
  }
}

export default CourseArea;
