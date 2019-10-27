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

    // sendData = () => {
    //     if (this.state.likeStatus === "👍") {
    //         this.props.callbackFromPrev(this.props.data);
    //     }
    // }

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

    callBackData = (data) => {
        this.setState({likeStatus: data});
    }

    getCredits() {
        if (this.props.data.credits === 1)
            return '1 credit';
        else
            return this.props.data.credits + ' credits';
    }

    
}

export default PrevCourse;