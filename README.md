### *RuneScape* cape customizer

This is a super simple project to allow development of the [cape customizer mini app](https://sandbox.cjl750.vercel.app/rs-cape-customizer) for use on [runescape.wiki](https://runescape.wiki).

Since the RS Wiki runs on [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki), which doesn’t allow ES6, this project just helps us develop in ES6 and automatically spit out wiki-compliant JavaScript by using Babel.

The cape customizer itself relies on the [tinycolor2](https://www.npmjs.com/package/tinycolor2) library for color conversion, but that isn’t strictly a dependency of this project. This project exists purely so we can use Babel. Note that, for linting purposes, we assume `window.tinycolor` is available globally by specifying it as such in `.eslintrc.json`.

To deploy this on the RS Wiki, you would need to include the transpiled JavaScript this project produces as well as the tinycolor2 library on whichever pages it is being added to. Minimal helpful styles are included in `styles.css`, though you may wish to add additional styles for production.

## Getting started

`npm start`

Modify `dev.js` to your heart’s content. Every time you save, the file at `build/transpiled.js` will be overwritten. If no such file exists, it will be created.

`Ctrl + C` to stop the process.

If you don’t want run a process to continually update the build file every time you save `dev.js`, you can transpile manually by running `gulp babel`.


## Template minification

For performance purposes, we include minified HTML in the JS file, but such markup can be difficult to modify if necessary.

For this reason, prettified HTML is available in the templates folder. This can be minified using the functions below in your browser console when it is ready to be updated in the JS file.

```
// minification is good enough for our purposes here; probably not a flawless solution
function hackyTemplateMinification(templateLiteral) {
  // remove whitespace between one closing tag > and the next opening tag <
  const simpleWhitespaceRemovalPattern = />[\n\s+]*([^\n\s]?)[\n\s]*</gm;
  const initialPass = templateLiteral.replace(simpleWhitespaceRemovalPattern, '>$1<');
  // trim whitespace around each element's textContent
  const secondayWhitespaceRemovalPattern = />[^\w?.!><()]*([\w?.!()\- ]*)[\n\s]*/gm;
  const secondPass = initialPass.replace(secondayWhitespaceRemovalPattern, '>$1');
  return secondPass.trim();
}

function simpleSvgMinification(svgMarkup) {
  const newlineRemovalPattern = />\s*</gm;
  return svgMarkup.replace(newlineRemovalPattern, '><').trim();
}
```
