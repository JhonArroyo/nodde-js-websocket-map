var map = L.map('map-template').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.locate({enableHighAccuracy: true})
map.on('locationfound', function(e) {
    const coordsExact = [e.latlng.lat, e.latlng.lng]
    const marker = L.marker(coordsExact).addTo(map)
    marker.bindPopup('You are here or im think so')
    marker.openPopup()
});

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('THIS IS A TEST')
    .openPopup();