"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["3673"],{48194:function(e,t,r){r.r(t),r.d(t,{default:()=>p,frontMatter:()=>l,metadata:()=>s,assets:()=>u,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"exercises/cases/cases01","title":"Cases01","description":"","source":"@site/docs/exercises/cases/cases01.mdx","sourceDirName":"exercises/cases","slug":"/exercises/cases/cases01","permalink":"/java-docs/pr-preview/pr-270/exercises/cases/cases01","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/cases/cases01.mdx","tags":[],"version":"current","frontMatter":{"title":"Cases01","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Verzweigungen","permalink":"/java-docs/pr-preview/pr-270/exercises/cases/"},"next":{"title":"Cases02","permalink":"/java-docs/pr-preview/pr-270/exercises/cases/cases02"}}'),a=r("85893"),n=r("50065"),i=r("17490");let l={title:"Cases01",description:""},o=void 0,u={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche eine Ganzzahl von der Konsole einliest\nund auf der Konsole ausgibt, ob es sich um eine gerade oder ungerade Zahl\nhandelt."}),"\n",(0,a.jsx)(t.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-console",children:"Gib bitte eine ganze Zahl ein: 5\nErgebnis: Die eingegebene Zahl ist ungerade\n"})}),"\n",(0,a.jsx)(i.Z,{pullRequest:"7",branchSuffix:"cases/01"})]})}function p(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},97645:function(e,t,r){r.d(t,{Z:()=>n});var s=r("85893");r("67294");var a=r("67026");function n(e){let{children:t,hidden:r,className:n}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_Ymn6",n),hidden:r,children:t})}},58168:function(e,t,r){r.d(t,{Z:()=>g});var s=r("85893"),a=r("67294"),n=r("67026"),i=r("34718"),l=r("16550"),o=r("8714"),u=r("89207"),c=r("69413"),d=r("54510");function p(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:t,tabValues:r}=e;return r.some(e=>e.value===t)}var f=r("6735");function b(e){let{className:t,block:r,selectedValue:a,selectValue:l,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let t=e.currentTarget,r=o[u.indexOf(t)].value;r!==a&&(c(t),l(r))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{let r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1]}}t?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t),children:o.map(e=>{let{value:t,label:r,attributes:i}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{u.push(e)},onKeyDown:p,onClick:d,...i,className:(0,n.Z)("tabs__item","tabItem_LNqP",i?.className,{"tabs__item--active":a===t}),children:r??t},t)})})}function v(e){let{lazy:t,children:r,selectedValue:i}=e,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){let e=l.find(e=>e.props.value===i);return e?(0,a.cloneElement)(e,{className:(0,n.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:l.map((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i}))})}function m(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:s}=e,n=function(e){let{values:t,children:r}=e;return(0,a.useMemo)(()=>{let e=t??p(r).map(e=>{let{props:{value:t,label:r,attributes:s,default:a}}=e;return{value:t,label:r,attributes:s,default:a}});return!function(e){let t=(0,c.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[i,f]=(0,a.useState)(()=>(function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let s=r.find(e=>e.default)??r[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:t,tabValues:n})),[b,v]=function(e){let{queryString:t=!1,groupId:r}=e,s=(0,l.k6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(n),(0,a.useCallback)(e=>{if(!n)return;let t=new URLSearchParams(s.location.search);t.set(n,e),s.replace({...s.location,search:t.toString()})},[n,s])]}({queryString:r,groupId:s}),[m,g]=function(e){let{groupId:t}=e,r=t?`docusaurus.tab.${t}`:null,[s,n]=(0,d.Nk)(r);return[s,(0,a.useCallback)(e=>{r&&n.set(e)},[r,n])]}({groupId:s}),x=(()=>{let e=b??m;return h({value:e,tabValues:n})?e:null})();return(0,o.Z)(()=>{x&&f(x)},[x]),{selectedValue:i,selectValue:(0,a.useCallback)(e=>{if(!h({value:e,tabValues:n}))throw Error(`Can't select invalid tab value=${e}`);f(e),v(e),g(e)},[v,g,n]),tabValues:n}}(e);return(0,s.jsxs)("div",{className:(0,n.Z)("tabs-container","tabList__CuJ"),children:[(0,s.jsx)(b,{...t,...e}),(0,s.jsx)(v,{...t,...e})]})}function g(e){let t=(0,f.Z)();return(0,s.jsx)(m,{...e,children:p(e.children)},String(t))}},17490:function(e,t,r){r.d(t,{Z:function(){return o}});var s=r(85893);r(67294);var a=r(58168),n=r(97645),i=r(53367),l=r(31705);function o(e){let{pullRequest:t,branchSuffix:r}=e;return(0,s.jsxs)(a.Z,{children:[(0,s.jsxs)(n.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,s.jsx)(l.Z,{language:"console",children:`git switch exercises/${r}`}),(0,s.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(n.Z,{value:"solution",label:"Solution",children:[(0,s.jsx)(l.Z,{language:"console",children:`git switch solutions/${r}`}),(0,s.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(n.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,s.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);