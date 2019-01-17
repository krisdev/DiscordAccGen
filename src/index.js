const fs = require('fs');
const request = require('request');
const DiscordUser = require('./Classes/DiscordUser');
const AccountCreator = require('./Classes/AccountCreator');

var a = new AccountCreator();

a.createUser({
    "fingerprint": "",
    "email": "qtmemes@krisdev.me",
    "captcha_key": null,
    "username": "huAIShwudKJA",
    "password": "2d38j76sfys",
}).then(d => {
    console.log(d);
}).catch(e => {
    console.log(e);
})