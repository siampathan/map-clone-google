mapboxgl.accessToken =
  "pk.eyJ1Ijoic2lhbS1wYXRoYW4iLCJhIjoiY2wwbDR5cmdvMHNucDNrcjVxeWt5ZnRjMSJ9.ThFfCDqPu0ARXLxq1su2DQ";
//this is access token for my account

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position);

  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-2, 24, 53, 48]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15,
    //map direction zoom in and out
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  map.addControl(
    new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      //direction for driving,trafic,walk direction
      //also add plugin from mapbox
    }),
    "top-left"
  );
}
