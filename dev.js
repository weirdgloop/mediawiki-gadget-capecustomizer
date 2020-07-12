const appMarkup = `
  <div class="rsCapeCustomizer_content">
    <div class="rsCapeCustomizer_maxCape">
      <svg id="max-cape" xmlns="http://www.w3.org/2000/svg" width="221" height="425" viewBox="0 0 442 850">
        <path id="capeDetailTop" fill="hsl(0, 100%, 31%)" d="M347 21.012704l1 1.000605 13 65.039323 4 50.030248 3 37.022383 3 41.024804 10 98.059286-48 13.007864 54 132.079855-52.5-38.022989-6.5 51.030853-3 106.064126 5 80.048397 1 17.010284-8 78.047187-2-10.006049-3-27.016334-5-28.016939-1-8.00484-5-41.024803-31.897 4.986035L281 699.422868l-22 80.048396L225 827l50-184.611615.061.581615L287 561.339383l7-81.049002-2-154.093164-5-95.057471-3-83.050212V91.055051l13-7.004234 7-7.004235 19 29.017544 6 91.055051 34-2.00121-8-110.066545-19-32.01936 11-32.019358zm-261-2.00121l11 34.020569-19 32.019359-7 109.06594 36 3.001815 4-90.054446 20-31.018754 6 6.00363 14 8.00484v70.042347l-2 115.06957-3 49.029643v158.095584l9 82.049607L169.94 645.068l.06-.678405L223 827l-34.5-46.528131-23.5-79.047792 4.913-56.042077L137 642.388385l-14.5 121.0732-9-87.052632 3.5-108.065335-3-59.035693-1-33.019964-8-53.032063h-1l-51 40.024199 52-134.081065 2-130.078645-49 112.067756L73 87.052632l11-62.037508 2-6.00363zm2 538.325469l-12 96.058076c-37.333333 14.67554-56 21.679774-56 21.012704 0-.667069 2.333333-11.006654 7-31.018753l61-86.052027zm265-5.003025l59 80.048397 9 33.019964-54-18.010889-14-95.057472zm-4-440.266182l6 74.044767-18 1.000605c-4-49.363178-5.666667-74.044767-5-74.044767.666667 0 4 1.33414 10 4.002419l7-5.003024zm-264-1.000605l9 5.003024 8-4.002419-3 75.045372-18-1.000605 4-75.045372zm199-64.038718l14 21.012704-5 5.003025-9 5.003025V47.028433zm-134 0v30.018149l-8-4.00242-6-7.004235 14-19.011494zM112 0l13 2.00121 32 37.022383 54 8.00484h10l55-6.00363L308 4.00242l12-3.001815-2 3.001815 6 6.00363h-6l-11 3.001815-23 34.020568-60 9.005445-7-4.00242-6 4.00242-61-9.005445-26-38.022988-14-7.004235L112 0z"></path>
        <path id="capeDetailBot" fill="hsl(0, 58%, 29%)" d="M217 63.036992l20 13.007884 12 34.020618 35-19.011522v58.035173l9 173.104912 1 158.095816-7 81.04912-12 82.049727L225 827h-2l-53-181.610067-15-80.048514-9-82.049727V324.19527l3-49.029715 2-185.11219 35 19.011523 12-32.019406 19-14.00849zM113.5 676.408733l9 87.052759-21.5-6.003639 12.5-81.04912zm217.5-1.000607l13 75.545785-20 6.503942-1-7.004245 8-75.045482zM96 472.285021l-8 85.051547-61 87.052759 16-103.062462 53-69.041844zm250 0l50.5 64.038812 13 72.543966 2.5 23.514251-59-80.048515-7-80.048514zM107 199.119466l-2 130.078836-52 134.081261 5-152.092177 49-112.06792zm222-2.001213l52 116.070346 6 145.087932-54-131.079442-4-130.078836zm0-185.112189l10 2.001213 8 7.004245c-18 43.359612-27 65.372953-27 66.040024 0 .667071 1 7.004245 3 19.011523l-19-29.017587 31-34.020618-1-25.015161-5-6.003639zM102 8.00364l-4 3.001819 1 30.018193 32 35.021225-19 29.017586 2-18.010916-16-34.020618-1-1.000607-11-32.019405 1-4.002426 15-8.004851zm48 39.02365l61 9.005458-18 12.007277-11 27.016374-32-18.010916V47.02729zm134 0v31.0188l-29 17.010309h-2l-11-27.016374-18-12.007277 60-9.005458zm39-37.022438l2 1.000607 2 23.013948-30 33.020012-13-20.012129 23-34.020618 11-3.00182h5zM110 2l14 7.004245 26 38.023044-14 19.011522-29-35.021225V4.001213L110 2z"></path>
        <path id="capeBgTop" fill="hsl(36, 93%, 62%)" d="M261 819.5l3 15-37.5 15.5h-6c-.66 0-12.59115-4.9005-35.79345-14.7015L184 835l2-13.5 36 12.5h4l35-14.5zM157.5 811l19.5 8-.5 13-22-10 3-11zm133-4l2.5 11-20 11-3-13 20.5-9zM144 649.5l17 1.5-10 108-22 1 15-110.5zm156.5-3.5L317 756h-22l-12-107.5 17.5-2.5zM76 653l-.5 33.5L71 716l-60-9 9-33 56-21zm291-6l54 18 2 5 10 28.5-60.5 11-5-31-.5-31.5zM103 431.5l4.5 48L97 471l-53 69 5.5-70 53.5-38.5zm234.5-2l52.5 37 6.5 69.5-50.5-63-1-4h-3l-8.5 7.5.645881-7.16984L337.5 429.5zM86 18l-2 7-11 63-12 177-3 45-5 153-22 5 22.5-144L70 90l11-67 5-5zM322 0l26 19 3 5 13 64 19 229 24 148-20-7-6-145-10-98-10-128-13-63-9-10-12-4-5-4V0z"></path>
        <path id="capeBgBot" fill="hsl(51, 100%, 70%)" d="M259 779.5l1 32-35 15.5 34-47.5zm-70.5 1L223 827l-35-13 .5-33.5zm-24.5-55l1.5 3 15.5 55-3 26.5-19.5-5 5.5-79.5zm118.5-1.5l6.5 77.5-19 6-3.5-26 16-57.5zM98 765.5l23 6v19h-2.5l-27.5-7 7-18zm250-6l7 17-30 9v-20l23-6z"></path>
        <path fill="#D6AF70" d="M20 674l-9 33 60 9 4.5-29.5 4.5 43L0 713l20-39zm401-9l21 38-78 20 3.5-44.5 5 31 60.5-11-12-33.5z"></path>
        <path fill="#EEC985" d="M104.5 422.5L113 476l4 92-3.5 108-12.5 81.5-3 7.5-14 15.5 13-25 10-74.5 2-111.5-1.5-90-2.5-27-2-21 1.5-9zm230-2.5l3 9.5-4 47L337 675l10.5 72.5 13.5 26-13-14.5-4-8.5-13-75-6-97.5 3-107 6.5-51z"></path>
        <path fill="#AE8D57" d="M104.5 422.5l-1.5 9L49.5 470 31 468l22-5 51.5-40.5zm230-2.5l52.5 38 20 7-17 1.5-52.5-37-3-9.5z"></path>
        <path fill="#FAD591" d="M165 701.5l23.5 78.5-.5 33.5-2 8-2 13.5-7.5-3 .5-13 1-9.5 3-26.5-15.5-55-1.5-3 1-23.5zm116-2.5l1.5 24.5-16 57.5 3.5 26v9l3 13-9 5.5-3-15-1-8.5-1-32 22-80z"></path>
        <path fill="#F2CF89" d="M137 642l33 3-9 6-17-1.5-7-7.5zm170-4l-6.5 8-17.5 2.5-8-5.5 32-5z"></path>
        <path fill="#C29B61" d="M137 642l7 7.5L129 760l-.5 30H121v-19l-23-6 3-7.5 21.5 5.5L137 642zm170-4l17 119 20-6.5 4 8.5-23 6v20h-7l-1-29-16.5-110 6.5-8zM98 765l-7 18-7-2.5L98 765zm250-6l13 14.5-6 2.5-7-17z"></path>
        <path fill="#E4BD78" d="M260 811l1 8.5-35 14.5h-4l-36-12.5 2-8 35 13h2l35-15.5zm-90-166l-5 56-1 24-5.5 79.5 19.5 5-1 9.5-19.5-8-3 11-9.5-5.5 6-58.5 10-107 9-6zm105-2l8 5.5 19 164-9 5.5-2.5-11-20.5 9v-9l19-6-6.5-77.5L281 699l-6-56z"></path>
      </svg>
      <div class="rsCapeCustomizer_capeBackground"></div>
    </div>
    <div class="rsCapeCustomizer_colorPicker">
      <fieldset class="rsCapeCustomizer_colorPickerFs">
        <legend class="rsCapeCustomizer_colorPickerLegend">
          <span class="rsCapeCustomizer_colorPickerLegendText">Input Mode</span>
        </legend>
        <div class="rsCapeCustomizer_colorPickermodeInputsWrapper">
          <div class="rsCapeCustomizer_colorPickerinputLabelWrapper">
            <label for="input-hsl" class="rsCapeCustomizer_colorPickerlabel">HSL</label>
            <input type="radio" name="mode" id="input-hsl" class="rsCapeCustomizer_colorPickerRadio" checked/>
          </div>
          <div class="rsCapeCustomizer_colorPickerinputLabelWrapper">
            <label for="input-hex" class="rsCapeCustomizer_colorPickerlabel">Hex</label>
            <input type="radio" name="mode" id="input-hex" class="rsCapeCustomizer_colorPickerRadio"/>
          </div>
          <div class="rsCapeCustomizer_colorPickerinputLabelWrapper">
            <label for="input-rgb" class="rsCapeCustomizer_colorPickerlabel">RGB</label>
            <input type="radio" name="mode" id="input-rgb" class="rsCapeCustomizer_colorPickerRadio"/>
          </div>
        </div>
      </fieldset>
      <fieldset class="rsCapeCustomizer_colorPickerFs">
        <legend class="rsCapeCustomizer_colorPickerLegend">
          <span class="rsCapeCustomizer_colorPickerLegendText">Choose Colors</span>
        </legend>
        <div class="rsCapeCustomizer_colorInputWrapper">
          <label id="detailTop-label" for="detailTop" class="rsCapeCustomizer_colorInputLabel">Detail Top</label>
          <span class="rsCapeCustomizer_colorInputPrefix">hsl(</span>
          <input type="text" id="detailTop" class="rsCapeCustomizer_colorInputTextInput" value=""/>
          <span class="rsCapeCustomizer_colorInputPostfix">)</span>
          <p class="rsCapeCustomizer_colorInputErrorMessage"></p>
        </div>
        <div class="rsCapeCustomizer_colorInputWrapper">
          <label id="detailBot-label" for="detailBot" class="rsCapeCustomizer_colorInputLabel">Detail Bottom</label>
          <span class="rsCapeCustomizer_colorInputPrefix">hsl(</span>
          <input type="text" id="detailBot" class="rsCapeCustomizer_colorInputTextInput" value=""/>
          <span class="rsCapeCustomizer_colorInputPostfix">)</span>
          <p class="rsCapeCustomizer_colorInputErrorMessage"></p>
        </div>
        <div class="rsCapeCustomizer_colorInputWrapper">
          <label id="bgTop-label" for="bgTop" class="rsCapeCustomizer_colorInputLabel">Background Top</label>
          <span class="rsCapeCustomizer_colorInputPrefix">hsl(</span>
          <input type="text" id="bgTop" class="rsCapeCustomizer_colorInputTextInput" value=""/>
          <span class="rsCapeCustomizer_colorInputPostfix">)</span>
          <p class="rsCapeCustomizer_colorInputErrorMessage"></p>
        </div>
        <div class="rsCapeCustomizer_colorInputWrapper">
          <label id="bgBot-label" for="bgBot" class="rsCapeCustomizer_colorInputLabel">Background Bottom</label>
          <span class="rsCapeCustomizer_colorInputPrefix">hsl(</span>
          <input type="text" id="bgBot" class="rsCapeCustomizer_colorInputTextInput" value=""/>
          <span class="rsCapeCustomizer_colorInputPostfix">)</span>
          <p class="rsCapeCustomizer_colorInputErrorMessage"></p>
        </div>
      </fieldset>
    </div>
    <div class="rsCapeCustomizer_colorOutput">
      <h3 class="rsCapeCustomizer_colorOutputHeader">Use These Colors</h3>
      <div class="rsCapeCustomizer_colorOutputGroup">
        <h5 class="rsCapeCustomizer_colorOutputSubhead">Detail Top</h5>
        <div class="rsCapeCustomizer_colorOutputValuesWrapper">
          <p class="rsCapeCustomizer_colorOutputLabel">
            H: <span class="rsCapeCustomizer_colorOutputValue"></span>
          </p>
          <p class="rsCapeCustomizer_colorOutputLabel">
            S: <span class="rsCapeCustomizer_colorOutputValue"></span>
          </p>
          <p class="rsCapeCustomizer_colorOutputLabel">
            L: <span class="rsCapeCustomizer_colorOutputValue"></span>
          </p>
        </div>
      </div>
      <div class="rsCapeCustomizer_colorOutputGroup">
        <h5 class="rsCapeCustomizer_colorOutputSubhead">Detail Bottom</h5>
        <div class="rsCapeCustomizer_colorOutputValuesWrapper">
          <p class="rsCapeCustomizer_colorOutputLabel">
            H: <span class="rsCapeCustomizer_colorOutputValue"></span>
          </p>
          <p class="rsCapeCustomizer_colorOutputLabel">
            S: <span class="rsCapeCustomizer_colorOutputValue"></span>
          </p>
          <p class="rsCapeCustomizer_colorOutputLabel">
            L: <span class="rsCapeCustomizer_colorOutputValue"></span>
          </p>
        </div>
      </div>
      <div class="rsCapeCustomizer_colorOutputGroup">
        <h5 class="rsCapeCustomizer_colorOutputSubhead">Background Top</h5>
        <div class="rsCapeCustomizer_colorOutputValuesWrapper">
          <p class="rsCapeCustomizer_colorOutputLabel">
            H: <span class="rsCapeCustomizer_colorOutputValue"></span>
          </p>
          <p class="rsCapeCustomizer_colorOutputLabel">
            S: <span class="rsCapeCustomizer_colorOutputValue"></span>
          </p>
          <p class="rsCapeCustomizer_colorOutputLabel">
            L: <span class="rsCapeCustomizer_colorOutputValue"></span>
          </p>
        </div>
      </div>
      <div class="rsCapeCustomizer_colorOutputGroup">
        <h5 class="rsCapeCustomizer_colorOutputSubhead">Background Bottom</h5>
        <div class="rsCapeCustomizer_colorOutputValuesWrapper">
          <p class="rsCapeCustomizer_colorOutputLabel">
            H: <span class="rsCapeCustomizer_colorOutputValue"></span>
          </p>
          <p class="rsCapeCustomizer_colorOutputLabel">
            S: <span class="rsCapeCustomizer_colorOutputValue"></span>
          </p>
          <p class="rsCapeCustomizer_colorOutputLabel">
            L: <span class="rsCapeCustomizer_colorOutputValue"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
`;

