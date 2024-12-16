"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7773"],{44947:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>u,toc:()=>c,frontMatter:()=>i});var r=JSON.parse('{"id":"exercises/inner-classes/inner-classes01","title":"InnerClasses01","description":"","source":"@site/docs/exercises/inner-classes/inner-classes01.mdx","sourceDirName":"exercises/inner-classes","slug":"/exercises/inner-classes/inner-classes01","permalink":"/java-docs/pr-preview/pr-231/exercises/inner-classes/inner-classes01","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/inner-classes/inner-classes01.mdx","tags":[],"version":"current","frontMatter":{"title":"InnerClasses01","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Innere Klassen (Inner Classes)","permalink":"/java-docs/pr-preview/pr-231/exercises/inner-classes/"},"next":{"title":"InnerClasses02","permalink":"/java-docs/pr-preview/pr-231/exercises/inner-classes/inner-classes02"}}'),a=s("85893"),t=s("50065"),l=s("39661");let i={title:"InnerClasses01",description:""},o=void 0,u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",mermaid:"mermaid",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Erstelle die Klassen ",(0,a.jsx)(n.code,{children:"House"})," und ",(0,a.jsx)(n.code,{children:"Room"})," anhand des abgebildeten\nKlassendiagramms"]}),"\n",(0,a.jsx)(n.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche ein Haus mit mehreren R\xe4umen erzeugt\nund auf der Konsole ausgibt"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,a.jsx)(n.mermaid,{value:"classDiagram\n    House *-- Room\n\n    class House {\n        -rooms: List~Room~ #123;final#125;\n        +rooms() List~Room~\n        +addRoom(room: Room) void\n        +equals(object: Object) boolean\n        +hashCode() int\n        +toString() String\n    }\n\n    class Room {\n        -name: String #123;final#125;\n        +Room(name: String)\n        +name() String\n        +equals(object: Object) boolean\n        +hashCode() int\n        +toString() String\n    }"}),"\n",(0,a.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"Wohnzimmer\nEsszimmer\nSchlafzimmer\nK\xfcche\nWC\n"})}),"\n",(0,a.jsx)(l.Z,{pullRequest:"54",branchSuffix:"inner-classes/01"})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},5525:function(e,n,s){s.d(n,{Z:()=>l});var r=s("85893");s("67294");var a=s("67026");let t="tabItem_Ymn6";function l(e){let{children:n,hidden:s,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(t,l),hidden:s,children:n})}},47902:function(e,n,s){s.d(n,{Z:()=>j});var r=s("85893"),a=s("67294"),t=s("67026"),l=s("69599"),i=s("16550"),o=s("32000"),u=s("4520"),c=s("38341"),d=s("76009");function h(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:n,tabValues:s}=e;return s.some(e=>e.value===n)}var p=s("7227");let f="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:n,block:s,selectedValue:a,selectValue:i,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{let n=e.currentTarget,s=o[u.indexOf(n)].value;s!==a&&(c(n),i(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let s=u.indexOf(e.currentTarget)+1;n=u[s]??u[0];break}case"ArrowLeft":{let s=u.indexOf(e.currentTarget)-1;n=u[s]??u[u.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":s},n),children:o.map(e=>{let{value:n,label:s,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>u.push(e),onKeyDown:h,onClick:d,...l,className:(0,t.Z)("tabs__item",b,l?.className,{"tabs__item--active":a===n}),children:s??n},n)})})}function g(e){let{lazy:n,children:s,selectedValue:l}=e,i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){let e=i.find(e=>e.props.value===l);return e?(0,a.cloneElement)(e,{className:(0,t.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function x(e){let n=function(e){let{defaultValue:n,queryString:s=!1,groupId:r}=e,t=function(e){let{values:n,children:s}=e;return(0,a.useMemo)(()=>{let e=n??h(s).map(e=>{let{props:{value:n,label:s,attributes:r,default:a}}=e;return{value:n,label:s,attributes:r,default:a}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,s])}(e),[l,p]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:s}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=s.find(e=>e.default)??s[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:t})),[f,b]=function(e){let{queryString:n=!1,groupId:s}=e,r=(0,i.k6)(),t=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s}),l=(0,u._X)(t);return[l,(0,a.useCallback)(e=>{if(!t)return;let n=new URLSearchParams(r.location.search);n.set(t,e),r.replace({...r.location,search:n.toString()})},[t,r])]}({queryString:s,groupId:r}),[v,g]=function(e){var n;let{groupId:s}=e;let r=(n=s)?`docusaurus.tab.${n}`:null,[t,l]=(0,d.Nk)(r);return[t,(0,a.useCallback)(e=>{if(!!r)l.set(e)},[r,l])]}({groupId:r}),x=(()=>{let e=f??v;return m({value:e,tabValues:t})?e:null})();return(0,o.Z)(()=>{x&&p(x)},[x]),{selectedValue:l,selectValue:(0,a.useCallback)(e=>{if(!m({value:e,tabValues:t}))throw Error(`Can't select invalid tab value=${e}`);p(e),b(e),g(e)},[b,g,t]),tabValues:t}}(e);return(0,r.jsxs)("div",{className:(0,t.Z)("tabs-container",f),children:[(0,r.jsx)(v,{...n,...e}),(0,r.jsx)(g,{...n,...e})]})}function j(e){let n=(0,p.Z)();return(0,r.jsx)(x,{...e,children:h(e.children)},String(n))}},39661:function(e,n,s){s.d(n,{Z:function(){return o}});var r=s(85893);s(67294);var a=s(47902),t=s(5525),l=s(83012),i=s(45056);function o(e){let{pullRequest:n,branchSuffix:s}=e;return(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(t.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,r.jsx)(i.Z,{language:"console",children:`git switch exercises/${s}`}),(0,r.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${s}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(t.Z,{value:"solution",label:"Solution",children:[(0,r.jsx)(i.Z,{language:"console",children:`git switch solutions/${s}`}),(0,r.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${s}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(t.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,r.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);