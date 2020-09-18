const appMarkup = '<div class="rsCapeCustomizer_capePicker"><div class="rsCapeCustomizer_capePickerContent"><fieldset class="rsCapeCustomizer_capePickerFs rsCapeCustomizer_fs"><legend class="rsCapeCustomizer_legend">Cape Type</legend><div class="rsCapeCustomizer_inputsWrapper"><div class="rsCapeCustomizer_inputLabelWrapper"><label class="rsCapeCustomizer_label" for="input-max">Max</label><input type="radio" id="input-max" name="capeTypeToggler" class="rsCapeCustomizer_radio rsCapeCustomizer_capeTypeRadio" value="max" checked></div><div class="rsCapeCustomizer_inputLabelWrapper"><label class="rsCapeCustomizer_label" for="input-comp">Comp</label><input type="radio" id="input-comp" name="capeTypeToggler" class="rsCapeCustomizer_radio rsCapeCustomizer_capeTypeRadio" value="comp"></div><div class="rsCapeCustomizer_inputLabelWrapper"><label class="rsCapeCustomizer_label" for="input-comp-t">Comp (t)</label><input type="radio" id="input-comp-t" name="capeTypeToggler" class="rsCapeCustomizer_radio rsCapeCustomizer_capeTypeRadio" value="compTrim"></div></div></fieldset><div class="rsCapeCustomizer_capeEditor"><div id="cape-svg-wrapper" class="rsCapeCustomizer_capeWrapper"><div id="cape-background" class="rsCapeCustomizer_capeBackground"></div></div><div class="rsCapeCustomizer_colorPicker"><fieldset class="rsCapeCustomizer_fs"><legend class="rsCapeCustomizer_legend"><span class="rsCapeCustomizer_legendText">Input Mode</span></legend><div class="rsCapeCustomizer_inputsWrapper"><div class="rsCapeCustomizer_inputLabelWrapper"><label for="input-hsl" class="rsCapeCustomizer_label">HSL</label><input type="radio" id="input-hsl" name="mode" class="rsCapeCustomizer_radio rsCapeCustomizer_colorPickerRadio" checked></div><div class="rsCapeCustomizer_inputLabelWrapper"><label for="input-hex" class="rsCapeCustomizer_label">Hex</label><input type="radio" id="input-hex" name="mode" class="rsCapeCustomizer_radio rsCapeCustomizer_colorPickerRadio"></div><div class="rsCapeCustomizer_inputLabelWrapper"><label for="input-rgb" class="rsCapeCustomizer_label">RGB</label><input type="radio" id="input-rgb" name="mode" class="rsCapeCustomizer_radio rsCapeCustomizer_colorPickerRadio"></div></div></fieldset><fieldset class="rsCapeCustomizer_fs"><legend class="rsCapeCustomizer_legend"><span class="rsCapeCustomizer_legendText">Choose Colors</span></legend><div class="rsCapeCustomizer_colorInputWrapper"><label id="detailTop-label" for="detailTop" class="rsCapeCustomizer_colorInputLabel">Detail Top</label><span class="rsCapeCustomizer_colorInputPrefix">hsl(</span><input type="text" id="detailTop" class="rsCapeCustomizer_colorInputTextInput"><span class="rsCapeCustomizer_colorInputPostfix">)</span><p class="rsCapeCustomizer_colorInputErrorMessage"></p></div><div class="rsCapeCustomizer_colorInputWrapper"><label id="detailBot-label" for="detailBot" class="rsCapeCustomizer_colorInputLabel">Detail Bottom</label><span class="rsCapeCustomizer_colorInputPrefix">hsl(</span><input type="text" id="detailBot" class="rsCapeCustomizer_colorInputTextInput"><span class="rsCapeCustomizer_colorInputPostfix">)</span><p class="rsCapeCustomizer_colorInputErrorMessage"></p></div><div class="rsCapeCustomizer_colorInputWrapper"><label id="bgTop-label" for="bgTop" class="rsCapeCustomizer_colorInputLabel">Background Top</label><span class="rsCapeCustomizer_colorInputPrefix">hsl(</span><input type="text" id="bgTop" class="rsCapeCustomizer_colorInputTextInput"><span class="rsCapeCustomizer_colorInputPostfix">)</span><p class="rsCapeCustomizer_colorInputErrorMessage"></p></div><div class="rsCapeCustomizer_colorInputWrapper"><label id="bgBot-label" for="bgBot" class="rsCapeCustomizer_colorInputLabel">Background Bottom</label><span class="rsCapeCustomizer_colorInputPrefix">hsl(</span><input type="text" id="bgBot" class="rsCapeCustomizer_colorInputTextInput"><span class="rsCapeCustomizer_colorInputPostfix">)</span><p class="rsCapeCustomizer_colorInputErrorMessage"></p></div></fieldset></div><div class="rsCapeCustomizer_colorOutputColorOutput"><h3 class="rsCapeCustomizer_colorOutputHeader"><span class="rsCapeCustomizer_colorOutputHeaderText">Use These Colors</span></h3><div class="rsCapeCustomizer_colorOutputGroup"><h5 class="rsCapeCustomizer_colorOutputSubhead">Detail Top</h5><div class="rsCapeCustomizer_colorOutputValuesWrapper"><p class="rsCapeCustomizer_colorOutputLabel">H: <span class="rsCapeCustomizer_colorOutputValue"></span></p><p class="rsCapeCustomizer_colorOutputLabel">S: <span class="rsCapeCustomizer_colorOutputValue"></span></p><p class="rsCapeCustomizer_colorOutputLabel">L: <span class="rsCapeCustomizer_colorOutputValue"></span></p></div></div><div class="rsCapeCustomizer_colorOutputGroup"><h5 class="rsCapeCustomizer_colorOutputSubhead">Detail Bottom</h5><div class="rsCapeCustomizer_colorOutputValuesWrapper"><p class="rsCapeCustomizer_colorOutputLabel">H: <span class="rsCapeCustomizer_colorOutputValue"></span></p><p class="rsCapeCustomizer_colorOutputLabel">S: <span class="rsCapeCustomizer_colorOutputValue"></span></p><p class="rsCapeCustomizer_colorOutputLabel">L: <span class="rsCapeCustomizer_colorOutputValue"></span></p></div></div><div class="rsCapeCustomizer_colorOutputGroup"><h5 class="rsCapeCustomizer_colorOutputSubhead">Background Top</h5><div class="rsCapeCustomizer_colorOutputValuesWrapper"><p class="rsCapeCustomizer_colorOutputLabel">H: <span class="rsCapeCustomizer_colorOutputValue"></span></p><p class="rsCapeCustomizer_colorOutputLabel">S: <span class="rsCapeCustomizer_colorOutputValue"></span></p><p class="rsCapeCustomizer_colorOutputLabel">L: <span class="rsCapeCustomizer_colorOutputValue"></span></p></div></div><div class="rsCapeCustomizer_colorOutputGroup"><h5 class="rsCapeCustomizer_colorOutputSubhead">Background Bottom</h5><div class="rsCapeCustomizer_colorOutputValuesWrapper"><p class="rsCapeCustomizer_colorOutputLabel">H: <span class="rsCapeCustomizer_colorOutputValue"></span></p><p class="rsCapeCustomizer_colorOutputLabel">S: <span class="rsCapeCustomizer_colorOutputValue"></span></p><p class="rsCapeCustomizer_colorOutputLabel">L: <span class="rsCapeCustomizer_colorOutputValue"></span></p></div></div></div></div></div></div>';

