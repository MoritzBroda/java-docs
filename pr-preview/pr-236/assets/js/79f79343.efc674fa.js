"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7168"],{48812:function(e,r,t){t.r(r),t.d(r,{metadata:()=>n,contentTitle:()=>u,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>l});var n=JSON.parse('{"id":"exercises/arrays/arrays03","title":"Arrays03","description":"","source":"@site/docs/exercises/arrays/arrays03.mdx","sourceDirName":"exercises/arrays","slug":"/exercises/arrays/arrays03","permalink":"/java-docs/pr-preview/pr-236/exercises/arrays/arrays03","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/arrays/arrays03.mdx","tags":[],"version":"current","frontMatter":{"title":"Arrays03","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Arrays02","permalink":"/java-docs/pr-preview/pr-236/exercises/arrays/arrays02"},"next":{"title":"Arrays04","permalink":"/java-docs/pr-preview/pr-236/exercises/arrays/arrays04"}}'),a=t("85893"),s=t("50065"),i=t("39661");let l={title:"Arrays03",description:""},u=void 0,o={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweise",id:"hinweise",level:2}];function d(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"Erstelle eine ausf\xfchrbare Klasse zum Berechnen von ISBN-Pr\xfcfziffern."}),"\n",(0,a.jsx)(r.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-console",children:"Gib bitte eine ISBN ohne Pr\xfcfziffer ein: 978376572781\nErgebnis: Die Pr\xfcfziffer lautet 8\n"})}),"\n",(0,a.jsx)(r.h2,{id:"hinweise",children:"Hinweise"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["Die Methode ",(0,a.jsx)(r.code,{children:"char charAt(index: int)"})," der Klasse ",(0,a.jsx)(r.code,{children:"String"})," gibt das Zeichen mit\ndem Index der eingehenden Zahl zur\xfcck"]}),"\n",(0,a.jsxs)(r.li,{children:["Die statische Methode ",(0,a.jsx)(r.code,{children:"int getNumericValue(ch: char)"})," der Klasse ",(0,a.jsx)(r.code,{children:"Character"}),"\ngibt den ganzzahligen Wert des eingehenden Zeichens zur\xfcck"]}),"\n",(0,a.jsx)(r.li,{children:"Eine ISBN besteht aus 13 Ziffern (die 13. Ziffer stellt die Pr\xfcfziffer dar)"}),"\n",(0,a.jsxs)(r.li,{children:["Die Formel f\xfcr die Berechnung der Pr\xfcfziffer findest Du unter anderem\n",(0,a.jsx)(r.a,{href:"https://de.wikipedia.org/wiki/Internationale_Standardbuchnummer",children:"hier"})]}),"\n"]}),"\n",(0,a.jsx)(i.Z,{pullRequest:"20",branchSuffix:"arrays/03"})]})}function h(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},5525:function(e,r,t){t.d(r,{Z:()=>i});var n=t("85893");t("67294");var a=t("67026");let s="tabItem_Ymn6";function i(e){let{children:r,hidden:t,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s,i),hidden:t,children:r})}},47902:function(e,r,t){t.d(r,{Z:()=>j});var n=t("85893"),a=t("67294"),s=t("67026"),i=t("69599"),l=t("16550"),u=t("32000"),o=t("4520"),c=t("38341"),d=t("76009");function h(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:r,tabValues:t}=e;return t.some(e=>e.value===r)}var f=t("7227");let x="tabList__CuJ",b="tabItem_LNqP";function m(e){let{className:r,block:t,selectedValue:a,selectValue:l,tabValues:u}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let r=e.currentTarget,t=u[o.indexOf(r)].value;t!==a&&(c(r),l(t))},h=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{let t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1]}}r?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},r),children:u.map(e=>{let{value:r,label:t,attributes:i}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>o.push(e),onKeyDown:h,onClick:d,...i,className:(0,s.Z)("tabs__item",b,i?.className,{"tabs__item--active":a===r}),children:t??r},r)})})}function v(e){let{lazy:r,children:t,selectedValue:i}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){let e=l.find(e=>e.props.value===i);return e?(0,a.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:l.map((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==i}))})}function g(e){let r=function(e){let{defaultValue:r,queryString:t=!1,groupId:n}=e,s=function(e){let{values:r,children:t}=e;return(0,a.useMemo)(()=>{let e=r??h(t).map(e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}});return!function(e){let r=(0,c.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,t])}(e),[i,f]=(0,a.useState)(()=>(function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let n=t.find(e=>e.default)??t[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:r,tabValues:s})),[x,b]=function(e){let{queryString:r=!1,groupId:t}=e,n=(0,l.k6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t}),i=(0,o._X)(s);return[i,(0,a.useCallback)(e=>{if(!s)return;let r=new URLSearchParams(n.location.search);r.set(s,e),n.replace({...n.location,search:r.toString()})},[s,n])]}({queryString:t,groupId:n}),[m,v]=function(e){var r;let{groupId:t}=e;let n=(r=t)?`docusaurus.tab.${r}`:null,[s,i]=(0,d.Nk)(n);return[s,(0,a.useCallback)(e=>{if(!!n)i.set(e)},[n,i])]}({groupId:n}),g=(()=>{let e=x??m;return p({value:e,tabValues:s})?e:null})();return(0,u.Z)(()=>{g&&f(g)},[g]),{selectedValue:i,selectValue:(0,a.useCallback)(e=>{if(!p({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);f(e),b(e),v(e)},[b,v,s]),tabValues:s}}(e);return(0,n.jsxs)("div",{className:(0,s.Z)("tabs-container",x),children:[(0,n.jsx)(m,{...r,...e}),(0,n.jsx)(v,{...r,...e})]})}function j(e){let r=(0,f.Z)();return(0,n.jsx)(g,{...e,children:h(e.children)},String(r))}},39661:function(e,r,t){t.d(r,{Z:function(){return u}});var n=t(85893);t(67294);var a=t(47902),s=t(5525),i=t(83012),l=t(45056);function u(e){let{pullRequest:r,branchSuffix:t}=e;return(0,n.jsxs)(a.Z,{children:[(0,n.jsxs)(s.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,n.jsx)(l.Z,{language:"console",children:`git switch exercises/${t}`}),(0,n.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,n.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,n.jsxs)(s.Z,{value:"solution",label:"Solution",children:[(0,n.jsx)(l.Z,{language:"console",children:`git switch solutions/${t}`}),(0,n.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,n.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,n.jsxs)(s.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,n.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);