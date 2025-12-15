const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'https://sonarcloud.io',
  options: {
    'sonar.sources': 'src',
    'sonar.tests': 'src',
    'sonar.test.inclusions': 'src/**/*.test.ts,src/**/*.test.tsx',
    'sonar.exclusions': [
      'sonar-project.js',
      'vite.config.ts',
      'postcss.config.js',
      'tailwind.config.js',
      'eslint.config.js',
      'public/**',
      'coverage/**',
      'dist/**'
    ].join(','),
    'javascript.lcov.reportPaths': 'coverage/lcov.info'
  },
}, () => process.exit());
