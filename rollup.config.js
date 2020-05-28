// rollup.config.js
// import typescript from '@rollup/plugin-typescript'
import typescript from 'rollup-plugin-typescript2'
import external from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import multiInput from 'rollup-plugin-multi-input'
import multi from '@rollup/plugin-multi-entry'
export default {
  input: ['src/index.tsx', 'src/**/*/index.tsx'],
  // input: 'src/index.tsx',
  /*  output: {
    dir: 'dist',
  }, */
  output: [
    {
      dir: 'cjs',
      //   file: 'index.js',
      named: true,
      format: 'cjs',
      sourcemap: true,
    },
    {
      dir: 'esm',
      format: 'esm',
      named: true,
      sourcemap: true,
    },
  ],

  plugins: [external(), multiInput(), typescript({}), resolve()],
}
