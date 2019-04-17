var configFile = {
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
    ["AerialPhoto_1985_21inch", "1985 Aerial"],
    ["AerialPhoto_1992_12inch", "1992 Aerial"],
    ["AerialPhoto_1999_6inch", "1999 Aerial"],
    ["AerialPhoto_2002_24inch", "2002 Aerial"],
    ["AerialPhoto_2003_12inch", "2003 Aerial"],
    ["AerialPhoto_2004_6inch", "2004 Aerial"],
    ["AerialPhoto_2006_4inch", "2006 Aerial"],
    ["AerialPhoto_2009_6inch", "2009 Aerial"],
    ["AerialPhoto_2011_12inch", "2012 Aerial"],
    ["AerialPhoto_2014_3inch", "2014 Aerial"],
    ["AerialPhotoHybrid_2014", "2014 Aerial (w/labels)"],
    ["AerialPhotoHybrid_2017", "2017 Aerial (w/labels)"],
    ["bm_COHParcelPublicAccess", "Hayward Basemap"],
    ["UAV_Library_20190318", "New Library - March 2019"]
  ],

  // services to exclude from Historoscope
  exclude: [
    "Elevation2014",
    "Slope2014",
    "UAV_HARDShoreline_KingTide_20180102",
    "UAV_HARDShoreline_LowTide_20180305",
    "COH_Dark_Gray"
  ],

  mapCoords: [
    37.67, -122.09
  ]
}
