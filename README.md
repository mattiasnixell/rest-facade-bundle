# rest-facade-bundle

Experimenting with ngonzalvez/rest-facade bundle size. To get started, run:

```
yarn install
```

## Bundle with Proxy

To check bundle size including superagent-proxy, run:

```
yarn build
```

which reports:

```
              Asset      Size  Chunks             Chunk Names
            main.js  1.09 MiB       0  [emitted]  main
main.js.LICENSE.txt  2.85 KiB          [emitted]
```

## Bundle without Proxy

To check bundle size excluding superagent-proxy, run:

```
yarn build-with-externals
```

which reports:

```
              Asset       Size  Chunks             Chunk Names
            main.js    296 KiB       0  [emitted]  main
main.js.LICENSE.txt  320 bytes          [emitted]
```
