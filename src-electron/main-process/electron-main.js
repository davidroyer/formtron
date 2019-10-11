import { app, BrowserWindow } from "electron";
// const FileGenerator = require("./../../generator/file-generator.js");
// import { createFormTemplate } from "./../../generator/file-generator.js";
/**
 * Set `__statics` path to static files in production;
 * The reason we are setting it here is that the path needs to be evaluated at runtime
 */
if (process.env.PROD) {
  global.__statics = require("path")
    .join(__dirname, "statics")
    .replace(/\\/g, "\\\\");
}

let mainWindow;

// createFormTemplate({
//   stepForm: false,
//   fromMainElectronFile: true,
//   optGroups: true,
//   singleProgram: false
// });

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    useContentSize: true,
    frame: true, // <-- add this

    webPreferences: {
      nodeIntegration: true
    }
  });

  // mainWindow = new BrowserWindow({
  //   width: 1000,
  //   height: 600,
  //   useContentSize: true,
  //   frame: false // <-- add this
  // })

  mainWindow.loadURL(process.env.APP_URL);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
