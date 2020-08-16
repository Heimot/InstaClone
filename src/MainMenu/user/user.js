import React, { Component } from 'react';
import './userCSS/user.css';

class User extends Component {
    render() {
        let { suggestions } = this.props;
        return (
            <div className="userNav">
                <img alt="" className="userPicture" src={require("./Picture/fortnit.jpg")}></img>
                <p className="userText">{"FortnutGamer213"}</p>
                <p className="userName">{"Fortnut"}</p>
                <p className="ehdotus">Ehdotuksia sinulle</p>
                <p className="showAll">Näytä kaikki</p>
                <div className="suggestedProfiles">
                    {suggestions.map((suggestions) =>
                        <p>
                            <img alt="" className="suggestedUserPicture" src={require("./Picture/fortnit.jpg")}></img>
                            <p className="suggestedUser">{suggestions}</p>
                            <p className="suggestedUserFollows">Seuraa sinua</p>
                            <p className="followSuggestedUser" onClick={() => console.log("FF")}>Seuraa</p>
                        </p>
                    )}
                </div>
            </div>
        );
    }
}

export default User;