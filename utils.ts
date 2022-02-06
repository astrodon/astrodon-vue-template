import { join } from "https://deno.land/std/path/mod.ts";
const __dirname = new URL('.', import.meta.url).pathname;

export const getIndex = () => {
  const isDev = Deno.env.get("DEV") == "true";
  //deno-lint-ignore no-explicit-any
  const isProd = (globalThis as any).astrodonProduction

  if (isDev || isProd) {
    return `file://${join(__dirname, './renderer/dist/index.html')}`;
  } else {
    return `https://raw.githack.com/denyncrawford/astrodon/main/examples/vuejs_app/src/index.html` //"<your_remote_html>";
  }
};