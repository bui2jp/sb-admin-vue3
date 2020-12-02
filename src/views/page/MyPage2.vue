<template>
  <div>
    OpenLayers v6.4.3 example
    <div class="m-0" id="map"></div>
  </div>
</template>

<script>
// OpenLayersを読み込み
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";

export default {
  name: "MyMap",
  mounted: function () {
    this.initMap();
  },
  methods: {
    initMap: function () {
      new Map({
        target: "map",
        layers: [
          new TileLayer({
            source: new XYZ({
              //url: "https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png",
              url: "http://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
              attributions:
                '© OpenStreetMap contributors : CC BY-SA2.0',
                //'Maptiles by <a href="http://mierune.co.jp" target="_blank">MIERUNE</a>, under CC BY. Data by <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors, under ODbL.',
              attributionsCollapsible: false,
              //tileSize: [256, 256],
              minZoom: 0,
              maxZoom: 18,
            }),
          }),
        ],
        view: new View({
          center: fromLonLat([139.767, 35.681]),
          zoom: 11,
        }),
      });
    },
  },
};
</script>
<style scoped>
    /*マップサイズ*/
    #map {
        z-index: 0;
        height: 500px;
    }
</style>