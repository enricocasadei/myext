import { IFileBrowserFactory } from '@jupyterlab/filebrowser';
import {
  JupyterFrontEnd /* , JupyterFrontEndPlugin */,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { stopIcon /* downloadIcon, */ } from '@jupyterlab/ui-components';

const downloadCommandId = 'filebrowser:download';

export const downloadFile: JupyterFrontEndPlugin<void> = {
  id: downloadCommandId,
  requires: [IFileBrowserFactory],
  autoStart: true,
  activate: activateFileDownload
};

function activateFileDownload(
  app: JupyterFrontEnd,
  factory: IFileBrowserFactory
) {
  const { commands } = app;
  const { tracker } = factory;

  commands.addCommand(downloadCommandId, {
    execute: () => {
      const widget = tracker.currentWidget;
      console.log(`widget`, widget);
      if (!widget) {
        return;
      }

      if (widget) {
        console.log(`widget is present but download prevented`, widget);
        //return widget.download();
      }

      const path = encodeURI(widget.selectedItems().next().path);
      console.log(path);
    },
    iconClass: 'jp-MaterialIcon jp-LinkIcon',
    icon: stopIcon.bindprops({ stylesheet: 'menuItem' }),
    label: 'Download me pliiiis'
  });
}

/**
 * The file browser supports overriding the behavior of this item.
 * https://jupyterlab.readthedocs.io/en/stable/developer/extension_points.html#developer-extension-points
 * console.log('commands.listCommands', app.commands.listCommands());
 */
export default function fileBrowserOverride(
  app: JupyterFrontEnd,
  factory: IFileBrowserFactory
) {}
