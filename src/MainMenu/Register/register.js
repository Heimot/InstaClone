import React, { Component } from 'react';
import { Wrapper } from './RegisterCSS/RegisterCSS';
import { GlobalStyle } from '../../Fonts/GlobalFont';
import { InputData } from './registerInputCSS';
import { Redirect } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            fullName: '',
            userName: '',
            password: '',
            login: false,
            birthdayLogin: false,
            months: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
            month: "",
        }
        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        let { email, fullName, userName, password, login, birthdayLogin, months, month } = this.state;

        if (login) {
            return (<Redirect to={'/'} />)
        }

        return (
            <Wrapper>
                <div className="registerPanel">
                    {birthdayLogin ?
                        <div>
                            <GlobalStyle />
                            <h1 className="instagramLogoName">Instagram</h1>
                            <div className="registerInfo">
                                Näet kavereidesi kuvat ja videot rekisteröitymisen jälkeen.
                            </div>
                            <button className="registerViaFacebook">Kirjaudu Facebook-tunnuksilla</button>
                            <div className="registerDivider">TAI</div>
                            <label className="labelEmail">
                                <span className={InputData(email)}>Sähköpostiosoite</span>
                                <input autoCorrect="off" type="email" name="email" className="registerEmail" value={email} onChange={this.onValueChange}></input>
                            </label>
                            <label className="labelEmail">
                                <span className={InputData(fullName)}>Koko nimi</span>
                                <input autoCorrect="off" type="name" name="fullName" className="registerEmail" value={fullName} onChange={this.onValueChange}></input>
                            </label>
                            <label className="labelEmail">
                                <span className={InputData(userName)}>Käyttäjänimi</span>
                                <input autoCorrect="off" type="username" name="userName" className="registerEmail" value={userName} onChange={this.onValueChange}></input>
                            </label>
                            <label className="labelEmail">
                                <span className={InputData(password)}>Salasana</span>
                                <input autoCorrect="off" type="password" name="password" className="registerEmail" value={password} onChange={this.onValueChange}></input>
                            </label>
                            <button onClick={() => this.setState({ birthdayLogin: true })} disabled={password.length < 8 || email.length < 1 || userName.length < 1 || fullName.length < 1} type="submit" className={password.length >= 8 && email.length >= 1 && userName.length >= 1 && fullName.length >= 1 ? "registerNext" : "registerNextDisabled"} >Seuraava</button>
                            <div className="registerTerms">Rekisteröitymällä hyväksyt <b>käyttöehdot</b>. Lue <b>tietokäytäntömme</b>, joka kertoo tietojen keräämisestä, käytöstä ja jakamisesta, ja <b>evästekäytännön</b>, joka kertoo evästeiden ja muiden vastaavien tekniikoiden käytöstä.</div>
                        </div>
                        :
                        <div>
                            <img alt="" src={require('../Login/Pictures/birthday.png')}/>
                            <h1>Lisää syntymäpäiväsi</h1>
                            <p>Tämä ei ole osa julkista profiiliasi.</p>
                            <p>Miksi minun pitää antaa syntymäaikani?</p>
                            <div>
                                <select name="month" onChange={this.onValueChange} value={month}>
                                    {months.map((month) => {
                                        console.log(new Date(2020, 1, 0).getDate())
                                        return <option key={month}>{month}</option>
                                    })}
                                </select>
                                <select>

                                </select>
                                <select>

                                </select>
                                {console.log(months)}
                                {console.log(month)}
                                <button onClick={() => console.log(months.findIndex(obj => obj === month))}></button>
                            </div>
                        </div>}
                </div>
                <div className="alreadyRegistered">
                    <div className="registerDoYouOwn">Onko sinulla käyttäjätili? <button onClick={() => this.setState({ login: !login })} className="registerAlreadyRegistered">Kirjaudu sisään</button></div>
                </div>
                <div className="mobileDownload">
                    <div className="mobileDownloadApp">
                        Hanki sovellus.
                                </div>
                    <div className="mobileImageHolder">
                        <img alt="" className="mobileApple" src={require('../Login/Pictures/download-appstore.png')} />
                        <img alt="" className="mobileGoogle" src={require('../Login/Pictures/download-googleplay.png')} />
                    </div>
                </div>
            </Wrapper>
        )
    }
}

export default Register;