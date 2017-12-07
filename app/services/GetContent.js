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
var urlExperience = '/clan/treasures/history/tmp_experience/';
var urlClan = '/clan/235/'

var DomParser = require('react-native-html-parser').DOMParser;
var users = [];
var expirienceUsers = [];


export const GetContent = () => new Promise(async (succes, fail) => {

    users = [];
    expirienceUsers = [];
    
    let getUsersExp = async (wizards) => {

        for (var i = 0; i < wizards.length; i++) {
            let href = wizards[i].childNodes[1].getElementsBySelector('a.tdn.c_user')[0].getAttribute('href'); //Id
            let expirience = wizards[i].getElementsBySelector('div.fr.mr10.cntr.mlra')[0].textContent.trim(); //опыт
            expirienceUsers.push({
                id: href,
                exp: expirience,
            });
        }
    }

    let getUsers = async (wizards) => {

        for (var i = 0; i < wizards.length; i++) {

            let href = wizards[i].getAttribute('href'); //Id
            let userExp = wizards[i].childNodes[4].textContent.trim();
            await getUser(href).then((user) => {
                user.exp = userExp;
                users.push(user);
            }, (error) => {
                console.log(error);
            })
        }
    }

    let login = () => new Promise((succes, fail) => {
        httpClient.post(url + urlLogin, body).then((html) => {
            succes({
                code: 'Ok',
                html: html
            });
        }, (error) => {
            fail(error);
        })
    }, (error) => {
        console.log(error);
        let errorDom = parser.parseFromString(error, 'text/html');

    });

    let getExperienceUsers = (i) => new Promise(function (succeed, fail) {
        httpClient.get(url + urlExperience + i).then((_html) => {
            let doc = parser.parseFromString(_html, 'text/html');
            //console.log(doc);
            let elem = doc.documentElement.getElementsBySelector('tr');
            succeed(elem);
        }, (error) => {
            fail(console.log(error));
        });
    }, (error) => {
        console.log(error);
    });

    let getClans = (i) => new Promise(function (succeed, fail) {
        httpClient.get(url + urlClan + i).then((_html) => {
            let doc = parser.parseFromString(_html, 'text/html');
            //console.log(doc);
            let elem = doc.documentElement.getElementsBySelector('a.tdn.bl.ptb2.c_89');
            succeed(elem);
        }, (error) => {
            fail(console.log(error));
        });
    }, (error) => {
        console.log(error);
    });

    let getUser = async (href) => new Promise(function (succeed, fail) {
        httpClient.get(url + href).then((html) => {
            // console.log(_html)
            var userDoc = parser.parseFromString(html, 'application/xhtml+xml');
            //var userDoc = parser.parseHtmlSpecialContent(html);
            var name = userDoc.documentElement.getElementsBySelector('div.p_end')[0].textContent;
            name = name.substring(0, name.indexOf('(') - 1);
            var rank = userDoc.documentElement.getElementsBySelector('div.c_orange.normal')[0].textContent;
            rankArray = rank.split('\n');
            rank = rankArray.length === 4 ? rankArray[2].trim() : rankArray[3].trim();
            var dayOfClan = userDoc.documentElement.getElementsBySelector('div.ptb9')[1].textContent;
            dayOfClan = dayOfClan.substring(dayOfClan.indexOf(":") + 1).trim()
            var param = userDoc.documentElement.getElementsBySelector('div.mt10.mb10.pr10');
            if (param.length === 0) {
                param = userDoc.documentElement.getElementsBySelector('div.column1');
            }
            var paramText = param[0].textContent;
            var paramArray = paramText.split('\n');
            var force = parseInt(paramArray[1].replace('Сила: ', ''));
            var health = parseInt(paramArray[3].replace('Здоровье: ', ''));
            var armor = parseInt(paramArray[5].replace('Броня: ', ''));
            var option = parseInt(((force + health + armor) / 3).toFixed(0));
            var user = {
                id: href,
                name: name,
                rank: rank,
                force: force,
                health: health,
                armor: armor,
                option: option,
                dayOfClan: dayOfClan,
            }
            succeed(user);
            //users.push(user);
        }, (error) => {
            fail(error);
        });
    }, (error) => {
        console.log(error);
    });

    console.log('Старт');

    await login().then(async (status) => {
        console.log(status);
        for (let i = 1; i <= 6; i++) {
            console.log(i);
            await getClans(i).then(async (wizards) => {
                //console.log(wizards);
                await getUsers(wizards);
            }, (error) => {
                console.log(error);
            });
        }
        for (let i = 1; i <= 6; i++) {
            //console.log(i);
            await getExperienceUsers(i).then(async (wizards) => {
                //console.log(wizards);
                await getUsersExp(wizards);
            }, (error) => {
                console.log(error);
            });
        }
        
    }, (error) => {
        console.log(error);
    });
    succes({
        users: users,
        expirienceUsers: expirienceUsers,
    });
    //console.log('Финиш', expirienceUsers);

}, (error) => {
    fail(error);
});

