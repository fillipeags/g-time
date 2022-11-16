module.exports = {
  testPathIgnorePatterns: [
    '<rootDir>/src/assets',
    '<rootDir>/src/dtos',
    '<rootDir>/node_modules/',
  ],

  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],

  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },

  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.(js|jsx|ts|tsx)',
    '<rootDir>/src/contexts/**/*.(js|jsx|ts|tsx)',
    '<rootDir>/src/helpers/**/*.(js|jsx|ts|tsx)',
    '<rootDir>/src/hooks/**/*.(js|jsx|ts|tsx)',
    '<rootDir>/src/pages/**/*.(js|jsx|ts|tsx)',
    '<rootDir>/src/routes/**/*.(js|jsx|ts|tsx)',
    '<rootDir>/src/services/**/*.(js|jsx|ts|tsx)',
    '<rootDir>/src/utils/**/*.(js|jsx|ts|tsx)',
  ],
};
