"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["9683"],{86605:function(e,r,a){a.r(r),a.d(r,{metadata:()=>t,contentTitle:()=>o,default:()=>p,assets:()=>u,toc:()=>c,frontMatter:()=>i});var t=JSON.parse('{"id":"exercises/arrays/arrays06","title":"Arrays06","description":"","source":"@site/docs/exercises/arrays/arrays06.mdx","sourceDirName":"exercises/arrays","slug":"/exercises/arrays/arrays06","permalink":"/java-docs/pr-preview/pr-223/exercises/arrays/arrays06","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/arrays/arrays06.mdx","tags":[],"version":"current","frontMatter":{"title":"Arrays06","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Arrays05","permalink":"/java-docs/pr-preview/pr-223/exercises/arrays/arrays05"},"next":{"title":"Arrays07","permalink":"/java-docs/pr-preview/pr-223/exercises/arrays/arrays07"}}'),n=a("85893"),s=a("50065"),l=a("39661");let i={title:"Arrays06",description:""},o=void 0,u={},c=[{value:"Zahlenfeld",id:"zahlenfeld",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){let r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche ein gegebenes mehrdimensionales\nZahlenfeld analysiert. Es soll jeweils der kleinste sowie der gr\xf6\xdfte Wert einer\nReihe auf der Konsole ausgegeben werden."}),"\n",(0,n.jsx)(r.h2,{id:"zahlenfeld",children:"Zahlenfeld"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:"int[][] array = {\n  { 5, 8, 2, 7 },\n  { 9, 6, 10, 8 },\n  { 10, 2, 7, 5 },\n  { 1, 9, 5, 4 }\n};\n"})}),"\n",(0,n.jsx)(r.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-console",children:"MIN - MAX\n2 - 8\n6 - 10\n2 - 10\n1 - 9\n"})}),"\n",(0,n.jsx)(l.Z,{pullRequest:"75",branchSuffix:"arrays/06"})]})}function p(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5525:function(e,r,a){a.d(r,{Z:()=>l});var t=a("85893");a("67294");var n=a("67026");let s="tabItem_Ymn6";function l(e){let{children:r,hidden:a,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s,l),hidden:a,children:r})}},47902:function(e,r,a){a.d(r,{Z:()=>j});var t=a("85893"),n=a("67294"),s=a("67026"),l=a("69599"),i=a("16550"),o=a("32000"),u=a("4520"),c=a("38341"),d=a("76009");function p(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||n.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:r,tabValues:a}=e;return a.some(e=>e.value===r)}var f=a("7227");let v="tabList__CuJ",b="tabItem_LNqP";function m(e){let{className:r,block:a,selectedValue:n,selectValue:i,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{let r=e.currentTarget,a=o[u.indexOf(r)].value;a!==n&&(c(r),i(a))},p=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let a=u.indexOf(e.currentTarget)+1;r=u[a]??u[0];break}case"ArrowLeft":{let a=u.indexOf(e.currentTarget)-1;r=u[a]??u[u.length-1]}}r?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},r),children:o.map(e=>{let{value:r,label:a,attributes:l}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>u.push(e),onKeyDown:p,onClick:d,...l,className:(0,s.Z)("tabs__item",b,l?.className,{"tabs__item--active":n===r}),children:a??r},r)})})}function x(e){let{lazy:r,children:a,selectedValue:l}=e,i=(Array.isArray(a)?a:[a]).filter(Boolean);if(r){let e=i.find(e=>e.props.value===l);return e?(0,n.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==l}))})}function g(e){let r=function(e){let{defaultValue:r,queryString:a=!1,groupId:t}=e,s=function(e){let{values:r,children:a}=e;return(0,n.useMemo)(()=>{let e=r??p(a).map(e=>{let{props:{value:r,label:a,attributes:t,default:n}}=e;return{value:r,label:a,attributes:t,default:n}});return!function(e){let r=(0,c.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,a])}(e),[l,f]=(0,n.useState)(()=>(function(e){let{defaultValue:r,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:a}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${a.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let t=a.find(e=>e.default)??a[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:r,tabValues:s})),[v,b]=function(e){let{queryString:r=!1,groupId:a}=e,t=(0,i.k6)(),s=function(e){let{queryString:r=!1,groupId:a}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:r,groupId:a}),l=(0,u._X)(s);return[l,(0,n.useCallback)(e=>{if(!s)return;let r=new URLSearchParams(t.location.search);r.set(s,e),t.replace({...t.location,search:r.toString()})},[s,t])]}({queryString:a,groupId:t}),[m,x]=function(e){var r;let{groupId:a}=e;let t=(r=a)?`docusaurus.tab.${r}`:null,[s,l]=(0,d.Nk)(t);return[s,(0,n.useCallback)(e=>{if(!!t)l.set(e)},[t,l])]}({groupId:t}),g=(()=>{let e=v??m;return h({value:e,tabValues:s})?e:null})();return(0,o.Z)(()=>{g&&f(g)},[g]),{selectedValue:l,selectValue:(0,n.useCallback)(e=>{if(!h({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);f(e),b(e),x(e)},[b,x,s]),tabValues:s}}(e);return(0,t.jsxs)("div",{className:(0,s.Z)("tabs-container",v),children:[(0,t.jsx)(m,{...r,...e}),(0,t.jsx)(x,{...r,...e})]})}function j(e){let r=(0,f.Z)();return(0,t.jsx)(g,{...e,children:p(e.children)},String(r))}},39661:function(e,r,a){a.d(r,{Z:function(){return o}});var t=a(85893);a(67294);var n=a(47902),s=a(5525),l=a(83012),i=a(45056);function o(e){let{pullRequest:r,branchSuffix:a}=e;return(0,t.jsxs)(n.Z,{children:[(0,t.jsxs)(s.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,t.jsx)(i.Z,{language:"console",children:`git switch exercises/${a}`}),(0,t.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(s.Z,{value:"solution",label:"Solution",children:[(0,t.jsx)(i.Z,{language:"console",children:`git switch solutions/${a}`}),(0,t.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(s.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,t.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);