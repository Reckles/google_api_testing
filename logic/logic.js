'use strict'

var rp = require('request-promise');

const googleKey = 'AIzaSyAIWcA9kwMWxi55qkn3u3mkXjBa8nzZQ3k'

exports.GetHomePage = (req, res) => res.render('index.ejs', {title: 'Hello Denis'})

exports.GetPlaces = (req, res) => {
  const {place, range, location} = req.query
  const options = {
    host: 'https://maps.googleapis.com',
    port: 80,
    // path: `https://maps.googleapis.com/maps/api/place/radarsearch/json?location=${location.split(',')[0]},${location.split(',')[1]}&radius=${range}&type=${place}&key=${googleKey}`,
    path: `https://maps.googleapis.com/maps/api/place/radarsearch/json?location=51.503186,-0.126446&radius=5000&type=museum&key=AIzaSyAIWcA9kwMWxi55qkn3u3mkXjBa8nzZQ3k`,
    method: 'GET'
  }

  rp(options.path)
  .then(result => {
    
    res.send(result)
  })
}