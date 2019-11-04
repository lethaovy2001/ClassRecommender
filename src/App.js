import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import CourseArea from './CourseArea';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import InterestAreas from './InterestAreas';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCourses: {},
      filteredCourses: {},
      subjects: [],
      previousCourses: {},
      recommendedCourses: {},
      likedCourses:{},
      likedSubjects:[],
      previousNumCourses: {}
    };
  }

  componentDidMount() {
    Promise.all([
      fetch("https://mysqlcs639.cs.wisc.edu/classes/"),
      fetch("https://mysqlcs639.cs.wisc.edu/students/5022025924/classes/completed/"),
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([data1, data2]) => this.setState({
      allCourses: data1,
      filteredCourses: data1,
      subjects: this.getSubjects(data1),
      previousCourses: this.getPreviousCourses(data1, data2),
      previousNumCourses: data2
    }));
  }

  updateLikedCourses(course) {
    this.state.likedCourses.push(course);
  }

  getSubjects(data) {
    let subjects = [];
    subjects.push("All");

    for (const course of Object.values(data)) {
      if (subjects.indexOf(course.subject) === -1)
        subjects.push(course.subject);
    }

    return subjects;
  }

  getPreviousCourses(data, prevCourses) {
    let result = [];
    for (const numKey of Object.values(prevCourses.data)) {
      for (const course of Object.entries(data)) {
        if (numKey === course[0]) {
          result.push(course[1]);
        }
      }
    }
   
    return result;
  }

  setCourses(courses) {
    this.setState({ filteredCourses: courses })
  }

  setAddedCourseToCart(courses) {
    this.setState({ addedCourses: courses })
  }

  callBackFromCourseArea = (data) => {
    this.setState({recommendedCourses: data});
    this.setState({likedCourses: data})
  }

  callbackFromInterestArea = (data) => {
    this.setState({likedSubjects: data});

    let courses = [];
    for (const course of Object.entries(this.state.allCourses)) {
      for (const value of data) {
        if (course[1].subject === value) {
          courses.push(course[1]);
        }
        for (const keyword of course[1].keywords) {
          if (keyword === value) {
            courses.push(course[1]);
          }
        }
      }
    }
    this.setState({recommendedCourses: courses});
  }

  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />

        <Tabs defaultActiveKey="search" id="uncontrolled-tab-example">
          <Tab eventKey="search" title="Search Course">
            <Sidebar setCourses={(courses) => this.setCourses(courses)} courses={this.state.allCourses} subjects={this.state.subjects}/>
              <div style={{marginLeft: '20vw'}}>
                <CourseArea data={this.state.filteredCourses} likeStatus={false} previousData={this.state.previousNumCourses} allCourses={this.state.allCourses}/>
              </div>
          </Tab>
          <Tab eventKey="cart" title="Cart">
            {/* <div>
              <CourseArea data={this.state.filteredCourses} />
            </div> */}
          </Tab>
          <Tab eventKey="prevCourses" title="Previous Courses">
            <div>
              <CourseArea data={this.state.previousCourses} likeStatus={true} callBackFromCourseArea={this.callBackFromCourseArea}/>
            </div>
          </Tab>
          <Tab eventKey="interestedArea" title="Interested Area">
            <div>
              <InterestAreas data={this.state.likedCourses} callBack={this.callbackFromInterestArea}/>
             </div>
          </Tab>
          <Tab eventKey="recommender" title="Recommender">
            <div>
              <CourseArea data={this.state.recommendedCourses} likeStatus={false}/>
             </div>
          </Tab>
        </Tabs>
      </>
    )
  }
}

export default App;
