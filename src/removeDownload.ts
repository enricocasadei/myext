function addStyleToHead(css: string) {
  document.head.insertAdjacentHTML('beforeend', `<style>${css}</style>`);
}

const removeDownload = `
      [data-command='filebrowser:download'], [data-command='filebrowser:copy-download-link'] {
        display: none !important;
      }
      `;

export function removeDownloadByCss(): void {
  addStyleToHead(removeDownload);
}
