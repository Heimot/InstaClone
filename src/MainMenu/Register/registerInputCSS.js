export const InputData = (email, fullName, userName, password) => {
    if (email !== undefined && email.length > 0) {
        return "spanEmail spanEmailData";
    }
    if (fullName !== undefined && fullName.length > 0) {
        return "spanEmail spanEmailData";
    }
    if (userName !== undefined && userName.length > 0) {
        return "spanEmail spanEmailData";
    }
    if (password !== undefined && password.length > 0) {
        return "spanEmail spanEmailData";
    }
    return "spanEmail";
}