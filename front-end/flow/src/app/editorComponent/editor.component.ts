import {WindowService} from './../services/window.services';
import {Component, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'graph-editor',
  templateUrl: 'editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @ViewChild('graph') elGraph;
  editor: any;

  constructor(private winService: WindowService) {
  }


  ngOnInit() {
    let win = this.winService.nativeWindow;

    var urlParams = (function (url) {
      var result = new Object();
      var idx = url.lastIndexOf('?');

      if (idx > 0) {
        var params = url.substring(idx + 1).split('&');

        for (var i = 0; i < params.length; i++) {
          idx = params[i].indexOf('=');

          if (idx > 0) {
            result[params[i].substring(0, idx)] = params[i].substring(idx + 1);
          }
        }
      }

      return result;
    })(win.location.href);

    var mxLoadResources = false;


    win['urlParams'] = win.urlParams || {};
    win['MAX_REQUEST_SIZE'] = win.MAX_REQUEST_SIZE || 10485760;
    win['EXPORT_URL'] = win.EXPORT_URL || '/export';
    win['SAVE_URL'] = win.SAVE_URL || '/save';
    win['OPEN_URL'] = win.OPEN_URL || '/open';
    win['RESOURCES_PATH'] = win.RESOURCES_PATH || 'assets/resources';
    win['RESOURCE_BASE'] = win.RESOURCE_BASE || win.RESOURCES_PATH + '/grapheditor';
    win['STENCIL_PATH'] = win.STENCIL_PATH || 'stencils';
    win['IMAGE_PATH'] = win.IMAGE_PATH || 'images';
    win['STYLE_PATH'] = win.STYLE_PATH || 'assets/styles';
    win['CSS_PATH'] = win.CSS_PATH || 'styles';
    win['OPEN_FORM'] = win.OPEN_FORM || 'open.html';
    win['mxBasePath'] = win.mxBasePath || '../../../src';
    win['mxLanguage'] = win.mxLanguage || urlParams['lang'];
    win['mxLanguages'] = win.mxLanguages || ['de'];
  }
}
