import { join } from "https://deno.land/std@0.138.0/path/mod.ts";
import "https://deno.land/std@0.138.0/dotenv/load.ts";
const __dirname = new URL('.', import.meta.url).pathname;

export const getIndex = () => {
  const isDev = Deno.env.get("DEV") == "true";
  //deno-lint-ignore no-explicit-any
  const isProd = (globalThis as any).astrodonProduction

  if (isProd) {
    return `file://${join(__dirname, './renderer/dist/index.html')}`;
  } else if (isDev) {
    return `http://localhost:${Deno.env.get("PORT")}/renderer/dist/index.html`;
  } else {
    return `https://github.com/astrodon/astrodon-vue-template/raw/main/renderer/src/index.html` //"<your_remote_html>";
  }
};