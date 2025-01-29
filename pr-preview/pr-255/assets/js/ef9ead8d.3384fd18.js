"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["4482"],{1564:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>l,metadata:()=>a,assets:()=>c,toc:()=>u,contentTitle:()=>o});var a=JSON.parse('{"id":"exercises/console-applications/console-applications01","title":"ConsoleApplications01","description":"","source":"@site/docs/exercises/console-applications/console-applications01.mdx","sourceDirName":"exercises/console-applications","slug":"/exercises/console-applications/console-applications01","permalink":"/java-docs/pr-preview/pr-255/exercises/console-applications/console-applications01","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/console-applications/console-applications01.mdx","tags":[],"version":"current","frontMatter":{"title":"ConsoleApplications01","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Konsolenanwendungen","permalink":"/java-docs/pr-preview/pr-255/exercises/console-applications/"},"next":{"title":"ConsoleApplications02","permalink":"/java-docs/pr-preview/pr-255/exercises/console-applications/console-applications02"}}'),r=t("85893"),s=t("50065"),i=t("17490");let l={title:"ConsoleApplications01",description:""},o=void 0,c={},u=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function p(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Erstelle eine ausf\xfchrbare Klasse, welche zwei Ganzzahlen von der Konsole\neinliest, addiert und das Ergebnis auf der Konsole ausgibt."}),"\n",(0,r.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"Gib bitte eine ganze Zahl ein: 4\nGib bitte eine weitere ganze Zahl ein: 5\nErgebnis: 4 + 5 = 9\n"})}),"\n",(0,r.jsx)(i.Z,{pullRequest:"5",branchSuffix:"console-applications/01"})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},97645:function(e,n,t){t.d(n,{Z:()=>s});var a=t("85893");t("67294");var r=t("67026");function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)("tabItem_Ymn6",s),hidden:t,children:n})}},58168:function(e,n,t){t.d(n,{Z:()=>x});var a=t("85893"),r=t("67294"),s=t("67026"),i=t("34718"),l=t("16550"),o=t("8714"),c=t("89207"),u=t("69413"),p=t("54510");function d(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var f=t("6735");function b(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),p=e=>{let n=e.currentTarget,t=o[c.indexOf(n)].value;t!==r&&(u(n),l(t))},d=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1]}}n?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:i}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{c.push(e)},onKeyDown:d,onClick:p,...i,className:(0,s.Z)("tabs__item","tabItem_LNqP",i?.className,{"tabs__item--active":r===n}),children:t??n},n)})})}function v(e){let{lazy:n,children:t,selectedValue:i}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===i);return e?(0,r.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function m(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:a}=e,s=function(e){let{values:n,children:t}=e;return(0,r.useMemo)(()=>{let e=n??d(t).map(e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[i,f]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let a=t.find(e=>e.default)??t[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:n,tabValues:s})),[b,v]=function(e){let{queryString:n=!1,groupId:t}=e,a=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(s),(0,r.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})},[s,a])]}({queryString:t,groupId:a}),[m,x]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[a,s]=(0,p.Nk)(t);return[a,(0,r.useCallback)(e=>{t&&s.set(e)},[t,s])]}({groupId:a}),g=(()=>{let e=b??m;return h({value:e,tabValues:s})?e:null})();return(0,o.Z)(()=>{g&&f(g)},[g]),{selectedValue:i,selectValue:(0,r.useCallback)(e=>{if(!h({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);f(e),v(e),x(e)},[v,x,s]),tabValues:s}}(e);return(0,a.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList__CuJ"),children:[(0,a.jsx)(b,{...n,...e}),(0,a.jsx)(v,{...n,...e})]})}function x(e){let n=(0,f.Z)();return(0,a.jsx)(m,{...e,children:d(e.children)},String(n))}},17490:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(85893);t(67294);var r=t(58168),s=t(97645),i=t(53367),l=t(31705);function o(e){let{pullRequest:n,branchSuffix:t}=e;return(0,a.jsxs)(r.Z,{children:[(0,a.jsxs)(s.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,a.jsx)(l.Z,{language:"console",children:`git switch exercises/${t}`}),(0,a.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(s.Z,{value:"solution",label:"Solution",children:[(0,a.jsx)(l.Z,{language:"console",children:`git switch solutions/${t}`}),(0,a.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(s.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,a.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);