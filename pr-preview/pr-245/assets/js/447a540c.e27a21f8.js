"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["6443"],{88190:function(e,t,r){r.r(t),r.d(t,{metadata:()=>s,contentTitle:()=>o,default:()=>p,assets:()=>u,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"exercises/cases/cases02","title":"Cases02","description":"","source":"@site/docs/exercises/cases/cases02.mdx","sourceDirName":"exercises/cases","slug":"/exercises/cases/cases02","permalink":"/java-docs/pr-preview/pr-245/exercises/cases/cases02","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/cases/cases02.mdx","tags":[],"version":"current","frontMatter":{"title":"Cases02","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Cases01","permalink":"/java-docs/pr-preview/pr-245/exercises/cases/cases01"},"next":{"title":"Cases03","permalink":"/java-docs/pr-preview/pr-245/exercises/cases/cases03"}}'),n=r("85893"),a=r("50065"),i=r("39661");let l={title:"Cases02",description:""},o=void 0,u={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche die 4 Grundrechenoperationen\nbeherrscht."}),"\n",(0,n.jsx)(t.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"Gib bitte den ersten Operanden ein: 3\nGib bitte den Operator ein: *\nGib bitte den zweiten Operanden ein: 4\nErgebnis: 3 * 4 = 12,00\n"})}),"\n",(0,n.jsx)(i.Z,{pullRequest:"8",branchSuffix:"cases/02"})]})}function p(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5525:function(e,t,r){r.d(t,{Z:()=>i});var s=r("85893");r("67294");var n=r("67026");let a="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a,i),hidden:r,children:t})}},47902:function(e,t,r){r.d(t,{Z:()=>j});var s=r("85893"),n=r("67294"),a=r("67026"),i=r("69599"),l=r("16550"),o=r("32000"),u=r("4520"),c=r("38341"),d=r("76009");function p(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||n.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:t,tabValues:r}=e;return r.some(e=>e.value===t)}var f=r("7227");let b="tabList__CuJ",v="tabItem_LNqP";function m(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let t=e.currentTarget,r=o[u.indexOf(t)].value;r!==n&&(c(t),l(r))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{let r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1]}}t?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:o.map(e=>{let{value:t,label:r,attributes:i}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:p,onClick:d,...i,className:(0,a.Z)("tabs__item",v,i?.className,{"tabs__item--active":n===t}),children:r??t},t)})})}function x(e){let{lazy:t,children:r,selectedValue:i}=e,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){let e=l.find(e=>e.props.value===i);return e?(0,n.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:l.map((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i}))})}function g(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:s}=e,a=function(e){let{values:t,children:r}=e;return(0,n.useMemo)(()=>{let e=t??p(r).map(e=>{let{props:{value:t,label:r,attributes:s,default:n}}=e;return{value:t,label:r,attributes:s,default:n}});return!function(e){let t=(0,c.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[i,f]=(0,n.useState)(()=>(function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let s=r.find(e=>e.default)??r[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:t,tabValues:a})),[b,v]=function(e){let{queryString:t=!1,groupId:r}=e,s=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r}),i=(0,u._X)(a);return[i,(0,n.useCallback)(e=>{if(!a)return;let t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})},[a,s])]}({queryString:r,groupId:s}),[m,x]=function(e){var t;let{groupId:r}=e;let s=(t=r)?`docusaurus.tab.${t}`:null,[a,i]=(0,d.Nk)(s);return[a,(0,n.useCallback)(e=>{if(!!s)i.set(e)},[s,i])]}({groupId:s}),g=(()=>{let e=b??m;return h({value:e,tabValues:a})?e:null})();return(0,o.Z)(()=>{g&&f(g)},[g]),{selectedValue:i,selectValue:(0,n.useCallback)(e=>{if(!h({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);f(e),v(e),x(e)},[v,x,a]),tabValues:a}}(e);return(0,s.jsxs)("div",{className:(0,a.Z)("tabs-container",b),children:[(0,s.jsx)(m,{...t,...e}),(0,s.jsx)(x,{...t,...e})]})}function j(e){let t=(0,f.Z)();return(0,s.jsx)(g,{...e,children:p(e.children)},String(t))}},39661:function(e,t,r){r.d(t,{Z:function(){return o}});var s=r(85893);r(67294);var n=r(47902),a=r(5525),i=r(83012),l=r(45056);function o(e){let{pullRequest:t,branchSuffix:r}=e;return(0,s.jsxs)(n.Z,{children:[(0,s.jsxs)(a.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,s.jsx)(l.Z,{language:"console",children:`git switch exercises/${r}`}),(0,s.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(a.Z,{value:"solution",label:"Solution",children:[(0,s.jsx)(l.Z,{language:"console",children:`git switch solutions/${r}`}),(0,s.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(a.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,s.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);