"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["5114"],{89249:function(e,t,r){r.r(t),r.d(t,{default:()=>p,frontMatter:()=>l,metadata:()=>n,assets:()=>u,toc:()=>c,contentTitle:()=>o});var n=JSON.parse('{"id":"exercises/loops/loops04","title":"Loops04","description":"","source":"@site/docs/exercises/loops/loops04.mdx","sourceDirName":"exercises/loops","slug":"/exercises/loops/loops04","permalink":"/java-docs/pr-preview/pr-259/exercises/loops/loops04","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/loops/loops04.mdx","tags":[],"version":"current","frontMatter":{"title":"Loops04","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Loops03","permalink":"/java-docs/pr-preview/pr-259/exercises/loops/loops03"},"next":{"title":"Loops05","permalink":"/java-docs/pr-preview/pr-259/exercises/loops/loops05"}}'),s=r("85893"),i=r("50065"),a=r("17490");let l={title:"Loops04",description:""},o=void 0,u={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}];function d(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche zwei Zeichenketten unter Missachtung\nder Gro\xdf- und Kleinschreibung zeichenweise auf Gleichheit \xfcberpr\xfcft."}),"\n",(0,s.jsx)(t.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"Gib bitte die erste Zeichenkette ein: Hallo Welt\nGib bitte die zweite Zeichenkette ein: HALLO WELT\nErgebnis: Die eingegebenen Zeichenketten sind identisch\n"})}),"\n",(0,s.jsx)(t.h2,{id:"hinweis",children:"Hinweis"}),"\n",(0,s.jsxs)(t.p,{children:["Die statische Methode ",(0,s.jsx)(t.code,{children:"char toUpperCase(ch: char)"})," der Klasse ",(0,s.jsx)(t.code,{children:"Character"})," gibt\nden Gro\xdfbuchstaben des eingehenden Zeichens zur\xfcck."]}),"\n",(0,s.jsx)(a.Z,{pullRequest:"17",branchSuffix:"loops/04"})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},97645:function(e,t,r){r.d(t,{Z:()=>i});var n=r("85893");r("67294");var s=r("67026");function i(e){let{children:t,hidden:r,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_Ymn6",i),hidden:r,children:t})}},58168:function(e,t,r){r.d(t,{Z:()=>x});var n=r("85893"),s=r("67294"),i=r("67026"),a=r("34718"),l=r("16550"),o=r("8714"),u=r("89207"),c=r("69413"),d=r("54510");function p(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:t,tabValues:r}=e;return r.some(e=>e.value===t)}var f=r("6735");function b(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{let t=e.currentTarget,r=o[u.indexOf(t)].value;r!==s&&(c(t),l(r))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{let r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1]}}t?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t),children:o.map(e=>{let{value:t,label:r,attributes:a}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>{u.push(e)},onKeyDown:p,onClick:d,...a,className:(0,i.Z)("tabs__item","tabItem_LNqP",a?.className,{"tabs__item--active":s===t}),children:r??t},t)})})}function v(e){let{lazy:t,children:r,selectedValue:a}=e,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){let e=l.find(e=>e.props.value===a);return e?(0,s.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:l.map((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a}))})}function m(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:n}=e,i=function(e){let{values:t,children:r}=e;return(0,s.useMemo)(()=>{let e=t??p(r).map(e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}});return!function(e){let t=(0,c.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[a,f]=(0,s.useState)(()=>(function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let n=r.find(e=>e.default)??r[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:t,tabValues:i})),[b,v]=function(e){let{queryString:t=!1,groupId:r}=e,n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(i),(0,s.useCallback)(e=>{if(!i)return;let t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})},[i,n])]}({queryString:r,groupId:n}),[m,x]=function(e){let{groupId:t}=e,r=t?`docusaurus.tab.${t}`:null,[n,i]=(0,d.Nk)(r);return[n,(0,s.useCallback)(e=>{r&&i.set(e)},[r,i])]}({groupId:n}),g=(()=>{let e=b??m;return h({value:e,tabValues:i})?e:null})();return(0,o.Z)(()=>{g&&f(g)},[g]),{selectedValue:a,selectValue:(0,s.useCallback)(e=>{if(!h({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);f(e),v(e),x(e)},[v,x,i]),tabValues:i}}(e);return(0,n.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList__CuJ"),children:[(0,n.jsx)(b,{...t,...e}),(0,n.jsx)(v,{...t,...e})]})}function x(e){let t=(0,f.Z)();return(0,n.jsx)(m,{...e,children:p(e.children)},String(t))}},17490:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(85893);r(67294);var s=r(58168),i=r(97645),a=r(53367),l=r(31705);function o(e){let{pullRequest:t,branchSuffix:r}=e;return(0,n.jsxs)(s.Z,{children:[(0,n.jsxs)(i.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,n.jsx)(l.Z,{language:"console",children:`git switch exercises/${r}`}),(0,n.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,n.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,n.jsxs)(i.Z,{value:"solution",label:"Solution",children:[(0,n.jsx)(l.Z,{language:"console",children:`git switch solutions/${r}`}),(0,n.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,n.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,n.jsxs)(i.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,n.jsxs)(a.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);