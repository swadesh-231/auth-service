/** @type {import("jest").Config} **/
export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: {
          module: "commonjs",
          verbatimModuleSyntax: false,
          ignoreDeprecations: "6.0",
        },
      },
    ],
  },
};
