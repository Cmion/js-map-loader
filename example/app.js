import { GoogleMap } from 'map-loader';

/*
 * Set your API key here.
 * For more information on generating API keys,
 * see https://goo.gle/gmp-generate-api-key-video
 */
const GOOGLE_MAPS_API_KEY = "YOUR API KEY";

/*
 * Options for how the map should initially render.
 * For more information on available options,
 * see https://goo.gle/maps-js-api-map-options
 */
const map_options = {
  center: {
    lat: 47.649196,
    lng: -122.350384
  },
  zoom: 12
}

/*
 * Options for loading the Maps JS API.
 */
const api_options = {
  version: 'weekly',
  libraries: ['places']
}

/*
 * Set ID of the div where the map will be loaded,
 * and whether to append to that div.
 */
const map_loader_options = {
  apiKey: GOOGLE_MAPS_API_KEY,
  divId: 'google_map',
  append: true, // Appends to divId. Set to false to init in divId.
  mapOptions: map_options,
  apiOptions: api_options
};

// Instantiate map loader
const MapLoader = new GoogleMap();

// Load the map
MapLoader
  .initMap(map_loader_options)
  .then((google_map) => {
    // returns instance of google.maps.Map
  });
