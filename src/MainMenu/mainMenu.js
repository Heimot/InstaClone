import React, { Component } from 'react';
import './MainMenuCSS/mainMenu.css';
import Post from "./post/post";
import User from "./user/user";
import Nav from "./navBar";
import Login from "./Login/login";
import { getPosts } from '../Requests/fetch';

class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            commentUser: "",
            suggestions: ["SEXIGIRL", "FREEVBUCK123", "REALNINJA", "REAL TFUE", "FREEVBUCKSOFFICIAL"],
            isLoading: true,
            isLoggedIn: false,
        };
        this.commentUser = this.commentUser.bind(this);
        this.logIn = this.logIn.bind(this);
    }

    async componentDidMount() {
        if(localStorage.getItem("userData")) {
            this.logIn();
        }
    }

    async logIn() {
        let data = await getPosts();
        await this.setState({
            isLoading: false,
            post: data,
            isLoggedIn: true,
        });
    }

    commentUser(data, user, _id) {
        let { post } = this.state;
        //console.log(post)
        //let dataArr = post.find(x => x.id === _id);
        //dataArr.comments.push(data)
        var updtData = post.map(obj => post.find(o => o.id === _id) || obj);
        console.log(updtData)
        /*this.setState({
            post: post.push(dataArr)
        })
        console.log(post)*/
    }


    render() {
        let { post, suggestions, isLoading, isLoggedIn } = this.state;
        if (!isLoggedIn) {
            // Login screen
            return (
                <Login logIn={() => this.logIn()}/>
            )
        } else {
            if (isLoading) {
                // If the api is still loading and sending posts...
                console.log("Loading posts...")
                return (
                    <div className="main">
                        <Nav />
                        <div className="left-sidebar"></div>
                        <div className="mainDataSpots">

                        </div>
                        <div className="right-sidebar">

                        </div>
                    </div>
                )
            } else {
                // The api has sent its data to load images...
                return (
                    <div className="main">
                        <Nav />
                        <div className="left-sidebar"></div>
                        {post.map((post) =>
                            <div className="mainDataSpots">
                                <Post postData={post} comment={this.commentUser} />
                            </div>
                        )
                        }
                        <div className="right-sidebar">
                            <User suggestions={suggestions} />
                        </div>
                    </div>
                );
            }
        }
    }
}

export default MainMenu;