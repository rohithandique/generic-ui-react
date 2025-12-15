const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'https://sonarcloud.io',
  options: {
    'sonar.organization': 'rohithandique',
    'sonar.projectKey': 'rohithandique_generic-ui-react',
    'sonar.sources': 'src',
    'sonar.tests': 'src',
    'sonar.inclusions': '**/*.ts,**/*.tsx',
    'sonar.test.inclusions': 'src/**/*.test.tsx,src/**/*.test.ts',
    'javascript.lcov.reportPaths': 'coverage/lcov.info',
    'sonar.token': process.env.SONAR_TOKEN,
  },
}, () => process.exit());
