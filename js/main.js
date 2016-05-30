// Testing Google Maps //
function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 61.193580, lng: -149.904546},
  zoom: 15
  });

  var marker = new google.maps.Marker({
    position: {lat: 61.193580, lng: -149.904546},
    map: map,
    title: "Testing",
    label: 'A'
  });
}


// Model //

var animate = google.maps.Animation.DROP;

var locations = ko.observableArray([
  {
    position: {lat: 61.193580, lng: -149.904546},
    map: map,
    title: "Tommy's Burger Stop",
    label: 'A',
    animation: animate
  },
  {
    position: {lat: 61.190493, lng: -149.869022}
    map: map,
    title: "Moose's Tooth",
    label: 'B',
    animation: animate
  },
  {
    position: {lat: 61.194007, lng: -149.873564}
    map: map,
    title: "Steam Dot Coffee",
    label: 'C',
    animation: animate
  },
  {
    position: {lat:61.197665, lng: -149.870588}
    map: map,
    title: "Sorrento's",
    label: 'D',
    animation: animate
  },
  {
    position: {lat:61.181742, lng: -149.932760}
    map: map,
    title: "Gwennie's Old Alaska Restaurant",
    label: 'E',
    animation: animate
  },
]);

// View Model //

//ko.applyBindings(myViewModel);
