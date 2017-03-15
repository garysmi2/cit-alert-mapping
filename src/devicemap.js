import _ from 'lodash';
/* eslint-disable id-length, no-unused-vars */
import L from './lib/leaflet';
/* eslint-disable id-length, no-unused-vars */


export default class DeviceMap {

    constructor(ctrl, mapContainer) {
        this.ctrl = ctrl;
        this.mapContainer = mapContainer;
        this.createMap();
    }

    createMap() {
        console.log("DeviceMap.createMap");

         const mapCenter = window.L.latLng(parseFloat("53.350140"), parseFloat("-6.266155"));
        //this.map = window.L.map(this.mapContainer, {worldCopyJump: true, center: mapCenter});
       this.map = window.L.map(this.mapContainer).setView([53.350140, -6.266155], 12);
                //.zoomIn(parseInt(1, 10));
               //this.map.panTo(mapCenter);

        window.L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
            maxZoom: 18,
            subdomains: 'abcd',
            reuseTiles: true,
            detectRetina: true,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(this.map);
    }

    resize() {
       /* if(this.ctrl.mapData === null){
            console.log("we have no data");
        }
        else{
            console.log(this.ctrl.mapData);
            console.log("we have data");
        }*/
       this.map.invalidateSize();
    }
    

}