module.exports = {
  env: {
    test: {
      presets: ['@babel/env',
        {
          spec: true,
          modules: false,
          forceAllTransforms: true,
          useBuiltIns: 'usage',
          corejs: {
            version: 3,
            proposals: true,
          }
        }
      ],
      plugins: ['@babel/plugin-transform-runtime']
    }
  },
  presets: [
    ['@babel/env', '@babel/preset-env', {targets: {node: 'current'}}
      {
        loose: true,
        modules: false
      }
    ], '@babel/preset-typescript'
  ],
  plugins: ['@babel/plugin-proposal-object-rest-spread']
}
