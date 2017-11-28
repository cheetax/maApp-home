var DomParser = require('react-native-html-parser').DOMParser;
import React from 'react'


import { HTTPClient } from '../services/HTTPClient';
//import $ from 'jquery';
//var HTTPClient = require;('./HTTPClient');

var httpClient = new HTTPClient();

var body = "UserName=cheetax&Password=Kalevala";
var url = "https://magi.mobi";
var urlLogin = "/auth/credentials";
var urlExperience = '/clan/treasures/history/tmp_experience/1';

var DomParser = require('react-native-html-parser').DOMParser

export default function GetContent() {

    // var el = document.createElement('html');


    httpClient.post(url + urlLogin, body).then((html) => {
        doc = new DomParser().parseFromString(html, 'text/html');
        // el.innerHTML(html);
        // doc.querySelectorAll();

        httpClient.get(url + urlExperience).then((html) => {
            let doc = new DomParser().parseFromString(html, 'text/html');
            console.log(doc);
            let wizards  = doc.documentElement.querySelect('tr');
            let wizard = wizards[0];
           // let w = wizard.documentElement.querySelect("a[class='tdn c_user']");
            //var parsed = htmlparser.Parser(html);
            //const parsed = parser.parseFromString(html, 'text/html');
            console.log('Experience', wizard);
            console.log(wizard.childNodes[1].querySelect("a[class='tdn c_user']"));

        }, (error) => {
            console.log(error);
        });
    }, (error) => {
        console.log(error);
    });


}