var DomParser = require('react-native-html-parser').DOMParser;
import React from 'react-native'


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

        let href = wizards[i].childNodes[1].getElementsBySelector('a')[0].getAttribute('href'); //Id
        // let w = wizard.documentElement.querySelect("a[class='tdn c_user']");
        //console.log('wizard', wizard);
       // console.log('href', href);
        var res = httpClient.get(url + href).then((html) => {
           // console.log(_html)
            var userDoc = parser.parseFromString(html, 'text/html')
            var name = userDoc.documentElement.getElementsBySelector('div.p_end')[0].textContent;
            //name = name.remove(name.indexOf('(')-1);
            var rank = userDoc.documentElement.getElementsBySelector('div.c_orange.normal')[0].textContent;
            rankArray = rank.split('\n');
            rank = rankArray.length === 4 ? rankArray[2].trim() : rankArray[3].trim();
            var dayOfClan = userDoc.documentElement.getElementsBySelector('div.ptb9')[1].textContent;
            dayOfClan = dayOfClan.substring(dayOfClan.indexOf(":")+1).trim()
            console.log('user', rank);
        });
        // => {
        //     var user = parser.parseFromString(html, 'text/html')
        //     console.log('user', user);
        // console.log('user', user);
    }
    return {}
}

export default function GetContent() {    

    httpClient.post(url + urlLogin, body).then((html) => {
        // doc = parser.parseFromString(html, 'text/html');
        // el.innerHTML(html);
        // doc.querySelectorAll();

        var res = httpClient.get(url + urlExperience).then((html) => {
            let doc = new DomParser().parseFromString(html, 'text/html');
            //console.log(doc);
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