require('dotenv').config();

const express = require('express');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

function config(app) {
  const { SESSION_SECRET } = process.env;
  //cookie + сессии
  const sessionConfig = {
    name: 'user_sid',
    store: new FileStore(),
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000*60*60*24*7,
      httpOnly: true,
    },
  };
  //статика
  app.use(express.json());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.urlencoded({ extended: true }));

  app.use(session(sessionConfig));
}

module.exports = config;
