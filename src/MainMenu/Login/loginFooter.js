import React, { Component } from 'react';
import { Footer } from './LoginCSS/LoginCSS';

class FooterLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Footer>
                FOOTER IS VISIBLE
                © 2020 INSTAGRAM HEIMBOTILTA
            </Footer>
        );
    }
}

export default FooterLogin;