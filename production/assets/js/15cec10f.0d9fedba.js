"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["401"],{27791:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>u,toc:()=>c,frontMatter:()=>l});var r=JSON.parse('{"id":"exercises/generics/generics02","title":"Generics02","description":"","source":"@site/docs/exercises/generics/generics02.mdx","sourceDirName":"exercises/generics","slug":"/exercises/generics/generics02","permalink":"/java-docs/production/exercises/generics/generics02","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/generics/generics02.mdx","tags":[],"version":"current","frontMatter":{"title":"Generics02","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Generics01","permalink":"/java-docs/production/exercises/generics/generics01"},"next":{"title":"Generics03","permalink":"/java-docs/production/exercises/generics/generics03"}}'),s=n("85893"),a=n("50065"),i=n("39661");let l={title:"Generics02",description:""},o=void 0,u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",mermaid:"mermaid",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Passe die Klasse ",(0,s.jsx)(t.code,{children:"Crate"})," aus \xdcbungsaufgabe ",(0,s.jsx)(t.a,{href:"generics01",children:"Generics01"})," anhand des\nabgebildeten Klassendiagramms an"]}),"\n",(0,s.jsxs)(t.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe ",(0,s.jsx)(t.a,{href:"generics01",children:"Generics01"})," so an,\ndass sie fehlerfrei ausgef\xfchrt werden kann"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(t.mermaid,{value:"classDiagram\n    Bottle <|-- BeerBottle : extends\n    Bottle <|-- WineBottle : extends\n\n    class Crate~T extends Bottle~ {\n        -box1: T\n        -box2: T\n        -box3: T\n        -box4: T\n        -box5: T\n        -box6: T\n        +insertBottle(bottle: T, box: int) void\n        +takeBottle(box: int) T\n    }\n\n    class Bottle {\n        <<abstract>>\n    }\n\n    class BeerBottle {\n        +chugALug() void\n    }\n\n    class WineBottle {\n\n    }"}),"\n",(0,s.jsx)(i.Z,{pullRequest:"53",branchSuffix:"generics/02"})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5525:function(e,t,n){n.d(t,{Z:()=>i});var r=n("85893");n("67294");var s=n("67026");let a="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a,i),hidden:n,children:t})}},47902:function(e,t,n){n.d(t,{Z:()=>j});var r=n("85893"),s=n("67294"),a=n("67026"),i=n("69599"),l=n("16550"),o=n("32000"),u=n("4520"),c=n("38341"),d=n("76009");function h(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var f=n("7227");let m="tabList__CuJ",g="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let t=e.currentTarget,n=o[u.indexOf(t)].value;n!==s&&(c(t),l(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{let n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:o.map(e=>{let{value:t,label:n,attributes:i}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>u.push(e),onKeyDown:h,onClick:d,...i,className:(0,a.Z)("tabs__item",g,i?.className,{"tabs__item--active":s===t}),children:n??t},t)})})}function x(e){let{lazy:t,children:n,selectedValue:i}=e,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=l.find(e=>e.props.value===i);return e?(0,s.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==i}))})}function v(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:r}=e,a=function(e){let{values:t,children:n}=e;return(0,s.useMemo)(()=>{let e=t??h(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}});return!function(e){let t=(0,c.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[i,f]=(0,s.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:a})),[m,g]=function(e){let{queryString:t=!1,groupId:n}=e,r=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n}),i=(0,u._X)(a);return[i,(0,s.useCallback)(e=>{if(!a)return;let t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})},[a,r])]}({queryString:n,groupId:r}),[b,x]=function(e){var t;let{groupId:n}=e;let r=(t=n)?`docusaurus.tab.${t}`:null,[a,i]=(0,d.Nk)(r);return[a,(0,s.useCallback)(e=>{if(!!r)i.set(e)},[r,i])]}({groupId:r}),v=(()=>{let e=m??b;return p({value:e,tabValues:a})?e:null})();return(0,o.Z)(()=>{v&&f(v)},[v]),{selectedValue:i,selectValue:(0,s.useCallback)(e=>{if(!p({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);f(e),g(e),x(e)},[g,x,a]),tabValues:a}}(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container",m),children:[(0,r.jsx)(b,{...t,...e}),(0,r.jsx)(x,{...t,...e})]})}function j(e){let t=(0,f.Z)();return(0,r.jsx)(v,{...e,children:h(e.children)},String(t))}},39661:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(85893);n(67294);var s=n(47902),a=n(5525),i=n(83012),l=n(45056);function o(e){let{pullRequest:t,branchSuffix:n}=e;return(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(a.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,r.jsx)(l.Z,{language:"console",children:`git switch exercises/${n}`}),(0,r.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(a.Z,{value:"solution",label:"Solution",children:[(0,r.jsx)(l.Z,{language:"console",children:`git switch solutions/${n}`}),(0,r.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(a.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,r.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);