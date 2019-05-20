module.exports = {
    outputDir: '../public',
    indexPath: '../resources/views/welcome.blade.php',
    devServer: {
        proxy: {
            '^/api($|/)': {
                target: 'http://192.168.99.100',
            },
        },
        public: '192.168.99.100:8000',
    },
};
