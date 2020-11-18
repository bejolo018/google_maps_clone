mapboxgl.accessToken = 'pk.eyJ1IjoiYmVqb2xvMDE4IiwiYSI6ImNraG5zYm45djF2YjcycHFrZ2U4anBoZ3AifQ.KbQVm8l_RrAbmkf-d972Sg';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

function successLocation(position) {
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMapError()
}

function setupMap(center){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 14
        });

        const nav = new mapboxgl.NavigationControl();
        map.addControl(nav);

        var directions = new MapboxDirections({
            accessToken: 'pk.eyJ1IjoiYmVqb2xvMDE4IiwiYSI6ImNraG5zYm45djF2YjcycHFrZ2U4anBoZ3AifQ.KbQVm8l_RrAbmkf-d972Sg'
            });
        
        map.addControl(directions, 'top-left');
}

function setupMapError(center){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        });
    
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirections({
    accessToken: 'pk.eyJ1IjoiYmVqb2xvMDE4IiwiYSI6ImNraG5zYm45djF2YjcycHFrZ2U4anBoZ3AifQ.KbQVm8l_RrAbmkf-d972Sg'
    });

    map.addControl(directions, 'top-left');
}

