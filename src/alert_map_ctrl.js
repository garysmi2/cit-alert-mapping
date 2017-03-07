import {MetricsPanelCtrl    } from 'app/plugins/sdk';
import moment from 'moment';
import _ from 'lodash';
import './css/alert-map-panel.css!';

const panelDefaults = {
  
};

export class AlertMapCtrl extends MetricsPanelCtrl {
  constructor($scope, $injector) {
    super($scope, $injector);
    _.defaults(this.panel, panelDefaults);
    
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('panel-teardown', this.onPanelTeardown.bind(this));
    this.events.on('panel-initialized', this.render.bind(this));
    this.events.on('data-received', this.onDataReceived.bind(this));
    this.events.on('data-error', this.onDataError.bind(this));
    this.events.on('data-snapshot-load', this.onDataReceived.bind(this));
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
  
  }

  
  onInitEditMode(){
    console.log('onInitEditMode');
    
  }

  onPanelTeardown() {
    console.log('onPanelTearDown');
  }

  render() {
    console.log('render');
  }

  onDataReceived(data){
    console.log('onDataReceived');
    console.log(data);
  }

  onDataError() {
    console.log('onDataError');
  }

}

AlertMapCtrl.templateUrl = 'module.html';
