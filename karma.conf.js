module.exports = function(config) {
    config.set({
      frameworks: ['jasmine'],
      files: [
        'src/**/*.js', // Arquivos de origem do seu aplicativo
        'tests/**/*.spec.js' // Arquivos de teste
      ]
    });
  };