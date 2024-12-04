"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["1382"],{20882:function(e,a,r){r.r(a),r.d(a,{metadata:()=>t,contentTitle:()=>u,default:()=>p,assets:()=>o,toc:()=>c,frontMatter:()=>l});var t=JSON.parse('{"id":"exercises/java-api/java-api04","title":"JavaAPI04","description":"","source":"@site/docs/exercises/java-api/java-api04.mdx","sourceDirName":"exercises/java-api","slug":"/exercises/java-api/java-api04","permalink":"/java-docs/pr-preview/pr-234/exercises/java-api/java-api04","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/java-api/java-api04.mdx","tags":[],"version":"current","frontMatter":{"title":"JavaAPI04","description":""},"sidebar":"exercisesSidebar","previous":{"title":"JavaAPI03","permalink":"/java-docs/pr-preview/pr-234/exercises/java-api/java-api03"},"next":{"title":"Aufz\xe4hlungen (Enumerations)","permalink":"/java-docs/pr-preview/pr-234/exercises/enumerations/"}}'),n=r("85893"),i=r("50065"),s=r("39661");let l={title:"JavaAPI04",description:""},u=void 0,o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}];function d(e){let a={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche den vorzeichenfreien Dezimalwert einer\neingegebenen negativen short-Zahl (-1 bis -32.768) berechnet und ausgibt."}),"\n",(0,n.jsx)(a.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-console",children:"Gib bitte einen Wert zwischen -1 und -32.768 ein: -2854\nErgebnis: Der vorzeichenfreie Dezimalwert betr\xe4gt 62682\n"})}),"\n",(0,n.jsx)(a.h2,{id:"hinweis",children:"Hinweis"}),"\n",(0,n.jsxs)(a.p,{children:["Die Klasse ",(0,n.jsx)(a.code,{children:"Short"})," stellt f\xfcr die R\xfcckgabe des vorzeichenfreien Dezimalwerts\neine passende Methode zur Verf\xfcgung."]}),"\n",(0,n.jsx)(s.Z,{pullRequest:"33",branchSuffix:"java-api/04"})]})}function p(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5525:function(e,a,r){r.d(a,{Z:()=>s});var t=r("85893");r("67294");var n=r("67026");let i="tabItem_Ymn6";function s(e){let{children:a,hidden:r,className:s}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.Z)(i,s),hidden:r,children:a})}},47902:function(e,a,r){r.d(a,{Z:()=>x});var t=r("85893"),n=r("67294"),i=r("67026"),s=r("69599"),l=r("16550"),u=r("32000"),o=r("4520"),c=r("38341"),d=r("76009");function p(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||n.isValidElement(e)&&function(e){let{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:a,tabValues:r}=e;return r.some(e=>e.value===a)}var v=r("7227");let f="tabList__CuJ",b="tabItem_LNqP";function m(e){let{className:a,block:r,selectedValue:n,selectValue:l,tabValues:u}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{let a=e.currentTarget,r=u[o.indexOf(a)].value;r!==n&&(c(a),l(r))},p=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=o.indexOf(e.currentTarget)+1;a=o[r]??o[0];break}case"ArrowLeft":{let r=o.indexOf(e.currentTarget)-1;a=o[r]??o[o.length-1]}}a?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},a),children:u.map(e=>{let{value:a,label:r,attributes:s}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>o.push(e),onKeyDown:p,onClick:d,...s,className:(0,i.Z)("tabs__item",b,s?.className,{"tabs__item--active":n===a}),children:r??a},a)})})}function j(e){let{lazy:a,children:r,selectedValue:s}=e,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){let e=l.find(e=>e.props.value===s);return e?(0,n.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:l.map((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==s}))})}function g(e){let a=function(e){let{defaultValue:a,queryString:r=!1,groupId:t}=e,i=function(e){let{values:a,children:r}=e;return(0,n.useMemo)(()=>{let e=a??p(r).map(e=>{let{props:{value:a,label:r,attributes:t,default:n}}=e;return{value:a,label:r,attributes:t,default:n}});return!function(e){let a=(0,c.lx)(e,(e,a)=>e.value===a.value);if(a.length>0)throw Error(`Docusaurus error: Duplicate values "${a.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[a,r])}(e),[s,v]=(0,n.useState)(()=>(function(e){let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:a,tabValues:i})),[f,b]=function(e){let{queryString:a=!1,groupId:r}=e,t=(0,l.k6)(),i=function(e){let{queryString:a=!1,groupId:r}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:a,groupId:r}),s=(0,o._X)(i);return[s,(0,n.useCallback)(e=>{if(!i)return;let a=new URLSearchParams(t.location.search);a.set(i,e),t.replace({...t.location,search:a.toString()})},[i,t])]}({queryString:r,groupId:t}),[m,j]=function(e){var a;let{groupId:r}=e;let t=(a=r)?`docusaurus.tab.${a}`:null,[i,s]=(0,d.Nk)(t);return[i,(0,n.useCallback)(e=>{if(!!t)s.set(e)},[t,s])]}({groupId:t}),g=(()=>{let e=f??m;return h({value:e,tabValues:i})?e:null})();return(0,u.Z)(()=>{g&&v(g)},[g]),{selectedValue:s,selectValue:(0,n.useCallback)(e=>{if(!h({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);v(e),b(e),j(e)},[b,j,i]),tabValues:i}}(e);return(0,t.jsxs)("div",{className:(0,i.Z)("tabs-container",f),children:[(0,t.jsx)(m,{...a,...e}),(0,t.jsx)(j,{...a,...e})]})}function x(e){let a=(0,v.Z)();return(0,t.jsx)(g,{...e,children:p(e.children)},String(a))}},39661:function(e,a,r){r.d(a,{Z:function(){return u}});var t=r(85893);r(67294);var n=r(47902),i=r(5525),s=r(83012),l=r(45056);function u(e){let{pullRequest:a,branchSuffix:r}=e;return(0,t.jsxs)(n.Z,{children:[(0,t.jsxs)(i.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,t.jsx)(l.Z,{language:"console",children:`git switch exercises/${r}`}),(0,t.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(i.Z,{value:"solution",label:"Solution",children:[(0,t.jsx)(l.Z,{language:"console",children:`git switch solutions/${r}`}),(0,t.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(i.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,t.jsxs)(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`,children:["PR#",a]})]})]})}}}]);