/**
 * Holds a Discord user.
 */
class DiscordUser {
    constructor() {

        var userdata = {
            username:null,
            discrim:null,
            email:null,
            password:null,
            token:null,
            registeredIP:null,
            verified:null,
            captcha:null,
            server_invite:null,
        };
        this._userData = userdata;
    }

    get username() {
        return this._userData.username;
    }
    set username(username) {
        this._userData.username = username;
    }
    get discrim() {
        return this._userData.discrim;
    }
    set discrim(discrim) {
        this._userData.discrim = discrim;
    }
    get email() {
        return this._userData.discrim;
    }
    set email(email) {
        this._userData.email = email;
    }
    get password() {
        return this._userData.password;
    }
    set password(password) {
        this._userData.password = password;
    }
    get token() {
        return this._userData.token;
    }
    set token(token) {
        this._userData.token = token;
    }
    get registeredIP() {
        return this._userData.registeredIP;
    }
    set registeredIP(registeredIP) {
        this._userData.registeredIP = registeredIP;
    }
    get verified() {
        return this._userData.verified;
    }
    set verified(verified) {
        this._userData.verified = verified;
    }
    get captcha() {
        return this._userData.captcha;
    }
    set captcha(captcha) {
        this._userData.captcha = captcha;
    }
    get server_invite() {
        return this._userData.server_invite;
    }
    set server_invite(server_invite) {
        this._userData.server_invite = server_invite;
    }

}

module.exports = DiscordUser;