const { app, BrowserWindow, screen } = require('electron')
const {resolve} = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: screen.getPrimaryDisplay().size.width * 0.25,
    height: screen.getPrimaryDisplay().size.height * 0.65,
    title: "Calculator Electron",
    webPreferences: {
      preload: resolve("./src/preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  })

  //win.setMenu(null)
  win.loadFile(resolve('./src/views/index.html'))
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit()
  }
})