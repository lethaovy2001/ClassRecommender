import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

class InterestAreas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likedSubjects: []
        };
    }

    handleCheck(subject) {
        if (!this.state.likedSubjects.includes(subject)) {
            this.state.likedSubjects.push(subject);
        }
    }

    getSubjectOptions() {
        let subjectOptions = [];
        let temp = [];
        for (const course of Object.entries(this.props.data)) {
            // console.log(course[1].subject);
            let subject = course[1].subject;
            if (!temp.includes(subject)) {
                subjectOptions.push(<Button variant="outline-primary" key={subject} onClick={() => this.handleCheck(subject)}>{subject}</Button>);
                temp.push(subject);
            }
        }
        return subjectOptions;
    }

    callBackData = (data) => {

    }

    sendData() {

    }

    render() {
        return (
            <div style={{ margin: '5px' }}>
                <Card style={{ width: '33%', marginTop: '5px', marginBottom: '5px' }}>
                    <Card.Body>
                        {this.getSubjectOptions()}
                    </Card.Body>
                </Card>
                <Button variant="primary" style={{ width: '33%', marginRight: '15px' }} onClick={() => this.sendData()}>Done</Button>
            </div>
        )
    }
}

export default InterestAreas;
