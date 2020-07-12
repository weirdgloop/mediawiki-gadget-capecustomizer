### *RuneScape* cape customizer

This is a super simple project to allow development of the cape customizer mini app for use on [runescape.wiki](https://runescape.wiki).

Since the RS Wiki runs on [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki), which doesn’t allow ES6, this project just helps us develop in ES6 and automatically spit out wiki-compliant JavaScript by using Babel.

The cape customizer itself relies on the [tinycolor2](https://www.npmjs.com/package/tinycolor2) library for color conversion, but that isn’t strictly a dependency of this project. This project exists purely so we can use Babel. Note that, for linting purposes, we assume `window.tinycolor` is available globally by specifying it as such in `.eslintrc.json`.

To deploy this on the RS Wiki, you would need to include the transpiled JavaScript this project produces as well as the tinycolor2 library on whichever pages it is being added to. Minimal helpful styles are included in `styles.css`, though you may wish to add additional styles for production.

## Getting started

`npm start`

Modify `dev.js` to your heart’s content. Every time you save, the file at `build/transpiled.js` will be overwritten. If no such file exists, it will be created.

`Ctrl + C` to stop the process.

If you don’t want run a process to continually update the build file every time you save `dev.js`, you can transpile manually by running `gulp babel`.