const colorInputMarkup = [
  '<input id="detailTop-picker" type="color" class="rsCapeCustomizer_colorInputColorPicker" aria-labelledby="detailTop-label">',
  '<input id="detailBot-picker" type="color" class="rsCapeCustomizer_colorInputColorPicker" aria-labelledby="detailBot-label">',
  '<input id="bgTop-picker" type="color" class="rsCapeCustomizer_colorInputColorPicker" aria-labelledby="bgTop-label">',
  '<input id="bgBot-picker" type="color" class="rsCapeCustomizer_colorInputColorPicker" aria-labelledby="bgBot-label">',
];

const maxCapeMarkup = '<svg id="max-capg-svg" class="rsCapeCustomizer_capeSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 442 850"><path id="capeDetailTop" d="M218 63l20 13 12 34 35-19v58l9 173 1 158-7 81-12 82-50 183.5h-2L171 645l-15-80-9-82V324l3-49c1.333333-123.333333 2-185 2-185s11.666667 6.3333333 35 19l12-32 19-14zM114.5 676l9 87-21.5-6 12.5-81zm217.5-1l13 75.5-20 6.5-1-7 8-75zM97 472l-8 85-61 87 16-103 53-69zm250 0l50.5 64 13 72.5L413 632l-59-80-7-80zM108 199l-2 130-52 134 5-152 49-112zm222-2l52 116 6 145-54-131-4-130zm0-185l10 2 8 7c-18 43.3333333-27 65.3333333-27 66 0 .6666667 1 7 3 19l-19-29 31-34-1-25-5-6zM103 8l-4 3 1 30 32 35-19 29 2-18-16-34-1-1-11-32 1-4 15-8zm48 39l61 9-18 12-11 27-32-18V47zm134 0v31l-29 17h-2l-11-27-18-12 60-9zm39-37l2 1 2 23-30 33-13-20 23-34 11-3h5zM111 2l14 7 26 38-14 19-29-35V4l3-2z"/><path id="capeDetailBot" d="M260 779l1 32-35 15.5 34-47.5zm-70.5 1l34.5 46.5-35-13 .5-33.5zM165 725l1.5 3 15.5 55-3 26.5-19.5-5L165 725zm118.5-1.5L290 801l-19 6-3.5-26 16-57.5zM99 765l23 6v19h-2.5L92 783l7-18zm250-6l7 17-30 9v-20l23-6zM89 557l-12 96c-37.3333333 14.666667-56 21.666667-56 21 0-.666667 2.3333333-11 7-31l61-86zm265-5l59 80 9 33-54-18-14-95z"/><path id="capeBgTop" d="M348 21l1 1 13 65 4 50 3 37 3 41 10 98-48 13 54 132-52.5-38-6.5 51-3 106 5 80 1 17-8 78-2-10-3-27-5-28-1-8-5-41-31.896 4.984L282 699l-22 80-34 47.5L276 642l.061.582L288 561l7-81-2-154-5-95-3-83V91l13-7 7-7 19 29 6 91 34-2-8-110-19-32 11-32zM87 19l11 34-19 32-7 109 36 3 4-90 20-31 6 6 14 8v70l-2 115-3 49v158l9 82 14.94 80.679.06-.679 53 182.5-34.5-46.5-23.5-79 4.913-56.008L138 642l-14.5 121-9-87 3.5-108-3-59-1-33-8-53h-1l-51 40 52-134 2-130-49 112L74 87l11-62 2-6zm263 93l6 74-18 1c-4-49.333333-5.666667-74-5-74 .666667 0 4 1.333333 10 4l7-5zm-264-1l9 5 8-4-3 75-18-1 4-75zm199-64l14 21-5 5-9 5V47zm-134 0v30l-8-4-6-7 14-19zM113 0l13 2 32 37 54 8h10l55-6 32-37 12-3-2 3 6 6h-6l-11 3-23 34-60 9-7-4-6 4-61-9-26-38-14-7 2-2z"/><path id="capeBgBot" d="M262 819.5l3 15-37.5 15.5h-6c-.66 0-12.59115-4.9005-35.79345-14.7015L185 835l2-13.5 36 12.5h4l35-14.5zM158.5 811l19.5 8-.5 13-22-10 3-11zm133-4l2.5 11-20 11-3-13 20.5-9zM145 649.5l17 1.5-10 108-22 1 15-110.5zm156.5-3.5L318 756h-22l-12-107.5 17.5-2.5zM77 653l-.5 33.5L72 716l-60-9 9-33 56-21zm291-6l54 18 2 5 10 28.5-60.5 11-5-31c-.333333-21-.5-31.5-.5-31.5zM104 431.5l4.5 48L98 471l-53 69 5.5-70 53.5-38.5zm234.5-2l52.5 37 6.5 69.5-50.5-63-1-4h-3l-8.5 7.5.645881-7.16984L338.5 429.5zM87 18l-2 7-11 63-12 177-3 45-5 153-22 5 22.5-144L71 90l11-67 5-5zM323 0l26 19 3 5 13 64 19 229 24 148-20-7-6-145-10-98-10-128-13-63-9-10-12-4-5-4V0z"/><path fill="#D6AF70" d="M20 674l-9 33 60 9 4.5-29.5 4.5 43L0 713l20-39zm401-9l21 38-78 20 3.5-44.5 5 31 60.5-11-12-33.5z"/><path fill="#EEC985" d="M104.5 422.5L113 476l4 92-3.5 108-12.5 81.5-3 7.5-14 15.5 13-25 10-74.5 2-111.5-1.5-90-2.5-27-2-21 1.5-9zm230-2.5l3 9.5-4 47L337 675l10.5 72.5 13.5 26-13-14.5-4-8.5-13-75-6-97.5 3-107 6.5-51z"/><path fill="#AE8D57" d="M104.5 422.5l-1.5 9L49.5 470 31 468l22-5 51.5-40.5zm230-2.5l52.5 38 20 7-17 1.5-52.5-37-3-9.5z"/><path fill="#FAD591" d="M165 701.5l23.5 78.5-.5 33.5-2 8-2 13.5-7.5-3 .5-13 1-9.5 3-26.5-15.5-55-1.5-3 1-23.5zm116-2.5l1.5 24.5-16 57.5 3.5 26v9l3 13-9 5.5-3-15-1-8.5-1-32 22-80z"/><path fill="#F2CF89" d="M137 642l33 3-9 6-17-1.5-7-7.5zm170-4l-6.5 8-17.5 2.5-8-5.5 32-5z"/><path fill="#C29B61" d="M137 642l7 7.5L129 760l-.5 30H121v-19l-23-6 3-7.5s7.166667 1.833333 21.5 5.5L137 642zm170-4l17 119 20-6.5 4 8.5-23 6v20h-7l-1-29-16.5-110 6.5-8zM98 765l-7 18-7-2.5L98 765zm250-6l13 14.5-6 2.5-7-17z"/><path fill="#E4BD78" d="M260 811l1 8.5-35 14.5h-4l-36-12.5 2-8 35 13h2l35-15.5zm-90-166l-5 56-1 24-5.5 79.5 19.5 5-1 9.5-19.5-8-3 11-9.5-5.5 6-58.5 10-107 9-6zm105-2l8 5.5 19 164-9 5.5-2.5-11-20.5 9v-9l19-6-6.5-77.5L281 699l-6-56z"/></svg>';

