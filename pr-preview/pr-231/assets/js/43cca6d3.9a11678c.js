"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["9577"],{25231:function(e,t,r){r.r(t),r.d(t,{metadata:()=>a,contentTitle:()=>u,default:()=>p,assets:()=>o,toc:()=>c,frontMatter:()=>l});var a=JSON.parse('{"id":"exercises/lambdas/lambdas05","title":"Lambdas05","description":"","source":"@site/docs/exercises/lambdas/lambdas05.mdx","sourceDirName":"exercises/lambdas","slug":"/exercises/lambdas/lambdas05","permalink":"/java-docs/pr-preview/pr-231/exercises/lambdas/lambdas05","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/lambdas/lambdas05.mdx","tags":[],"version":"current","frontMatter":{"title":"Lambdas05","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Lambdas04","permalink":"/java-docs/pr-preview/pr-231/exercises/lambdas/lambdas04"},"next":{"title":"Generische Programmierung","permalink":"/java-docs/pr-preview/pr-231/exercises/generics/"}}'),s=r("85893"),n=r("50065"),i=r("39661");let l={title:"Lambdas05",description:""},u=void 0,o={},c=[];function d(e){let t={a:"a",p:"p",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,s.jsx)(t.a,{href:"../inner-classes/inner-classes04",children:"InnerClasse04"})," so an, dass die\nKoordinatenliste mit Hilfe eines Lambda-Ausdruckes absteigend nach den X-Werten\nsortiert wird."]}),"\n",(0,s.jsx)(i.Z,{pullRequest:"74",branchSuffix:"lambdas/05"})]})}function p(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5525:function(e,t,r){r.d(t,{Z:()=>i});var a=r("85893");r("67294");var s=r("67026");let n="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(n,i),hidden:r,children:t})}},47902:function(e,t,r){r.d(t,{Z:()=>j});var a=r("85893"),s=r("67294"),n=r("67026"),i=r("69599"),l=r("16550"),u=r("32000"),o=r("4520"),c=r("38341"),d=r("76009");function p(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:t,tabValues:r}=e;return r.some(e=>e.value===t)}var f=r("7227");let m="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:u}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let t=e.currentTarget,r=u[o.indexOf(t)].value;r!==s&&(c(t),l(r))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{let r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1]}}t?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t),children:u.map(e=>{let{value:t,label:r,attributes:i}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:p,onClick:d,...i,className:(0,n.Z)("tabs__item",b,i?.className,{"tabs__item--active":s===t}),children:r??t},t)})})}function x(e){let{lazy:t,children:r,selectedValue:i}=e,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){let e=l.find(e=>e.props.value===i);return e?(0,s.cloneElement)(e,{className:(0,n.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:l.map((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==i}))})}function g(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:a}=e,n=function(e){let{values:t,children:r}=e;return(0,s.useMemo)(()=>{let e=t??p(r).map(e=>{let{props:{value:t,label:r,attributes:a,default:s}}=e;return{value:t,label:r,attributes:a,default:s}});return!function(e){let t=(0,c.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[i,f]=(0,s.useState)(()=>(function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let a=r.find(e=>e.default)??r[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:t,tabValues:n})),[m,b]=function(e){let{queryString:t=!1,groupId:r}=e,a=(0,l.k6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r}),i=(0,o._X)(n);return[i,(0,s.useCallback)(e=>{if(!n)return;let t=new URLSearchParams(a.location.search);t.set(n,e),a.replace({...a.location,search:t.toString()})},[n,a])]}({queryString:r,groupId:a}),[v,x]=function(e){var t;let{groupId:r}=e;let a=(t=r)?`docusaurus.tab.${t}`:null,[n,i]=(0,d.Nk)(a);return[n,(0,s.useCallback)(e=>{if(!!a)i.set(e)},[a,i])]}({groupId:a}),g=(()=>{let e=m??v;return h({value:e,tabValues:n})?e:null})();return(0,u.Z)(()=>{g&&f(g)},[g]),{selectedValue:i,selectValue:(0,s.useCallback)(e=>{if(!h({value:e,tabValues:n}))throw Error(`Can't select invalid tab value=${e}`);f(e),b(e),x(e)},[b,x,n]),tabValues:n}}(e);return(0,a.jsxs)("div",{className:(0,n.Z)("tabs-container",m),children:[(0,a.jsx)(v,{...t,...e}),(0,a.jsx)(x,{...t,...e})]})}function j(e){let t=(0,f.Z)();return(0,a.jsx)(g,{...e,children:p(e.children)},String(t))}},39661:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(85893);r(67294);var s=r(47902),n=r(5525),i=r(83012),l=r(45056);function u(e){let{pullRequest:t,branchSuffix:r}=e;return(0,a.jsxs)(s.Z,{children:[(0,a.jsxs)(n.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,a.jsx)(l.Z,{language:"console",children:`git switch exercises/${r}`}),(0,a.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(n.Z,{value:"solution",label:"Solution",children:[(0,a.jsx)(l.Z,{language:"console",children:`git switch solutions/${r}`}),(0,a.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(n.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,a.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);