import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Rating from './Rating';

class PrevCourse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            likeStatus: ""
        };
    }

    render() {
        return (
            <Card style={{ width: '33%', marginTop: '5px', marginBottom: '5px' }}>
                <Card.Body>
                    <Card.Title>{this.props.data.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.data.number} - {this.getCredits()}</Card.Subtitle>
                    <Rating callbackFromRating={this.callBackData}>
                    </Rating>
                </Card.Body>
            </Card>
        )
    }

    callBackData = (status) => {
        if (status !== "null") {
            console.log(status);
            this.setState({likeStatus: status});
            if (status === "👍") {
                this.props.callbackPrevCourse(this.props.data);
            }
        }
    }

    getCredits() {
        if (this.props.data.credits === 1)
            return '1 credit';
        else
            return this.props.data.credits + ' credits';
    }

    
}

export default PrevCourse;