
export class HTTPClient {

    post = function (url, requestuestBody, header) {
        return new Promise(function (succeed, fail) {
            var request = new XMLHttpRequest();
            //request.withCredentials = true;
            request.open("POST", url, true);
            //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            request.setRequestHeader('Content-Type', header);
            //console.log('request.status',request.status);

            request.addEventListener("load", function () {
                if (request.status < 400) {
                   // console.log(request.status);
                    succeed(request.responseURL); //request.responseText
                }
                else {
                    fail(request.responseURL);
                }
            });
            request.addEventListener("error", function () {
                fail(new Error("Network error POST"));
            });
            request.send(requestuestBody);
           //console.log('send');
        });
    }

    get = function (url) {
        return new Promise(function (succeed, fail) {
            var request = new XMLHttpRequest();
            request.open("GET", url, true);
            //console.log('url', url);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            request.addEventListener("load", () => {
                if (request.status < 400) {
                    //console.log(request.status);
                    succeed(request.responseText);
                }
                else {
                    // console.log(request.status);
                    fail(request.statusText);
                }
            });
            request.addEventListener("error", function () {
                fail(new Error("Network error GET"));
            });
            request.send();
        });
    }
}