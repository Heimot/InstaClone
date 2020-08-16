import styled from 'styled-components';

const media = {
    desktop: '@media(min-width: 825px)'
};

export const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-flow: column nowrap;
margin-top: 150px;
align-items: center;
background-color: #fafafa;


${media.desktop} {
    width: 1000px;
    justify-content: center;
    margin-top: 0px;
}

.boxWrap {
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: center;

    ${media.desktop} {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
    }

    .loginImg {
        visibility: hidden;
        margin-top: 0px;
        width: 0%;
        height: 0px;
        user-select: none;

        .loginImage {
            margin-bottom: 0px;
            margin-left: 0px;
            background-repeat: no-repeat;
            background-position: center;
            height: 0px;
        }

        ${media.desktop} {
            display: flex;
            visibility: visible;
            width: 48%;
            height: 750px;
            
            align-items: center;

            .loginImage {
                margin-bottom: 75px;
                margin-left: 30px;
                background-repeat: no-repeat;
                background-position: center;
                height: 600px;
            }
        }
    }
    
    .loginScreen {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column nowrap;
        width: 435px;
        height: auto;
       


        
        ${media.desktop} {
            width: 50%;
            .login {
                margin-right: 100px;
            }
    
            .register {
                margin-right: 100px;
            }
    
            .mobileDownload {
                margin-right: 100px;
            }

        }

        .login {
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            margin-top: -45px;
            margin-bottom: 10px;
            width: 80%;
            height: 50%;
            background-color: white;
            border: solid 1px #dbdbdb;

            .labelEmail:focus-within {
                .spanEmail {
                    position: absolute;
                    top: 27px;
                    left: 65px;
                }
            }

            .labelEmail {
                position: relative;
                display: inline-block; 
                width: 100%;
                .spanEmail {
                    position: absolute;
                    top: 35px;
                    left: 66px;
                    color: gray;
                    font-size: 12px;
                    font-family: Arial, Helvetica, sans-serif;
                    user-select: none;
                    transition: 0.3s;
                    cursor: text;
                }

                .spanEmailData {
                    position: absolute;
                    top: 27px;
                    left: 65px;
                    cursor: text;
                }

                .loginEmail {
                    margin-top: 25px;
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


            .labelPassword:focus-within {
                .spanPassword {
                    position: absolute;
                    top: 7px;
                    left: 65px;
                }
            }

            .labelPassword {
                position: relative;
                display: inline-block; 
                width: 100%;
                .spanPassword {
                    position: absolute;
                    top: 15px;
                    left: 66px;
                    color: gray;
                    font-size: 12px;
                    font-family: Arial, Helvetica, sans-serif;
                    user-select: none;
                    transition: 0.3s;
                    cursor: text;
                }

                .spanPasswordData {
                    position: absolute;
                    top: 7px;
                    left: 65px;
                    cursor: text;
                }

                .loginPassword {
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

            .loginButton {
                margin-top: 10px;
                width: 68%;
                height: 30px;
                background-color: #25a9d9;
                border-radius: 3px;
                font-weight: bold;
                color: white;
                border: solid 1px #25a9d9;
                outline: none;
            }

            .loginDivider {
                margin-top: 10px;
                margin-bottom: 25px;
                color: gray;
                font-size: 13px;
            }

            .loginButtonDisabled {
                margin-top: 10px;
                width: 68%;
                height: 30px;
                background-color: #25a9d9;
                border-radius: 3px;
                font-weight: bold;
                color: white;
                border: solid 1px #25a9d9;
                opacity: 0.4;
                outline: none;
            }

            .loginFacebook {
                color: #4267B2;
                font-weight: bold;
                background: none;
                border: none;
                margin-bottom: 20px;
                outline: none;
                user-select: none;
                cursor: pointer;
            }

            .loginButton:active, .loginForgot:active, .loginFacebook:active {
                opacity: 0.2;
            }

            .loginForgot {
                font-size: 12px;
                background: none;
                border: none;
                margin-bottom: 20px;
                outline: none;
                user-select: none;
                cursor: pointer;
            }

            .loginWrong {
                font-size: 13px;
                max-width: 250px;
                color: red;
                margin-bottom: 25px;
                user-select: none;
            }
        }

        .register {
            display: flex;
            margin-bottom: 20px;
            width: 80%;
            height: 65px;
            background-color: white;
            border: solid 1px #dbdbdb;
            justify-content: center;
            align-items: center;

            .registerText {
                font-size: 13px;
                .registerButton {
                    background: none;
                    border: none;
                    outline: none;
                    color: #25a9d9;
                    font-weight: bold;
                    font-size: 13px;
                    cursor: pointer;
                }
                .registerButton:active {
                    opacity: 0.2;
                }
            }
        }

        .mobileDownload {
            display: inline-block;
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


    }
}
`;

export const Footer = styled.div`
    width: 100%;
    background-color: #fafafa;
    height: 50px;
`;