const colorInputMarkup = [
  '<input id="detailTop-picker" type="color" class="rsCapeCustomizer_colorInputColorPicker" aria-labelledby="detailTop-label" value="#9e0000">',
  '<input id="detailBot-picker" type="color" class="rsCapeCustomizer_colorInputColorPicker" aria-labelledby="detailBot-label" value="#751f1f">',
  '<input id="bgTop-picker" type="color" class="rsCapeCustomizer_colorInputColorPicker" aria-labelledby="bgTop-label" value="#f8b044">',
  '<input id="bgBot-picker" type="color" class="rsCapeCustomizer_colorInputColorPicker" aria-labelledby="bgBot-label" value="#ffe866">',
];

const defaultCapeConfig = [
  {
    id: 'detailTop',
    name: 'Detail Top',
    defaultValue: 'hsl(0, 100%, 31%)',
    color: 'hsl(0, 100%, 31%)',
  },
  {
    id: 'detailBot',
    name: 'Detail Bottom',
    defaultValue: 'hsl(0, 58%, 29%)',
    color: 'hsl(0, 58%, 29%)',
  },
  {
    id: 'bgTop',
    name: 'Background Top',
    defaultValue: 'hsl(36, 93%, 62%)',
    color: 'hsl(36, 93%, 62%)',
  },
  {
    id: 'bgBot',
    name: 'Background Bottom',
    defaultValue: 'hsl(51, 100%, 70%)',
    color: 'hsl(51, 100%, 70%)',
  },
];