const compCapeMarkup = '<svg id="comp-cape-svg" class="rsCapeCustomizer_capeSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 503 975"><style></style><path id="capeDetailTop" d="M114 10.5l9 19.5 2 36 42 44 19.5 10.5L194 181l37 91v12l41 1v-12l31-90 10-60 22-12 43-45 3-35 8-20 5 24-15.5 44-17 35 3.5 21-20 91-38 93-55.5 60.5L201 326l-44-98-18-93 3-21-17-36-16-42 5-25.5zM263.5 187v87H240l-1-87 13 7 11.5-7zM230 104l21.5 18-20.5 49-16.5-35 3.5 2 12-34zm43 0l12 34 4-2-17 34-20.5-48 21.5-18zm-92-39l42 34-10 25-6-3.5L181 65zm142 0l-25 53.5-8 4.5-10-23 43-35zm47-45l-1 37-37 43-16 8.5 7-43.5 35-40 12-5zm-238-1l11 4 38 42 4 43-14-8-37-43-2-38z"></path><path id="capeDetailBot" d="M369 539.5L367 645l-20 79-37 4 7 65-27 100-39 54-38-54-27-99 7-66-37-4-20-77-2-104 46 100 72 89 71-89 46-103.5zm-255-8.18321L103 629l-70 98 20-116 61-79.68321zM389 532l60 77.96727L469 724l-69-95-11-97zM72 358l4 2 46 101-54 58-25 9 29-170zm359 0l29 170-25-9-61-58 52-99 5-4z"></path><path id="capeBgTop" d="M290 496l16 31-5 23-49.5 75-49.5-75-5-23 16-31 38.5 73 38.5-73zm-38.5-41l32 34.5-32 56-32-56.5 32-34zM81 235l47 66 34 69.5L208 486l-16 27-57.5-146.5-58.5-88-.5-11L81 235zm340 1l5 35-.5 9-57.5 87-57 146-16-27 50-124 29.5-61 46.5-65zM251.5 401l48.5 49-12 27-36.5-39-36.5 39-12-27 48.5-49zM110 2l4 8.5-5 25.5 16 42-22 35-9 115 38 2 7-95 18 93 44 98 50.5 53.5L198 439l-27-67-37-80-55-66v-3l7-28 7-79 10-72-3-27 10-15zm283-1l11 16-3.5 27 9.5 72 7.5 81 6.5 21-1 8-54 67-36 77-28 67.5-53.5-58L307 319l38-93 20-91 6 96 39-3-10.5-116-21-33L394 35l-5-24 4-10zm-80 122l-10 60-31 90V170l17-34 24-13zm-126.5-2.5l28 15.5 16.5 35v101l-37-91-7.5-60.5zm206.5 19l7 79.5-20.5 2-4.5-80 9.5 3.5 8.5-5zm-282.5.5l8.5 4.5 9.5-3.5-5 79-20-.5 7-79.5zM252 89l21 15-21.5 18-21.5-18 22-15zm-71-24l26 55.5-22-12.5-4-43zm142 0l-7 43.5-18 10L323 65zm58-60.5L370 20l-12 5-35 40-43 35-2-6-26-16-27 16-2 5-42-34-39-42-10-4-10-14.5 28.5 12 36.5 44 65 9 64-9 36.5-44 28.5-12z"></path><path id="capeBgBot" d="M208 938l43 17 43-16 3 16-46 20-46-20 3-17zm-33-6l24 2-3 16-25-6 4-12zm153-7l3 12-24 13-2-16 23-9zm-115-32l38 54-42-18 4-36zm77 0l3 36-42 18 39-54zm-106-73l19 72-4 32-23-1 8-103zm134 2l8 95-22 7-4-32 18-70zm-208 47l25 7v24l-34-10 9-21zm283 0l9 21-33 10-1-24 25-7zM136 647l20 77-19 143-24-7 17-100 6-113zm231-2l2 34.143L374 762l9.041 55.377L390.5 861l-24.5 6-19-142 .087-.344L347 724l20-79zm-203 88l19 2-14 130h-25l20-132zm175 1l20 131h-25.5L320 735l19-1zm61-105l69 95 9 38 12 38-66 11-7-36-1-37-16-109zm-297 0L87 740l-1 33-6 38-67-11 14-44 7-30 69-97zM78 289l48 81 61 170 65 103 65-106 60-167 48-80 6 68-5 4-52 99-5 78.5L323 643l-71 89-72-89-46-101v-3l-12-78-46-101-4-2 6-69zm44 198l4 53-11-10-62 81 11-82 58-42zm259 0l59 43 9 80-60-78v-2l-12 9.5 4-52.5z"></path><path class="comp-cape-stripes-toggle" d="M423 226l-2 10-46.5 65-29.5 61-50 124 16 27 57-146 57.5-87-.5 10-48 80-60 167-65 106-65-103-61-170-48-81-2-10.5 58.5 88L192 513l16-27-46-115.5-34-69.5-47-66v-6.5l53 63.5 37 80 27 67 53.5-59.5 53.5 58 28-67.5 36-77 54-67zM290 496l-38.5 73-38.5-72.5-16 30.5 5 23 49 75 50-75 5-23-16-31zm-38.5-41l-32 34 32 56.5 32-56-32-34.5zm0-54L203 450l12 27 36.5-39 36.5 39 12-27-48.5-49z"></path><path d="M479 765l24 43-90 19 4-52 7 36 66-11-11-35zm-455-1l-11 36 67 11 6-38 5 53-91-18 24-44zm162 31l27 98-5 45-3 18-9-6 3-28 4-30-19-71 2-26zm131-2l1 31-18 68 4 31 1 13 2 14-10 5-2-17-2-9-3-36 27-100z"></path><path fill="#D19E5C" d="M392 .5l1 .5-12 30-3 35-43 45-3-11 37-43 1-37 11-15.5 11-4zm-281 0l11 4L132 19l2 38 37 43-4 10-42-44-2-36-13-28 1-1.5zM252 78l26 16-5 10-21-14-22 14-5-10 27-16z"></path><path fill="#926E40" d="M225 94l5 10-12 34-51-28 4-10 42 24 12-30zm53 0l12 29 42-23 3 11-50 27-12-34 5-10z"></path><path fill="#C09255" d="M186 794l27 99-3 36-2 9-3 17-9-5 3-16v-11l4-31-19-71.5 2-26.5zm131-1l1 29-18 70 4 32 1 10 2 16-10 5-3-16-1-10-3-36 27-100z"></path><path fill="#8A693D" d="M293 929l1 10-43 16-43-17 2-9 41 18 42-18zm17-201l10 7 21 199-34 16 24-13-3-12-23 9-1-10 22-7-8-95-1-28-7-66zm-117 0l-7 67-10 128 23 1v10l-24-2-4 12-9-9 7-69 14-131 10-7zm154-4l19 143 24.5-6 2.5 8-25 7 1 24-10 1.5V865l-20-131 8-10zm-191 0l8 9-20 132v36l-9-1v-24l-25-7 3-9 24 7 19-143z"></path><path fill="#7E5F37" d="M393 869l18 22-38.5 8 29.5-9-9-21zm-283 0l-9 21 29 8.5-38.5-7.5 18.5-22z"></path><path fill="#A37C48" d="M347 724l-8 10-19 1-10-7 37-4zm-191 0l37 4-10 7-19-2-8-9z"></path><path fill="#DBA660" d="M374 461l7 26-4 53-.5 105 5 119 13.5 94 16 33-18-22-2.5-8-16.5-97-7-117 2-107 5-79zm-252 1l12 78 2 98v9l-6 113.5-17 99.5-3 9-18.5 22 16.5-33 13-91 1-11 4-101V540l-4-53v-25z"></path><path fill="#7F6138" d="M122 461v26l-58 42-21-1 25-9 54-58zm252 0l61 58 25 9-21 1-58-42-7-26z"></path><path fill="#9B7644" d="M24 766l-11 34 67 11 6-38 4 54-90-19 24-42zm455-1l24 43-90 19 4-53 7 37 66-11-11-35z"></path><path fill="#88683C" d="M139 135.5l-7 94.5-38-2 9.5-8.5 20 .5 5-79 10.5-5.5zM125 78l17 35.5-1.5.5-17.5-11 2-25z"></path><path fill="#CD9B5B" d="M103 113l.5 1.5v14l15 11.5 14.5-7.5 6 3-10.5 5.5-9.5 3.5-8.5-4.5-7 79.5L94 228l9-115zm22-35l-2 25-20 10 22-35z"></path><path fill="#C69556" d="M133 132.5l3-16 6-2.5-3 21.5z"></path><path fill="#9E7845" d="M240 274h23l9-1v12l-41-1v-12z"></path><path fill="#C69757" d="M240 274l-1-87 1.5-6-6-10H231v101z"></path><path fill="#E5AA64" d="M231 171l20.5-49 14 33 6.5 15-3.5 1-6.5-12.5 3.5-3.5-13.5-6-14 6.5 4 3-7.5 12.5z"></path><path fill="#AA824B" d="M240.5 181.5l11 6 10-4.5 7-12 3.5-1v103l-8.5 1v-87l-11.5 7-13-7z"></path><path fill="#826139" d="M400 219l10 9-39 3-6-96 10 6 4.5 80z"></path><path fill="#85653A" d="M365 135l10 6 9.5 3.5 8.5-5 8-10.5-1-11-.5 10.5-15 11.5-14-8z"></path><path fill="#C79856" d="M365 135l5.5-3-4-15.5-3.5-2.5h-1.5z"></path><path fill="#AA804B" d="M361.5 114l17-35 1.5 24.5-17 10.5z"></path><path fill="#DCA861" d="M378.5 79l1.5 24.5 9 3.5h3.5l6 5h1z"></path><path fill="#BC8950" d="M393 139.5l8-10.5 9 99-10-9z"></path></svg>';

