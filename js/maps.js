// inicia la Configuración

let map, marker, watchID, geoLoc;

function initMap() {

  const myLatLng = { lat: 10.008784, lng: -84.261624 };
  map = new google.maps.Map(document.getElementsById("map"), {
    zoom: 15,
    center: myLatLng
  });
  marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Tasty Bites"
  });
  getPosition();
}

function getPosition() {
  if(navigator.geolocation) {
    geoLoc = navigator.geolocation;
    watchID = geoLoc.watchPosition(showLocationOnMap, errorHandler);
  } else {
    alert("Lo sentimos, el navegador no soporta geolocalización");
  }
}

function showLocationOnMap(position) {
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const directionsService = new google.maps.DirectionsService();

  var latitud = position.coords.latitude;
  var longitud = position.coords.longitude;
  const myLatLng = {lat: latitud, lng: longitud};
  directionsRenderer.setMap(map);
  calculateAndDisplayRoute(directionsService, directionsRenderer, myLatLng);
}

function errorHandler(err) {
  if(err.code == 1) {
    alert("Error: Acceso denegado!");
  } else if (err.code == 2) {
    alert("Error: Posición no existe o no se encuentra!");
  }
}

function calculateAndDisplayRoute(directionsService, directionsRenderer, myLatLng) {
  directionsService.route(
    {
      origin: {lat: myLatLng.lat, lng: myLatLng.lng},
      destination: { lat: 10.008784, lng: -84.261624 },
      // tambien se puede usar de otro modo WALKING - BICYCLING - TRANSIT
      travelMode: google.maps.TravelMode["DRIVING"]
    },
    (response, status) => {
      if (status == "OK") {
        directionsRenderer.setDirections(response);
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );
}

window.initMap = initMap;