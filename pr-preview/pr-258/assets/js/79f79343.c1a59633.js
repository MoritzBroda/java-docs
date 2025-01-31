"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7168"],{46481:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>u});var t=JSON.parse('{"id":"exercises/arrays/arrays03","title":"Arrays03","description":"","source":"@site/docs/exercises/arrays/arrays03.mdx","sourceDirName":"exercises/arrays","slug":"/exercises/arrays/arrays03","permalink":"/java-docs/pr-preview/pr-258/exercises/arrays/arrays03","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/arrays/arrays03.mdx","tags":[],"version":"current","frontMatter":{"title":"Arrays03","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Arrays02","permalink":"/java-docs/pr-preview/pr-258/exercises/arrays/arrays02"},"next":{"title":"Arrays04","permalink":"/java-docs/pr-preview/pr-258/exercises/arrays/arrays04"}}'),a=n("85893"),s=n("50065"),i=n("17490");let l={title:"Arrays03",description:""},u=void 0,o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweise",id:"hinweise",level:2}];function d(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"Erstelle eine ausf\xfchrbare Klasse zum Berechnen von ISBN-Pr\xfcfziffern."}),"\n",(0,a.jsx)(r.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-console",children:"Gib bitte eine ISBN ohne Pr\xfcfziffer ein: 978376572781\nErgebnis: Die Pr\xfcfziffer lautet 8\n"})}),"\n",(0,a.jsx)(r.h2,{id:"hinweise",children:"Hinweise"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["Die Methode ",(0,a.jsx)(r.code,{children:"char charAt(index: int)"})," der Klasse ",(0,a.jsx)(r.code,{children:"String"})," gibt das Zeichen mit\ndem Index der eingehenden Zahl zur\xfcck"]}),"\n",(0,a.jsxs)(r.li,{children:["Die statische Methode ",(0,a.jsx)(r.code,{children:"int getNumericValue(ch: char)"})," der Klasse ",(0,a.jsx)(r.code,{children:"Character"}),"\ngibt den ganzzahligen Wert des eingehenden Zeichens zur\xfcck"]}),"\n",(0,a.jsx)(r.li,{children:"Eine ISBN besteht aus 13 Ziffern (die 13. Ziffer stellt die Pr\xfcfziffer dar)"}),"\n",(0,a.jsxs)(r.li,{children:["Die Formel f\xfcr die Berechnung der Pr\xfcfziffer findest Du unter anderem\n",(0,a.jsx)(r.a,{href:"https://de.wikipedia.org/wiki/Internationale_Standardbuchnummer",children:"hier"})]}),"\n"]}),"\n",(0,a.jsx)(i.Z,{pullRequest:"20",branchSuffix:"arrays/03"})]})}function h(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},97645:function(e,r,n){n.d(r,{Z:()=>s});var t=n("85893");n("67294");var a=n("67026");function s(e){let{children:r,hidden:n,className:s}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_Ymn6",s),hidden:n,children:r})}},58168:function(e,r,n){n.d(r,{Z:()=>v});var t=n("85893"),a=n("67294"),s=n("67026"),i=n("34718"),l=n("16550"),u=n("8714"),o=n("89207"),c=n("69413"),d=n("54510");function h(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:r,tabValues:n}=e;return n.some(e=>e.value===r)}var f=n("6735");function x(e){let{className:r,block:n,selectedValue:a,selectValue:l,tabValues:u}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let r=e.currentTarget,n=u[o.indexOf(r)].value;n!==a&&(c(r),l(n))},h=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=o.indexOf(e.currentTarget)+1;r=o[n]??o[0];break}case"ArrowLeft":{let n=o.indexOf(e.currentTarget)-1;r=o[n]??o[o.length-1]}}r?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},r),children:u.map(e=>{let{value:r,label:n,attributes:i}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>{o.push(e)},onKeyDown:h,onClick:d,...i,className:(0,s.Z)("tabs__item","tabItem_LNqP",i?.className,{"tabs__item--active":a===r}),children:n??r},r)})})}function b(e){let{lazy:r,children:n,selectedValue:i}=e,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){let e=l.find(e=>e.props.value===i);return e?(0,a.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:l.map((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==i}))})}function m(e){let r=function(e){let{defaultValue:r,queryString:n=!1,groupId:t}=e,s=function(e){let{values:r,children:n}=e;return(0,a.useMemo)(()=>{let e=r??h(n).map(e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}});return!function(e){let r=(0,c.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,n])}(e),[i,f]=(0,a.useState)(()=>(function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let t=n.find(e=>e.default)??n[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:r,tabValues:s})),[x,b]=function(e){let{queryString:r=!1,groupId:n}=e,t=(0,l.k6)(),s=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,o._X)(s),(0,a.useCallback)(e=>{if(!s)return;let r=new URLSearchParams(t.location.search);r.set(s,e),t.replace({...t.location,search:r.toString()})},[s,t])]}({queryString:n,groupId:t}),[m,v]=function(e){let{groupId:r}=e,n=r?`docusaurus.tab.${r}`:null,[t,s]=(0,d.Nk)(n);return[t,(0,a.useCallback)(e=>{n&&s.set(e)},[n,s])]}({groupId:t}),g=(()=>{let e=x??m;return p({value:e,tabValues:s})?e:null})();return(0,u.Z)(()=>{g&&f(g)},[g]),{selectedValue:i,selectValue:(0,a.useCallback)(e=>{if(!p({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);f(e),b(e),v(e)},[b,v,s]),tabValues:s}}(e);return(0,t.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList__CuJ"),children:[(0,t.jsx)(x,{...r,...e}),(0,t.jsx)(b,{...r,...e})]})}function v(e){let r=(0,f.Z)();return(0,t.jsx)(m,{...e,children:h(e.children)},String(r))}},17490:function(e,r,n){n.d(r,{Z:function(){return u}});var t=n(85893);n(67294);var a=n(58168),s=n(97645),i=n(53367),l=n(31705);function u(e){let{pullRequest:r,branchSuffix:n}=e;return(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(s.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,t.jsx)(l.Z,{language:"console",children:`git switch exercises/${n}`}),(0,t.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(s.Z,{value:"solution",label:"Solution",children:[(0,t.jsx)(l.Z,{language:"console",children:`git switch solutions/${n}`}),(0,t.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(s.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,t.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);