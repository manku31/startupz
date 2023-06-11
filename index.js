const express = require("express");
const port = process.env.port || 8000;
const app = express();
const expressLayout = require('express-ejs-layouts');
const db = require("./config/mongoose");
const multer = require('multer');
const path = require("path")

// use for session cookie
const session = require("express-session"); // help to store session cookie
const passport = require("passport");
const passportLocal = require("./config/passport");

// it's store the session cookie in database which is mongodb
const MongoStore = require("connect-mongo");

// this help to show the value which pass eg: form value
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// css and js path become static
app.use(express.static("assets"));

app.use("/assets", express.static(__dirname + "/assets"));

// Express ejs layout ==> page render
app.use(expressLayout);
// extract style and script from sub page to layout page
app.set("layout extractStyles", true)
app.set("layout extractScripts", true)

// setup view engine
app.set("view engine", "ejs");
app.set("views", "views");

// setup a middleware for session cookie
app.use(
  session({
    name: "startupz-session",
    secret: "secret",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: MongoStore.create(
      {
        mongoUrl: "mongodb://localhost/startupz",
      },
      function (err) {
        console.log(err || "connect-mongo setup ok");
      }
    ),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

// Main router connection
app.use("/", require("./routers"));

// Server running
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in the Server, The error is ${err}`);
  }

  console.log(`Server Running Fine on Port : ${port}`);
});
