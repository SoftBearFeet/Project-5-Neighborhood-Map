// Global Variables //
var infowindow,
    markerArray = [],
    filteredLocations = []

// Callback function for Google Maps //
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 61.193580, lng: -149.904546},
  zoom: 14
  });

  infowindow = new google.maps.InfoWindow();

  ko.applyBindings(new ViewModel());
};

// Data for Locations //
var locations = [
  {
    title: "Tommy's Burger Stop",
    lat: 61.1935804,
    long: -149.9067413,
    latLng: {lat: 61.1935804, lng: -149.9067413},
    venueId: '4b9c18ddf964a520ab4936e3',
    type: 'restaurant',
    fbUrl: 'https://www.facebook.com/TOMMYSBURGERSTOP/'
  },
  {
    title: "Moose's Tooth",
    lat: 61.190492,
    long: -149.8712167,
    latLng: {lat: 61.190492, lng: -149.8712167},
    venueId: '4b396e16f964a5207a5c25e3',
    type: 'restaurant',
    fbUrl: 'https://www.facebook.com/moosestoothpub/'
  },
  {
    title: "SteamDot Coffee",
    lat: 61.1940085,
    long: -149.8757585,
    latLng: {lat: 61.1940085, lng: -149.8757585},
    venueId: '511e8e68e4b07e6420fe1232',
    type: 'coffee',
    fbUrl: 'https://www.facebook.com/SteamDotCoffeeCompany/'
  },
  {
    title: "SteamDot Coffee",
    lat: 61.121657,
    long: -149.862175,
    latLng: {lat: 61.121657, lng: -149.862175},
    venueId: '4c127f0b77cea593ac28cd60',
    type: 'coffee',
    fbUrl: 'https://www.facebook.com/SteamDotCoffeeCompany/'
  },
  {
    title: "Kaladi Brothers Coffee",
    lat: 61.216750,
    long: -149.895127,
    latLng: {lat: 61.216750, lng: -149.895127},
    venueId: '4b4b7e5ff964a520e89d26e3',
    type: 'coffee',
    fbUrl: 'https://www.facebook.com/KaladiBrothersCoffee/'
  },
  {
    title: "Kaladi Brothers Coffee",
    lat: 61.194508,
    long: -149.908376,
    latLng: {lat: 61.194508, lng: -149.908376},
    venueId: '4b4a1cfef964a520117b26e3',
    type: 'coffee',
    fbUrl: 'https://www.facebook.com/KaladiBrothersCoffee/'
  },
  {
    title: "Kaladi Brothers Coffee",
    lat: 61.181485,
    long: -149.751496,
    latLng: {lat: 61.181485, lng: -149.751496},
    venueId: '4b4a7509f964a5203e8826e3',
    type: 'coffee',
    fbUrl: 'https://www.facebook.com/KaladiBrothersCoffee/'
  },
  {
    title: "Kaladi Brothers Coffee",
    lat: 61.158345,
    long: -149.853792,
    latLng: {lat: 61.158345, lng: -149.853792},
    venueId: '4b2bcffef964a5207ebb24e3',
    type: 'coffee',
    fbUrl: 'https://www.facebook.com/KaladiBrothersCoffee/'
  },
  {
    title: "Kaladi Brothers Coffee",
    lat: 61.131043,
    long: -149.865175,
    latLng: {lat: 61.131043, lng: -149.865175},
    venueId: '4bea34cf246fb7139ddeabdf',
    type: 'coffee',
    fbUrl: 'https://www.facebook.com/KaladiBrothersCoffee/'
  },
  {
    title: "Kaladi Brothers Coffee",
    lat: 61.109212,
    long: -149.862310,
    latLng: {lat: 61.109212, lng: -149.862310},
    venueId: '4c11e0ebf6ba9c7462d41874',
    type: 'coffee',
    fbUrl: 'https://www.facebook.com/KaladiBrothersCoffee/'
  },
  {
    title: "Cafe Amsterdam",
    lat: 61.193147,
    long: -149.874441,
    latLng: {lat: 61.193147, lng: -149.874441},
    venueId: '4b50fbd6f964a520e63b27e3',
    type: 'restaurant',
    fbUrl: 'https://www.facebook.com/Cafe-Amsterdam-Anchorage-Alaska-104900358545/'
  },
  {
    title: "Sorrento's",
    lat: 61.1976654,
    long: -149.8727823,
    latLng: {lat: 61.1976654, lng: -149.8727823},
    venueId: '4bc5728569369521111d8488',
    type: 'restaurant',
    fbUrl: 'https://www.facebook.com/Sorrentos-Restaurant-119733714727336/'
  },
  {
    title: "Gwennie's Old Alaska Restaurant",
    lat: 61.1817417,
    long: -149.9349547,
    latLng: {lat: 61.1817417, lng: -149.9349547},
    venueId: '4b67ffb4f964a5206a632be3',
    type: 'restaurant',
    fbUrl: 'https://www.facebook.com/pages/Gwennies-Old-Alaska-Restaurant'
  },
  {
    title: "Crow's Nest",
    lat: 61.218040,
    long: -149.900433,
    latLng: {lat: 61.218040, lng: -149.900433},
    venueId: '4b6800bff964a52091632be3',
    type: 'restaurant',
    fbUrl: 'https://www.facebook.com/The-Crows-Nest-205739526186510/'
  },
  {
    title: "Lucky Wishbone",
    lat: 61.217471,
    long: -149.865933,
    latLng: {lat: 61.217471, lng: -149.865933},
    venueId: '4b75ff4cf964a52053352ee3',
    type: 'restaurant',
    fbUrl: 'https://www.facebook.com/The-Lucky-Wishbone-340057649438024/'
  },
  {
    title: "Glacier Brewhouse",
    lat: 61.217798,
    long: -149.897057,
    latLng: {lat: 61.217798, lng: -149.897057},
    venueId: '4b51742af964a5209b4d27e3',
    type: 'restaurant',
    fbUrl: 'https://www.facebook.com/GlacierBrewHouse/'
  },
  {
    title: "Orso",
    lat: 61.217739,
    long: -149.896075,
    latLng: {lat: 61.217739, lng: -149.896075},
    venueId: '4b650ae8f964a5201ae12ae3',
    type: 'restaurant',
    fbUrl: 'https://www.facebook.com/ORSORestaurant/'
  },
  {
    title: "Bear Tooth Grill",
    lat: 61.195929,
    long: -149.907275,
    latLng: {lat: 61.195929, lng: -149.907275},
    venueId: '4b47b7f5f964a520c23b26e3',
    type: 'restaurant',
    fbUrl: 'https://www.facebook.com/moosestoothpub/'
  },
  {
    title: "Pho Lena",
    lat: 61.189904,
    long: -149.907432,
    latLng: {lat: 61.189904, lng: -149.907432},
    venueId: '4b490c52f964a520946326e3',
    type: 'restaurant'
  },
  {
    title: "Samurai Sushi",
    lat: 61.210150,
    long: -149.732749,
    latLng: {lat: 61.210150, lng: -149.732749},
    venueId: '4b8efcfbf964a520f94233e3',
    type: 'restaurant',
    fbUrl: 'https://www.facebook.com/samuraisushi/'
  },
  {
    title: "Suite 100 Restaurant",
    lat: 61.144134,
    long: -149.862725,
    latLng: {lat: 61.144134, lng: -149.862725},
    venueId: '4b303017f964a52087f724e3',
    type: 'restaurant',
    fbUrl: 'https://www.facebook.com/Suite-100-Restaurant-Bar-and-Lounge-140904152633179/'
  },
  {
    title: "Simon & Seafort's",
    lat: 61.218038,
    long: -149.904385,
    latLng: {lat: 61.218038, lng: -149.904385},
    venueId: '4bea0424415e20a1719ee4bb',
    type: 'coffee',
    fbUrl: 'https://www.facebook.com/SimonandSeaforts/'

  },
  {
    title: "Snow City Cafe",
    lat: 61.218404,
    long: -149.903437,
    latLng: {lat: 61.218404, lng: -149.903437},
    venueId: '4b914e02f964a52081b133e3',
    type: 'restaurant',
    fbUrl: 'https://www.facebook.com/snowcitycafe/'
  }
];


