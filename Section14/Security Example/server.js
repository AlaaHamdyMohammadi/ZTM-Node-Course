const fs = require("fs");
const path = require("path");
const https = require("https");
const helmet = require("helmet");
const express = require("express");
const app = express();
require("dotenv").config();
const passport = require("passport");
const { Strategy } = require("passport-google-oauth20");
const cookieSession = require('cookie-session');


const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  COOKIE_KEY_1: process.env.COOKIE_KEY_1,
  COOKIE_KEY_2: process.env.COOKIE_KEY_2,
};

// Strategy of how passport authenticate users
const AUTH_OPTIONS = {
  callbackURL: "/auth/google/callback",
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
};

function verifyCallback(accessToken, refreshToken, profile, done) {
  console.log(`Google Profile: ${profile}`);
  done(null, profile);
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));


// Save session to cookie
passport.serializeUser((user, done) => { // To set data into cookie
    done(null, user.id) // If no error
})

// Read session from cookie
passport.deserializeUser((id, done) => { // To get data from cookie
    done(null, id)
})

app.use(helmet());

app.use(cookieSession({
    name: 'session',
    maxAge: 60* 60* 24* 1000, // one day
    keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2], //List of secret values used to keep your cookies secure
}))

app.use(passport.initialize()); //help to set up passport
app.use(passport.session()); //help to set up passport


function checkLoggedIn(req, res, next) {
  const isLoggedIn = req.isAuthenticated() && req.user;
  if (!isLoggedIn) {
    return res.status(401).json({
      error: "You must log in !",
    });
  }
  next();
}

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email"],
  })
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/",
    session: true,
  }),
  (req, res) => {
    console.log("Google called us back");
  }
);
app.get("/auth/logout", (req, res) => {
    req.logout() // Remove req.user and clears any logged in session
    return res.redirect('/');
});

app.get("/secret", checkLoggedIn, (req, res) => {
  return res.send("Personal Secret");
});

app.get("/failure", (req, res) => {
  return res.send("Faild to log in");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 4000;
https
  .createServer(
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(PORT, () => {
    console.log(`app are working on port ${PORT}...`);
  });
