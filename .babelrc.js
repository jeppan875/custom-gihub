const env = require('./env.config.js');

module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
                useBuiltIns: 'usage',
                targets: {
                    browsers: ['> 0.5% in SE', 'Firefox ESR', 'not ie <= 10'],
                },
                corejs: 3,
            },
        ],
        'next/babel',
    ],
    plugins: [
        ['transform-define', env],
        [
            'module-resolver',
            {
                root: ['./'],
                alias: {
                    utils: './app/utils',
                    helpers: './app/helpers',
                    containers: './app/containers',
                    components: './app/components',
                    websocket: './app/websocket',
                    routing: './app/routing',
                    static: './static',
                },
            },
        ],
        [
            'styled-components',
            {
                ssr: true,
                displayName: true,
                preprocess: false,
            },
        ],
        ['lodash'],
        ['inline-react-svg'],
    ],
};
