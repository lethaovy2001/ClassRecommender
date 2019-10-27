import React from 'react';
import Button from 'react-bootstrap/Button'

class Rating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likeStatus: ""
        };
    }

    updateStatus(isLiked) {
        if (isLiked) {
            this.setState({likeStatus: "👍"});
        } else {
            this.setState({likeStatus: "👎"});
        }

        this.props.callbackFromRating(this.state.likeStatus); 
        // this.props.likePressed(likeDislike);
        // (likeDislike) ? this.setState({likeStatus: "👍"}) :
        // this.setState({likeStatus: "👎"});
    }

    render() {
        return (
            <div>
                <Button variant="primary" style={{ width: '40%', marginRight: '15px'}} onClick={() => {this.updateStatus(true)}}><span role="img" aria-label="like">👍</span></Button>
                <Button variant="primary" style={{ width: '40%'}} onClick={() => {this.updateStatus(false)}}><span role="img" aria-label="dislike">👎</span></Button>
            </div>
        )
    }
}

export default Rating;