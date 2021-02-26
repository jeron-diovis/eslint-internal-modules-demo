module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    sourceType: "module",
  },
  plugins: [
    "import"
  ],
  extends: [
    "plugin:import/recommended",
  ],

  settings: {
    "import/resolver": {
      alias: {
        map: [
          [ "~", "./src" ],
          [ "components", "./src/components" ]
        ],
        extensions: [ ".js", ".jsx" ]
      }
    }
  },
  rules: {
    "import/no-internal-modules": [
      "error", {
        "allow": [
          "components/*"
        ]
      }
    ],
    "import/no-duplicates": "off",
  }
}
