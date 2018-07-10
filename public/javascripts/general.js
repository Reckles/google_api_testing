"use strict"

let correntLocation
document.addEventListener("DOMContentLoaded", setPlcaesDropDownList)
document.addEventListener("DOMContentLoaded", navigator.geolocation.getCurrentPosition(locationData))

function setPlcaesDropDownList(e, places) {
  const elems = document.querySelectorAll(".intrestPlace");
  const instances = M.Autocomplete.init(elems);  

  if(places) {
    instances[0].updateData({
      "Apple": null,
      "Microsoft": null,
      "Google": "https://placehold.it/250x250"
    });
  }
  else {
    instances[0].updateData({
      "Store": null,
      "Microsoft": null,
      "Google": "https://placehold.it/250x250"
    });
  }
}

document.querySelector("#btnGetPlaces").addEventListener("click", getPlacesByParameters)

// function getPlacesByParameters() {
//   const intrestPlace = document.querySelector(".intrestPlace").value
//   const range = document.querySelector(".range").value

//   fetch(`/places?place=${intrestPlace}&range=${range}&location=${correntLocation.lat},${correntLocation.lon}`)
//   .then(places => {
//     document.querySelector('#responce').innerHTML = places
//   })
// }

function getPlacesByParameters() {
  const intrestPlace = document.querySelector(".intrestPlace").value
  const range = document.querySelector(".range").value

  $.get(`/places?place=${intrestPlace}&range=${range}&location=${correntLocation.lat},${correntLocation.lon}`)
  .done(result => {
    let a
  })
}

function locationData(result) {
  correntLocation = {lat: result.coords.latitude, lon: result.coords.longitude}
}