const gulp = require('gulp');
const babel = require('@babel/core');
const fse = require('fs-extra');

const inputFileName = 'dev.js';
const outputFileName = 'transpiled.js';
const outputFileLocation = `build/${outputFileName}`;

const babelConfig = {
  presets: [
    ['@babel/env'],
  ],
};

const transpile = (code, options) => babel.transformSync(code, options);

gulp.task('babel', (done) => {
  const codeToTranspile = fse.readFileSync(inputFileName, 'utf-8');
  const output = transpile(codeToTranspile, babelConfig).code;
  fse.outputFileSync(outputFileLocation, output);
  done();
});

gulp.task('babel-watch', () => {
  gulp.watch(inputFileName, gulp.series('babel', (done) => done()));
});
