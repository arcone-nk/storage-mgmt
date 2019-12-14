module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/tests/.*(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/[!_]*.{ts,tsx}'],
  setupFiles: ['<rootDir>/tests/modules/localStorageMock.js'],
  testURL: 'http://127.0.0.1/'
}
