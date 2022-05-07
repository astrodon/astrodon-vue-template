import { serve } from "https://deno.land/std@0.138.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.138.0/http/file_server.ts";
import { refresh } from "https://deno.land/x/refresh/mod.ts";
import "https://deno.land/std@0.138.0/dotenv/load.ts";

const port = Deno.env.get("PORT");

// Create refresh middleware
const middleware = refresh({
  paths: [
    "./renderer/dist",
  ],
});

const handler = async (req: Request) => {
  const res = middleware(req);
  if (res) return res;
  return await serveDir(req, { fsRoot: Deno.cwd() });
};

serve(handler, { 
  port: port ? Number(port) : 3000,
});
