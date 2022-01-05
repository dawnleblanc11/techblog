// used similar format from just tech news
const path = require('path');
const express = require('express');
const session = require('express-session');

const sequelize = require("./config/connection");
// import the handlebars helper functions
const helpers = require("./utils/helpers");
// setup handlebars.js as the template engine
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

// creating a session object to save session token info
const sess = {
  secret: 'Super secret secret',
  // set an age limit to the cookies so they expire
  cookie: {maxAge: 900000},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Middleware
app.use(session(sess));
app.use(express.json());
// not sure if this should be true or false??
app.use(express.urlencoded({ extended: false }));
// connect the css file
app.use(express.static(path.join(__dirname, 'public')));

// sets handlebars as the defualt template engine 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// turn on routes
app.use(require('./controllers/'));

// used for connection to tdb and the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});