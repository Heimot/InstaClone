import React, { Component } from 'react';
import './MainMenuCSS/navBar.css';

class navBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="mainNav">
                <div className="mainDataSpotsNav">Instagrum</div>
                <div className="mainDataSpotsNav">2</div>
                <div className="mainDataSpotsNav">3</div>
            </div>
        );
    }
}

export default navBar;