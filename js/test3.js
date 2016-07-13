// Model //

var location = [
  {
    title: 'testing',
    lat: 61.193580,
    long: -149.904546
  },
  {
    title: 'testing2',
    lat: 61.184580,
    long: -149.915546
  }
];

var ViewModel = function() {
  var self = this;

  var markMarker = function(data) {
    self.title = data.title;
    self.lat = data.lat;
    self.long = data.long;
    self.latLng = self.lat + ', ' + self.long;
  };

  for (i=0; i < location.length; i++){
    console.log('test'+ i);
  };
};

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 61.193580, lng: -149.904546},
  zoom: 15
  });

  ko.applyBindings(new ViewModel());
};
