/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.(js|jsx)',
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/src/helper/axios.js',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.js',
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
};
