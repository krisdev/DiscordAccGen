const url = require('url');
const https = require('https');
const request = require('request');
const HttpsProxyAgent = require('https-proxy-agent');



class AccountCreator {
    initialiser() {
        return new Promise((resolve, reject) => {

            this.loadedUser = null;
            resolve();
        })
    }

    /**
     * Creates a Discord user
     * @param {object} [details] The details of the user - leave blank for random 
     */
    createUser(json = false) {
        this.options = {
            "uri": "https://discordapp.com/api/v6/auth/register",
            "method": "POST",
            "headers": {
                "authority": "discordapp.com",
                "method": "POST",
                "scheme": "https",
                "path": "/api/v6/auth/register",
                "accept-encoding": "gzip, deflate, br",
                "referer": "https://discordapp.com/register",
                "accept": "*/",
                "accept-language": "en-US",
                "content-type": "application/json",
                "origin": "https://discordapp.com",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36",
                "x-fingerprint": "",
                "x-super-properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwicmVmZXJyZXIiOiIiLCJyZWZlcnJpbmdfZG9tYWluIjoiIn0=",
            },
            "body": "",
            "json": {},
            "maxRedirects": 20,
            "proxy": "",
            "followRedirect": true,
            "timeout": 90000,
        }
        return new Promise((resolve, reject) => {

            var proxy = 'http://177.93.101.126:51691';
            var agent = new HttpsProxyAgent(proxy);
            var opts = this.options;
            console.log(opts);
            opts['agent'] = agent;
            json['invite'] = "null";
            opts['json'] = mysql_real_escape_string(json);
            let tm = setTimeout(function () {
                reject("script timeout");
                return;
            }, 110000);
            request(opts, (err, resp, body) => {
                clearTimeout(tm);
                if (!err && resp) {
                    if (resp.statusCode === 201 || resp.statusCode === 400) {
                        resolve({
                            "body": body,
                            "proxy": proxy,
                            "json": json
                        });
                    }
                }
            });

        });

    }

}

module.exports = AccountCreator;

function mysql_real_escape_string(str) {
    if (typeof str != 'string')
        return str;

    return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
        switch (char) {
            case "\0":
                return "\\0";
            case "\x08":
                return "\\b";
            case "\x09":
                return "\\t";
            case "\x1a":
                return "\\z";
            case "\n":
                return "\\n";
            case "\r":
                return "\\r";
            case "\"":
            case "'":
            case "\\":
            case "%":
                return "\\" + char; // prepends a backslash to backslash, percent,
            // and double/single quotes
        }
    });
}