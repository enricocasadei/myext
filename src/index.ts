import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { IFileBrowserFactory } from '@jupyterlab/filebrowser';
import { ISettingRegistry } from '@jupyterlab/settingregistry';
import fileBrowserOverride from './fileBrowserOverride';
import { removeDownloadByCss } from './removeDownload';

/**
 * Initialization data for the myext extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'myext',
  autoStart: true,
  requires: [IFileBrowserFactory, ISettingRegistry],
  activate: (
    app: JupyterFrontEnd,
    factory: IFileBrowserFactory,
    settingRegistry: ISettingRegistry
  ) => {
    console.log(
      'JupyterLab extension [myext-remove-download-from-filebrowser] is activated!'
    );

    removeDownloadByCss();

    fileBrowserOverride(app, factory);
  }
};

export default extension;

