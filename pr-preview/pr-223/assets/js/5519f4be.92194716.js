"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["845"],{68198:function(e,a,n){n.r(a),n.d(a,{metadata:()=>t,contentTitle:()=>u,default:()=>p,assets:()=>o,toc:()=>c,frontMatter:()=>l});var t=JSON.parse('{"id":"exercises/java-api/java-api01","title":"JavaAPI01","description":"","source":"@site/docs/exercises/java-api/java-api01.mdx","sourceDirName":"exercises/java-api","slug":"/exercises/java-api/java-api01","permalink":"/java-docs/pr-preview/pr-223/exercises/java-api/java-api01","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/java-api/java-api01.mdx","tags":[],"version":"current","frontMatter":{"title":"JavaAPI01","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Die Java API","permalink":"/java-docs/pr-preview/pr-223/exercises/java-api/"},"next":{"title":"JavaAPI02","permalink":"/java-docs/pr-preview/pr-223/exercises/java-api/java-api02"}}'),r=n("85893"),i=n("50065"),s=n("39661");let l={title:"JavaAPI01",description:""},u=void 0,o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}];function d(e){let a={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche den Sinus von 0.0 bis 1.0 in\nZehnerschritten tabellarisch auf der Konsole ausgibt."}),"\n",(0,r.jsx)(a.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-console",children:"x = 0.0, sin(x) = 0.0\nx = 0.1, sin(x) = 0.1\nx = 0.2, sin(x) = 0.2\nx = 0.3, sin(x) = 0.3\nx = 0.4, sin(x) = 0.4\nx = 0.5, sin(x) = 0.5\nx = 0.6, sin(x) = 0.6\nx = 0.7, sin(x) = 0.6\nx = 0.8, sin(x) = 0.7\nx = 0.9, sin(x) = 0.8\nx = 1.0, sin(x) = 0.8\n"})}),"\n",(0,r.jsx)(a.h2,{id:"hinweis",children:"Hinweis"}),"\n",(0,r.jsxs)(a.p,{children:["Die Klasse ",(0,r.jsx)(a.code,{children:"Math"})," stellt f\xfcr die Sinus-Berechnung eine passende Methode zur\nVerf\xfcgung."]}),"\n",(0,r.jsx)(s.Z,{pullRequest:"30",branchSuffix:"java-api/01"})]})}function p(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5525:function(e,a,n){n.d(a,{Z:()=>s});var t=n("85893");n("67294");var r=n("67026");let i="tabItem_Ymn6";function s(e){let{children:a,hidden:n,className:s}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:n,children:a})}},47902:function(e,a,n){n.d(a,{Z:()=>g});var t=n("85893"),r=n("67294"),i=n("67026"),s=n("69599"),l=n("16550"),u=n("32000"),o=n("4520"),c=n("38341"),d=n("76009");function p(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:a,tabValues:n}=e;return n.some(e=>e.value===a)}var v=n("7227");let f="tabList__CuJ",x="tabItem_LNqP";function b(e){let{className:a,block:n,selectedValue:r,selectValue:l,tabValues:u}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{let a=e.currentTarget,n=u[o.indexOf(a)].value;n!==r&&(c(a),l(n))},p=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=o.indexOf(e.currentTarget)+1;a=o[n]??o[0];break}case"ArrowLeft":{let n=o.indexOf(e.currentTarget)-1;a=o[n]??o[o.length-1]}}a?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},a),children:u.map(e=>{let{value:a,label:n,attributes:s}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:e=>o.push(e),onKeyDown:p,onClick:d,...s,className:(0,i.Z)("tabs__item",x,s?.className,{"tabs__item--active":r===a}),children:n??a},a)})})}function j(e){let{lazy:a,children:n,selectedValue:s}=e,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){let e=l.find(e=>e.props.value===s);return e?(0,r.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:l.map((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==s}))})}function m(e){let a=function(e){let{defaultValue:a,queryString:n=!1,groupId:t}=e,i=function(e){let{values:a,children:n}=e;return(0,r.useMemo)(()=>{let e=a??p(n).map(e=>{let{props:{value:a,label:n,attributes:t,default:r}}=e;return{value:a,label:n,attributes:t,default:r}});return!function(e){let a=(0,c.lx)(e,(e,a)=>e.value===a.value);if(a.length>0)throw Error(`Docusaurus error: Duplicate values "${a.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[a,n])}(e),[s,v]=(0,r.useState)(()=>(function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}let t=n.find(e=>e.default)??n[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:a,tabValues:i})),[f,x]=function(e){let{queryString:a=!1,groupId:n}=e,t=(0,l.k6)(),i=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n}),s=(0,o._X)(i);return[s,(0,r.useCallback)(e=>{if(!i)return;let a=new URLSearchParams(t.location.search);a.set(i,e),t.replace({...t.location,search:a.toString()})},[i,t])]}({queryString:n,groupId:t}),[b,j]=function(e){var a;let{groupId:n}=e;let t=(a=n)?`docusaurus.tab.${a}`:null,[i,s]=(0,d.Nk)(t);return[i,(0,r.useCallback)(e=>{if(!!t)s.set(e)},[t,s])]}({groupId:t}),m=(()=>{let e=f??b;return h({value:e,tabValues:i})?e:null})();return(0,u.Z)(()=>{m&&v(m)},[m]),{selectedValue:s,selectValue:(0,r.useCallback)(e=>{if(!h({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);v(e),x(e),j(e)},[x,j,i]),tabValues:i}}(e);return(0,t.jsxs)("div",{className:(0,i.Z)("tabs-container",f),children:[(0,t.jsx)(b,{...a,...e}),(0,t.jsx)(j,{...a,...e})]})}function g(e){let a=(0,v.Z)();return(0,t.jsx)(m,{...e,children:p(e.children)},String(a))}},39661:function(e,a,n){n.d(a,{Z:function(){return u}});var t=n(85893);n(67294);var r=n(47902),i=n(5525),s=n(83012),l=n(45056);function u(e){let{pullRequest:a,branchSuffix:n}=e;return(0,t.jsxs)(r.Z,{children:[(0,t.jsxs)(i.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,t.jsx)(l.Z,{language:"console",children:`git switch exercises/${n}`}),(0,t.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(i.Z,{value:"solution",label:"Solution",children:[(0,t.jsx)(l.Z,{language:"console",children:`git switch solutions/${n}`}),(0,t.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(i.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,t.jsxs)(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`,children:["PR#",a]})]})]})}}}]);