const errorMessages = [
  'Invalid input. Use format 0, 0%, 0%.',
  'Invalid input. Use format 000000.',
  'Invalid input. Use format 0, 0, 0.',
];

const currentConfig = {
  capeSegmentData: defaultCapeConfig,
  mode: 'hsl',
  errors: [],
};

const browserSupportsColorInputs = !window.document.documentMode;
const errorClass = 'rsCapeCustomizer_inputErrorMessage-visible';
const hueOriginalMax = 360;
const hueRSMax = 63;
const saturationOriginalMax = 100;
const saturationRSMax = 7;
const luminosityOriginalMax = 100;
const luminosityRSMax = 127;
const elementCache = {};
let debounceTimer = null;


// minification is good enough for our purposes here; probably not a flawless solution
function hackkyTemplateMinification(templateLiteral) {
  // remove whitespace between one closing tag > and the next opening tag <
  const simpleWhitespaceRemovalPattern = />[\n\s+]*([^\n\s]?)[\n\s]*</gm;
  const initialPass = templateLiteral.replace(simpleWhitespaceRemovalPattern, '>$1<');
  // trim whitespace around each element's textContent
  const secondayWhitespaceRemovalPattern = />[^\w?.!><()]*([\w?.!()\- ]*)[\n\s]*/gm;
  const secondPass = initialPass.replace(secondayWhitespaceRemovalPattern, '>$1');
  return secondPass.trim();
}

