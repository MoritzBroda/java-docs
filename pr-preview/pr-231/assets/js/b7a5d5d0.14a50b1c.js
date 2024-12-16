"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7733"],{9531:function(e,r,t){t.r(r),t.d(r,{metadata:()=>n,contentTitle:()=>o,default:()=>p,assets:()=>u,toc:()=>c,frontMatter:()=>l});var n=JSON.parse('{"id":"exercises/loops/loops08","title":"Loops08","description":"","source":"@site/docs/exercises/loops/loops08.mdx","sourceDirName":"exercises/loops","slug":"/exercises/loops/loops08","permalink":"/java-docs/pr-preview/pr-231/exercises/loops/loops08","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/loops/loops08.mdx","tags":[],"version":"current","frontMatter":{"title":"Loops08","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Loops07","permalink":"/java-docs/pr-preview/pr-231/exercises/loops/loops07"},"next":{"title":"Felder (Arrays)","permalink":"/java-docs/pr-preview/pr-231/exercises/arrays/"}}'),s=t("85893"),a=t("50065"),i=t("39661");let l={title:"Loops08",description:""},o=void 0,u={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}];function d(e){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["Erstelle eine ausf\xfchrbare Klasse, welche anhand von Startkapital\n(K",(0,s.jsx)("sub",{children:"0"}),"), Prozentsatz (p) und Anzahl Jahre (n) das Endkapital\n(K",(0,s.jsx)("sub",{children:"n"}),") berechnet."]}),"\n",(0,s.jsx)(r.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-console",children:"Gib bitte das Startkapital ein (in Euro): 10000\nGib bitte den Prozentsatz ein: 3,3\nGib bitte die Anzahl Jahre ein: 5\nErgebnis: Das Endkapital betr\xe4gt 11762 Euro\nWillst Du eine weitere Zinsrechnung durchf\xfchren (true, false)?: false\n"})}),"\n",(0,s.jsx)(r.h2,{id:"hinweis",children:"Hinweis"}),"\n",(0,s.jsxs)(r.p,{children:["Die Formel f\xfcr die Zinseszins-Berechnung findest Du unter anderem\n",(0,s.jsx)(r.a,{href:"https://de.wikipedia.org/wiki/Zinseszins",children:"hier"}),"."]}),"\n",(0,s.jsx)(i.Z,{pullRequest:"77",branchSuffix:"loops/08"})]})}function p(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5525:function(e,r,t){t.d(r,{Z:()=>i});var n=t("85893");t("67294");var s=t("67026");let a="tabItem_Ymn6";function i(e){let{children:r,hidden:t,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a,i),hidden:t,children:r})}},47902:function(e,r,t){t.d(r,{Z:()=>j});var n=t("85893"),s=t("67294"),a=t("67026"),i=t("69599"),l=t("16550"),o=t("32000"),u=t("4520"),c=t("38341"),d=t("76009");function p(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:r,tabValues:t}=e;return t.some(e=>e.value===r)}var f=t("7227");let b="tabList__CuJ",v="tabItem_LNqP";function m(e){let{className:r,block:t,selectedValue:s,selectValue:l,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let r=e.currentTarget,t=o[u.indexOf(r)].value;t!==s&&(c(r),l(t))},p=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=u.indexOf(e.currentTarget)+1;r=u[t]??u[0];break}case"ArrowLeft":{let t=u.indexOf(e.currentTarget)-1;r=u[t]??u[u.length-1]}}r?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},r),children:o.map(e=>{let{value:r,label:t,attributes:i}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>u.push(e),onKeyDown:p,onClick:d,...i,className:(0,a.Z)("tabs__item",v,i?.className,{"tabs__item--active":s===r}),children:t??r},r)})})}function x(e){let{lazy:r,children:t,selectedValue:i}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){let e=l.find(e=>e.props.value===i);return e?(0,s.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:l.map((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==i}))})}function g(e){let r=function(e){let{defaultValue:r,queryString:t=!1,groupId:n}=e,a=function(e){let{values:r,children:t}=e;return(0,s.useMemo)(()=>{let e=r??p(t).map(e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}});return!function(e){let r=(0,c.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,t])}(e),[i,f]=(0,s.useState)(()=>(function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let n=t.find(e=>e.default)??t[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:r,tabValues:a})),[b,v]=function(e){let{queryString:r=!1,groupId:t}=e,n=(0,l.k6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t}),i=(0,u._X)(a);return[i,(0,s.useCallback)(e=>{if(!a)return;let r=new URLSearchParams(n.location.search);r.set(a,e),n.replace({...n.location,search:r.toString()})},[a,n])]}({queryString:t,groupId:n}),[m,x]=function(e){var r;let{groupId:t}=e;let n=(r=t)?`docusaurus.tab.${r}`:null,[a,i]=(0,d.Nk)(n);return[a,(0,s.useCallback)(e=>{if(!!n)i.set(e)},[n,i])]}({groupId:n}),g=(()=>{let e=b??m;return h({value:e,tabValues:a})?e:null})();return(0,o.Z)(()=>{g&&f(g)},[g]),{selectedValue:i,selectValue:(0,s.useCallback)(e=>{if(!h({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);f(e),v(e),x(e)},[v,x,a]),tabValues:a}}(e);return(0,n.jsxs)("div",{className:(0,a.Z)("tabs-container",b),children:[(0,n.jsx)(m,{...r,...e}),(0,n.jsx)(x,{...r,...e})]})}function j(e){let r=(0,f.Z)();return(0,n.jsx)(g,{...e,children:p(e.children)},String(r))}},39661:function(e,r,t){t.d(r,{Z:function(){return o}});var n=t(85893);t(67294);var s=t(47902),a=t(5525),i=t(83012),l=t(45056);function o(e){let{pullRequest:r,branchSuffix:t}=e;return(0,n.jsxs)(s.Z,{children:[(0,n.jsxs)(a.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,n.jsx)(l.Z,{language:"console",children:`git switch exercises/${t}`}),(0,n.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,n.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,n.jsxs)(a.Z,{value:"solution",label:"Solution",children:[(0,n.jsx)(l.Z,{language:"console",children:`git switch solutions/${t}`}),(0,n.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,n.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,n.jsxs)(a.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,n.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);