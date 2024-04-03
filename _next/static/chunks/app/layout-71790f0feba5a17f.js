(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5074:function(e,t,o){Promise.resolve().then(o.t.bind(o,6327,23)),Promise.resolve().then(o.bind(o,9822)),Promise.resolve().then(o.t.bind(o,6876,23))},9822:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return H}});var r=o(7573),n=o(430),l=o(2988),a=o(5215),i=o(9885),c=o(6723),s=o(7055),d=o(9585),m=o(3781),u=o(1602);function h(e){let{styles:t,defaultTheme:o={}}=e,n="function"==typeof t?e=>t(null==e||0===Object.keys(e).length?o:e):t;return(0,r.jsx)(u.xB,{styles:n})}let f=d.createContext(null);function y(){return d.useContext(f)}var g="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",p=function(e){let{children:t,theme:o}=e,n=y(),l=d.useMemo(()=>{let e=null===n?o:"function"==typeof o?o(n):(0,i.Z)({},n,o);return null!=e&&(e[g]=null!==n),e},[o,n]);return(0,r.jsx)(f.Provider,{value:l,children:t})},v=o(8372);let S=["value"],k=d.createContext();var b=function(e){let{value:t}=e,o=(0,c.Z)(e,S);return(0,r.jsx)(k.Provider,(0,i.Z)({value:null==t||t},o))};let x={};function j(e,t,o){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return d.useMemo(()=>{let n=e&&t[e]||t;if("function"==typeof o){let l=o(n),a=e?(0,i.Z)({},t,{[e]:l}):l;return r?()=>a:a}return e?(0,i.Z)({},t,{[e]:o}):(0,i.Z)({},t,o)},[e,t,o,r])}var C=function(e){let{children:t,theme:o,themeId:n}=e,l=(0,v.Z)(x),i=y()||x,c=j(n,l,o),s=j(n,i,o,!0),d="rtl"===c.direction;return(0,r.jsx)(p,{theme:s,children:(0,r.jsx)(a.T.Provider,{value:c,children:(0,r.jsx)(b,{value:d,children:t})})})};let E="mode",F="color-scheme",Z="data-color-scheme";function I(e){if("undefined"!=typeof window&&"system"===e)return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function w(e,t){return"light"===e.mode||"system"===e.mode&&"light"===e.systemMode?t("light"):"dark"===e.mode||"system"===e.mode&&"dark"===e.systemMode?t("dark"):void 0}function _(e,t){let o;if("undefined"!=typeof window){try{(o=localStorage.getItem(e)||void 0)||localStorage.setItem(e,t)}catch(e){}return o||t}}let $=["colorSchemes","components","generateCssVars","cssVarPrefix"];var M=o(3252),A=o(3816);let{CssVarsProvider:B,useColorScheme:O,getInitColorSchemeScript:T}=function(e){let{themeId:t,theme:o={},attribute:n=Z,modeStorageKey:l=E,colorSchemeStorageKey:a=F,defaultMode:u="light",defaultColorScheme:f,disableTransitionOnChange:g=!1,resolveTheme:p,excludeVariablesFromRoot:v}=e;o.colorSchemes&&("string"!=typeof f||o.colorSchemes[f])&&("object"!=typeof f||o.colorSchemes[null==f?void 0:f.light])&&("object"!=typeof f||o.colorSchemes[null==f?void 0:f.dark])||console.error(`MUI: \`${f}\` does not exist in \`theme.colorSchemes\`.`);let S=d.createContext(void 0),k="string"==typeof f?f:f.light,b="string"==typeof f?f:f.dark;return{CssVarsProvider:function(e){let{children:s,theme:k=o,modeStorageKey:b=l,colorSchemeStorageKey:x=a,attribute:j=n,defaultMode:Z=u,defaultColorScheme:M=f,disableTransitionOnChange:A=g,storageWindow:B="undefined"==typeof window?void 0:window,documentNode:O="undefined"==typeof document?void 0:document,colorSchemeNode:T="undefined"==typeof document?void 0:document.documentElement,colorSchemeSelector:P=":root",disableNestedContext:D=!1,disableStyleSheetGeneration:z=!1}=e,L=d.useRef(!1),W=y(),H=d.useContext(S),N=!!H&&!D,V=k[t],K=V||k,{colorSchemes:R={},components:J={},generateCssVars:q=()=>({vars:{},css:{}}),cssVarPrefix:U}=K,G=(0,c.Z)(K,$),Q=Object.keys(R),X="string"==typeof M?M:M.light,Y="string"==typeof M?M:M.dark,{mode:ee,setMode:et,systemMode:eo,lightColorScheme:er,darkColorScheme:en,colorScheme:el,setColorScheme:ea}=function(e){let{defaultMode:t="light",defaultLightColorScheme:o,defaultDarkColorScheme:r,supportedColorSchemes:n=[],modeStorageKey:l=E,colorSchemeStorageKey:a=F,storageWindow:c="undefined"==typeof window?void 0:window}=e,s=n.join(","),[m,u]=d.useState(()=>{let e=_(l,t),n=_("".concat(a,"-light"),o),i=_("".concat(a,"-dark"),r);return{mode:e,systemMode:I(e),lightColorScheme:n,darkColorScheme:i}}),h=w(m,e=>"light"===e?m.lightColorScheme:"dark"===e?m.darkColorScheme:void 0),f=d.useCallback(e=>{u(o=>{if(e===o.mode)return o;let r=null!=e?e:t;try{localStorage.setItem(l,r)}catch(e){}return(0,i.Z)({},o,{mode:r,systemMode:I(r)})})},[l,t]),y=d.useCallback(e=>{e?"string"==typeof e?e&&!s.includes(e)?console.error("`".concat(e,"` does not exist in `theme.colorSchemes`.")):u(t=>{let o=(0,i.Z)({},t);return w(t,t=>{try{localStorage.setItem("".concat(a,"-").concat(t),e)}catch(e){}"light"===t&&(o.lightColorScheme=e),"dark"===t&&(o.darkColorScheme=e)}),o}):u(t=>{let n=(0,i.Z)({},t),l=null===e.light?o:e.light,c=null===e.dark?r:e.dark;if(l){if(s.includes(l)){n.lightColorScheme=l;try{localStorage.setItem("".concat(a,"-light"),l)}catch(e){}}else console.error("`".concat(l,"` does not exist in `theme.colorSchemes`."))}if(c){if(s.includes(c)){n.darkColorScheme=c;try{localStorage.setItem("".concat(a,"-dark"),c)}catch(e){}}else console.error("`".concat(c,"` does not exist in `theme.colorSchemes`."))}return n}):u(e=>{try{localStorage.setItem("".concat(a,"-light"),o),localStorage.setItem("".concat(a,"-dark"),r)}catch(e){}return(0,i.Z)({},e,{lightColorScheme:o,darkColorScheme:r})})},[s,a,o,r]),g=d.useCallback(e=>{"system"===m.mode&&u(t=>{let o=null!=e&&e.matches?"dark":"light";return t.systemMode===o?t:(0,i.Z)({},t,{systemMode:o})})},[m.mode]),p=d.useRef(g);return p.current=g,d.useEffect(()=>{let e=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return p.current(...t)},t=window.matchMedia("(prefers-color-scheme: dark)");return t.addListener(e),e(t),()=>{t.removeListener(e)}},[]),d.useEffect(()=>{if(c){let e=e=>{let o=e.newValue;"string"==typeof e.key&&e.key.startsWith(a)&&(!o||s.match(o))&&(e.key.endsWith("light")&&y({light:o}),e.key.endsWith("dark")&&y({dark:o})),e.key===l&&(!o||["light","dark","system"].includes(o))&&f(o||t)};return c.addEventListener("storage",e),()=>{c.removeEventListener("storage",e)}}},[y,f,l,a,s,t,c]),(0,i.Z)({},m,{colorScheme:h,setMode:f,setColorScheme:y})}({supportedColorSchemes:Q,defaultLightColorScheme:X,defaultDarkColorScheme:Y,modeStorageKey:b,colorSchemeStorageKey:x,defaultMode:Z,storageWindow:B}),ei=ee,ec=el;N&&(ei=H.mode,ec=H.colorScheme);let es=ei||("system"===Z?u:Z),ed=ec||("dark"===es?Y:X),{css:em,vars:eu}=q(),eh=(0,i.Z)({},G,{components:J,colorSchemes:R,cssVarPrefix:U,vars:eu,getColorSchemeSelector:e=>`[${j}="${e}"] &`}),ef={},ey={};Object.entries(R).forEach(([e,t])=>{let{css:o,vars:r}=q(e);if(eh.vars=(0,m.Z)(eh.vars,r),e===ed&&(Object.keys(t).forEach(e=>{t[e]&&"object"==typeof t[e]?eh[e]=(0,i.Z)({},eh[e],t[e]):eh[e]=t[e]}),eh.palette&&(eh.palette.colorScheme=e)),e===("string"==typeof M?M:"dark"===Z?M.dark:M.light)){if(v){let t={};v(U).forEach(e=>{t[e]=o[e],delete o[e]}),ef[`[${j}="${e}"]`]=t}ef[`${P}, [${j}="${e}"]`]=o}else ey[`${":root"===P?"":P}[${j}="${e}"]`]=o}),eh.vars=(0,m.Z)(eh.vars,eu),d.useEffect(()=>{ec&&T&&T.setAttribute(j,ec)},[ec,j,T]),d.useEffect(()=>{let e;if(A&&L.current&&O){let t=O.createElement("style");t.appendChild(O.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),O.head.appendChild(t),window.getComputedStyle(O.body),e=setTimeout(()=>{O.head.removeChild(t)},1)}return()=>{clearTimeout(e)}},[ec,A,O]),d.useEffect(()=>(L.current=!0,()=>{L.current=!1}),[]);let eg=d.useMemo(()=>({allColorSchemes:Q,colorScheme:ec,darkColorScheme:en,lightColorScheme:er,mode:ei,setColorScheme:ea,setMode:et,systemMode:eo}),[Q,ec,en,er,ei,ea,et,eo]),ep=!0;(z||N&&(null==W?void 0:W.cssVarPrefix)===U)&&(ep=!1);let ev=(0,r.jsxs)(d.Fragment,{children:[ep&&(0,r.jsxs)(d.Fragment,{children:[(0,r.jsx)(h,{styles:{[P]:em}}),(0,r.jsx)(h,{styles:ef}),(0,r.jsx)(h,{styles:ey})]}),(0,r.jsx)(C,{themeId:V?t:void 0,theme:p?p(eh):eh,children:s})]});return N?ev:(0,r.jsx)(S.Provider,{value:eg,children:ev})},useColorScheme:()=>{let e=d.useContext(S);if(!e)throw Error((0,s.Z)(19));return e},getInitColorSchemeScript:e=>(function(e){let{defaultMode:t="light",defaultLightColorScheme:o="light",defaultDarkColorScheme:n="dark",modeStorageKey:l=E,colorSchemeStorageKey:a=F,attribute:i=Z,colorSchemeNode:c="document.documentElement"}=e||{};return(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:`(function() {
try {
  var mode = localStorage.getItem('${l}') || '${t}';
  var colorScheme = '';
  if (mode === 'system') {
    // handle system mode
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = localStorage.getItem('${a}-dark') || '${n}';
    } else {
      colorScheme = localStorage.getItem('${a}-light') || '${o}';
    }
  }
  if (mode === 'light') {
    colorScheme = localStorage.getItem('${a}-light') || '${o}';
  }
  if (mode === 'dark') {
    colorScheme = localStorage.getItem('${a}-dark') || '${n}';
  }
  if (colorScheme) {
    ${c}.setAttribute('${i}', colorScheme);
  }
} catch(e){}})();`}},"mui-color-scheme-init")})((0,i.Z)({attribute:n,colorSchemeStorageKey:a,defaultMode:u,defaultLightColorScheme:k,defaultDarkColorScheme:b,modeStorageKey:l},e))}}({themeId:A.Z,theme:M.Z,attribute:"data-joy-color-scheme",modeStorageKey:"joy-mode",colorSchemeStorageKey:"joy-color-scheme",defaultColorScheme:{light:"light",dark:"dark"}});var P=o(3948),D=function(e){let{styles:t,themeId:o,defaultTheme:n={}}=e,l=(0,P.Z)(n),a="function"==typeof t?t(o&&l[o]||l):t;return(0,r.jsx)(h,{styles:a})},z=function(e){return(0,r.jsx)(D,(0,i.Z)({},e,{defaultTheme:M.Z,themeId:A.Z}))},L=function(e){let{children:t,disableColorScheme:o=!1}=e;return(0,r.jsxs)(d.Fragment,{children:[(0,r.jsx)(z,{styles:e=>{var t,r;let n={};o||Object.entries(e.colorSchemes).forEach(t=>{var o;let[r,l]=t;n[e.getColorSchemeSelector(r).replace(/\s*&/,"")]={colorScheme:null==(o=l.palette)?void 0:o.mode}});let l=null!=(t=null==(r=e.components)||null==(r=r.JoyTypography)||null==(r=r.defaultProps)?void 0:r.level)?t:"body-md";return(0,i.Z)({html:{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.vars.fontWeight.lg},body:(0,i.Z)({margin:0,color:e.vars.palette.text.primary,fontFamily:e.vars.fontFamily.body},e.typography[l],{backgroundColor:e.vars.palette.background.body,"@media print":{backgroundColor:e.vars.palette.common.white},"&::backdrop":{backgroundColor:e.vars.palette.background.backdrop}})},n)},defaultTheme:M.Z}),t]})};let W=(0,o(602).Z)({colorSchemes:{light:{palette:{primary:{50:"#F2F7FF",100:"#DCEBFE",200:"#BDDAFE",300:"#91C3FC",400:"#60A5FA",500:"#3479E8",600:"#2362EA",700:"#1D4FD7",800:"#1D3FAE",900:"#1E3B8A",solidBg:"var(--joy-palette-primary-600)",solidHoverBg:"var(--joy-palette-primary-500)",solidActiveBg:"var(--joy-palette-primary-400)"}}},dark:{palette:{primary:{50:"#1D223F",100:"#0A318C",200:"#1347CC",300:"#1055EA",400:"#357AEA",500:"#2E88F6",600:"#50A1FF",700:"#7AB7FF",800:"#DCEBFE",900:"#F0F6FF",solidBg:"var(--joy-palette-primary-700)",solidColor:"var(--joy-palette-common-black)",solidHoverBg:"var(--joy-palette-primary-600)",solidActiveBg:"var(--joy-palette-primary-400)"},background:{body:"var(--joy-palette-common-black)",surface:"var(--joy-palette-neutral-900)"}}}},fontFamily:{display:"'Inter', var(--joy-fontFamily-fallback)",body:"'Inter', var(--joy-fontFamily-fallback)"},components:{JoyButton:{styleOverrides:{root:e=>{let{ownerState:t}=e;return{"--Button-iconOffsetStep":0,..."solid"===t.variant&&{"&.Mui-focusVisible, &:focus-visible":{outlineOffset:"-3px",outlineColor:"#fff"}},..."outlined"===t.variant&&{"&.Mui-focusVisible, &:focus-visible":{outlineOffset:"-3px"}},..."md"===t.size&&{"--Icon-fontSize":"20px",fontSize:"14px",fontWeight:600,minHeight:"32px",borderRadius:"2px",paddingLeft:20,paddingRight:20}}}}},JoyIconButton:{styleOverrides:{root:()=>({"&:hover":{backgroundColor:"transparent"}})}}}});function H(e){let{options:t,children:o}=e,[{cache:i,flush:c}]=d.useState(()=>{let e=(0,n.Z)(t);e.compat=!0;let o=e.insert,r=[];return e.insert=function(){for(var t=arguments.length,n=Array(t),l=0;l<t;l++)n[l]=arguments[l];let a=n[1];return void 0===e.inserted[a.name]&&r.push(a.name),o(...n)},{cache:e,flush:()=>{let e=r;return r=[],e}}});return(0,l.useServerInsertedHTML)(()=>{let e=c();if(0===e.length)return null;let t="";for(let o of e)t+=i.inserted[o];return(0,r.jsx)("style",{"data-emotion":"".concat(i.key," ").concat(e.join(" ")),dangerouslySetInnerHTML:{__html:t}},i.key)}),(0,r.jsx)(a.C,{value:i,children:(0,r.jsxs)(B,{theme:W,children:[(0,r.jsx)(L,{}),o]})})}},6327:function(){},6876:function(e){e.exports={style:{fontFamily:"'__Inter_57a9f3', '__Inter_Fallback_57a9f3'",fontStyle:"normal"},className:"__className_57a9f3"}}},function(e){e.O(0,[13,293,997,744],function(){return e(e.s=5074)}),_N_E=e.O()}]);