"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["5056"],{13423:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>o,default:()=>f,assets:()=>u,toc:()=>d,frontMatter:()=>c});var n=JSON.parse('{"id":"exercises/cases/cases05","title":"Cases05","description":"","source":"@site/docs/exercises/cases/cases05.mdx","sourceDirName":"exercises/cases","slug":"/exercises/cases/cases05","permalink":"/java-docs/production/exercises/cases/cases05","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/cases/cases05.mdx","tags":[],"version":"current","frontMatter":{"title":"Cases05","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Cases04","permalink":"/java-docs/production/exercises/cases/cases04"},"next":{"title":"Cases06","permalink":"/java-docs/production/exercises/cases/cases06"}}'),s=r("85893"),a=r("50065"),l=r("47902"),i=r("5525");let c={title:"Cases05",description:""},o=void 0,u={},d=[{value:"Coding",id:"coding",level:2}];function h(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Welche Ausgabe erwartest Du nach Ablauf des abgebildeten Codings?"}),"\n",(0,s.jsx)(t.h2,{id:"coding",children:"Coding"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",metastring:"showLineNumbers",children:'int a = 5;\nint b = 5;\nboolean c = true;\nboolean d = true;\nboolean e;\nint f = 5;\nint g = 3;\nint h = 2;\nint i = 4;\nint j = 0;\n\ne = c && (a > 2 ? (b == (a = a * 2)) : d);\nj += ((h < ((f - g == 3) ? 3 : 2)) && (i < 5)) ? 1 : 2;\n\nSystem.out.println("a: " + a);\nSystem.out.println("e: " + e);\nSystem.out.println("j: " + j);\n'})}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(i.Z,{value:"a",label:"-",default:!0}),(0,s.jsx)(i.Z,{value:"b",label:"a",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Zeile"}),(0,s.jsx)(t.th,{children:"Wert"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"a = 5"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"12"}),(0,s.jsx)(t.td,{children:"a = 5 * 2 = 10"})]})]})]})}),(0,s.jsx)(i.Z,{value:"c",label:"e",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Zeile"}),(0,s.jsx)(t.th,{children:"Wert"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"12"}),(0,s.jsx)(t.td,{children:"e = true && (5 > 2 ? (5 == (5 * 2)) : true) = true && (5 == 10) = false"})]})})]})}),(0,s.jsx)(i.Z,{value:"d",label:"j",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Zeile"}),(0,s.jsx)(t.th,{children:"Wert"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"10"}),(0,s.jsx)(t.td,{children:"j = 0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"13"}),(0,s.jsx)(t.td,{children:"j = 0 + ((2 < ((5 - 3 == 3) ? 3 : 2)) && (4 < 5)) ? 1 : 2 = 0 + ((2 < 2) && (4 < 5)) ? 1 : 2 = 0 + 2 = 2"})]})]})]})})]})]})}function f(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5525:function(e,t,r){r.d(t,{Z:()=>l});var n=r("85893");r("67294");var s=r("67026");let a="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a,l),hidden:r,children:t})}},47902:function(e,t,r){r.d(t,{Z:()=>g});var n=r("85893"),s=r("67294"),a=r("67026"),l=r("69599"),i=r("16550"),c=r("32000"),o=r("4520"),u=r("38341"),d=r("76009");function h(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function f(e){let{value:t,tabValues:r}=e;return r.some(e=>e.value===t)}var p=r("7227");let x="tabList__CuJ",j="tabItem_LNqP";function b(e){let{className:t,block:r,selectedValue:s,selectValue:i,tabValues:c}=e,o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{let t=e.currentTarget,r=c[o.indexOf(t)].value;r!==s&&(u(t),i(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{let r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1]}}t?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:c.map(e=>{let{value:t,label:r,attributes:l}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:h,onClick:d,...l,className:(0,a.Z)("tabs__item",j,l?.className,{"tabs__item--active":s===t}),children:r??t},t)})})}function m(e){let{lazy:t,children:r,selectedValue:l}=e,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){let e=i.find(e=>e.props.value===l);return e?(0,s.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:i.map((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function v(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:n}=e,a=function(e){let{values:t,children:r}=e;return(0,s.useMemo)(()=>{let e=t??h(r).map(e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}});return!function(e){let t=(0,u.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[l,p]=(0,s.useState)(()=>(function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let n=r.find(e=>e.default)??r[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:t,tabValues:a})),[x,j]=function(e){let{queryString:t=!1,groupId:r}=e,n=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r}),l=(0,o._X)(a);return[l,(0,s.useCallback)(e=>{if(!a)return;let t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})},[a,n])]}({queryString:r,groupId:n}),[b,m]=function(e){var t;let{groupId:r}=e;let n=(t=r)?`docusaurus.tab.${t}`:null,[a,l]=(0,d.Nk)(n);return[a,(0,s.useCallback)(e=>{if(!!n)l.set(e)},[n,l])]}({groupId:n}),v=(()=>{let e=x??b;return f({value:e,tabValues:a})?e:null})();return(0,c.Z)(()=>{v&&p(v)},[v]),{selectedValue:l,selectValue:(0,s.useCallback)(e=>{if(!f({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);p(e),j(e),m(e)},[j,m,a]),tabValues:a}}(e);return(0,n.jsxs)("div",{className:(0,a.Z)("tabs-container",x),children:[(0,n.jsx)(b,{...t,...e}),(0,n.jsx)(m,{...t,...e})]})}function g(e){let t=(0,p.Z)();return(0,n.jsx)(v,{...e,children:h(e.children)},String(t))}},50065:function(e,t,r){r.d(t,{Z:function(){return i},a:function(){return l}});var n=r(67294);let s={},a=n.createContext(s);function l(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);