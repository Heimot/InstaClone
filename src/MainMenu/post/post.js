import React, { Component } from 'react';
import './postCSS/post.css';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
        }
        this.onValueChange = this.onValueChange.bind(this);
    }

    componentDidMount() {
        //console.log(document.getElementById(this.props.postData.userName + "pictureID-notImplementedYET").value.length)
    }

    getRandomLike() {
        let likes = this.props.postData.likes;
        return likes[0]
    }

    publishComment() {
        /*let { comment } = this.props;
        comment = this.state.inputValue;
        console.log(this.props.comment)*/
        
        this.props.comment(this.state.inputValue, this.props.postData.poster, this.props.postData.id);
    }

    onValueChange(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }

    render() {
        let { inputValue } = this.state;
        let { postData } = this.props;
        return (
            <div className="postDiv">
                <div className="postNav">
                    <img alt="" className="postPicture" src={require('./Picture/logo192.png')}></img>
                    <p className="postText">{postData.poster}</p>
                </div>
                <img alt="" className="postedPicture" src={require('./Picture/logo192.png')}></img>
                <div className="bottomChat">
                    <div className="chatFieldButtons">
                        <div className="likeButton"></div>
                        <div className="commentButton"></div>
                        <div className="shareButton"></div>
                        <div className="bookMarkButton"></div>
                    </div>
                    <div className="chatFieldLikes">
                        <div className="likePicture"></div>
                        <div className="likeAmount"><b>{this.getRandomLike()}</b> ja <b>{postData.likes.length - 1} muuta</b> tykkäävät</div>
                    </div>
                    <div className="posterData">
                        <p className="posterComment"><b onClick={() => console.log(postData.poster)}>{postData.poster}</b>{` ${postData.posterComment}`}</p>
                    </div>
                    <div className="chatComment">
                        <input type="text" className="chatInput" placeholder="Lisää kommentti..." value={inputValue} onChange={this.onValueChange}></input>
                        <p onClick={() => this.publishComment()} className={inputValue === "" ? "publishCommentNoInput" : "publishComment"}>Julkaise</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;