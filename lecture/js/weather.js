function onGeoOk() {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in ", lat, lng);
}

function onGeoError() {
    alert("Coudln't find your location.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);