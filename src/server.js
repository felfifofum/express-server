//express allows us to create a web server then use that web server
// its not a server
const express = require("express");

// assign return val of express value to a constant
// 'app' is the web server
const app = express();

// whatever we give it, it gives it to the webserver-give it a root and static(takes a folder and serves location of that folder)
// 'test' gets appended/written to end of port number - localhost:5001/test  --shows contents of html file

// http://localhost:5001/test/
app.use("/test", express.static("public"));

// or 5001,'localhost'
app.listen(5001, () => {
  //port 5001 (mac)
  console.log("Listening on port 5000");
}); //hardcoding
