
export class HTTPClient {

    post = function (url, requestuestBody) {
        return new Promise(function (succeed, fail) {
            var request = new XMLHttpRequest();

            request.open("POST", url, true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            //console.log('request.status',request.status); 
            request.addEventListener("load", function () {
                if (request.status < 400) {
                    console.log(request.status);
                    succeed(request.responseText);
                }
                else {
                    fail(request.responseText);
                }
            });
            request.addEventListener("error", function () {
                fail(new Error("Network error POST"));
            });
            request.send(requestuestBody);
            console.log('send');
        });
    }

    get = function (url) {
        return new Promise(function (succeed, fail) {
            var request = new XMLHttpRequest();
            request.open("GET", url, true);
            console.log('url', url);
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