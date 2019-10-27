import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

class PrevCourse extends React.Component {

    render() {
        return (
            <Card style={{ width: '33%', marginTop: '5px', marginBottom: '5px' }}>
                <Card.Body>
                    <Card.Title>{this.props.data.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.data.number} - {this.getCredits()}</Card.Subtitle>
                    <Button variant="primary" style={{ width: '40%', marginRight: '15px'}}><span role="img" aria-label="like">👍</span></Button>
                    <Button variant="primary" style={{ width: '40%'}}><span role="img" aria-label="dislike">👎</span></Button>
                </Card.Body>

            </Card>
        )
    }

    getCredits() {
        if (this.props.data.credits === 1)
            return '1 credit';
        else
            return this.props.data.credits + ' credits';
    }
}

export default PrevCourse;