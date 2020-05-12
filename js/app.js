var map;
function initMap() {
    // The location of location
   var location = { lat: 6.4474, lng: 3.3903 };
   // The map, centered at location
   var map = new google.maps.Map(
         document.getElementById('map'), {zoom: 15, center: location});
   // The marker, positioned at location
   var marker = new google.maps.Marker({position: location, map: map});

}