var markMarker = function(data, marker) {
  this.marker = marker;
  this.title = ko.observable(data.title);
  this.lat = ko.observable(data.lat);
  this.long = ko.observable(data.long);
  this.latLng = ko.observable(data.latLng);
  this.placeId = ko.observable(data.venueId);
  this.type = ko.observable(data.type);
  this.fb = ko.observable(data.fbUrl);
};


// Model //

var ViewModel = function() {

  var self = this;

  this.allLocations = ko.observableArray([]);

  this.typeButton = function(type) {

    self.allLocations.removeAll();

    removeMarkers();

    if (type === 'coffee') {
      filter(locations, type);
      makingMarkers(filteredLocations);
      console.log('clicked coffee filter');
    } if (type === 'restaurant') {
      filter(locations, type);
      makingMarkers(filteredLocations);
      console.log('clicked restaurant filter');
    } if (type === 'all') {
      makingMarkers(locations);
      console.log('pressed all filter');
    }

    function filter(locationData, type) {
      filteredLocations = [];
      for (var i = 0; i < locationData.length; i++) {
        var location = locationData[i];
        if (location.type === type) {
          filteredLocations.push(location);
        };
      };
    };
  };

  makingMarkers(locations);

  // Clear markers on map
  function removeMarkers() {
      for (var i = 0; i < markerArray.length; i++) {
          markerArray[i].setMap(null);
      }
      markerArray = [];
  }

  function makingMarkers(locationData, type) {

    for (var i = 0; i < locationData.length; i++) {

      var location = locationData[i];

      var marker = new google.maps.Marker({
        map: map,
        position: location.latLng,
        title: location.title,
        id: location.venueId,
        type: location.type,
        fb: location.fbUrl,
        animation: google.maps.Animation.DROP
      });

      marker.addListener('click', function() {
        markerClicked(this, infowindow);
      });

      markerArray.push(marker);

      self.allLocations.push(new markMarker(locations, marker));
    };
  }

  // Sets current location object
  this.currentLocation = ko.observable(this.allLocations());

  this.moveLocation = function(clickedLocation) {

    self.currentLocation(clickedLocation);

    var centerMarker = self.currentLocation().marker;
    var center = centerMarker.getPosition();
    map.setCenter(center);

    markerClicked(self.currentLocation().marker, infowindow);
  };
};



