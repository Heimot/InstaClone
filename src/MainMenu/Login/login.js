import React, { Component } from 'react';
import { postLogin } from '../../Requests/fetch';
import { Wrapper } from './LoginCSS/LoginCSS';
import { GlobalStyle } from '../../Fonts/GlobalFont';
import { Redirect } from 'react-router-dom';

class navBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            loginFailed: false,
            register: false,
        };
        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async login(email, password) {
        let value = await postLogin(email, password);
        if (value.message === "Auth failed") {
            this.setState({
                loginFailed: true,
            })
        } else {
            localStorage.setItem("userData", value.token);
            this.setState({
                loginFailed: false,
            })
            this.props.logIn();
        }
    }

    render() {
        let { email, password, loginFailed, register } = this.state;

        let emailCSS = "spanEmail";
        let passwordCSS = "spanPassword";

        if (email.length > 0) {
            emailCSS = "spanEmail spanEmailData";
        }

        if (password.length > 0) {
            passwordCSS = "spanPassword spanPasswordData";
        }

        if (register) {
            return (<Redirect to={"/accounts/signup/"} />)
        }

        return (
            <Wrapper>
                <div className="boxWrap">
                    <div className="loginImg">
                        <img alt="" className="loginImage" src={require('./Pictures/igLogin.png')}></img>
                    </div>
                    <div className="loginScreen">
                        <div className="login">
                            <GlobalStyle />
                            <h1 className="instagramLogoName">Instagram</h1>
                            <label className="labelEmail">
                                <span className={emailCSS}>Sähköpostiosoite</span>
                                <input autoCorrect="off" type="email" name="email" className="loginEmail" value={email} onChange={this.onValueChange}></input>
                            </label>
                            <label className="labelPassword">
                                <span className={passwordCSS}>Salasana</span>
                                <input autoCorrect="off" type="password" name="password" className="loginPassword" value={password} onChange={this.onValueChange}></input>
                            </label>
                            <button disabled={password.length < 5 || email.length < 1} type="submit" className={password.length >= 8 && email.length >= 1 ? "loginButton" : "loginButtonDisabled"} onClick={() => this.login(email, password)}>Kirjaudu sisään</button>
                            <div className="loginDivider">TAI</div>
                            <button className="loginFacebook">Kirjaudu Facebook-tunnuksilla</button>
                            {loginFailed ? <div className="loginWrong">Salasana on ikävä kyllä väärä. Tarkista salasanasi.</div> : undefined}
                            <button className="loginForgot">Unohtuiko salasana?</button>
                        </div>
                        <div className="register">
                            <div className="registerText">Eikö sinulla ole käyttäjätiliä? <button className="registerButton" onClick={() => this.setState({ register: !register })}>Rekisteröidy</button></div>
                        </div>
                        <div className="mobileDownload">
                            <div className="mobileDownloadApp">
                                Hanki sovellus.
                                </div>
                            <div className="mobileImageHolder">
                                <img alt="" className="mobileApple" src={require('./Pictures/download-appstore.png')} />
                                <img alt="" className="mobileGoogle" src={require('./Pictures/download-googleplay.png')} />
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        );
    }
}

export default navBar;