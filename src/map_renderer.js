import './css/leaflet.css!';
import DeviceMap from './devicemap';

export default function link(scope, elem, attrs, ctrl) {
  console.log("map_renderer.link");
  const mapContainer = elem.find('.mapcontainer');

  ctrl.events.on('render', () => {
    console.log("map_renderer.render.event");
    render();
    ctrl.renderingCompleted();
  });

  function render() {
    console.log("in map_renderer.render");

    if(! ctrl.map){
        ctrl.map = new DeviceMap(ctrl, mapContainer[0]);
    }

  

    ctrl.map.resize();

    /*if (ctrl.mapCenterMoved) ctrl.map.panToMapCenter();

    if (!ctrl.map.legend && ctrl.panel.showLegend) ctrl.map.createLegend();

    ctrl.map.drawCircles();*/
  }
}