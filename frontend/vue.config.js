module.exports = {
    outputDir: '../public',
    indexPath: '../resources/views/welcome.blade.php',
    configureWebpack: {
        performance: { hints: false },
    },
    devServer: {
        proxy: {
            '^/(api|storage)($|/)': { target: 'http://localhost' },
        },
    },
};
