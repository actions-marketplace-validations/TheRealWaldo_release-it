module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['RIT-'],
    },
  },
  rules: {
    'references-empty': [2, 'never'],
  },
};