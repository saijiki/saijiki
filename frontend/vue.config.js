module.exports = {
    outputDir: '../public',
    indexPath: '../resources/views/welcome.blade.php',
    devServer: {
        proxy: {
            '^/api($|/)': {
                target: 'http://localhost',
            },
            '^/storage($|/)': {
                target: 'http://localhost',
            },
        },
    },
};
