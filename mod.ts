/** 
 * Please remember to update deno cache if you worked with astrodon before, 
 * it is recommended to use a versioned toolchain eg.: x/astrodon@0.1.0-alpha.2
 */

import { AppWindow } from "https://raw.githubusercontent.com/astrodon/astrodon/main/modules/astrodon/mod.ts";
import { getIndex } from "./utils.ts";

/**
 * Get index is a function that returns the path to the index.html file depending on the environment.
 * The url in this case is the url of the index.html file in the template directory.
 * Please feel free to change this to your own url or set the DEV environment variable to true to use the local index.html file.
 */

const indexPath = getIndex();

const mainWindow = new AppWindow("My vue app");

await mainWindow.setUrl(indexPath);

await mainWindow.run();

setInterval(() => {
  mainWindow.send('from-astrodon', `Hello Astrodon: ${Math.random()}`);
}, 500);