function markerClicked(marker, infowindow) {

  // Set all markers animation from placeMarkers array to null to prevent multiple animated markers
  for (var i = 0; i < markerArray.length; i++) {
      markerArray[i].setAnimation(null);
  }

  // Set marker animation to null if infowindow is closed
  infowindow.addListener('closeclick', function() {
      marker.setAnimation(null);
  });

   //If same marker is clicked again, then close it, otherwise obtain infowindow information and display it
  marker === infowindow.anchor ? infowindow.close() : mainInfowindow(marker, infowindow);
};

function mainInfowindow(marker, infowindow) {

  function logConsole(text) {
    console.log('pushed button ' + text);
  }

  marker.setAnimation(google.maps.Animation.BOUNCE);
  infowindow.open(map,marker);
  var fbLink = marker.fb;
  var fsId = marker.id;
  var textFoursquare = 'this is text for foursquare'
  var textFacebook = 'this is text for facebook';
  //var radioGroup = '<div class="btn-group" data-toggle="buttons"><label class="btn btn-primary"><input type="radio" name="options" id="facebook" autocomplete="off">Facebook</label><label class="btn btn-primary"><input type="radio" name="options" id="foursquare" autocomplete="off">FourSquare</label></div><br>';
  var collapseGroup = '<button class="btn btn-primary" type="button" data-toggle="collapse" data-parent="#selector" data-target="#divDataTarget" id="btFourSquare" aria-expanded="false" aria-controls="">FourSquare</button><button class="btn btn-primary" type="button" data-toggle="collapse" data-parent="#selector" data-target="#divDataTarget" id="btFacebook" aria-expanded="false" aria-controls="">Facebook</button><div id="divDataTarget" class="collapse" style="width:190px;"></div>'

  infowindow.setContent(collapseGroup);

  $('#btFourSquare').click(function(){
    fourSquare(marker, infowindow);
  });
  $('#btFacebook').click(function(){
    facebookData(marker);
  })
}

