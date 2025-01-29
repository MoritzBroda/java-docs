"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["1548"],{8536:function(e,t,a){a.r(t),a.d(t,{default:()=>p,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>u,contentTitle:()=>o});var r=JSON.parse('{"id":"exercises/data-objects/data-objects01","title":"DataObjects01","description":"","source":"@site/docs/exercises/data-objects/data-objects01.mdx","sourceDirName":"exercises/data-objects","slug":"/exercises/data-objects/data-objects01","permalink":"/java-docs/pr-preview/pr-255/exercises/data-objects/data-objects01","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/data-objects/data-objects01.mdx","tags":[],"version":"current","frontMatter":{"title":"DataObjects01","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Datenobjekte","permalink":"/java-docs/pr-preview/pr-255/exercises/data-objects/"},"next":{"title":"DataObjects02","permalink":"/java-docs/pr-preview/pr-255/exercises/data-objects/data-objects02"}}'),n=a("85893"),s=a("50065"),i=a("17490");let l={title:"DataObjects01",description:""},o=void 0,c={},u=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Erstelle eine ausf\xfchrbare Klasse, welche die drei Variablen ",(0,n.jsx)(t.code,{children:"name"})," (Datentyp\n",(0,n.jsx)(t.code,{children:"String"}),"), ",(0,n.jsx)(t.code,{children:"age"})," (Datentyp ",(0,n.jsx)(t.code,{children:"int"}),") und ",(0,n.jsx)(t.code,{children:"gender"})," (Datentyp ",(0,n.jsx)(t.code,{children:"char"}),") deklariert,\ninitialisiert und \xfcber die Konsole ausgibt."]}),"\n",(0,n.jsx)(t.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"Name: Hans\nAlter: 25\nGeschlecht: m\n"})}),"\n",(0,n.jsx)(i.Z,{pullRequest:"3",branchSuffix:"data-objects/01"})]})}function p(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},97645:function(e,t,a){a.d(t,{Z:()=>s});var r=a("85893");a("67294");var n=a("67026");function s(e){let{children:t,hidden:a,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.Z)("tabItem_Ymn6",s),hidden:a,children:t})}},58168:function(e,t,a){a.d(t,{Z:()=>v});var r=a("85893"),n=a("67294"),s=a("67026"),i=a("34718"),l=a("16550"),o=a("8714"),c=a("89207"),u=a("69413"),d=a("54510");function p(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||n.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:t,tabValues:a}=e;return a.some(e=>e.value===t)}var b=a("6735");function f(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{let t=e.currentTarget,a=o[c.indexOf(t)].value;a!==n&&(u(t),l(a))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{let a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t),children:o.map(e=>{let{value:t,label:a,attributes:i}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{c.push(e)},onKeyDown:p,onClick:d,...i,className:(0,s.Z)("tabs__item","tabItem_LNqP",i?.className,{"tabs__item--active":n===t}),children:a??t},t)})})}function j(e){let{lazy:t,children:a,selectedValue:i}=e,l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){let e=l.find(e=>e.props.value===i);return e?(0,n.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i}))})}function m(e){let t=function(e){let{defaultValue:t,queryString:a=!1,groupId:r}=e,s=function(e){let{values:t,children:a}=e;return(0,n.useMemo)(()=>{let e=t??p(a).map(e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}});return!function(e){let t=(0,u.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,a])}(e),[i,b]=(0,n.useState)(()=>(function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=a.find(e=>e.default)??a[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:s})),[f,j]=function(e){let{queryString:t=!1,groupId:a}=e,r=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(s),(0,n.useCallback)(e=>{if(!s)return;let t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})},[s,r])]}({queryString:a,groupId:r}),[m,v]=function(e){let{groupId:t}=e,a=t?`docusaurus.tab.${t}`:null,[r,s]=(0,d.Nk)(a);return[r,(0,n.useCallback)(e=>{a&&s.set(e)},[a,s])]}({groupId:r}),x=(()=>{let e=f??m;return h({value:e,tabValues:s})?e:null})();return(0,o.Z)(()=>{x&&b(x)},[x]),{selectedValue:i,selectValue:(0,n.useCallback)(e=>{if(!h({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);b(e),j(e),v(e)},[j,v,s]),tabValues:s}}(e);return(0,r.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(f,{...t,...e}),(0,r.jsx)(j,{...t,...e})]})}function v(e){let t=(0,b.Z)();return(0,r.jsx)(m,{...e,children:p(e.children)},String(t))}},17490:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(85893);a(67294);var n=a(58168),s=a(97645),i=a(53367),l=a(31705);function o(e){let{pullRequest:t,branchSuffix:a}=e;return(0,r.jsxs)(n.Z,{children:[(0,r.jsxs)(s.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,r.jsx)(l.Z,{language:"console",children:`git switch exercises/${a}`}),(0,r.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(s.Z,{value:"solution",label:"Solution",children:[(0,r.jsx)(l.Z,{language:"console",children:`git switch solutions/${a}`}),(0,r.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(s.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,r.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);