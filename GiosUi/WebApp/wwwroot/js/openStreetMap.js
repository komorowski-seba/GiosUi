window.initLeafletMap = function (lat, lng, dotNetHelper) {
    var map = L.map('map').setView([lat, lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    var marker = L.marker([lat, lng]).addTo(map);

    marker.on('click', function () {
        dotNetHelper.invokeMethodAsync(
            'OnMarkClicked',
            lat,
            lng
        );
    });
}
