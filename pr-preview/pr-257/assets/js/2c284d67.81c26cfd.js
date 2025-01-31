"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["8417"],{61219:function(e,n,s){s.r(n),s.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>r,assets:()=>u,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"exercises/inner-classes/inner-classes02","title":"InnerClasses02","description":"","source":"@site/docs/exercises/inner-classes/inner-classes02.mdx","sourceDirName":"exercises/inner-classes","slug":"/exercises/inner-classes/inner-classes02","permalink":"/java-docs/pr-preview/pr-257/exercises/inner-classes/inner-classes02","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/inner-classes/inner-classes02.mdx","tags":[],"version":"current","frontMatter":{"title":"InnerClasses02","description":""},"sidebar":"exercisesSidebar","previous":{"title":"InnerClasses01","permalink":"/java-docs/pr-preview/pr-257/exercises/inner-classes/inner-classes01"},"next":{"title":"InnerClasses03","permalink":"/java-docs/pr-preview/pr-257/exercises/inner-classes/inner-classes03"}}'),a=s("85893"),t=s("50065"),i=s("17490");let l={title:"InnerClasses02",description:""},o=void 0,u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",mermaid:"mermaid",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Passe die Klassen ",(0,a.jsx)(n.code,{children:"Company"})," und ",(0,a.jsx)(n.code,{children:"Employee"})," aus \xdcbungsaufgabe\n",(0,a.jsx)(n.a,{href:"../exceptions/exceptions03",children:"Exceptions03"})," anhand des abgebildeten\nKlassendiagramms an"]}),"\n",(0,a.jsxs)(n.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,a.jsx)(n.a,{href:"../exceptions/exceptions03",children:"Exceptions03"})," so an, dass sie fehlerfrei\nausgef\xfchrt werden kann"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,a.jsx)(n.mermaid,{value:"classDiagram\n    Company *-- Employee\n    Employee o-- Person\n\n    class Company {\n        -name: String #123;final#125;\n        -employees: List~Employee~ #123;final#125;\n        -numberOfEmployees: int\n        +Company(name: String)\n        +name() String\n        +employees() List~Employee~\n        +getNumberOfEmployees() int\n        +addEmployee(employee: Employee) void\n        +equals(object: Object) boolean\n        +hashCode() int\n        +toString() String\n    }\n\n    class Person {\n        -name: String #123;final#125;\n        +Person(name: String)\n        +name() String\n        +equals(object: Object) boolean\n        +hashCode() int\n        +toString() String\n    }\n\n    class Employee {\n        -employeeId: int #123;final#125;\n        -person: Person #123;final#125;\n        -salaryInEuro: int\n        +Employee(employeeId: int, person: Person, salaryInEuro: int)\n        +employeeId() int\n        +name() String\n        +setSalaryInEuro(salaryInEuro: int) void\n        +getSalaryInEuro() int\n        +equals(object: Object) boolean\n        +hashCode() int\n        +toString() String\n    }"}),"\n",(0,a.jsx)(i.Z,{pullRequest:"55",branchSuffix:"inner-classes/02"})]})}function p(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},97645:function(e,n,s){s.d(n,{Z:()=>t});var r=s("85893");s("67294");var a=s("67026");function t(e){let{children:n,hidden:s,className:t}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_Ymn6",t),hidden:s,children:n})}},58168:function(e,n,s){s.d(n,{Z:()=>x});var r=s("85893"),a=s("67294"),t=s("67026"),i=s("34718"),l=s("16550"),o=s("8714"),u=s("89207"),c=s("69413"),d=s("54510");function p(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:n,tabValues:s}=e;return s.some(e=>e.value===n)}var h=s("6735");function f(e){let{className:n,block:s,selectedValue:a,selectValue:l,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let n=e.currentTarget,s=o[u.indexOf(n)].value;s!==a&&(c(n),l(s))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let s=u.indexOf(e.currentTarget)+1;n=u[s]??u[0];break}case"ArrowLeft":{let s=u.indexOf(e.currentTarget)-1;n=u[s]??u[u.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":s},n),children:o.map(e=>{let{value:n,label:s,attributes:i}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{u.push(e)},onKeyDown:p,onClick:d,...i,className:(0,t.Z)("tabs__item","tabItem_LNqP",i?.className,{"tabs__item--active":a===n}),children:s??n},n)})})}function b(e){let{lazy:n,children:s,selectedValue:i}=e,l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===i);return e?(0,a.cloneElement)(e,{className:(0,t.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function g(e){let n=function(e){let{defaultValue:n,queryString:s=!1,groupId:r}=e,t=function(e){let{values:n,children:s}=e;return(0,a.useMemo)(()=>{let e=n??p(s).map(e=>{let{props:{value:n,label:s,attributes:r,default:a}}=e;return{value:n,label:s,attributes:r,default:a}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,s])}(e),[i,h]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:s}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=s.find(e=>e.default)??s[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:t})),[f,b]=function(e){let{queryString:n=!1,groupId:s}=e,r=(0,l.k6)(),t=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,u._X)(t),(0,a.useCallback)(e=>{if(!t)return;let n=new URLSearchParams(r.location.search);n.set(t,e),r.replace({...r.location,search:n.toString()})},[t,r])]}({queryString:s,groupId:r}),[g,x]=function(e){let{groupId:n}=e,s=n?`docusaurus.tab.${n}`:null,[r,t]=(0,d.Nk)(s);return[r,(0,a.useCallback)(e=>{s&&t.set(e)},[s,t])]}({groupId:r}),v=(()=>{let e=f??g;return m({value:e,tabValues:t})?e:null})();return(0,o.Z)(()=>{v&&h(v)},[v]),{selectedValue:i,selectValue:(0,a.useCallback)(e=>{if(!m({value:e,tabValues:t}))throw Error(`Can't select invalid tab value=${e}`);h(e),b(e),x(e)},[b,x,t]),tabValues:t}}(e);return(0,r.jsxs)("div",{className:(0,t.Z)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(f,{...n,...e}),(0,r.jsx)(b,{...n,...e})]})}function x(e){let n=(0,h.Z)();return(0,r.jsx)(g,{...e,children:p(e.children)},String(n))}},17490:function(e,n,s){s.d(n,{Z:function(){return o}});var r=s(85893);s(67294);var a=s(58168),t=s(97645),i=s(53367),l=s(31705);function o(e){let{pullRequest:n,branchSuffix:s}=e;return(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(t.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,r.jsx)(l.Z,{language:"console",children:`git switch exercises/${s}`}),(0,r.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${s}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(t.Z,{value:"solution",label:"Solution",children:[(0,r.jsx)(l.Z,{language:"console",children:`git switch solutions/${s}`}),(0,r.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${s}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(t.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,r.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);