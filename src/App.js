import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import CourseArea from './CourseArea';

// import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCourses: {},
      filteredCourses: {},
      subjects: []
    };
  }

  componentDidMount() {
    fetch('https://mysqlcs639.cs.wisc.edu:5000/classes').then(
      res => res.json()
    ).then(data => this.setState({ allCourses: data, filteredCourses: data, subjects: this.getSubjects(data) }));
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

  setCourses(courses) {
    this.setState({ filteredCourses: courses })
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
            <Sidebar setCourses={(courses) => this.setCourses(courses)} courses={this.state.allCourses} subjects={this.state.subjects} />
            <div style={{ marginLeft: '20vw' }}>
              <CourseArea data={this.state.filteredCourses} />
            </div>
          </Tab>
          <Tab eventKey="cart" title="Cart">
            <div>
              <CourseArea data={this.state.filteredCourses} />
            </div>
          </Tab>
        </Tabs>
        
      </>
    )
  }
}

export default App;
