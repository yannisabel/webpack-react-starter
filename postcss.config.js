module.exports = {
    ident: 'postcss',
    syntax: 'postcss-scss',
    plugins: [
        require('postcss-preset-env')(),
    ]
}