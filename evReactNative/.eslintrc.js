module.exports = {
  root: true,
  extends: "@react-native",
  rules: {
    quotes: ["error", "double"],
  },
  overrides: [
    {
      // Enable linting for test files only
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
};
