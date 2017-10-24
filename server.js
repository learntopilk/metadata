// server.js
// where your node app starts

// init project
var express = require('express');
var multer = require("multer");
var upload = (multer({ dest: "metadata/" }));

var app = express();

app.use(express.static('public'));

//This simply sends people to the main page.
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

//This receives a post request and sends back to size of the file involved with it.
app.post("/metadata", upload.single('myFile'), function(request, response) {
  console.log("Post detected!");
  if (request.file) {
    console.log("File found!"); 
    response.send(request.file.size.toString());
      } else {
        console.log("No POST on Sundays!");
        response.send ("There was an error! No file found! BB");
      }
  delete request.file;
  //response.send(request.file.size.toString());
});

// listening for requests
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
