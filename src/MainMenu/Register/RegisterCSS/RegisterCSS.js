import styled from 'styled-components';

const media = {
    desktop: '@media(min-width: 825px)'
};

export const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-flow: column nowrap;
align-items: center;
background-color: #fafafa;


${media.desktop} {
    width: 800px;
}

.registerPanel {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin-top: 10px;
    width: 325px;
    height: auto;
    background-color: white;
    border: solid 1px #dbdbdb;
    border-radius: 2px;

    .registerInfo {
        color: gray;
        font-weight: bold;
        font-size: 15px;
        opacity: 0.7;
    }

    .registerTerms {
        margin-top: 15px;
        margin-bottom: 40px;
        color: gray;
        font-size: 11px;
        opacity: 0.9;
        width: 70%;
    }

    .registerViaFacebook {
        margin-top: 15px;
        width: 70%;
        height: 30px;
        background-color: #25a9d9;
        border-radius: 3px;
        font-weight: bold;
        color: white;
        border: solid 1px #25a9d9;
        outline: none;
    }

    .registerNext {
        margin-top: 15px;
        width: 70%;
        height: 30px;
        background-color: #25a9d9;
        border-radius: 3px;
        font-weight: bold;
        color: white;
        border: solid 1px #25a9d9;
        outline: none;
    }

    .registerNextDisabled {
        margin-top: 15px;
        width: 70%;
        height: 30px;
        background-color: #25a9d9;
        border-radius: 3px;
        font-weight: bold;
        color: white;
        border: solid 1px #25a9d9;
        outline: none;
        opacity: 0.5;
    }

    .registerViaFacebook:active, .registerNext:active {
        opacity: 0.3;
    }

    .registerDivider {
        color: grey;
        margin-top: 10px;
        font-size: 13px;
        margin-bottom: 10px
    }

    .labelEmail:focus-within {
        .spanEmail {
            position: absolute;
            top: 7px;
            left: 60px;
        }
    }

    .labelEmail {
        position: relative;
        display: inline-block; 
        width: 100%;
        .spanEmail {
            position: absolute;
            top: 15px;
            left: 61px;
            color: gray;
            font-size: 12px;
            font-family: Arial, Helvetica, sans-serif;
            user-select: none;
            transition: 0.3s;
            cursor: text;
        }

        .spanEmailData {
            position: absolute;
            top: 7px;
            left: 60px;
            cursor: text;
        }

        .registerEmail {
            margin-top: 5px;
            width: 65%;
            height: 15px;
            color: black;
            font-size: 12px;
            font-family: Arial, Helvetica, sans-serif;
            background-color: #fafafa;
            border: solid 1px #dbdbdb;
            border-radius: 3px;
            padding-top: 15px;
            padding-left: 10px;
            outline: none;
        }
    }
}

.alreadyRegistered {
    display: flex;
    margin-top: 25px;
    width: 325px;
    height: 75px;
    background-color: white;
    border: solid 1px #dbdbdb;
    border-radius: 3px;
    justify-content: center;
    align-items: center;

    .registerDoYouOwn {
        font-size: 13px;
        .registerAlreadyRegistered {
            background: none;
            border: none;
            outline: none;
            color: #25a9d9;
            font-weight: bold;
            font-size: 13px;
            cursor: pointer;
            padding-top: 37.5px;
            padding-bottom: 37.5px;
        }
        .registerAlreadyRegistered:active {
            opacity: 0.2;
        }
    }
}

.mobileDownload {
    display: inline-block;
    margin-top: 20px;
    width: 260px;
    height: 75px;
    justify-content: center;
    align-items: center;

    .mobileDownloadApp {
        font-size: 13px;
    }

    .mobileImageHolder {
        display: flex;
        margin-top: 20px;
        justify-content: space-between;
        align-items: center;

        .mobileApple {
            height: auto;
            width: 125px;
            cursor: pointer;
            user-select: none;
        }

        .mobileGoogle {
            height: auto;
            width: 125px;
            cursor: pointer;
            user-select: none;
        }
        .mobileApple:active, .mobileGoogle:active {
            opacity: 0.2;
        }
    }
}
`;