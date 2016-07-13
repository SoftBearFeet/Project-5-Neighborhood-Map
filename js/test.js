// Testing Google Maps API //
var map;
function initMap() {

  //function toggleBounce() {
    //if (marker.getAnimation() !== null) {
      //marker.setAnimation(null);
    //} else {
    //  marker.setAnimation(google.maps.Animation.BOUNCE);
  //  }
  //}

  var animate = google.maps.Animation.DROP;

  map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 61.193580, lng: -149.904546},
  zoom: 15
  });
}
  //var self = this;

  var makeMarker = function(title, lats, longs) {
    var titles = title;
    var posistions = {lat: lats, lng: longs};

    var markerOptions = {
      position: posistions,
      map: map,
      title: titles,
    };

    var infowindow = new google.maps.InfoWindow({
      content: titles
    });

    new google.maps.Marker(markerOptions);

  };

  var locations = [
    new makeMarker('testing', 61.193580, -149.904546),
    new makeMarker('testing2', 61.184580, -149.915546)
  ];

  var testing = locations[0];

  testing.addListener('click', function() {
    infowindow.open(map, testing);
    alert('finally got it!');
  });

  var testingMarker = new google.maps.Marker({
    position: {lat:61.197665, lng: -149.870588},
    map: map,
    title: 'testing info'
  });

  var infoWindowTest = new google.maps.InfoWindow({
    content: 'testing info'
  });

  testingMarker.addListener('click', function() {
    infoWindowTest.open(map, testingMarker);
    alert('this was just clicked');
    console.log('test was just clicked');
  });
  //var marker1 = new google.maps.Marker({
    //position: {lat: 61.193580, lng: -149.904546},
    //map: map,
    //title: "Testing",
    //animation: animate
  //});

  //var infowindow1 = new google.maps.InfoWindow({
    //content: 'this is a test 1'
  //});

  //marker1.addListener('click', function(){
    //infowindow1.open(map, marker1);
    //toggleBounce();
  //});

  //var marker2 = new google.maps.Marker({
    //position: {lat: 61.184580, lng: -149.915546},
    //map: map,
    //title: "Testing2",
    //animation: animate
  //});

  //var infowindow2 = new google.maps.InfoWindow({
    //content: 'this is a test 2'
  //});

  //marker2.addListener('click', function(){
    //infowindow2.open(map, marker2);
  //});
//}


// Model //

//var locations = ko.observableArray([
  //{
    //position: {lat: 61.193580, lng: -149.904546},
    //map: map,
    //title: "Tommy's Burger Stop",
    //label: 'A',
    //animation: google.maps.Animation.DROP
  //},
  //{
    //position: {lat: 61.190493, lng: -149.869022},
    //map: map,
    //title: "Moose's Tooth",
    //label: 'B',
    //animation: google.maps.Animation.DROP
  //},
  //{
    //position: {lat: 61.194007, lng: -149.873564},
    //map: map,
    //title: "Steam Dot Coffee",
    //label: 'C',
    //animation: google.maps.Animation.DROP
  //},
  //{
    //position: {lat:61.197665, lng: -149.870588},
    //map: map,
    //title: "Sorrento's",
    //label: 'D',
    //animation: google.maps.Animation.DROP
  //},
  //{
    //position: {lat:61.181742, lng: -149.932760},
    //map: map,
    //title: "Gwennie's Old Alaska Restaurant",
    //label: 'E',
    //animation: google.maps.Animation.DROP
  //},
//]);