function roundToMultiple(input, originalMax, RSMax) {
  return Math.round(parseInt(input) / (originalMax / RSMax));
}

function getNumbersFromColorString(string) {
  if (string.indexOf('#') === 0) {
    return string.split('#')[1];
  }
  return string.split('(')[1].split(')')[0];
}

function getNumbersFromHslString(string) {
  return string.split('(')[1].split(')')[0];
}

function formatRawColorValue(string, mode) {
  if (mode === 'hsl') {
    return `hsl(${string})`;
  }
  if (mode === 'hex') {
    return `#${string}`;
  }
  return `rgb(${string})`;
}

function getHue(hslString) {
  const numbers = getNumbersFromHslString(hslString).split(',');
  return roundToMultiple(numbers[0], hueOriginalMax, hueRSMax);
}

function getSaturation(hslString) {
  const numbers = getNumbersFromHslString(hslString).split(',');
  return roundToMultiple(numbers[1].trim(), saturationOriginalMax, saturationRSMax);
}

function getLuminosity(hslString) {
  const numbers = getNumbersFromHslString(hslString).split(',');
  return roundToMultiple(numbers[2].trim(), luminosityOriginalMax, luminosityRSMax);
}

function updateOutputText() {
  const { capeSegmentData } = currentConfig;
  const { outputGroups } = elementCache;

  for (let i = 0, l = outputGroups.length; i < l; i += 1) {
    const group = outputGroups[i];
    const groupValues = group.querySelectorAll('.rsCapeCustomizer_colorOutputValue');
    const colorString = capeSegmentData[i].color;
    groupValues[0].textContent = getHue(colorString);
    groupValues[1].textContent = getSaturation(colorString);
    groupValues[2].textContent = getLuminosity(colorString);
  }
}

