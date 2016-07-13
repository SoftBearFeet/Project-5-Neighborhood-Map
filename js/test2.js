var map;

// Create Google Maps
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 61.193580, lng: -149.904546},
  zoom: 15
  });

  var locations = [
    new makeMarker('testing', 61.193580, -149.904546),
    new makeMarker('testing2', 61.184580, -149.915546)
  ];
};

// Create Marker function
function makeMarker(title, lats, longs) {
  titles = title;
  cords = {lat: lats, lng: longs};
  var markerOptions = {
    position: cords,
    map: map,
    title: titles
  };

  new google.maps.Marker(markerOptions);
};
