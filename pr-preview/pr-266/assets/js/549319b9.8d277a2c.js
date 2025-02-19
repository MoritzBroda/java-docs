"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["4105"],{87344:function(e,s,n){n.r(s),n.d(s,{default:()=>p,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>u});var r=JSON.parse('{"id":"exercises/cases/cases04","title":"Cases04","description":"","source":"@site/docs/exercises/cases/cases04.mdx","sourceDirName":"exercises/cases","slug":"/exercises/cases/cases04","permalink":"/java-docs/pr-preview/pr-266/exercises/cases/cases04","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/cases/cases04.mdx","tags":[],"version":"current","frontMatter":{"title":"Cases04","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Cases03","permalink":"/java-docs/pr-preview/pr-266/exercises/cases/cases03"},"next":{"title":"Cases05","permalink":"/java-docs/pr-preview/pr-266/exercises/cases/cases05"}}'),t=n("85893"),a=n("50065"),i=n("17490");let l={title:"Cases04",description:""},u=void 0,c={},o=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweise",id:"hinweise",level:2}];function d(e){let s={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche es zwei Spielern erm\xf6glicht, eine\nZufallszahl zwischen 1 und 100 zu erraten. Der Spieler, der mit seinem Tipp\nn\xe4her an der Zufallszahl liegt, gewinnt das Spiel."}),"\n",(0,t.jsx)(s.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-console",children:"Spieler 1, gib bitte Deinen Tipp ein: 34\nSpieler 2, gib bitte Deinen Tipp ein: 60\nZufallszahl: 39, Spieler 1 gewinnt\n"})}),"\n",(0,t.jsx)(s.h2,{id:"hinweise",children:"Hinweise"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Die Methode ",(0,t.jsx)(s.code,{children:"int nextInt(bound: int)"})," der Klasse ",(0,t.jsx)(s.code,{children:"Random"})," gibt eine\nZufallszahl zwischen 0 (inklusive) und der eingehenden Zahl (exklusive) zur\xfcck"]}),"\n",(0,t.jsxs)(s.li,{children:["Die statische Methode ",(0,t.jsx)(s.code,{children:"int abs(a: int)"})," der Klasse ",(0,t.jsx)(s.code,{children:"Math"})," gibt den Betrag der\neingehenden Zahl zur\xfcck"]}),"\n"]}),"\n",(0,t.jsx)(i.Z,{pullRequest:"10",branchSuffix:"cases/04"})]})}function p(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},97645:function(e,s,n){n.d(s,{Z:()=>a});var r=n("85893");n("67294");var t=n("67026");function a(e){let{children:s,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)("tabItem_Ymn6",a),hidden:n,children:s})}},58168:function(e,s,n){n.d(s,{Z:()=>m});var r=n("85893"),t=n("67294"),a=n("67026"),i=n("34718"),l=n("16550"),u=n("8714"),c=n("89207"),o=n("69413"),d=n("54510");function p(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:s,tabValues:n}=e;return n.some(e=>e.value===s)}var f=n("6735");function b(e){let{className:s,block:n,selectedValue:t,selectValue:l,tabValues:u}=e,c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.o5)(),d=e=>{let s=e.currentTarget,n=u[c.indexOf(s)].value;n!==t&&(o(s),l(n))},p=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;s=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;s=c[n]??c[c.length-1]}}s?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},s),children:u.map(e=>{let{value:s,label:n,attributes:i}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>{c.push(e)},onKeyDown:p,onClick:d,...i,className:(0,a.Z)("tabs__item","tabItem_LNqP",i?.className,{"tabs__item--active":t===s}),children:n??s},s)})})}function v(e){let{lazy:s,children:n,selectedValue:i}=e,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){let e=l.find(e=>e.props.value===i);return e?(0,t.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==i}))})}function x(e){let s=function(e){let{defaultValue:s,queryString:n=!1,groupId:r}=e,a=function(e){let{values:s,children:n}=e;return(0,t.useMemo)(()=>{let e=s??p(n).map(e=>{let{props:{value:s,label:n,attributes:r,default:t}}=e;return{value:s,label:n,attributes:r,default:t}});return!function(e){let s=(0,o.lx)(e,(e,s)=>e.value===s.value);if(s.length>0)throw Error(`Docusaurus error: Duplicate values "${s.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[s,n])}(e),[i,f]=(0,t.useState)(()=>(function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!h({value:s,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:s,tabValues:a})),[b,v]=function(e){let{queryString:s=!1,groupId:n}=e,r=(0,l.k6)(),a=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,c._X)(a),(0,t.useCallback)(e=>{if(!a)return;let s=new URLSearchParams(r.location.search);s.set(a,e),r.replace({...r.location,search:s.toString()})},[a,r])]}({queryString:n,groupId:r}),[x,m]=function(e){let{groupId:s}=e,n=s?`docusaurus.tab.${s}`:null,[r,a]=(0,d.Nk)(n);return[r,(0,t.useCallback)(e=>{n&&a.set(e)},[n,a])]}({groupId:r}),g=(()=>{let e=b??x;return h({value:e,tabValues:a})?e:null})();return(0,u.Z)(()=>{g&&f(g)},[g]),{selectedValue:i,selectValue:(0,t.useCallback)(e=>{if(!h({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);f(e),v(e),m(e)},[v,m,a]),tabValues:a}}(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(b,{...s,...e}),(0,r.jsx)(v,{...s,...e})]})}function m(e){let s=(0,f.Z)();return(0,r.jsx)(x,{...e,children:p(e.children)},String(s))}},17490:function(e,s,n){n.d(s,{Z:function(){return u}});var r=n(85893);n(67294);var t=n(58168),a=n(97645),i=n(53367),l=n(31705);function u(e){let{pullRequest:s,branchSuffix:n}=e;return(0,r.jsxs)(t.Z,{children:[(0,r.jsxs)(a.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,r.jsx)(l.Z,{language:"console",children:`git switch exercises/${n}`}),(0,r.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(a.Z,{value:"solution",label:"Solution",children:[(0,r.jsx)(l.Z,{language:"console",children:`git switch solutions/${n}`}),(0,r.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(a.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,r.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${s}/files?diff=split`,children:["PR#",s]})]})]})}}}]);