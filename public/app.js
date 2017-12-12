const initialize = function() {

  const center = {
    lat: 55.946962,
    lng: -3.20195
  };

  const container = document.querySelector('#main-map');

  const mainMap = new MapWrapper(container, center, 20);
  mainMap.addClickEvent();
  mainMap.addMarker(center);

  const button = document.querySelector('#bounce');
  button.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));

  const MelbourneButton = document.querySelector('#melbourne');
  button.addEventListener('click', mainMap.setCenter(new google.maps.LatLng(10.23,123.45)););

}



document.addEventListener('DOMContentLoaded', initialize);
