import { URL } from './url';

export const postLogin = (email, password) => {
    return fetch(URL + "/user/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
        .then(response => response.json())
        .then(json => {
            return json;
        })
        .catch((error) => {
            console.log(error);
        });
}

export const getPosts = () => {
    return fetch(URL + "/posts/", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('userData')
        }
    })
        .then(response => response.json())
        .catch((error) => {
            console.log(error);
        });
}