function updateCapeSegments() {
  const { capeSegments } = elementCache;
  for (let i = 0, l = capeSegments.length; i < l; i += 1) {
    capeSegments[i].setAttribute('fill', currentConfig.capeSegmentData[i].color);
  }
}

function updateErrorText(index, add) {
  const adding = !!add;
  const { errorParagraphs } = elementCache;
  const { errors, mode } = currentConfig;
  const paragraph = errorParagraphs[index];
  if (adding) {
    if (!errors.includes(index)) {
      paragraph.classList.add(errorClass);
      errors.push(index);
    }
    const isHsl = mode === 'hsl';
    const isHex = mode === 'hex';
    let errorMessageIndex;
    if (isHsl) {
      errorMessageIndex = 0;
    } else if (isHex) {
      errorMessageIndex = 1;
    } else { // mode === 'rgb'
      errorMessageIndex = 2;
    }
    paragraph.textContent = errorMessages[errorMessageIndex];
  } else if (errors.includes(index)) {
    const errorIndex = errors.indexOf(index);
    const newError = errors.slice();
    errorParagraphs[index].classList.remove(errorClass);
    newError.splice(errorIndex, 1);
    currentConfig.errors = newError;
  }
}

function addErrorText(index) {
  updateErrorText(index, true);
}

