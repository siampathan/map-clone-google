function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    mapId: "MAP_ID",
    //   8e0a97af9386fef
    center: {
      lat: 23.732150798503664,
      lng: 90.38768734031105,
    },
    zoom: 18,
    mpaTypeControl: false,
    fullscreenControl: true,
    streetViewControl: false,
    //control section
    //full screen zoom size
    //current location
  });

  // Name
  // Latitude, Longitude
  // Image URL
  // scaledSize width, height

  const markers = [
    [
      "Youshi's House",
      34.66669734177897,
      135.4309054875526,
      "yoshi_house.svg",
      38,
      31,
    ],
    [
      "You Are Here",
      34.66767112713121,
      135.4297887322531,
      "pointer.svg",
      30,
      47.8,
    ],
    [
      "Ghost House",
      34.66832715150856,
      135.43292762674864,
      "ghosthouse.svg",
      40,
      48,
    ],
    ["Castle", 34.66775608022106, 135.43139547897843, "castle.svg", 40, 53],
    ["Warp Pipe", 34.66739738878135, 135.43225049775214, "pipe.svg", 38, 42.5],
    ["Star World", 34.667959023359266, 135.42866400953733, "star.svg", 38, 38],
    [
      "Donut Plains",
      34.66830355359945,
      135.4320565322381,
      "hill_with_eyes.svg",
      50,
      60.7,
    ],
    [
      "Donut Plains",
      34.66829411443392,
      135.43231361996433,
      "hill_with_eyes.svg",
      50,
      60.7,
    ],
    [
      "Donut Plains",
      34.6683781779677,
      135.43217016043528,
      "hill_with_eyes.svg",
      50,
      60.7,
    ],
  ];

  for (let i = 0; i < markers.length; i++) {
    const currentMarker = markers[i];

    const marker = new google.maps.Marker({
      position: { lat: currentMarker[1], lng: currentMarker[2] },
      map,
      title: currentMarker[0],
      icon: {
        url: currentMarker[3],
        scaledSize: new google.maps.size(currentMarker[4], currentMarker[5]),
      },
      animation: google.maps.Animation.DROP,
    });

    const infowindow = new google.maps.infowindow({
      content: currentMarker[0],
    });

    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  }
}

//23.732150798503664, 90.38768734031105
//23.703315670889467, 90.45079170459866
