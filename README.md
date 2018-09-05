# Jest Condition

An enhancer for jest it and describe to dynamic skip some suits and tests.

## Install
```
npm install jest-condition --save-dev
```

set jest config file
```
"setupTestFrameworkScriptFile": "jest-condition"
```

if you have your own setupTestFrameworkScriptFile, you should require jest-condition in top of you own setupTestFrameworkScriptFile;
```
require('jest-condition');
```

## Usage

```
it.condition(true)('test condition', async () => {
});

// you can also add skip or only after condition when debug
it.condition(true).skip('test condition skip', async () => {
});

it.condition(true).only('test condition skip', async () => {
});

describe.condition(true)('describe condition', () => {
});

describe.condition(true).skip('describe condition skip', () => {
});

describe.condition(true).only('describe condition skip', () => {
});
```

## Typescript

use files in tsconfig.json
```
{
  "files": [
    "node_modules/jest-condition/index.d.ts"
  ],
}
```
