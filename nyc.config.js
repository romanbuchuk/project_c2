// ? https://github.com/istanbuljs/nyc#common-configuration-options
module.exports = {
    reporter: ['html'],
    exclude: ['**/*.cy.*', 'node_modules/**', '**/specs/**'],
    include: ['src/**/*'],
    noClean: true,
};
