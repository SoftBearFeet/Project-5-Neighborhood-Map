function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 61.193580, lng: -149.904546},
  zoom: 14
  });

  ko.applyBindings(new ViewModel());
};

var locations = [
  {
    title: "Tommy's Burger Stop",
    lat: 61.1935804,
    long: -149.9067413,
    latLng: {lat: 61.1935804, lng: -149.9067413}
  },
  {
    title: "Moose's Tooth",
    lat: 61.190492,
    long: -149.8712167,
    latLng: {lat: 61.190492, lng: -149.8712167}
  },
  {
    title: "SteamDot Coffee",
    lat: 61.1940085,
    long: -149.8757585,
    latLng: {lat: 61.1940085, lng: -149.8757585}
  },
  {
    title: "Sorrento's",
    lat: 61.1976654,
    long: -149.8727823,
    latLng: {lat: 61.1976654, lng: -149.8727823}
  },
  {
    title: "Gwennie's Old Alaska Restaurant",
    lat: 61.1817417,
    long: -149.9349547,
    latLng: {lat: 61.1817417, lng: -149.9349547}
  },
  {
    title: "Natural Pantry",
    lat: 61.187265,
    long: -149.881224,
    latLng: {lat: 61.187265, lng: -149.881224}
  },
  {
    title: "Lucky Wishbone",
    lat: 61.217471,
    long: -149.865933,
    latLng: {lat: 61.217471, lng: -149.865933}
  },
  {
    title: "Snow City Cafe",
    lat: 61.2184045,
    long: -149.9056237,
    latLng: {lat: 61.2184045, lng: -149.9056237}
  }
];

// Model //

var ViewModel = function() {
  var self = this;
console.log ('hello');
  var markMarker = function(data) {
    self.title = ko.observable(data.title);
    //self.lat = ko.observable(data.lat);
    //self.long = ko.observable(data.long);
    self.latLng = ko.observable(data.latLng);
  };

  self.toggleBounce = function(marker) {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  };

  self.allLocations = ko.observableArray(locations);

  self.allLocations().forEach(function(locations) {
    marker = new google.maps.Marker({
      map: map,
      position: locations.latLng,
      title: locations.title,
      animation: google.maps.Animation.DROP
    });

    locations.marker = marker;

    var contentString = 'you opened a info-window for: ' + locations.title;

    google.maps.event.addListener(locations.marker, 'click', function() {
      locations.infoWindow = new google.maps.InfoWindow({
        content: contentString
      });
      self.toggleBounce(locations.marker);
      map.panTo(locations.latLng);


      locations.infoWindow.open(map, locations.marker);
    })
  });


};
