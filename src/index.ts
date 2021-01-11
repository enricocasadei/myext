import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { ISettingRegistry } from '@jupyterlab/settingregistry';
import { removeDownloadByCss } from './removeDownload';

/**
 * Initialization data for the myext extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'myext',
  autoStart: true,
  requires: [ISettingRegistry],
  activate: (app: JupyterFrontEnd) => {
    console.log(
      'JupyterLab extension [myext-remove-download-from-filebrowser] is activated!'
    );

    removeDownloadByCss();
  }
};

export default extension;
