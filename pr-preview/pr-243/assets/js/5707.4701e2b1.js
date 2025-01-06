(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["5707"],{87594:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map(e=>e.trim()))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,s,r]=t;if(o&&r){let e=(o=parseInt(o))<(r=parseInt(r))?1:-1;("-"===s||".."===s||"\u2025"===s)&&(r+=e);for(let t=o;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},45056:function(e,t,n){"use strict";n.d(t,{Z:()=>H});var o=n("85893"),s=n("67294"),r=n("7227"),c=n("67026"),a=n("84239"),l=n("30140");function i(){let{prism:e}=(0,l.L)(),{colorMode:t}=(0,a.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var u=n("84681"),d=n("87594"),m=n.n(d);let p=/title=(?<quote>["'])(?<title>.*?)\1/,b=/\{(?<range>[\d,-]+)\}/,f={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},h={...f,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},g=Object.keys(f);function j(e,t){let n=e.map(e=>{let{start:n,end:o}=h[e];return`(?:${n}\\s*(${t.flatMap(e=>[e.line,e.block?.start,e.block?.end].filter(Boolean)).join("|")})\\s*${o})`}).join("|");return RegExp(`^\\s*(?:${n})\\s*$`)}function k(e){let{as:t,...n}=e,s=function(e){let t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach(e=>{let[o,s]=e,r=t[o];r&&"string"==typeof s&&(n[r]=s)}),n}(i());return(0,o.jsx)(t,{...n,style:s,className:(0,c.Z)(n.className,"codeBlockContainer_Ckt0",u.k.common.codeBlock)})}let x={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function v(e){let{children:t,className:n}=e;return(0,o.jsx)(k,{as:"pre",tabIndex:0,className:(0,c.Z)(x.codeBlockStandalone,"thin-scrollbar",n),children:(0,o.jsx)("code",{className:x.codeBlockLines,children:t})})}var B=n("85346");let y={attributes:!0,characterData:!0,childList:!0,subtree:!0};var w=n("83229");let C={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function N(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:r,getTokenProps:a}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");let l=r({line:t,className:(0,c.Z)(n,s&&C.codeLine)}),i=t.map((e,t)=>(0,o.jsx)("span",{...a({token:e})},t));return(0,o.jsxs)("span",{...l,children:[s?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:C.codeLineNumber}),(0,o.jsx)("span",{className:C.codeLineContent,children:i})]}):i,(0,o.jsx)("br",{})]})}var E=n("96025");function L(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function I(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}let _={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function S(e){let{code:t,className:n}=e,[r,a]=(0,s.useState)(!1),l=(0,s.useRef)(void 0),i=(0,s.useCallback)(()=>{!function(e){let{target:t=document.body}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e)throw TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);let n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";let s=document.getSelection(),r=s.rangeCount>0&&s.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{document.execCommand("copy")}catch{}n.remove(),r&&(s.removeAllRanges(),s.addRange(r)),o&&o.focus()}(t),a(!0),l.current=window.setTimeout(()=>{a(!1)},1e3)},[t]);return(0,s.useEffect)(()=>()=>window.clearTimeout(l.current),[]),(0,o.jsx)("button",{type:"button","aria-label":r?(0,E.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,E.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,E.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.Z)("clean-btn",n,_.copyButton,r&&_.copyButtonCopied),onClick:i,children:(0,o.jsxs)("span",{className:_.copyButtonIcons,"aria-hidden":"true",children:[(0,o.jsx)(L,{className:_.copyButtonIcon}),(0,o.jsx)(I,{className:_.copyButtonSuccessIcon})]})})}function A(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let $={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function T(e){let{className:t,onClick:n,isEnabled:s}=e,r=(0,E.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,o.jsx)("button",{type:"button",onClick:n,className:(0,c.Z)("clean-btn",t,s&&$.wordWrapButtonEnabled),"aria-label":r,title:r,children:(0,o.jsx)(A,{className:$.wordWrapButtonIcon,"aria-hidden":"true"})})}function Z(e){var t;let{children:n,className:r="",metastring:a,title:u,showLineNumbers:d,language:f}=e,{prism:{defaultLanguage:h,magicComments:v}}=(0,l.L)(),C=(t=f??function(e){let t=e.split(" ").find(e=>e.startsWith("language-"));return t?.replace(/language-/,"")}(r)??h,t?.toLowerCase()),E=i(),L=function(){let[e,t]=(0,s.useState)(!1),[n,o]=(0,s.useState)(!1),r=(0,s.useRef)(null),c=(0,s.useCallback)(()=>{let n=r.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t(e=>!e)},[r,e]),a=(0,s.useCallback)(()=>{let{scrollWidth:e,clientWidth:t}=r.current;o(e>t||r.current.querySelector("code").hasAttribute("style"))},[r]);return!function(e,t){let[n,o]=(0,s.useState)(),r=(0,s.useCallback)(()=>{o(e.current?.closest("[role=tabpanel][hidden]"))},[e,o]);(0,s.useEffect)(()=>{r()},[r]),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y,o=(0,B.zX)(t),r=(0,B.Ql)(n);(0,s.useEffect)(()=>{let t=new MutationObserver(o);return e&&t.observe(e,r),()=>t.disconnect()},[e,o,r])}(n,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),r())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(r,a),(0,s.useEffect)(()=>{a()},[e,a]),(0,s.useEffect)(()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)}),[a]),{codeBlockRef:r,isEnabled:e,isCodeScrollable:n,toggle:c}}(),I=(a?.match(p)?.groups.title??"")||u,{lineClassNames:_,code:A}=function(e,t){let n=e.replace(/\n$/,""),{language:o,magicComments:s,metastring:r}=t;if(r&&b.test(r)){let e=r.match(b).groups.range;if(0===s.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${r}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let t=s[0].className;return{lineClassNames:Object.fromEntries(m()(e).filter(e=>e>0).map(e=>[e-1,[t]])),code:n}}if(void 0===o)return{lineClassNames:{},code:n};let c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return j(["js","jsBlock"],t);case"jsx":case"tsx":return j(["js","jsBlock","jsx"],t);case"html":return j(["js","jsBlock","html"],t);case"python":case"py":case"bash":return j(["bash"],t);case"markdown":case"md":return j(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return j(["tex"],t);case"lua":case"haskell":case"sql":return j(["lua"],t);case"wasm":return j(["wasm"],t);case"vb":case"vba":case"visual-basic":return j(["vb","rem"],t);case"vbnet":return j(["vbnet","rem"],t);case"batch":return j(["rem"],t);case"basic":return j(["rem","f90"],t);case"fsharp":return j(["js","ml"],t);case"ocaml":case"sml":return j(["ml"],t);case"fortran":return j(["f90"],t);case"cobol":return j(["cobol"],t);default:return j(g,t)}}(o,s),a=n.split("\n"),l=Object.fromEntries(s.map(e=>[e.className,{start:0,range:""}])),i=Object.fromEntries(s.filter(e=>e.line).map(e=>{let{className:t,line:n}=e;return[n,t]})),u=Object.fromEntries(s.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.start,t]})),d=Object.fromEntries(s.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.end,t]}));for(let e=0;e<a.length;){let t=a[e].match(c);if(!t){e+=1;continue}let n=t.slice(1).find(e=>void 0!==e);i[n]?l[i[n]].range+=`${e},`:u[n]?l[u[n]].start=e:d[n]&&(l[d[n]].range+=`${l[d[n]].start}-${e-1},`),a.splice(e,1)}n=a.join("\n");let p={};return Object.entries(l).forEach(e=>{let[t,{range:n}]=e;m()(n).forEach(e=>{p[e]??=[],p[e].push(t)})}),{lineClassNames:p,code:n}}(n,{metastring:a,language:C,magicComments:v}),$=d??!!a?.includes("showLineNumbers");return(0,o.jsxs)(k,{as:"div",className:(0,c.Z)(r,C&&!r.includes(`language-${C}`)&&`language-${C}`),children:[I&&(0,o.jsx)("div",{className:x.codeBlockTitle,children:I}),(0,o.jsxs)("div",{className:x.codeBlockContent,children:[(0,o.jsx)(w.y$,{theme:E,code:A,language:C??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:r,getTokenProps:a}=e;return(0,o.jsx)("pre",{tabIndex:0,ref:L.codeBlockRef,className:(0,c.Z)(t,x.codeBlock,"thin-scrollbar"),style:n,children:(0,o.jsx)("code",{className:(0,c.Z)(x.codeBlockLines,$&&x.codeBlockLinesWithNumbering),children:s.map((e,t)=>(0,o.jsx)(N,{line:e,getLineProps:r,getTokenProps:a,classNames:_[t],showLineNumbers:$},t))})})}}),(0,o.jsxs)("div",{className:x.buttonGroup,children:[(L.isEnabled||L.isCodeScrollable)&&(0,o.jsx)(T,{className:x.codeButton,onClick:()=>L.toggle(),isEnabled:L.isEnabled}),(0,o.jsx)(S,{className:x.codeButton,code:A})]})]})]})}function H(e){let{children:t,...n}=e,c=(0,r.Z)(),a=s.Children.toArray(t).some(e=>(0,s.isValidElement)(e))?t:Array.isArray(t)?t.join(""):t;return(0,o.jsx)("string"==typeof a?Z:v,{...n,children:a},String(c))}},50065:function(e,t,n){"use strict";n.d(t,{Z:function(){return a},a:function(){return c}});var o=n(67294);let s={},r=o.createContext(s);function c(e){let t=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);