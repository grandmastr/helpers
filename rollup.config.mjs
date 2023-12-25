import path from 'path';
import babel from '@rollup/plugin-babel';
import multi from "@rollup/plugin-multi-entry";
import typescript from "@rollup/plugin-typescript";

import defaultsTsConfig from './tsconfig.json' assert {type: 'json'}

export default {
  input: path.resolve(__dirname, 'src/**.ts'),
  plugins: [
    multi(),
    typescript({
      ...defaultsTsConfig.compilerOptions,
      ...{
        outDir: 'dist/esm',
        exclude: defaultsTsConfig.exclude,
      }
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  output: {
    dir: 'dist/esm',
    format: 'esm',
    exports: 'named'
  }
}
