const mymap = L.map('mapid').setView([-27.2222633,-49.6455874], 15)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', )
.addTo(mymap)

const icon = L.icon({
    iconUrl: "./Public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2],
})

const popup = L.popup({ 
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240,
}).setContent('Lar das Meninas <a href:"orphanage.html?id=1" class="choose-orphanage> <img scr="./Public/images/arrow-white.svg" ></a>')


L.marker([-27.2222633,-49.6455874], { icon })
.addTo(mymap)
.bindPopup('popup')
