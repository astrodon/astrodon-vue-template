const watcher = Deno.watchFs("./renderer/src");

for await (const _event of watcher) {
  Deno.run({
    cmd: ['deno', 'task', 'build:renderer'],
  });
}