function removeErrorText(index) {
  updateErrorText(index);
}

function setColors(colors) {
  currentConfig.capeSegmentData = colors;
}

function syncColorInput(color, index) {
  const { colorPickers } = elementCache;
  colorPickers[index].value = color;
}

function updateColors(value, index) {
  const { capeSegmentData, mode } = currentConfig;
  const newColor = formatRawColorValue(value, mode);
  const tcNewColor = tinycolor(newColor);
  if (!tcNewColor.isValid()) {
    addErrorText(index);
    return;
  }

  const newSegments = capeSegmentData.slice();
  const matchingSegment = newSegments[index];
  matchingSegment.color = tcNewColor.toHslString(); // always send hsl values to SVG for simplicity;

  setColors(newSegments);
  syncColorInput(tcNewColor.toHexString(), index);
  updateCapeSegments();
  updateOutputText();
  removeErrorText(index);
}

function syncTextInput(target, index) {
  const { mode } = currentConfig;
  const { colorInputs } = elementCache;
  const originalValue = target.value;
  let convertedValue;
  if (mode === 'hsl') {
    convertedValue = getNumbersFromColorString(tinycolor(originalValue).toHslString());
  } else if (mode === 'hex') {
    convertedValue = getNumbersFromColorString(originalValue);
  } else {
    convertedValue = getNumbersFromColorString(tinycolor(originalValue).toRgbString());
  }
  colorInputs[index].value = convertedValue;
  updateColors(convertedValue, index);
}

function handleModeChange(mode) {
  const oldMode = currentConfig.mode;
  const { colorInputs, modePrefixes, modePostfixes } = elementCache;
  const isHsl = mode === 'hsl';
  const isHex = mode === 'hex';
  currentConfig.mode = mode;
  for (let i = 0, l = colorInputs.length; i < l; i += 1) {
    const thisValue = colorInputs[i].value;
    const oldValueFormatted = formatRawColorValue(thisValue, oldMode);
    const newValueFormatted = formatRawColorValue(thisValue, mode);
    const tcOldColor = tinycolor(oldValueFormatted);
    const tcNewColor = tinycolor(newValueFormatted);
    const oldValueIsValid = tcOldColor.isValid();
    const newValueIsValid = tcNewColor.isValid();
    const adding = newValueIsValid ? false : !oldValueIsValid;
    let convertedColor;
    if (!oldValueIsValid && newValueIsValid) {
      convertedColor = thisValue;
      updateColors(convertedColor, i);
    } else if (oldValueIsValid) {
      if (isHsl) {
        convertedColor = getNumbersFromColorString(tinycolor(oldValueFormatted).toHslString());
      } else if (isHex) {
        convertedColor = tinycolor(oldValueFormatted).toHex();
      } else { // mode === 'rgb'
        convertedColor = getNumbersFromColorString(tinycolor(oldValueFormatted).toRgbString());
      }
    } else {
      // if value is invalid in both old and new modes, just leave it in place
      convertedColor = thisValue;
    }
    colorInputs[i].value = convertedColor;
    updateErrorText(i, adding);
  }
  for (let i = 0, l = modePrefixes.length; i < l; i += 1) {
    let modeText;
    let postfix;
    if (isHsl) {
      modeText = 'hsl(';
      postfix = ')';
    } else if (isHex) {
      modeText = '#';
      postfix = '';
    } else { // mode === 'rgb'
      modeText = 'rgb(';
      postfix = ')';
    }
    modePrefixes[i].textContent = modeText;
    modePostfixes[i].textContent = postfix;
  }
}

