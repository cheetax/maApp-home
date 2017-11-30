var DomParser = require('react-native-html-parser').DOMParser;
import React from 'react'


import { HTTPClient } from '../services/HTTPClient';
//import $ from 'jquery';
//var HTTPClient = require;('./HTTPClient');

var httpClient = new HTTPClient();
var parser = new DomParser();
var body = "UserName=cheetax&Password=Kalevala";
var url = "https://magi.mobi";
var urlLogin = "/auth/credentials";
var urlExperience = '/clan/treasures/history/tmp_experience/1';

var DomParser = require('react-native-html-parser').DOMParser

function getUsers(wizards) {

    for (var i = 0; i < wizards.length; i++) {

        let href = wizards[i].childNodes[1].querySelect('a')[0].getAttribute('href'); //Id
        // let w = wizard.documentElement.querySelect("a[class='tdn c_user']");
        //console.log('wizard', wizard);
        console.log('href', href);
        var res = httpClient.get(url + href).then((_html) => {
            console.log(_html)
        });
        // => {
        //     var user = parser.parseFromString(html, 'text/html')
        //     console.log('user', user);
        // console.log('user', user);
    }
    return {}
}

export default function GetContent() {

    // var el = document.createElement('html');


    httpClient.post(url + urlLogin, body).then((html) => {
        // doc = parser.parseFromString(html, 'text/html');
        // el.innerHTML(html);
        // doc.querySelectorAll();

        var res = httpClient.get(url + urlExperience).then((html) => {
            let doc = new DomParser().parseFromString(html, 'text/html');
            console.log(doc);
            let wizards = doc.documentElement.getElementsBySelector('tr');
            var users = getUsers(wizards);

            let wizard = wizards[0];


        }, (error) => {
            console.log(error);
        });
    }, (error) => {
        console.log(error);
    });


}