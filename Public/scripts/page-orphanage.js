const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

const mymap = L.map('mapid', options).setView([-27.2222633,-49.6455874], 15)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', )
.addTo(mymap)

const icon = L.icon({
    iconUrl: "./Public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2],
})

L.marker([-27.2222633,-49.6455874], { icon })
.addTo(mymap)

// image galery//

function selectImage(event) {
    const button = event.currentTarget

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((removeactiveclass))

    function removeactiveclass(button){
        button.classList.remove("active")
    }

    // selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container de img
    imageContainer.src = image.src

    // adicionar .active pra o botao click
    button.classList.add('active')
}