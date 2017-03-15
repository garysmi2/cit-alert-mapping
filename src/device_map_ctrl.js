import {MetricsPanelCtrl    } from 'app/plugins/sdk';
import moment from 'moment';
import _ from 'lodash';
import mapRenderer from './map_renderer';

import './css/alert-map-panel.css!';


const panelDefaults = {
  locationData : []
};

export class DeviceMapCtrl extends MetricsPanelCtrl {
  constructor($scope, $injector) {
    super($scope, $injector);
    _.defaults(this.panel, panelDefaults);
    
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('panel-teardown', this.onPanelTeardown.bind(this));
    //this.events.on('panel-initialized', this.render.bind(this));
    this.events.on('data-received', this.onDataReceived.bind(this));
    this.events.on('data-error', this.onDataError.bind(this));
    this.events.on('data-snapshot-load', this.onDataReceived.bind(this));
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.mapData = {"Gary" : "here"};
    //this.initMap();
  }

  
  onInitEditMode(){
    console.log('onInitEditMode');
    
  }

  onPanelTeardown() {
    console.log('onPanelTearDown');
  }

  /*render() {
    console.log('render');
  }*/

  onDataReceived(data){
    console.log('onDataReceived');
    //console.log(data);
    this.locationData = data;
    console.log(this.locationData);
    this.render();
  }

  onDataError() {
    console.log('onDataError');
  }

   link(scope, elem, attrs, ctrl) {
     console.log("we are in link");
     mapRenderer(scope, elem, attrs, ctrl);
    
    
}

}

DeviceMapCtrl.templateUrl = 'module.html';