function handleKeyUp(event, segmentId) {
  const { value } = event.target;
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    updateColors(value, segmentId);
  }, 250);
}

function handlePickerChange(event, index) {
  const { target } = event;
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    syncTextInput(target, index);
  }, 250);
}

function attachEventListeners() {
  const { colorInputs, colorPickers, modeRadios } = elementCache;
  for (let i = 0, l = colorInputs.length; i < l; i += 1) {
    colorInputs[i].addEventListener('keyup', (e) => handleKeyUp(e, i));
  }
  if (browserSupportsColorInputs) {
    for (let i = 0, l = colorPickers.length; i < l; i += 1) {
      colorPickers[i].addEventListener('input', (e) => handlePickerChange(e, i));
    }
  }
  for (let i = 0, l = modeRadios.length; i < l; i += 1) {
    const radio = modeRadios[i];
    const mode = radio.id.split('input-')[1];
    modeRadios[i].addEventListener('change', () => handleModeChange(mode));
  }
}

function init() {
  // inject markup into page
  const markupTarget = document.getElementById('cape-customizer-app-target');
  const markup = hackkyTemplateMinification(appMarkup);
  markupTarget.insertAdjacentHTML('afterbegin', markup);

  // set variables that reference DOM nodes now that we've inserted our markup
  elementCache.capeSegments = [
    document.getElementById('capeDetailTop'),
    document.getElementById('capeDetailBot'),
    document.getElementById('capeBgTop'),
    document.getElementById('capeBgBot'),
  ];

  const modeRadios = document.querySelectorAll('.rsCapeCustomizer_colorPickerRadio');
  elementCache.modeRadios = [];
  for (let i = 0, l = modeRadios.length; i < l; i += 1) {
    elementCache.modeRadios.push(modeRadios[i]);
  }

  const outputGroups = document.querySelectorAll('.rsCapeCustomizer_colorOutputGroup');
  elementCache.outputGroups = [];
  for (let i = 0, l = outputGroups.length; i < l; i += 1) {
    elementCache.outputGroups.push(outputGroups[i]);
  }
  updateOutputText();

  const errorParagraphs = document.querySelectorAll('.rsCapeCustomizer_colorInputErrorMessage');
  elementCache.errorParagraphs = [];
  for (let i = 0, l = errorParagraphs.length; i < l; i += 1) {
    elementCache.errorParagraphs.push(errorParagraphs[i]);
  }

  elementCache.colorInputs = [];
  elementCache.modePrefixes = [];
  elementCache.modePostfixes = [];
  if (browserSupportsColorInputs) {
    elementCache.colorPickers = [];
  }
  const inputWrappers = document.querySelectorAll('.rsCapeCustomizer_colorInputWrapper');
  for (let i = 0, l = inputWrappers.length; i < l; i += 1) {
    const wrapper = inputWrappers[i];
    const prefix = wrapper.querySelector('.rsCapeCustomizer_colorInputPrefix');
    const postfix = wrapper.querySelector('.rsCapeCustomizer_colorInputPostfix');
    const colorInput = postfix.previousElementSibling;
    const { colorInputs, modePrefixes, modePostfixes } = elementCache;
    modePrefixes.push(prefix);
    modePostfixes.push(postfix);
    colorInputs.push(colorInput);
    colorInput.value = getNumbersFromColorString(defaultCapeConfig[i].defaultValue);
    if (browserSupportsColorInputs) {
      postfix.insertAdjacentHTML('afterend', colorInputMarkup[i]);
      const inputWeJustInserted = postfix.nextElementSibling;
      elementCache.colorPickers.push(document.getElementById(inputWeJustInserted.id));
    }
  }

  // make the page interactive
  attachEventListeners();
}

init();
