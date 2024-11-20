!function(e){const t=e.en=e.en||{};t.dictionary=Object.assign(t.dictionary||{},{Big:"Big",Default:"Default","Document colors":"Document colors","Font Background Color":"Font Background Color","Font Color":"Font Color","Font Family":"Font Family","Font Size":"Font Size",Huge:"Huge",Small:"Small",Tiny:"Tiny"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={485:(e,t,o)=>{"use strict";o.d(t,{A:()=>i});var n=o(935),r=o.n(n)()((function(e){return e[1]}));r.push([e.id,".ck-content .text-tiny{font-size:.7em}.ck-content .text-small{font-size:.85em}.ck-content .text-big{font-size:1.4em}.ck-content .text-huge{font-size:1.8em}",""]);const i=r},935:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(r[l]=!0)}for(var s=0;s<e.length;s++){var a=[].concat(e[s]);n&&r[a[0]]||(o&&(a[2]?a[2]="".concat(o," and ").concat(a[2]):a[2]=o),t.push(a))}},t}},591:(e,t,o)=>{"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),l=[];function s(e){for(var t=-1,o=0;o<l.length;o++)if(l[o].identifier===e){t=o;break}return t}function a(e,t){for(var o={},n=[],r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],c=o[a]||0,u="".concat(a," ").concat(c);o[a]=c+1;var d=s(u),m={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(l[d].references++,l[d].updater(m)):l.push({identifier:u,updater:h(m,t),references:1}),n.push(u)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=o.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var l=i(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function m(e,t,o,n){var r=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var i=document.createTextNode(r),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(i,l[t]):e.appendChild(i)}}function p(e,t,o){var n=o.css,r=o.media,i=o.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var g=null,f=0;function h(e,t){var o,n,r;if(t.singleton){var i=f++;o=g||(g=c(t)),n=m.bind(null,o,i,!1),r=m.bind(null,o,i,!0)}else o=c(t),n=p.bind(null,o,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var o=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var r=s(o[n]);l[r].references--}for(var i=a(e,t),c=0;c<o.length;c++){var u=s(o[c]);0===l[u].references&&(l[u].updater(),l.splice(u,1))}o=i}}}},782:(e,t,o)=>{e.exports=o(237)("./src/core.js")},783:(e,t,o)=>{e.exports=o(237)("./src/engine.js")},311:(e,t,o)=>{e.exports=o(237)("./src/ui.js")},584:(e,t,o)=>{e.exports=o(237)("./src/utils.js")},237:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nc=void 0;var n={};(()=>{"use strict";o.r(n),o.d(n,{Font:()=>R,FontBackgroundColor:()=>K,FontBackgroundColorEditing:()=>H,FontBackgroundColorUI:()=>$,FontColor:()=>I,FontColorEditing:()=>M,FontColorUI:()=>j,FontFamily:()=>y,FontFamilyEditing:()=>h,FontFamilyUI:()=>w,FontSize:()=>E,FontSizeEditing:()=>k,FontSizeUI:()=>P});var e=o(782);class t extends e.Command{constructor(e,t){super(e),this.attributeKey=t}refresh(){const e=this.editor.model,t=e.document;this.value=t.selection.getAttribute(this.attributeKey),this.isEnabled=e.schema.checkAttributeInSelection(t.selection,this.attributeKey)}execute(e={}){const t=this.editor.model,o=t.document.selection,n=e.value,r=e.batch,i=e=>{if(o.isCollapsed)n?e.setSelectionAttribute(this.attributeKey,n):e.removeSelectionAttribute(this.attributeKey);else{const r=t.schema.getValidRanges(o.getRanges(),this.attributeKey);for(const t of r)n?e.setAttribute(this.attributeKey,n,t):e.removeAttribute(this.attributeKey,t)}};r?t.enqueueChange(r,(e=>{i(e)})):t.change((e=>{i(e)}))}}var r=o(311);const i="fontSize",l="fontFamily",s="fontColor",a="fontBackgroundColor";function c(e,t){const o={model:{key:e,values:[]},view:{},upcastAlso:{}};for(const e of t)o.model.values.push(e.model),o.view[e.model]=e.view,e.upcastAlso&&(o.upcastAlso[e.model]=e.upcastAlso);return o}function u(e){return t=>t.getStyle(e).replace(/\s/g,"")}function d(e){return(t,{writer:o})=>o.createAttributeElement("span",{style:`${e}:${t}`},{priority:7})}class m extends t{constructor(e){super(e,l)}}function p(e){return e.map(g).filter((e=>void 0!==e))}function g(e){return"object"==typeof e?e:"default"===e?{title:"Default",model:void 0}:"string"==typeof e?function(e){const t=e.replace(/"|'/g,"").split(","),o=t[0],n=t.map(f).join(", ");return{title:o,model:n,view:{name:"span",styles:{"font-family":n},priority:7}}}(e):void 0}function f(e){return(e=e.trim()).indexOf(" ")>0&&(e=`'${e}'`),e}class h extends e.Plugin{static get pluginName(){return"FontFamilyEditing"}constructor(e){super(e),e.config.define(l,{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"],supportAllValues:!1})}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:l}),e.model.schema.setAttributeProperties(l,{isFormatting:!0,copyOnEnter:!0});const t=p(e.config.get("fontFamily.options")).filter((e=>e.model)),o=c(l,t);e.config.get("fontFamily.supportAllValues")?(this._prepareAnyValueConverters(),this._prepareCompatibilityConverter()):e.conversion.attributeToElement(o),e.commands.add(l,new m(e))}_prepareAnyValueConverters(){const e=this.editor;e.conversion.for("downcast").attributeToElement({model:l,view:(e,{writer:t})=>t.createAttributeElement("span",{style:"font-family:"+e},{priority:7})}),e.conversion.for("upcast").elementToAttribute({model:{key:l,value:e=>e.getStyle("font-family")},view:{name:"span",styles:{"font-family":/.*/}}})}_prepareCompatibilityConverter(){this.editor.conversion.for("upcast").elementToAttribute({view:{name:"font",attributes:{face:/.*/}},model:{key:l,value:e=>e.getAttribute("face")}})}}var b=o(584);const v='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.03 3h6.149a.75.75 0 1 1 0 1.5h-5.514L11.03 3zm1.27 3h4.879a.75.75 0 1 1 0 1.5h-4.244L12.3 6zm1.27 3h3.609a.75.75 0 1 1 0 1.5h-2.973L13.57 9zm-2.754 2.5L8.038 4.785 5.261 11.5h5.555zm.62 1.5H4.641l-1.666 4.028H1.312l5.789-14h1.875l5.789 14h-1.663L11.436 13z"/></svg>';class w extends e.Plugin{static get pluginName(){return"FontFamilyUI"}init(){const e=this.editor,t=e.t,o=this._getLocalizedOptions(),n=e.commands.get(l),i=t("Font Family"),s=function(e,t){const o=new b.Collection;for(const n of e){const e={type:"button",model:new r.ViewModel({commandName:l,commandParam:n.model,label:n.title,role:"menuitemradio",withText:!0})};e.model.bind("isOn").to(t,"value",(e=>e===n.model||!(!e||!n.model)&&e.split(",")[0].replace(/'/g,"").toLowerCase()===n.model.toLowerCase())),n.view&&"string"!=typeof n.view&&n.view.styles&&e.model.set("labelStyle",`font-family: ${n.view.styles["font-family"]}`),o.add(e)}return o}(o,n);e.ui.componentFactory.add(l,(t=>{const o=(0,r.createDropdown)(t);return(0,r.addListToDropdown)(o,s,{role:"menu",ariaLabel:i}),o.buttonView.set({label:i,icon:v,tooltip:!0}),o.extendTemplate({attributes:{class:"ck-font-family-dropdown"}}),o.bind("isEnabled").to(n),this.listenTo(o,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),o})),e.ui.componentFactory.add(`menuBar:${l}`,(t=>{const o=new r.MenuBarMenuView(t);o.buttonView.set({label:i,icon:v}),o.bind("isEnabled").to(n);const l=new r.MenuBarMenuListView(t);for(const n of s){const i=new r.MenuBarMenuListItemView(t,o),s=new r.MenuBarMenuListItemButtonView(t);s.set({role:"menuitemradio",isToggleable:!0}),s.bind(...Object.keys(n.model)).to(n.model),s.delegate("execute").to(o),s.on("execute",(()=>{e.execute(n.model.commandName,{value:n.model.commandParam}),e.editing.view.focus()})),i.children.add(s),l.items.add(i)}return o.panelView.children.add(l),o}))}_getLocalizedOptions(){const e=this.editor,t=e.t;return p(e.config.get(l).options).map((e=>("Default"===e.title&&(e.title=t("Default")),e)))}}class y extends e.Plugin{static get requires(){return[h,w]}static get pluginName(){return"FontFamily"}}var x=o(783);class C extends t{constructor(e){super(e,i)}}function F(e){return e.map((e=>function(e){"number"==typeof e&&(e=String(e));if("object"==typeof e&&(t=e,t.title&&t.model&&t.view))return L(e);var t;const o=function(e){return"string"==typeof e?S[e]:S[e.model]}(e);if(o)return L(o);if("default"===e)return{model:void 0,title:"Default"};if(function(e){let t;if("object"==typeof e){if(!e.model)throw new b.CKEditorError("font-size-invalid-definition",null,e);t=parseFloat(e.model)}else t=parseFloat(e);return isNaN(t)}(e))return;return function(e){"string"==typeof e&&(e={title:e,model:`${parseFloat(e)}px`});return e.view={name:"span",styles:{"font-size":e.model}},L(e)}(e)}(e))).filter((e=>void 0!==e))}const S={get tiny(){return{title:"Tiny",model:"tiny",view:{name:"span",classes:"text-tiny",priority:7}}},get small(){return{title:"Small",model:"small",view:{name:"span",classes:"text-small",priority:7}}},get big(){return{title:"Big",model:"big",view:{name:"span",classes:"text-big",priority:7}}},get huge(){return{title:"Huge",model:"huge",view:{name:"span",classes:"text-huge",priority:7}}}};function L(e){return e.view&&"string"!=typeof e.view&&!e.view.priority&&(e.view.priority=7),e}const B=["x-small","x-small","small","medium","large","x-large","xx-large","xxx-large"];class k extends e.Plugin{static get pluginName(){return"FontSizeEditing"}constructor(e){super(e),e.config.define(i,{options:["tiny","small","default","big","huge"],supportAllValues:!1})}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:i}),e.model.schema.setAttributeProperties(i,{isFormatting:!0,copyOnEnter:!0});const t=e.config.get("fontSize.supportAllValues"),o=F(this.editor.config.get("fontSize.options")).filter((e=>e.model)),n=c(i,o);t?(this._prepareAnyValueConverters(n),this._prepareCompatibilityConverter()):e.conversion.attributeToElement(n),e.commands.add(i,new C(e))}_prepareAnyValueConverters(e){const t=this.editor,o=e.model.values.filter((e=>!(0,x.isLength)(String(e))&&!(0,x.isPercentage)(String(e))));if(o.length)throw new b.CKEditorError("font-size-invalid-use-of-named-presets",null,{presets:o});t.conversion.for("downcast").attributeToElement({model:i,view:(e,{writer:t})=>{if(e)return t.createAttributeElement("span",{style:"font-size:"+e},{priority:7})}}),t.conversion.for("upcast").elementToAttribute({model:{key:i,value:e=>e.getStyle("font-size")},view:{name:"span",styles:{"font-size":/.*/}}})}_prepareCompatibilityConverter(){this.editor.conversion.for("upcast").elementToAttribute({view:{name:"font",attributes:{size:/^[+-]?\d{1,3}$/}},model:{key:i,value:e=>{const t=e.getAttribute("size"),o="-"===t[0]||"+"===t[0];let n=parseInt(t,10);o&&(n=3+n);const r=B.length-1,i=Math.min(Math.max(n,0),r);return B[i]}}})}}var A=o(591),T=o.n(A),z=o(485),N={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};T()(z.A,N);z.A.locals;const V='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.816 11.5 7.038 4.785 4.261 11.5h5.555zm.62 1.5H3.641l-1.666 4.028H.312l5.789-14h1.875l5.789 14h-1.663L10.436 13zm7.55 2.279.779-.779.707.707-2.265 2.265-2.193-2.265.707-.707.765.765V4.825c0-.042 0-.083.002-.123l-.77.77-.707-.707L17.207 2.5l2.265 2.265-.707.707-.782-.782c.002.043.003.089.003.135v10.454z"/></svg>';class P extends e.Plugin{static get pluginName(){return"FontSizeUI"}init(){const e=this.editor,t=e.t,o=this._getLocalizedOptions(),n=e.commands.get(i),l=t("Font Size"),s=function(e,t){const o=new b.Collection;for(const n of e){const e={type:"button",model:new r.ViewModel({commandName:i,commandParam:n.model,label:n.title,class:"ck-fontsize-option",role:"menuitemradio",withText:!0})};n.view&&"string"!=typeof n.view&&(n.view.styles&&e.model.set("labelStyle",`font-size:${n.view.styles["font-size"]}`),n.view.classes&&e.model.set("class",`${e.model.class} ${n.view.classes}`)),e.model.bind("isOn").to(t,"value",(e=>e===n.model)),o.add(e)}return o}(o,n);e.ui.componentFactory.add(i,(t=>{const o=(0,r.createDropdown)(t);return(0,r.addListToDropdown)(o,s,{role:"menu",ariaLabel:l}),o.buttonView.set({label:l,icon:V,tooltip:!0}),o.extendTemplate({attributes:{class:["ck-font-size-dropdown"]}}),o.bind("isEnabled").to(n),this.listenTo(o,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),o})),e.ui.componentFactory.add(`menuBar:${i}`,(t=>{const o=new r.MenuBarMenuView(t);o.buttonView.set({label:l,icon:V}),o.bind("isEnabled").to(n);const i=new r.MenuBarMenuListView(t);for(const n of s){const l=new r.MenuBarMenuListItemView(t,o),s=new r.MenuBarMenuListItemButtonView(t);s.set({role:"menuitemradio",isToggleable:!0}),s.bind(...Object.keys(n.model)).to(n.model),s.delegate("execute").to(o),s.on("execute",(()=>{e.execute(n.model.commandName,{value:n.model.commandParam}),e.editing.view.focus()})),l.children.add(s),i.items.add(l)}return o.panelView.children.add(i),o}))}_getLocalizedOptions(){const e=this.editor,t=e.t,o={Default:t("Default"),Tiny:t("Tiny"),Small:t("Small"),Big:t("Big"),Huge:t("Huge")};return F(e.config.get(i).options).map((e=>{const t=o[e.title];return t&&t!=e.title&&(e=Object.assign({},e,{title:t})),e}))}}class E extends e.Plugin{static get requires(){return[k,P]}static get pluginName(){return"FontSize"}normalizeSizeOptions(e){return F(e)}}class O extends t{constructor(e){super(e,s)}}class M extends e.Plugin{static get pluginName(){return"FontColorEditing"}constructor(e){super(e),e.config.define(s,{colors:[{color:"hsl(0, 0%, 0%)",label:"Black"},{color:"hsl(0, 0%, 30%)",label:"Dim grey"},{color:"hsl(0, 0%, 60%)",label:"Grey"},{color:"hsl(0, 0%, 90%)",label:"Light grey"},{color:"hsl(0, 0%, 100%)",label:"White",hasBorder:!0},{color:"hsl(0, 75%, 60%)",label:"Red"},{color:"hsl(30, 75%, 60%)",label:"Orange"},{color:"hsl(60, 75%, 60%)",label:"Yellow"},{color:"hsl(90, 75%, 60%)",label:"Light green"},{color:"hsl(120, 75%, 60%)",label:"Green"},{color:"hsl(150, 75%, 60%)",label:"Aquamarine"},{color:"hsl(180, 75%, 60%)",label:"Turquoise"},{color:"hsl(210, 75%, 60%)",label:"Light blue"},{color:"hsl(240, 75%, 60%)",label:"Blue"},{color:"hsl(270, 75%, 60%)",label:"Purple"}],columns:5}),e.conversion.for("upcast").elementToAttribute({view:{name:"span",styles:{color:/[\s\S]+/}},model:{key:s,value:u("color")}}),e.conversion.for("upcast").elementToAttribute({view:{name:"font",attributes:{color:/^#?\w+$/}},model:{key:s,value:e=>e.getAttribute("color")}}),e.conversion.for("downcast").attributeToElement({model:s,view:d("color")}),e.commands.add(s,new O(e)),e.model.schema.extend("$text",{allowAttributes:s}),e.model.schema.setAttributeProperties(s,{isFormatting:!0,copyOnEnter:!0})}}class D extends e.Plugin{constructor(e,{commandName:t,componentName:o,icon:n,dropdownLabel:r}){super(e),this.commandName=t,this.componentName=o,this.icon=n,this.dropdownLabel=r,this.columns=e.config.get(`${this.componentName}.columns`)}init(){const e=this.editor,t=e.locale,o=t.t,n=e.commands.get(this.commandName),i=e.config.get(this.componentName),l=(0,r.normalizeColorOptions)(i.colors),s=(0,r.getLocalizedColorOptions)(t,l),a=i.documentColors,c=!1!==i.colorPicker;e.ui.componentFactory.add(this.componentName,(t=>{const l=(0,r.createDropdown)(t);let u=!1;const d=function({dropdownView:e,colors:t,columns:o,removeButtonLabel:n,colorPickerLabel:i,documentColorsLabel:l,documentColorsCount:s,colorPickerViewConfig:a}){const c=e.locale,u=new r.ColorSelectorView(c,{colors:t,columns:o,removeButtonLabel:n,colorPickerLabel:i,documentColorsLabel:l,documentColorsCount:s,colorPickerViewConfig:a});return e.colorSelectorView=u,e.panelView.children.add(u),u}({dropdownView:l,colors:s.map((e=>({label:e.label,color:e.model,options:{hasBorder:e.hasBorder}}))),columns:this.columns,removeButtonLabel:o("Remove color"),colorPickerLabel:o("Color picker"),documentColorsLabel:0!==a?o("Document colors"):"",documentColorsCount:void 0===a?this.columns:a,colorPickerViewConfig:!!c&&(i.colorPicker||{})});return d.bind("selectedColor").to(n,"value"),l.buttonView.set({label:this.dropdownLabel,icon:this.icon,tooltip:!0}),l.extendTemplate({attributes:{class:"ck-color-ui-dropdown"}}),l.bind("isEnabled").to(n),d.on("execute",((t,o)=>{l.isOpen&&e.execute(this.commandName,{value:o.value,batch:this._undoStepBatch}),"colorPicker"!==o.source&&e.editing.view.focus(),"colorPickerSaveButton"===o.source&&(l.isOpen=!1)})),d.on("colorPicker:show",(()=>{this._undoStepBatch=e.model.createBatch()})),d.on("colorPicker:cancel",(()=>{this._undoStepBatch.operations.length&&(l.isOpen=!1,e.execute("undo",this._undoStepBatch)),e.editing.view.focus()})),l.on("change:isOpen",((t,o,n)=>{u||(u=!0,l.colorSelectorView.appendUI()),n&&(0!==a&&d.updateDocumentColors(e.model,this.componentName),d.updateSelectedColors(),d.showColorGridsFragment())})),(0,r.focusChildOnDropdownOpen)(l,(()=>l.colorSelectorView.colorGridsFragmentView.staticColorsGrid.items.find((e=>e.isOn)))),l})),e.ui.componentFactory.add(`menuBar:${this.componentName}`,(t=>{const i=new r.MenuBarMenuView(t);i.buttonView.set({label:this.dropdownLabel,icon:this.icon}),i.bind("isEnabled").to(n);let l=!1;const c=new r.ColorSelectorView(t,{colors:s.map((e=>({label:e.label,color:e.model,options:{hasBorder:e.hasBorder}}))),columns:this.columns,removeButtonLabel:o("Remove color"),colorPickerLabel:o("Color picker"),documentColorsLabel:0!==a?o("Document colors"):"",documentColorsCount:void 0===a?this.columns:a,colorPickerViewConfig:!1});return c.bind("selectedColor").to(n,"value"),c.delegate("execute").to(i),c.on("execute",((t,o)=>{e.execute(this.commandName,{value:o.value,batch:this._undoStepBatch}),e.editing.view.focus()})),i.on("change:isOpen",((t,o,n)=>{l||(l=!0,c.appendUI()),n&&(0!==a&&c.updateDocumentColors(e.model,this.componentName),c.updateSelectedColors(),c.showColorGridsFragment())})),i.panelView.children.add(c),i}))}}class j extends D{constructor(e){const t=e.locale.t;super(e,{commandName:s,componentName:s,icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.4 10.3 10 4.5l-2.4 5.8h4.8zm.5 1.2H7.1L5.7 15H4.2l5-12h1.6l5 12h-1.5L13 11.5zm3.1 7H4a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"/></svg>',dropdownLabel:t("Font Color")})}static get pluginName(){return"FontColorUI"}}class I extends e.Plugin{static get requires(){return[M,j]}static get pluginName(){return"FontColor"}}class _ extends t{constructor(e){super(e,a)}}class H extends e.Plugin{static get pluginName(){return"FontBackgroundColorEditing"}constructor(e){super(e),e.config.define(a,{colors:[{color:"hsl(0, 0%, 0%)",label:"Black"},{color:"hsl(0, 0%, 30%)",label:"Dim grey"},{color:"hsl(0, 0%, 60%)",label:"Grey"},{color:"hsl(0, 0%, 90%)",label:"Light grey"},{color:"hsl(0, 0%, 100%)",label:"White",hasBorder:!0},{color:"hsl(0, 75%, 60%)",label:"Red"},{color:"hsl(30, 75%, 60%)",label:"Orange"},{color:"hsl(60, 75%, 60%)",label:"Yellow"},{color:"hsl(90, 75%, 60%)",label:"Light green"},{color:"hsl(120, 75%, 60%)",label:"Green"},{color:"hsl(150, 75%, 60%)",label:"Aquamarine"},{color:"hsl(180, 75%, 60%)",label:"Turquoise"},{color:"hsl(210, 75%, 60%)",label:"Light blue"},{color:"hsl(240, 75%, 60%)",label:"Blue"},{color:"hsl(270, 75%, 60%)",label:"Purple"}],columns:5}),e.data.addStyleProcessorRules(x.addBackgroundRules),e.conversion.for("upcast").elementToAttribute({view:{name:"span",styles:{"background-color":/[\s\S]+/}},model:{key:a,value:u("background-color")}}),e.conversion.for("downcast").attributeToElement({model:a,view:d("background-color")}),e.commands.add(a,new _(e)),e.model.schema.extend("$text",{allowAttributes:a}),e.model.schema.setAttributeProperties(a,{isFormatting:!0,copyOnEnter:!0})}}class $ extends D{constructor(e){const t=e.locale.t;super(e,{commandName:a,componentName:a,icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8.38 9.262H7.62L10 5.506l2.38 5.756zm.532 1.285L14.34 16h1.426L10.804 4H9.196L4.234 16H5.66l1.428-3.453h5.824z"/></svg>',dropdownLabel:t("Font Background Color")})}static get pluginName(){return"FontBackgroundColorUI"}}class K extends e.Plugin{static get requires(){return[H,$]}static get pluginName(){return"FontBackgroundColor"}}class R extends e.Plugin{static get requires(){return[y,E,I,K]}static get pluginName(){return"Font"}}})(),(window.CKEditor5=window.CKEditor5||{}).font=n})();