const compParticlesMarkup = '<svg id="comp-cape-particles-svg" class="rsCapeCustomizer_compParticles" xmlns="http://www.w3.org/2000/svg" width="581" height="284" viewBox="0 0 581 284"><style></style><defs><filter id="pc-a" width="122.4%" height="156.4%" x="-11.2%" y="-28.2%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="13"></feGaussianBlur></filter><filter id="pc-c" width="205%" height="269%" x="-52.5%" y="-84.5%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="13"></feGaussianBlur></filter><filter id="pc-d" width="170.6%" height="250%" x="-35.3%" y="-75%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="12"></feGaussianBlur></filter><filter id="pc-e" width="263.6%" height="300%" x="-81.8%" y="-100%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="12"></feGaussianBlur></filter><filter id="pc-f" width="196%" height="237.1%" x="-48%" y="-68.6%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="8"></feGaussianBlur></filter><filter id="pc-g" width="163.2%" height="183.7%" x="-31.6%" y="-41.9%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="6"></feGaussianBlur></filter><filter id="pc-h" width="181.8%" height="209.1%" x="-40.9%" y="-54.5%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="6"></feGaussianBlur></filter><filter id="pc-i" width="173.2%" height="183.3%" x="-36.6%" y="-41.7%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="5"></feGaussianBlur></filter><filter id="pc-j" width="173.2%" height="183.3%" x="-36.6%" y="-41.7%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="5"></feGaussianBlur></filter><filter id="pc-k" width="143.5%" height="183.3%" x="-21.7%" y="-41.7%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="5"></feGaussianBlur></filter><filter id="pc-l" width="143.5%" height="183.3%" x="-21.7%" y="-41.7%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="5"></feGaussianBlur></filter><filter id="pc-m" width="143.5%" height="183.3%" x="-21.7%" y="-41.7%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="5"></feGaussianBlur></filter><filter id="pc-n" width="143.5%" height="183.3%" x="-21.7%" y="-41.7%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="5"></feGaussianBlur></filter><filter id="pc-o" width="235.5%" height="282.6%" x="-67.7%" y="-91.3%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="7"></feGaussianBlur></filter><filter id="pc-p" width="244%" height="244%" x="-72%" y="-72%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="6"></feGaussianBlur></filter><filter id="pc-q" width="244%" height="244%" x="-72%" y="-72%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="6"></feGaussianBlur></filter><filter id="pc-r" width="244%" height="244%" x="-72%" y="-72%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="6"></feGaussianBlur></filter><filter id="pc-s" width="244%" height="244%" x="-72%" y="-72%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="6"></feGaussianBlur></filter><filter id="pc-t" width="226.3%" height="226.3%" x="-63.2%" y="-63.2%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur></filter><filter id="pc-u" width="226.3%" height="226.3%" x="-63.2%" y="-63.2%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur></filter><filter id="pc-v" width="182.8%" height="214.3%" x="-41.4%" y="-57.1%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur></filter><filter id="pc-w" width="190%" height="216.1%" x="-45%" y="-58.1%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="6"></feGaussianBlur></filter><filter id="pc-x" width="271.4%" height="271.4%" x="-85.7%" y="-85.7%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur></filter><filter id="pc-y" width="233.3%" height="233.3%" x="-66.7%" y="-66.7%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur></filter><filter id="pc-z" width="233.3%" height="233.3%" x="-66.7%" y="-66.7%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur></filter><filter id="pc-A" width="220%" height="220%" x="-60%" y="-60%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur></filter><filter id="pc-B" width="181.8%" height="200%" x="-40.9%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur></filter><filter id="pc-C" width="181.8%" height="200%" x="-40.9%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur></filter><filter id="pc-D" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-E" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-F" width="226.3%" height="226.3%" x="-63.2%" y="-63.2%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur></filter><filter id="pc-G" width="212.5%" height="212.5%" x="-56.2%" y="-56.2%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur></filter><filter id="pc-H" width="212.5%" height="212.5%" x="-56.2%" y="-56.2%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur></filter><filter id="pc-I" width="212.5%" height="212.5%" x="-56.2%" y="-56.2%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur></filter><filter id="pc-J" width="228.6%" height="228.6%" x="-64.3%" y="-64.3%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur></filter><filter id="pc-K" width="228.6%" height="228.6%" x="-64.3%" y="-64.3%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur></filter><filter id="pc-L" width="228.6%" height="228.6%" x="-64.3%" y="-64.3%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur></filter><filter id="pc-M" width="263.6%" height="263.6%" x="-81.8%" y="-81.8%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur></filter><filter id="pc-N" width="263.6%" height="263.6%" x="-81.8%" y="-81.8%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur></filter><filter id="pc-O" width="263.6%" height="263.6%" x="-81.8%" y="-81.8%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur></filter><filter id="pc-P" width="226.3%" height="226.3%" x="-63.2%" y="-63.2%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur></filter><filter id="pc-Q" width="226.3%" height="226.3%" x="-63.2%" y="-63.2%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur></filter><filter id="pc-R" width="216.1%" height="256.5%" x="-58.1%" y="-78.3%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="6"></feGaussianBlur></filter><filter id="pc-S" width="216.1%" height="256.5%" x="-58.1%" y="-78.3%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="6"></feGaussianBlur></filter><filter id="pc-T" width="250%" height="250%" x="-75%" y="-75%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-U" width="250%" height="250%" x="-75%" y="-75%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-V" width="192.3%" height="192.3%" x="-46.2%" y="-46.2%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-W" width="205.9%" height="205.9%" x="-52.9%" y="-52.9%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="9"></feGaussianBlur></filter><filter id="pc-X" width="156.4%" height="152.3%" x="-28.2%" y="-26.1%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="11"></feGaussianBlur></filter><filter id="pc-Y" width="205.9%" height="205.9%" x="-52.9%" y="-52.9%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur></filter><filter id="pc-Z" width="205.9%" height="205.9%" x="-52.9%" y="-52.9%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur></filter><filter id="pc-aa" width="185.7%" height="185.7%" x="-42.9%" y="-42.9%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur></filter><filter id="pc-ab" width="185.7%" height="185.7%" x="-42.9%" y="-42.9%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur></filter><filter id="pc-ac" width="183.3%" height="183.3%" x="-41.7%" y="-41.7%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="5"></feGaussianBlur></filter><filter id="pc-ad" width="173.5%" height="205.9%" x="-36.7%" y="-52.9%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="6"></feGaussianBlur></filter><filter id="pc-ae" width="228.6%" height="194.7%" x="-64.3%" y="-47.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur></filter><filter id="pc-af" width="205.9%" height="220%" x="-52.9%" y="-60%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur></filter><filter id="pc-ag" width="220%" height="209.1%" x="-60%" y="-54.5%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-ah" width="166.7%" height="170.6%" x="-33.3%" y="-35.3%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-ai" width="212.5%" height="220%" x="-56.2%" y="-60%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur></filter><filter id="pc-aj" width="175%" height="180%" x="-37.5%" y="-40%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-ak" width="175%" height="166.7%" x="-37.5%" y="-33.3%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-al" width="175%" height="175%" x="-37.5%" y="-37.5%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-am" width="185.7%" height="192.3%" x="-42.9%" y="-46.2%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-an" width="220%" height="209.1%" x="-60%" y="-54.5%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-ao" width="238.5%" height="238.5%" x="-69.2%" y="-69.2%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur></filter><filter id="pc-ap" width="325%" height="400%" x="-112.5%" y="-150%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="9"></feGaussianBlur></filter><filter id="pc-aq" width="325%" height="400%" x="-112.5%" y="-150%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="9"></feGaussianBlur></filter><filter id="pc-ar" width="325%" height="400%" x="-112.5%" y="-150%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="9"></feGaussianBlur></filter><filter id="pc-as" width="348.3%" height="348.3%" x="-124.1%" y="-124.1%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="12"></feGaussianBlur></filter><filter id="pc-at" width="348.3%" height="348.3%" x="-124.1%" y="-124.1%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="12"></feGaussianBlur></filter><filter id="pc-au" width="262.2%" height="262.2%" x="-81.1%" y="-81.1%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="10"></feGaussianBlur></filter><filter id="pc-av" width="348.3%" height="348.3%" x="-124.1%" y="-124.1%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="12"></feGaussianBlur></filter><filter id="pc-aw" width="348.3%" height="348.3%" x="-124.1%" y="-124.1%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="12"></feGaussianBlur></filter><filter id="pc-ax" width="220%" height="220%" x="-60%" y="-60%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="15"></feGaussianBlur></filter><filter id="pc-ay" width="220%" height="220%" x="-60%" y="-60%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="15"></feGaussianBlur></filter><filter id="pc-az" width="222.4%" height="222.4%" x="-61.2%" y="-61.2%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="10"></feGaussianBlur></filter><filter id="pc-aA" width="233.3%" height="233.3%" x="-66.7%" y="-66.7%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="10"></feGaussianBlur></filter><filter id="pc-aB" width="233.3%" height="233.3%" x="-66.7%" y="-66.7%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="10"></feGaussianBlur></filter><filter id="pc-aC" width="233.3%" height="233.3%" x="-66.7%" y="-66.7%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="10"></feGaussianBlur></filter><filter id="pc-aD" width="233.3%" height="233.3%" x="-66.7%" y="-66.7%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="10"></feGaussianBlur></filter><filter id="pc-aE" width="233.3%" height="233.3%" x="-66.7%" y="-66.7%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="10"></feGaussianBlur></filter><filter id="pc-aF" width="233.3%" height="233.3%" x="-66.7%" y="-66.7%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="10"></feGaussianBlur></filter><filter id="pc-aG" width="233.3%" height="233.3%" x="-66.7%" y="-66.7%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="10"></feGaussianBlur></filter><filter id="pc-aH" width="233.3%" height="233.3%" x="-66.7%" y="-66.7%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="10"></feGaussianBlur></filter><filter id="pc-aI" width="233.3%" height="233.3%" x="-66.7%" y="-66.7%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="10"></feGaussianBlur></filter><filter id="pc-aJ" width="233.3%" height="233.3%" x="-66.7%" y="-66.7%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="10"></feGaussianBlur></filter><filter id="pc-aK" width="220%" height="209.1%" x="-60%" y="-54.5%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-aL" width="220%" height="209.1%" x="-60%" y="-54.5%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-aM" width="220%" height="209.1%" x="-60%" y="-54.5%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-aN" width="220%" height="209.1%" x="-60%" y="-54.5%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-aO" width="220%" height="209.1%" x="-60%" y="-54.5%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-aP" width="200%" height="190%" x="-50%" y="-45%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur></filter><filter id="pc-aQ" width="220%" height="209.1%" x="-60%" y="-54.5%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-aR" width="220%" height="209.1%" x="-60%" y="-54.5%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-aS" width="220%" height="209.1%" x="-60%" y="-54.5%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-aT" width="220%" height="220%" x="-60%" y="-60%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-aU" width="220%" height="220%" x="-60%" y="-60%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-aV" width="220%" height="220%" x="-60%" y="-60%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-aW" width="220%" height="220%" x="-60%" y="-60%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-aX" width="220%" height="220%" x="-60%" y="-60%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-aY" width="220%" height="220%" x="-60%" y="-60%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-aZ" width="220%" height="220%" x="-60%" y="-60%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-ba" width="220%" height="220%" x="-60%" y="-60%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-bb" width="200%" height="192.3%" x="-50%" y="-46.2%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-bc" width="200%" height="192.3%" x="-50%" y="-46.2%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><filter id="pc-bd" width="200%" height="192.3%" x="-50%" y="-46.2%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur></filter><linearGradient id="pc-b" x1="129.356%" x2="1.541%" y1="65.264%" y2="50%"><stop offset="0%" stop-color="#FFF" stop-opacity=".2"></stop><stop offset="100%" stop-color="#FFF" stop-opacity=".4"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd" transform="translate(22 29)"><path fill-opacity=".3" d="M105.26765 67c59.8395 18.08234 91.47489 79.43966 150.5 85 59.0251 5.56034 103.99448-55.20044 125.5-59 21.50552-3.79956 63.69032-5.2528 16 34s-62.92708 79.46428-146 73c-83.07292-6.46428-138.54757-80.60156-156-96.5-17.45243-15.89844-49.83951-54.58234 10-36.5z" filter="url(#pc-a)"></path><path id="special-fill" fill="url(#pc-b)" d="M29.0386.2029c-14.5-1.5-25.67267 5.3985-23.5 18 2.17268 12.60148 18.95058 25.157 35 27.5 16.04943 2.34297 39-4.5 39-14 0-12.7903-36-30-50.5-31.5z" filter="url(#pc-c)"></path><ellipse cx="160.268" cy="108" fill-opacity=".25" filter="url(#pc-d)" rx="51" ry="24" transform="rotate(27 160.268 108)"></ellipse><ellipse cx="81.268" cy="58" fill-opacity=".15" filter="url(#pc-e)" rx="22" ry="18" transform="rotate(10 81.268 58)"></ellipse><ellipse cx="430.268" cy="31.5" fill-opacity=".2" filter="url(#pc-f)" rx="25" ry="17.5"></ellipse><ellipse cx="162.768" cy="158.5" fill-opacity=".4" filter="url(#pc-g)" rx="28.5" ry="21.5" transform="rotate(10 162.768 158.5)"></ellipse><ellipse cx="217.268" cy="161.5" fill-opacity=".4" filter="url(#pc-h)" rx="22" ry="16.5" transform="rotate(10 217.268 161.5)"></ellipse><ellipse cx="256.855" cy="203.5" fill-opacity=".45" filter="url(#pc-i)" rx="20.5" ry="18" transform="rotate(-19 256.855 203.5)"></ellipse><ellipse cx="300.768" cy="218" fill-opacity=".4" filter="url(#pc-j)" rx="20.5" ry="18" transform="rotate(-19 300.768 218)"></ellipse><ellipse cx="296.005" cy="197.442" fill-opacity=".1" filter="url(#pc-k)" rx="34.5" ry="18" transform="rotate(-19 296.005 197.442)"></ellipse><ellipse cx="303.768" cy="190" fill-opacity=".1" filter="url(#pc-l)" rx="34.5" ry="18" transform="rotate(-19 303.768 190)"></ellipse><ellipse cx="275.768" cy="177" fill-opacity=".1" filter="url(#pc-m)" rx="34.5" ry="18" transform="rotate(-19 275.768 177)"></ellipse><ellipse cx="275.768" cy="177" fill-opacity=".23" filter="url(#pc-n)" rx="34.5" ry="18" transform="rotate(-19 275.768 177)"></ellipse><ellipse cx="131.768" cy="128.5" fill-opacity=".55" filter="url(#pc-o)" rx="15.5" ry="11.5" transform="rotate(10 131.768 128.5)"></ellipse><circle cx="104.768" cy="83.5" r="12.5" fill-opacity=".3" filter="url(#pc-p)" transform="rotate(10 104.768 83.5)"></circle><circle cx="108.768" cy="91.5" r="12.5" fill-opacity=".3" filter="url(#pc-q)" transform="rotate(10 108.768 91.5)"></circle><circle cx="83.768" cy="94.5" r="12.5" fill-opacity=".3" filter="url(#pc-r)" transform="rotate(10 83.768 94.5)"></circle><circle cx="89.768" cy="117.5" r="12.5" fill-opacity=".3" filter="url(#pc-s)" transform="rotate(10 89.768 117.5)"></circle><circle cx="69.768" cy="73.5" r="9.5" fill-opacity=".2" filter="url(#pc-t)" transform="rotate(10 69.768 73.5)"></circle><circle cx="111.768" cy="123.5" r="9.5" fill-opacity=".3" filter="url(#pc-u)" transform="rotate(10 111.768 123.5)"></circle><ellipse cx="192.768" cy="183.5" fill-opacity=".3" filter="url(#pc-v)" rx="14.5" ry="10.5" transform="rotate(-10 192.768 183.5)"></ellipse><ellipse cx="186" cy="219.5" fill-opacity=".38" filter="url(#pc-w)" rx="20" ry="15.5"></ellipse><circle cx="243" cy="224" r="7" fill-opacity=".35" filter="url(#pc-x)"></circle><circle cx="250" cy="238" r="9" fill-opacity=".35" filter="url(#pc-y)"></circle><circle cx="256" cy="226" r="9" fill-opacity=".45" filter="url(#pc-z)"></circle><circle cx="193" cy="235" r="10" fill-opacity=".35" filter="url(#pc-A)"></circle><ellipse cx="208" cy="207" fill-opacity=".26" filter="url(#pc-B)" rx="11" ry="9"></ellipse><ellipse cx="162" cy="202" fill-opacity=".26" filter="url(#pc-C)" rx="11" ry="9"></ellipse><circle cx="186" cy="200" r="6" fill-opacity=".15" filter="url(#pc-D)"></circle><circle cx="173" cy="197" r="6" fill-opacity=".15" filter="url(#pc-E)"></circle><circle cx="48.768" cy="78.5" r="9.5" fill-opacity=".2" filter="url(#pc-F)" transform="rotate(10 48.768 78.5)"></circle><circle cx="9.268" cy="36" r="8" fill-opacity=".25" filter="url(#pc-G)" transform="rotate(10 9.268 36)"></circle><circle cx="19.268" cy="45" r="8" fill-opacity=".25" filter="url(#pc-H)" transform="rotate(10 19.268 45)"></circle><circle cx="32.268" cy="44" r="8" fill-opacity=".25" filter="url(#pc-I)" transform="rotate(10 32.268 44)"></circle><circle cx="26.268" cy="57" r="7" fill-opacity=".25" filter="url(#pc-J)" transform="rotate(10 26.268 57)"></circle><circle cx="42.268" cy="64" r="7" fill-opacity=".25" filter="url(#pc-K)" transform="rotate(10 42.268 64)"></circle><circle cx="32.268" cy="66" r="7" fill-opacity=".25" filter="url(#pc-L)" transform="rotate(10 32.268 66)"></circle><circle cx="45.051" cy="51.262" r="5.5" fill-opacity=".35" filter="url(#pc-M)" transform="rotate(10 45.05 51.262)"></circle><circle cx="47.768" cy="53.5" r="5.5" fill-opacity=".35" filter="url(#pc-N)" transform="rotate(10 47.768 53.5)"></circle><circle cx="52.768" cy="60.5" r="5.5" fill-opacity=".35" filter="url(#pc-O)" transform="rotate(10 52.768 60.5)"></circle><circle cx="124.768" cy="162.5" r="9.5" fill-opacity=".3" filter="url(#pc-P)" transform="rotate(10 124.768 162.5)"></circle><circle cx="126.768" cy="148.5" r="9.5" fill-opacity=".3" filter="url(#pc-Q)" transform="rotate(10 126.768 148.5)"></circle><ellipse cx="141.768" cy="125.5" fill-opacity=".3" filter="url(#pc-R)" rx="15.5" ry="11.5" transform="rotate(10 141.768 125.5)"></ellipse><ellipse cx="157.768" cy="126.5" fill-opacity=".3" filter="url(#pc-S)" rx="15.5" ry="11.5" transform="rotate(10 157.768 126.5)"></ellipse><circle cx="134.268" cy="183" r="4" fill-opacity=".25" filter="url(#pc-T)"></circle><circle cx="140.268" cy="184" r="4" fill-opacity=".25" filter="url(#pc-U)"></circle><circle cx="115.768" cy="139.5" r="6.5" fill-opacity=".3" filter="url(#pc-V)"></circle><circle cx="59.768" cy="51.5" r="25.5" fill-opacity=".28" filter="url(#pc-W)"></circle><path fill-opacity=".2" d="M464.26765 1.5c20-5 45 45.5 15 58.5s-47.5 37.5-58 57.5-39.5 5-44.5-3 24.5-30.5 30-44.5 37.5-63.5 57.5-68.5z" filter="url(#pc-X)"></path><circle cx="348.768" cy="152.5" r="8.5" fill-opacity=".27" filter="url(#pc-Y)"></circle><circle cx="334.768" cy="159.5" r="8.5" fill-opacity=".27" filter="url(#pc-Z)"></circle><circle cx="345.768" cy="167.5" r="10.5" fill-opacity=".27" filter="url(#pc-aa)"></circle><circle cx="370.768" cy="156.5" r="10.5" fill-opacity=".27" filter="url(#pc-ab)"></circle><circle cx="390.268" cy="143" r="18" fill-opacity=".27" filter="url(#pc-ac)"></circle><ellipse cx="403.768" cy="126.5" fill-opacity=".27" filter="url(#pc-ad)" rx="24.5" ry="17" transform="rotate(-20 403.768 126.5)"></ellipse><ellipse cx="14" cy="73.5" fill-opacity=".2" filter="url(#pc-ae)" rx="7" ry="9.5"></ellipse><ellipse cx="22.5" cy="104.5" fill-opacity=".2" filter="url(#pc-af)" rx="8.5" ry="7.5"></ellipse><ellipse cx="9" cy="94.5" fill-opacity=".2" filter="url(#pc-ag)" rx="5" ry="5.5"></ellipse><ellipse cx="22" cy="84.5" fill-opacity=".15" filter="url(#pc-ah)" rx="9" ry="8.5"></ellipse><ellipse cx="74" cy="146.5" fill-opacity=".18" filter="url(#pc-ai)" rx="8" ry="7.5"></ellipse><ellipse cx="76" cy="165.5" fill-opacity=".13" filter="url(#pc-aj)" rx="8" ry="7.5"></ellipse><ellipse cx="59" cy="156" fill-opacity=".18" filter="url(#pc-ak)" rx="8" ry="9"></ellipse><circle cx="225" cy="223" r="8" fill-opacity=".18" filter="url(#pc-al)"></circle><ellipse cx="64" cy="184.5" fill-opacity=".15" filter="url(#pc-am)" rx="7" ry="6.5"></ellipse><ellipse cx="29" cy="104.5" fill-opacity=".2" filter="url(#pc-an)" rx="5" ry="5.5"></ellipse><circle cx="7.5" cy="58.5" r="6.5" fill-opacity=".2" filter="url(#pc-ao)"></circle><ellipse cx="227" cy="193" fill-opacity=".3" filter="url(#pc-ap)" rx="12" ry="9" transform="rotate(21 227 193)"></ellipse><ellipse cx="221" cy="190" fill-opacity=".5" filter="url(#pc-aq)" rx="12" ry="9" transform="rotate(21 221 190)"></ellipse><ellipse cx="236" cy="184" fill-opacity=".6" filter="url(#pc-ar)" rx="12" ry="9" transform="rotate(21 236 184)"></ellipse><circle cx="218.5" cy="192.5" r="14.5" fill-opacity=".5" filter="url(#pc-as)"></circle><circle cx="218.5" cy="192.5" r="14.5" fill-opacity=".5" filter="url(#pc-at)"></circle><circle cx="297.5" cy="196.5" r="18.5" fill-opacity=".5" filter="url(#pc-au)"></circle><circle cx="194.5" cy="191.5" r="14.5" fill-opacity=".5" filter="url(#pc-av)"></circle><circle cx="321.5" cy="184.5" r="14.5" fill-opacity=".5" filter="url(#pc-aw)"></circle><circle cx="447.5" cy="80.5" r="37.5" fill-opacity=".3" filter="url(#pc-ax)"></circle><circle cx="437.5" cy="111.5" r="37.5" fill-opacity=".3" filter="url(#pc-ay)"></circle><circle cx="449.5" cy="90.5" r="24.5" fill-opacity=".3" filter="url(#pc-az)"></circle><circle cx="466.5" cy="37.5" r="22.5" fill-opacity=".3" filter="url(#pc-aA)"></circle><circle cx="476.5" cy="61.5" r="22.5" fill-opacity=".3" filter="url(#pc-aB)"></circle><circle cx="453.5" cy="58.5" r="22.5" fill-opacity=".3" filter="url(#pc-aC)"></circle><circle cx="479.5" cy="75.5" r="22.5" fill-opacity=".3" filter="url(#pc-aD)"></circle><circle cx="510.5" cy="49.5" r="22.5" fill-opacity=".2" filter="url(#pc-aE)"></circle><circle cx="515.5" cy="84.5" r="22.5" fill-opacity=".2" filter="url(#pc-aF)"></circle><circle cx="480.5" cy="117.5" r="22.5" fill-opacity=".2" filter="url(#pc-aG)"></circle><circle cx="356.5" cy="114.5" r="22.5" fill-opacity=".3" filter="url(#pc-aH)"></circle><circle cx="356.5" cy="131.5" r="22.5" fill-opacity=".3" filter="url(#pc-aI)"></circle><circle cx="362.5" cy="134.5" r="22.5" fill-opacity=".3" filter="url(#pc-aJ)"></circle><ellipse cx="420" cy="101.5" fill-opacity=".2" filter="url(#pc-aK)" rx="5" ry="5.5"></ellipse><ellipse cx="431" cy="112.5" fill-opacity=".2" filter="url(#pc-aL)" rx="5" ry="5.5"></ellipse><ellipse cx="425" cy="127.5" fill-opacity=".2" filter="url(#pc-aM)" rx="5" ry="5.5"></ellipse><ellipse cx="425" cy="119.5" fill-opacity=".2" filter="url(#pc-aN)" rx="5" ry="5.5"></ellipse><ellipse cx="425" cy="119.5" fill-opacity=".2" filter="url(#pc-aO)" rx="5" ry="5.5"></ellipse><ellipse cx="437" cy="159" fill-opacity=".29" filter="url(#pc-aP)" rx="9" ry="10"></ellipse><ellipse cx="430" cy="162.5" fill-opacity=".2" filter="url(#pc-aQ)" rx="5" ry="5.5"></ellipse><ellipse cx="434" cy="179.5" fill-opacity=".2" filter="url(#pc-aR)" rx="5" ry="5.5"></ellipse><ellipse cx="412" cy="194.5" fill-opacity=".2" filter="url(#pc-aS)" rx="5" ry="5.5"></ellipse><circle cx="456" cy="99" r="5" fill-opacity=".25" filter="url(#pc-aT)"></circle><circle cx="470" cy="107" r="5" fill-opacity=".25" filter="url(#pc-aU)"></circle><circle cx="460" cy="110" r="5" fill-opacity=".25" filter="url(#pc-aV)"></circle><circle cx="461" cy="107" r="5" fill-opacity=".25" filter="url(#pc-aW)"></circle><circle cx="474" cy="123" r="5" fill-opacity=".25" filter="url(#pc-aX)"></circle><circle cx="464" cy="74" r="5" fill-opacity=".25" filter="url(#pc-aY)"></circle><circle cx="461" cy="78" r="5" fill-opacity=".25" filter="url(#pc-aZ)"></circle><circle cx="470" cy="80" r="5" fill-opacity=".4" filter="url(#pc-ba)"></circle><ellipse cx="419" cy="180.5" fill-opacity=".26" filter="url(#pc-bb)" rx="6" ry="6.5"></ellipse><ellipse cx="424" cy="170.5" fill-opacity=".26" filter="url(#pc-bc)" rx="6" ry="6.5"></ellipse><ellipse cx="414" cy="169.5" fill-opacity=".26" filter="url(#pc-bd)" rx="6" ry="6.5"></ellipse></g></svg>';

