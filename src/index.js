const fs = require('fs');
const request = require('request');
const DiscordUser = require('./Classes/DiscordUser');


var a = new DiscordUser();
a.username = "Jeff";
a.discrim = 1234;
a.email = "jeff@jeffer.com";
a.password = "hunter2";
a.token = "mfe.xyz.qzq";
a.registeredIP = "0.0.0.0";
a.verified = false;
a.captcha = false;
a.server_invite = "xyZmfa";
console.log(a._userData);
console.log([
    a.username, a.password, a.token, a.registeredIP, a.verified, a.captcha, a.server_invite
])