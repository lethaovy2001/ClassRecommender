import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

class InterestAreas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likedSubjectsOrKeywords: []
        };
    }

    handleCheck(value) {
        if (!this.state.likedSubjectsOrKeywords.includes(value)) {
            this.state.likedSubjectsOrKeywords.push(value);
        }

        console.log(this.state.likedSubjectsOrKeywords);
    }

    getSubjectOptions() {
        let options = [];
        let temp = [];
        for (const course of Object.entries(this.props.data)) {
            let subject = course[1].subject;
            for (const keyword of course[1].keywords) {
                if (!temp.includes(subject)) {
                    options.push(<Button variant="outline-primary" key={subject} onClick={() => this.handleCheck(subject)}>{subject}</Button>);
                    temp.push(subject);
                }
                if (!temp.includes(keyword)) {
                    options.push(<Button variant="outline-primary" key={keyword} onClick={() => this.handleCheck(keyword)}>{keyword}</Button>);
                    temp.push(keyword);
                }
            }
            
        }
        return options;
    }

    sendData() {
        console.log("Before passing: " + this.state.likedSubjectsOrKeywords);
        this.props.callBack(this.state.likedSubjectsOrKeywords);
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