const compParticlesUntrimmedCss = '.rsCapeCustomizer_compParticles circle, .rsCapeCustomizer_compParticles ellipse, .rsCapeCustomizer_compParticles path:not(#special-fill) { fill: #FFF }';
const compParticlesTrimmedCss = '.rsCapeCustomizer_compParticles circle, .rsCapeCustomizer_compParticles ellipse, .rsCapeCustomizer_compParticles path:not(#special-fill) { fill: #FF8610 }';

const compPathUntrimmedCss = '#comp-cape-svg .comp-cape-stripes-toggle { fill: #FFF }';
const compPathTrimmedCss = '#comp-cape-svg .comp-cape-stripes-toggle { fill: #BF8B52 }';

const maxCapeBgClass = 'rsCapeCustomizer_maxCapeBackground';
const compCapeBgClass = 'rsCapeCustomizer_compCapeBackground';

const DEFAULT_SETTINGS = {
  // options: 'max', 'comp', 'compTrim'
  capeType: 'max',
  // options: maxCapeMarkup, compCapeMarkup
  html: maxCapeMarkup,
  // options: 'hsl', 'rgb', 'hex'
  mode: 'hsl',
};

const DEFAULT_CAPE_CONFIG = [
  {
    id: 'detailTop',
    name: 'Detail Top',
    defaultValue: 'hsl(0, 100%, 31%)',
    color: 'hsl(0, 100%, 31%)',
  },
  {
    id: 'detailBot',
    name: 'Detail Bottom',
    defaultValue: 'hsl(36, 93%, 62%)',
    color: 'hsl(36, 93%, 62%)',
  },
  {
    id: 'bgTop',
    name: 'Background Top',
    defaultValue: 'hsl(0, 58%, 29%)',
    color: 'hsl(0, 58%, 29%)',
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
  capeSegmentData: DEFAULT_CAPE_CONFIG,
  type: DEFAULT_SETTINGS.type,
  mode: DEFAULT_SETTINGS.mode,
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

function setCapeSegmentCache() {
  elementCache.capeSegments = [
    document.getElementById('capeDetailTop'),
    document.getElementById('capeDetailBot'),
    document.getElementById('capeBgTop'),
    document.getElementById('capeBgBot'),
  ];
}

// add, remove, or update color of comp cape particles SVG
function handleParticleMarkup() {
  const capeMarkupTarget = elementCache.capeWrapper;
  const oldParticles = document.getElementById('comp-cape-particles-svg');
  const capeType = currentConfig.type;
  if (capeType === 'max' && oldParticles) {
    oldParticles.remove();
  } else if (capeType !== 'max') {
    if (!oldParticles) {
      capeMarkupTarget.insertAdjacentHTML('beforeend', compParticlesMarkup);
    }
    const newParticles = document.getElementById('comp-cape-particles-svg');
    const particlesStyleTag = newParticles.getElementsByTagName('style')[0];
    if (capeType === 'comp') {
      particlesStyleTag.textContent = compParticlesUntrimmedCss;
    } else {
      particlesStyleTag.textContent = compParticlesTrimmedCss;
    }
  }
}

function toggleCapeMarkup() {
  const capeType = currentConfig.type;
  const capeMarkupTarget = elementCache.capeWrapper;
  const currentCape = capeMarkupTarget.querySelector('.rsCapeCustomizer_capeSvg');
  if ((capeType === 'max') &&
      (currentCape.id !== 'max-cape-svg')) {
    currentCape.remove();
    capeMarkupTarget.insertAdjacentHTML('afterbegin', maxCapeMarkup);
    setCapeSegmentCache();
  } else if (capeType !== 'max') {
    if (currentCape.id !== 'comp-cape-svg') {
      currentCape.remove();
      capeMarkupTarget.insertAdjacentHTML('afterbegin', compCapeMarkup);
      setCapeSegmentCache();
    }
    const compCapeStyleTag = document.getElementById('comp-cape-svg').getElementsByTagName('style')[0];
    if (capeType === 'comp') {
      compCapeStyleTag.textContent = compPathUntrimmedCss;
    } else {
      compCapeStyleTag.textContent = compPathTrimmedCss;
    }
  }
  handleParticleMarkup();
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

function handleCapeTypeChange(event) {
  const { value } = event.target;
  currentConfig.type = value;
  toggleCapeMarkup();
  if (value === 'max') {
    elementCache.capeBackground.classList.remove(compCapeBgClass);
    elementCache.capeBackground.classList.add(maxCapeBgClass);
  } else {
    elementCache.capeBackground.classList.remove(maxCapeBgClass);
    elementCache.capeBackground.classList.add(compCapeBgClass);
  }
  updateCapeSegments();
}

function attachEventListeners() {
  const {
    capeTypeRadios,
    colorInputs,
    colorPickers,
    modeRadios,
  } = elementCache;
  for (let i = 0, l = capeTypeRadios.length; i < l; i += 1) {
    capeTypeRadios[i].addEventListener('change', (e) => handleCapeTypeChange(e));
  }
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
  markupTarget.insertAdjacentHTML('afterbegin', appMarkup);

  const capeWrapper = document.getElementById('cape-svg-wrapper');
  elementCache.capeWrapper = capeWrapper;

  const capeBackground = document.getElementById('cape-background');
  elementCache.capeBackground = capeBackground;

  if (DEFAULT_SETTINGS.capeType === 'max') {
    capeBackground.classList.add(maxCapeBgClass);
  } else {
    capeBackground.classList.add(compCapeBgClass);
  }

  // insert cape SVG into previous markup
  capeWrapper.insertAdjacentHTML('afterbegin', DEFAULT_SETTINGS.html);

  setCapeSegmentCache();
  updateCapeSegments();

  const capeTypeRadios = document.querySelectorAll('.rsCapeCustomizer_capeTypeRadio');
  elementCache.capeTypeRadios = [];
  for (let i = 0, l = capeTypeRadios.length; i < l; i += 1) {
    elementCache.capeTypeRadios.push(capeTypeRadios[i]);
  }

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
    colorInput.value = getNumbersFromColorString(DEFAULT_CAPE_CONFIG[i].defaultValue);
    if (browserSupportsColorInputs) {
      postfix.insertAdjacentHTML('afterend', colorInputMarkup[i]);
      const inputWeJustInserted = postfix.nextElementSibling;
      elementCache.colorPickers.push(document.getElementById(inputWeJustInserted.id));
      const colorAsHex = tinycolor(DEFAULT_CAPE_CONFIG[i].defaultValue).toHexString();
      syncColorInput(colorAsHex, i);
    }
  }

  // make the page interactive
  attachEventListeners();
}

let maxLoops = 10;
function tryInit() {
  if (maxLoops > 0) {
    if (window.tinycolor) {
      init();
    } else {
      setTimeout(() => {
        maxLoops -= 1;
        tryInit();
      }, 100);
    }
  } else {
    throw Error('Failed to load tinycolor.');
  }
}

tryInit();
