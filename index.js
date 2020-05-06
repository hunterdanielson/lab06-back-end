// import express from 'express';
const dotenv = require('dotenv');

dotenv.config();
const express = require('express');
const cors = require('cors');

// bag of coins that indy uses
const geoData = require('./data/geo.json');
const weatherData = require('./data/weather.json');
// we're going to replace this with a fetch to the API

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

function mungeGeo(geoData) {


  return mungedGeo;
}

function mungeWeather(weatherData) {
  // munge that data

  return mungedWeather;
}

app.get('/location', (req, res) => {
// req will have query parameters and some user data
  try {
    // const mungedResponse = mungeGeo(data);
    res.json(geoData);
  } catch (e) {
    console.error(e);

    res.json({
      status: 500,
      responseText: e,
    });
  }
});


app.get('/weather', (req, res) => {
  // req will have query parameters and some user data
  
  res.json(weatherData);
});

// wildstar matches ANYTHING
app.get('*', (req, res) => {
  // req will have query parameters and some user data

  // res.json is like the RETURN statement
  res.status(404).json({
    error: 'no such route!',
  });
});


app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });