module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "identity-obj-proxy"
      }
}
