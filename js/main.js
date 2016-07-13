// View Model //
function initMap() {

  var map = new google.maps.Map(document.getElementById('map'));

  var center = {lat: 61.187891, lng: -149.884655}

  var myOptions = {
    zoom: 14,
    center: center,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  this.map = new google.maps.Map(document.getElementById('map'), myOptions);

  function myViewModel() {

    var self = this;
    // Marker Class //
    self.Marker = function(title, lats, longs) {
      var title = ko.observable(title);
      var positions = {lat: ko.observable(lats), lng: ko.observable(longs)};

      // Options for out Markers //
      var markerOptions = {
        position: positions,
        title: title,
        map: map,
        animation: google.maps.Animation.DROP
      };

      this.marker = new google.maps.Marker(markerOptions);
    };

    // Locations for Markers //
    self.locations = ko.observableArray([
      new self.Marker("Tommy's Burger Stop", 61.193580, -149.904546),
      new self.Marker("Moose's Tooth", 61.190493, -149.869022),
      new self.Marker("Steam Dot Coffee", 61.194007, -149.873564),
      new self.Marker("Sorrento's", 61.197665, -149.870588, 'D'),
      new self.Marker("Gwennie's Old Alaska Restaurant", 61.181742, -149.932760)
    ]);
  };
  ko.applyBindings(myViewModel());
}