function facebookData(marker) {
  var divDataTarget = $('#divDataTarget');
  var getDataTarget = $('#getFbData').get(0);
  divDataTarget.append('<div class="fb-page" data-href="https://www.facebook.com/moosestoothpub/" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/moosestoothpub/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/moosestoothpub/">Moose&#039;s Tooth</a></blockquote></div>');

  //var testData =  '<div style="width: 400px;"><div class="fb-page" data-href="https://www.facebook.com/moosestoothpub/" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/moosestoothpub/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/moosestoothpub/">Moose&#039;s Tooth</a></blockquote></div></div>'

  //divDataTarget.append(testData);
}

function fourSquare(marker, infowindow){
  var divDataTarget = $('#divDataTarget');
  var venueId = marker.id;
  var clientId = 'Y0S1CEMXG0MQ3PLIGD3MVBQYYJYWYLUGDFLCWJ5TWNBJ2DME';
  var clientSecret = '5VKYBZD1HFK5XYL2FUCPJQSY3QDSR0GALNWB2DNHDNPOMMO1';
  //marker.setAnimation(google.maps.Animation.BOUNCE);


  // Open info window first
  //infowindow.open(map, marker);

  $.when($.ajax({
    async: true,
    cache: true,
    url: 'https://api.foursquare.com/v2/venues/' + venueId + '?client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20160801',
    error: function() {
      alert('some shit broke during the ajax request for FourSquare');
    }
  })).done(function(data){
      var locationPhoto = data.response.venue.photos.groups[0].items[0].prefix + '250x160' + data.response.venue.photos.groups[0].items[0].suffix;
      var locationName = marker.title;
      var locationAddress = data.response.venue.location.formattedAddress;
      var locationPhoneNumber = data.response.venue.contact.formattedPhone;
      var locationHours = data.response.venue.hours;
      var locationRating = data.response.venue.rating;
      var locationHereNow = data.response.venue.hereNow.summary;
      var infoWindowContent = '<div id="dataCheck">';
      if (data) {
          infoWindowContent += '<img src="' + locationPhoto + '">';
          infoWindowContent += '<br><strong>' + locationName + '</strong>';
        }

        if (locationAddress) {
          infoWindowContent += '<br>' + locationAddress[0] + '<br>' + locationAddress[1];
        }

        if (locationPhoneNumber) {
          infoWindowContent += '<br>' + locationPhoneNumber;
        }

        if (locationHours) {
          infoWindowContent += '<br>' + locationHours.status;
        }

        if (locationRating) {
          infoWindowContent += '<br><br>' + 'Rating: ' + locationRating;
        }

        if (locationHereNow) {
          infoWindowContent += "<br>" + locationHereNow;
        }

        infoWindowContent += '<br><br><i>Data Source: <a href="https://foursquare.com/">Foursquare</a></i></div>';

        //infowindow.setContent(infoWindowContent);
        divDataTarget.append(infoWindowContent);
    }
  );
}

// Error handling for Google Maps
function googleError() {
    alert("Sorry, Google Maps could not be loaded. Please refresh the page and try again.");
}