
var DomParser = require('react-native-html-parser').DOMParser

function post(url, requestuestBody) {
    return new Promise(function (succeed, fail) {
        var request = new XMLHttpRequest();
        request.open("POST", url, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.addEventListener("load", function () {
            if (request.status < 400)
                succeed(request.responseText);
            else
                fail(new Error("Request failed: " + request.statusText));
        });
        request.addEventListener("error", function () {
            fail(new Error("Network error"));
        });
        request.send(requestuestBody);
    });
}

function get(url) {
    return new Promise(function (succeed, fail) {
        var request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.addEventListener("load", function () {
            if (request.status < 400)
                succeed(request.responseText);
            else
                fail(new Error("Request failed: " + request.statusText));
        });
        request.addEventListener("error", function () {
            fail(new Error("Network error"));
        });
        request.send();
    });
}

var body = "UserName=cheetax&Password=Kalevala";
var urlLogin = "https://magi.mobi/auth/credentials"
var urlExperience = 'https://magi.mobi/clan/treasures/history/tmp_experience/1'

post(urlLogin, body).then((html) => {
    //console.log(text);
}, (error) => {
    //console.log(error);
});

//var htmlparser = htmlprser2;

get(urlExperience).then((html) => {
    let doc = new DomParser().parseFromString(html,'text/html')    
    //var parsed = htmlparser.Parser(html);
    //const parsed = parser.parseFromString(html, 'text/html');
    console.log('Experience',doc);
    
}, (error) => {
    console.log(error);
});

// var request = new XMLHttpRequest();
// // function reqReadyStateChange() {
// //     if (request.readyState == 4 && request.status == 200)
// //         document.getElementById("output").innerHTML=request.responseText;
// // }
// request.open("POST", "https://magi.mobi/auth/credentials", true);
// request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// //request.onreadystatechange = reqReadyStateChange;
// request.send(body);
// request.addEventListener("load", function () {
//     //req.send(encodeURIComponent("UserName=cheetax&Password=Kalevala"));
//     //req.send(null);
//     console.log("Done:", request.status);
//     console.log(request.getResponseHeader("content-type"));
//     console.log(request.status, request.);    
// });


var initialState = [
    {
        id: 1,
        user: "Djon",
        year: 2015
    },
    {
        id: 2,
        user: "Djon",
        year: 2015
    },
    {
        id: 3,
        user: "Djon",
        year: 2015
    },
    {
        id: 4,
        user: "Djon",
        year: 2015
    },
    {
        id: 5,
        user: "Gray",
        year: 2011
    }
]
export default function userInfo(state = initialState, action) {
    //tate.merge(initialState);
    switch (action.type) {
        case "SET_YEAR_UP":
            state[action.object].year += 1;
            console.log("actionUp", state);
            //break;
            return [...state];
        case "SET_YEAR_DOWN":
            state[action.object].year -= 1;
            console.log("actionDown", state);
            // break;
            return [...state];
        default:
            return state;
    }
    // console.log("actionEnd", state);
    // return state;
}