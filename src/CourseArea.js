import React from 'react';
import './App.css';
import Course from './Course';
import PrevCourse from './PrevCourse';
import CourseCart from './CourseCart';
import Button from 'react-bootstrap/Button'

class CourseArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likedCourses: [],
      isModalOpened: false,
      neededRequisiteCourses: [],
      savedCourses: []
    };
  }

  getCourses() {
    let prevCourses = [];
    let neededRequisitesCourses = [];
    let courses = [];

    if (typeof this.props.previousData !== "undefined") {
      for (const course of Object.values(this.props.previousData)) {
        prevCourses = course;
      }
    }

    for (const course of Object.entries(this.props.data)) {
      if (typeof this.props.allCourses !== "undefined") {
        for (const requisites of Object.entries(course[1].requisites)) {
          for (const requisite of Object.values(requisites[1])) {
            if (!prevCourses.includes(requisite) && prevCourses.length > 0) {
              for (const allCourse of Object.entries(this.props.allCourses)) {
                if (requisite === allCourse[0]) {
                  neededRequisitesCourses.push(allCourse[1]);
                }
              }
            }
          }
        }
      }

      courses.push(
        <Course key={course[0]} data={course[1]} enroll={this.props.enroll} requireReq={neededRequisitesCourses} callbackCourses={this.callbackFromCourse}/>
      )
      neededRequisitesCourses = [];
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

  getCoursesCart() {
    let courses = [];
    for (const course of Object.entries(this.props.data)) {
      courses.push(
        <CourseCart key={course[0]} data={course[1]} />
      )
    }
    return courses;
  }

  callBackData = (data) => {
    this.state.likedCourses.push(data);
  }

  sendData() {
    this.props.callBackFromCourseArea(this.state.likedCourses);
    this.setState({ isDoneClicked: true });
  }

  callbackFromCourse = (data) => {
    this.state.savedCourses.push(data);
    this.props.callbackSaveCourses(this.state.savedCourses);
  }

  render() {
    if (this.props.likeStatus === false && this.props.enroll === true) {
      return (
        <div style={{ margin: '5px' }}>
          {this.getCourses()}
        </div>
      )
    } else if (this.props.enroll === false && this.props.likeStatus === false) {
      return (
        <div style={{ margin: '5px' }}>
          {this.getCoursesCart()}
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
