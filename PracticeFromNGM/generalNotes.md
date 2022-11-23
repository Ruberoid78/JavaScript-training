### Initialization of the project

---

- Create folders:
  - dist
  - src
- "npm init -y" => package.json
- "npm install express"
- "npm install --save-dev nodemon"
- "npm install --save-dev @types/node" for detailed info during development
- "npm install --save-dev @types/express"
- "tsc --init"

After "tsc --init" tsconfig.json appears.
Change target, outDir to dist, rootDir => src.

- "tsc" compilation of \*.ts files

If we want to observe the simultaneous update of the code, then we need to
open a separate window and type "tsc -w". It will compilate the code automatically.

Then we need to edit **package.json**:

```Javascript
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc",
    "build:watch": "tsc -w"
  }
```

Then your command in the terminal will look like
"npm run build:watch".  
Usually, it's preferred to run applications like "npm run...", not directly.

- $ npx nodemon dist/index.js  
  It's needed for automatic update in the browser.
