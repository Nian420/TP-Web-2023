var map = L.map('map').setView([47.823371, 4.217393], 13.5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([47.822028,4.21704]).addTo(map);

L.marker([47.822028,4.21704]).addTo(map)
    .bindPopup('Gland la Belle ; Longitude: 47.822028 Latitude: 4.21704')
    .openPopup();

var popupgland = L.popup()
    .setLatLng([47.821706, 4.218844])
    .setContent("Bienvenue à Gland !")
    .openOn(map);


var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng([47.821706, 4.218844])
//         .setContent("Gland" + e.latlng.toString())
//         .openOn(map);
// }

// map.on('click', onMapClick);

// var img = document.getElementsByClassName('img');
//
// for (let i = 0; i < img.length; i++) {
//   const item = img.item(i);
//   item.addEventListener('mouseover', () => {
//     item.classList.remove('out');
//     item.classList.add('hover');
//   });
//   item.addEventListener('mouseleave', () => {
//     item.classList.remove('hover');
//     item.classList.add('out');
//   });
// }
