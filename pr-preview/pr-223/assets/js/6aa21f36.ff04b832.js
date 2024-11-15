"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["6493"],{12552:function(e,r,t){t.r(r),t.d(r,{metadata:()=>n,contentTitle:()=>o,default:()=>p,assets:()=>u,toc:()=>c,frontMatter:()=>i});var n=JSON.parse('{"id":"exercises/oo/oo04","title":"OO04","description":"","source":"@site/docs/exercises/oo/oo04.mdx","sourceDirName":"exercises/oo","slug":"/exercises/oo/oo04","permalink":"/java-docs/pr-preview/pr-223/exercises/oo/oo04","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/oo/oo04.mdx","tags":[],"version":"current","frontMatter":{"title":"OO04","description":""},"sidebar":"exercisesSidebar","previous":{"title":"OO03","permalink":"/java-docs/pr-preview/pr-223/exercises/oo/oo03"},"next":{"title":"OO05","permalink":"/java-docs/pr-preview/pr-223/exercises/oo/oo05"}}'),s=t("85893"),a=t("50065"),l=t("39661");let i={title:"OO04",description:""},o=void 0,u={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}];function d(e){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche 5 W\xfcrfel erzeugt. Es soll einmal mit\njedem W\xfcrfel gew\xfcrfelt und f\xfcr jeden W\xfcrfel das Ergebnis des Wurfes ausgegeben\nwerden."}),"\n",(0,s.jsx)(r.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-console",children:"ID - W\xfcrfelwert\n1 - 1\n2 - 1\n3 - 4\n4 - 5\n5 - 2\n"})}),"\n",(0,s.jsx)(r.h2,{id:"hinweis",children:"Hinweis"}),"\n",(0,s.jsxs)(r.p,{children:["Verwende die Klasse ",(0,s.jsx)(r.code,{children:"Dice"})," aus \xdcbungsaufgabe ",(0,s.jsx)(r.a,{href:"oo03",children:"OO03"}),"."]}),"\n",(0,s.jsx)(l.Z,{pullRequest:"26",branchSuffix:"oo/04"})]})}function p(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5525:function(e,r,t){t.d(r,{Z:()=>l});var n=t("85893");t("67294");var s=t("67026");let a="tabItem_Ymn6";function l(e){let{children:r,hidden:t,className:l}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a,l),hidden:t,children:r})}},47902:function(e,r,t){t.d(r,{Z:()=>j});var n=t("85893"),s=t("67294"),a=t("67026"),l=t("69599"),i=t("16550"),o=t("32000"),u=t("4520"),c=t("38341"),d=t("76009");function p(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:r,tabValues:t}=e;return t.some(e=>e.value===r)}var f=t("7227");let b="tabList__CuJ",v="tabItem_LNqP";function m(e){let{className:r,block:t,selectedValue:s,selectValue:i,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{let r=e.currentTarget,t=o[u.indexOf(r)].value;t!==s&&(c(r),i(t))},p=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=u.indexOf(e.currentTarget)+1;r=u[t]??u[0];break}case"ArrowLeft":{let t=u.indexOf(e.currentTarget)-1;r=u[t]??u[u.length-1]}}r?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},r),children:o.map(e=>{let{value:r,label:t,attributes:l}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>u.push(e),onKeyDown:p,onClick:d,...l,className:(0,a.Z)("tabs__item",v,l?.className,{"tabs__item--active":s===r}),children:t??r},r)})})}function x(e){let{lazy:r,children:t,selectedValue:l}=e,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){let e=i.find(e=>e.props.value===l);return e?(0,s.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:i.map((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==l}))})}function g(e){let r=function(e){let{defaultValue:r,queryString:t=!1,groupId:n}=e,a=function(e){let{values:r,children:t}=e;return(0,s.useMemo)(()=>{let e=r??p(t).map(e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}});return!function(e){let r=(0,c.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,t])}(e),[l,f]=(0,s.useState)(()=>(function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let n=t.find(e=>e.default)??t[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:r,tabValues:a})),[b,v]=function(e){let{queryString:r=!1,groupId:t}=e,n=(0,i.k6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t}),l=(0,u._X)(a);return[l,(0,s.useCallback)(e=>{if(!a)return;let r=new URLSearchParams(n.location.search);r.set(a,e),n.replace({...n.location,search:r.toString()})},[a,n])]}({queryString:t,groupId:n}),[m,x]=function(e){var r;let{groupId:t}=e;let n=(r=t)?`docusaurus.tab.${r}`:null,[a,l]=(0,d.Nk)(n);return[a,(0,s.useCallback)(e=>{if(!!n)l.set(e)},[n,l])]}({groupId:n}),g=(()=>{let e=b??m;return h({value:e,tabValues:a})?e:null})();return(0,o.Z)(()=>{g&&f(g)},[g]),{selectedValue:l,selectValue:(0,s.useCallback)(e=>{if(!h({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);f(e),v(e),x(e)},[v,x,a]),tabValues:a}}(e);return(0,n.jsxs)("div",{className:(0,a.Z)("tabs-container",b),children:[(0,n.jsx)(m,{...r,...e}),(0,n.jsx)(x,{...r,...e})]})}function j(e){let r=(0,f.Z)();return(0,n.jsx)(g,{...e,children:p(e.children)},String(r))}},39661:function(e,r,t){t.d(r,{Z:function(){return o}});var n=t(85893);t(67294);var s=t(47902),a=t(5525),l=t(83012),i=t(45056);function o(e){let{pullRequest:r,branchSuffix:t}=e;return(0,n.jsxs)(s.Z,{children:[(0,n.jsxs)(a.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,n.jsx)(i.Z,{language:"console",children:`git switch exercises/${t}`}),(0,n.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,n.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,n.jsxs)(a.Z,{value:"solution",label:"Solution",children:[(0,n.jsx)(i.Z,{language:"console",children:`git switch solutions/${t}`}),(0,n.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,n.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,n.jsxs)(a.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,n.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);