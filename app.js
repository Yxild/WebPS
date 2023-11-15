require("dotenv").configDotenv();
const Express = require("express");
const Crypto = require("crypto");

// Server Stuff
const App = Express();

// Public
App.use(function(Request, Response, Next) {
    const ipaddr = Crypto.createHmac("sha256", process.env.SERVERKEY).update(Request.ip).digest("hex")
    console.log(`PSWEBI : ${ipaddr} ${Request.method} ${Request.url}`);
    Next();
});

App.use(Express.json());
App.use(Express.static(`${__dirname}/public`));

// API
App.post(`${process.env.APIURL}packages`, function (Request, Response) {

});

App.post(`${process.env.APIURL}firmwares`, function (Request, Response) {

});

// Express Setup
const ExpressServer = App.listen(process.env.PORT || 0, function () {
    console.log(`PSWEBI : Started Web Server at port: ${ExpressServer.address().port}`);
});