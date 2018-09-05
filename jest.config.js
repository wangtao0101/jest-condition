module.exports = {
  "setupTestFrameworkScriptFile": "./lib/index",
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts?)$",
  "moduleFileExtensions": [
    "ts",
    "js"
  ],
  "transform": {
    "^.+\\.ts$": "ts-jest"
  }
}
