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

var DomParser = require('react-native-html-parser').DOMParser




export default async function GetContent() {
    var users = [];
    let getUsers = async (wizards) => {

        for (var i = 0; i < wizards.length; i++) {

            let href = wizards[i].childNodes[1].getElementsBySelector('a.tdn.c_user')[0].getAttribute('href'); //Id
            await getUser(href).then((user) => {
                users.push(user);
            }, (error) => {
                console.log(error);
            })
        }
        return users;
    }

    let login = () => httpClient.post(url + urlLogin, body).then((html) => {
        console.log("Есть логин");
    }, (error) => {
        console.log(error);
    });

    let get = (i) => new Promise(function (succeed, fail) {
        httpClient.get(url + urlExperience + i).then((_html) => {
            let doc = new DomParser().parseFromString(_html, 'text/html');
            //console.log(doc);
            succeed(doc.documentElement.getElementsBySelector('tr'));
        }, (error) => {
            fail(console.log(error));
        });
    }, (error) => {
        console.log(error);
    });

    let getUser = async (href) => new Promise(function (succeed, fail) {
        httpClient.get(url + href).then((html) => {
            // console.log(_html)
            var userDoc = parser.parseFromString(html, 'text/html')
            var name = userDoc.documentElement.getElementsBySelector('div.p_end')[0].textContent;
            //name = name.remove(name.indexOf('(')-1);
            var rank = userDoc.documentElement.getElementsBySelector('div.c_orange.normal')[0].textContent;
            rankArray = rank.split('\n');
            rank = rankArray.length === 4 ? rankArray[2].trim() : rankArray[3].trim();
            var dayOfClan = userDoc.documentElement.getElementsBySelector('div.ptb9')[1].textContent;
            dayOfClan = dayOfClan.substring(dayOfClan.indexOf(":") + 1).trim()
            var user = {
                id: href,
                name: name,
                rank: rank,
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
    await login();

    for (let i = 1; i <= 6; i++) {
        console.log(i);
        await get(i).then(async (wizards) => {
            //console.log(wizards);
            let users = await getUsers(wizards);
        }, (error) => {
            console.log(error);
        });
    }
    console.log('Финиш', users);

    // (async () => {
    //     let main = async () => {
    //         await login();
    //     }
    // })
    // await main();   
    // console.log('вызов');

}

// export default function GetContent() {


//         httpClient.post(url + urlLogin, body).then((html) => {
//             // doc = parser.parseFromString(html, 'text/html');
//             // el.innerHTML(html);
//             // doc.querySelectorAll();

//             (async () => {
//                 await httpClient.get(url + urlExperience).then((_html) => {
//                     let doc = new DomParser().parseFromString(_html, 'text/html');
//                     //console.log(doc);
//                     let wizards = doc.documentElement.getElementsBySelector('tr');
//                     var users = getUsers(wizards);
//                     let wizard = wizards[0];


//                 }, (error) => {
//                     console.log(error);
//                 });
//             })
//         }, (error) => {
//             console.log(error);
//         });


// }