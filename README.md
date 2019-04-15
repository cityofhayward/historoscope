### Historoscope ###

A tool to generate a side by side synchronized map viewer using a folder level arcgis endpoint

### Demo ###

[See it live](https://cityofhayward.github.io/historoscope/)

### How To ###

Takes less than 5 minutes to implement if your city or organization has an endpoint that contains a variety of imagery layers. Here is the endpoint we use, https://maps.hayward-ca.gov/arcgis/rest/services/Ext_Basemaps.

There is one config.js file where all settings reside.

```var configFile = {
  // url to services
  base_URL: "https://maps.hayward-ca.gov/arcgis/rest/services/Ext_Basemaps",

  // initial map on left hand map frame
  defaultLeft: "AerialPhotoHybrid_2017",

  // initial map on right hand map frame
  defaultRight: "AerialPhoto_1968_12inch",

  // rename map services names to user friendly names (if needed)
  rename: [
    ["Aerial_Imagery_1954", "1954 Aerial"],
    ["AerialPhoto_1968_12inch", "1968 Aerial"],
    ["AerialPhoto_1985_21inch", "1985 Aerial"]
  ],

  // services to exclude from Historoscope
  exclude: [
    "Elevation2014",
    "Slope2014"
  ]
}
```

1) Fork this repo
2) Edit config.js
..* Edit the base url: copy your service folder URL to base_URL variable
..* Set the starting layer for the left and right viewers: replaced variables defaultLeft and defaultRight with one of the services names. Example: from Ext_Basemaps/Aerial_Imagery_1954 (MapServer), use Aerial_Imagery_1954, so it looks like defaultLeft: Aerial_Imagery_1954.
..* Rename services as needed: If your service names are not particularly user-friendly, rename theme
..* Exclude services as needed: Imagery layers that aren't needed can be removed by listing their names in exclude

### Uses ###

* [Leaflet](http://leafletjs.com/)
* [Esri-Leaflet](https://esri.github.io/esri-leaflet/)
* [Leaflet.Sync plugin](https://github.com/turban/Leaflet.Sync)
