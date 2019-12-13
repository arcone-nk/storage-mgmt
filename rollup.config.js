import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const _start = 2019
const _now = new Date().getFullYear()
const year = _now > _start ? `${_start} - ${_now}` : _start
const copy = `/*!
Simple HTML5 storage management
${pkg.description}

${pkg.homepage}
Version: ${pkg.version}
Licence: ${pkg.license}

Copyright (c) ${year} ${pkg.author}
*/`

export default {
  input: 'src/index.ts',

  output: [
    {
      file: pkg.main,
      format: 'umd',
      indent: true,
      name: 'storageMgmt',
      banner: copy
    },
    {
      file: 'dist/storage-mgmt.min.js',
      format: 'iife',
      name: 'storageMgmt',
      banner: copy
    }
  ],

  plugins: [
    typescript(),
    terser({
      sourcemap: false,
      include: [/^.+\.min\.js$/]
    })
  ]
}
