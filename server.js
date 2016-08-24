var request = require('request');
var cheerio = require('cheerio');
var page =  request('http://www.randomyoutubecomment.com/');

//Lets require/import the HTTP module
var http = require('http');



//We need a function which handles requests and send response
function handleRequest(request, response){
  response.end('tweeting random youtube comment... ' + request.url);

 //   go();

}

//Create a server
var server = http.createServer(handleRequest);






var twitterAPI = require('node-twitter-api');
var twitter = new twitterAPI({
    consumerKey: 'r4NoL17cD7ckBQU3MwGvp4pNx',
    consumerSecret: 'jlraTMrqdLCrTeMRYd4IK8d17fsudc68U0JaqKHlGMNw5EVw7c',
    callback: 'http://placeholder.com'
});



function tweet(comment) {
    twitter.statuses("update", {
            status: comment
        },
        '766021912283807744-afIC4dy8Hm57WIuEqOCp8F4QsrDrgn9',
        '9hiDITaKFo1gzI7mtNT1729a8qCD9EEy8bTQiHqM8OhGh',
        function (error, data, response) {
            if (error) {
                // something went wrong
            } else {
                // data contains the data sent by twitter
            }
        }
    );
}






function go() {

    request('http://www.randomyoutubecomment.com/', function (error, response, body) {
        if (response.statusCode == 200) {
            var $ = cheerio.load(body);
//console.log(START_URL);
            console.log($('#comment a span').html());
            console.log($('p').html());
            tweet($('#comment a span').html() + '     ' + $('p').html());

        } else {

            //  console.log(START_URL + ' Failed');
        }

    });

//keep heroku alive
    http.get('http://ytc57.herokuapp.com/');
}


//go();
setInterval(go(), 60*30*1000);




//var $ = cheerio.load(page);
//var comment = $('body').html();
console.log('lll');
//console.log(page);










server.listen(process.env.PORT || 5000, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on port 5000");
});