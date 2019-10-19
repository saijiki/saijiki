module.exports = {
    outputDir: '../public',
    indexPath: '../resources/views/welcome.blade.php',
    devServer: {
        proxy: {
            '^/(api|storage)($|/)': {
                target: 'http://localhost',
            },
        },
    },
};
