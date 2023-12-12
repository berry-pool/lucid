export default {
    "name": "@jpg-store/lucid-cardano",
    "version": "0.12.1",
    "license": "MIT",
    "description": "This is a fork of the original Lucid repo compiled into CommonJS. For more information check https://github.com/spacebudz/lucid",
    "repository": "https://github.com/jpg-store/lucid",
    "module": "./dist/esm/mod.js",
    "main": "./dist/esm/mod.js",
    "types": "./dist/types/mod.d.ts",
    "scripts": {
        "pack": "wasm-pack build --target nodejs --release"
    },
    "engines": {
        "node": ">=20"
    },
    "dependencies": {
        "@deno/shim-crypto": "^0.3.1",
        "ws": "^8.14.2"
    },
    "devDependencies": {
        "wasm-pack": "^0.12.1"
    },
    "type": "module",
    "exports": {
        ".": {
            "import": "./dist/esm/mod.js",
            "types": "./dist/types/mod.d.ts"
        }
    },
    "packageManager": "npm@10.2.4+sha256.36b548120f75f26408d04ff163cd4a699916f1c4b72ebeeab0bbaf054009eb5b"
};
