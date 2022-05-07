# Simple official Astrodon + Vue3 template starter.

Build applications with Vue.js and Astrodon.

Create:
```
astrodon init --template vue

OR

astrodon init --template https://github.com/astrodon/astrodon-vue-template

```

Run Astrodon on development mode:
```shell
deno task start
```

Run development server and watcher (auto-reload)
> This is not hot module replacement just app reloading
```shell
deno task develop:watch
deno task develop:serve
```

Run Development Environment
```shell
deno task develop
```

Build Astrodon:
```shell
deno task build:main
```

Build renderer (Vue):
```shell
deno task build:renderer
```

Build all:
```shell
deno task build
```
