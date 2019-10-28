import React from 'react';
import Button from 'react-bootstrap/Button'

class Rating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likeStatus: "null",
            isRated: false
        };
    }

    updateStatus(isLiked) {
        if (this.state.isRated === false) {
            if (isLiked) {
                this.setState({likeStatus: "👍"});
                this.props.callbackFromRating("👍");
                this.likeBtn.setAttribute("disabled", "disabled");
            } else {
                this.setState({likeStatus: "👎"});
                this.props.callbackFromRating("👎");
                this.dislikeBtn.setAttribute("disabled", "disabled");
            }
            this.setState({isRated: true});
        }
    }

    render() {
        return (
            <div>
                <Button ref={likeBtn => { this.likeBtn = likeBtn;}} variant="primary" style={{ width: '40%', marginRight: '15px'}} onClick={() => {this.updateStatus(true)}}><span role="img" aria-label="like">👍</span></Button>
                <Button ref={dislikeBtn => { this.dislikeBtn = dislikeBtn;}} variant="primary" style={{ width: '40%'}} onClick={() => {this.updateStatus(false)}}><span role="img" aria-label="dislike">👎</span></Button>
            </div>
        )
    }
}

export default Rating;