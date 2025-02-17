"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["1114"],{64469:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>c,toc:()=>u,contentTitle:()=>o});var s=JSON.parse('{"id":"exercises/class-diagrams/class-diagrams04","title":"ClassDiagrams04","description":"","source":"@site/docs/exercises/class-diagrams/class-diagrams04.mdx","sourceDirName":"exercises/class-diagrams","slug":"/exercises/class-diagrams/class-diagrams04","permalink":"/java-docs/pr-preview/pr-265/exercises/class-diagrams/class-diagrams04","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/class-diagrams/class-diagrams04.mdx","tags":[],"version":"current","frontMatter":{"title":"ClassDiagrams04","description":""},"sidebar":"exercisesSidebar","previous":{"title":"ClassDiagrams03","permalink":"/java-docs/pr-preview/pr-265/exercises/class-diagrams/class-diagrams03"},"next":{"title":"ClassDiagrams05","permalink":"/java-docs/pr-preview/pr-265/exercises/class-diagrams/class-diagrams05"}}'),i=r("85893"),l=r("50065"),a=r("17490");let t={title:"ClassDiagrams04",description:""},o=void 0,c={},u=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse <em>Person</em>",id:"hinweis-zur-klasse-person",level:2},{value:"Hinweise zur Klasse <em>Employee</em>",id:"hinweise-zur-klasse-employee",level:2},{value:"Hinweise zur Klasse <em>Company</em>",id:"hinweise-zur-klasse-company",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Erstelle die Klassen ",(0,i.jsx)(n.code,{children:"Company"}),", ",(0,i.jsx)(n.code,{children:"Employee"})," und ",(0,i.jsx)(n.code,{children:"Person"})," anhand des\nabgebildeten Klassendiagramms"]}),"\n",(0,i.jsx)(n.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche ein Unternehmen mit mehreren\nMitarbeitern erzeugt und auf der Konsole ausgibt"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n    Company o-- Employee\n    Employee o-- Person\n\n    class Company {\n        -name: String #123;final#125;\n        -employees: ArrayList~Employee~ #123;final#125;\n        -numberOfEmployees: int\n        +Company(name: String)\n        +getName() String\n        +getEmployees() ArrayList~Employee~\n        +getNumberOfEmployees() int\n        +addEmployee(employee: Employee) void\n        +toString() String\n    }\n\n    class Person {\n        -name: String #123;final#125;\n        +Person(name: String)\n        +getName() String\n    }\n\n    class Employee {\n        -employeeId: int #123;final#125;\n        -person: Person #123;final#125;\n        -salaryInEuro: int\n        +Employee(employeeId: int, person: Person, salaryInEuro: int)\n        +getEmployeeId() int\n        +getName() String\n        +setSalaryInEuro(salaryInEuro: int) void\n        +getSalaryInEuro() int\n        +toString() String\n    }"}),"\n",(0,i.jsxs)(n.h2,{id:"hinweis-zur-klasse-person",children:["Hinweis zur Klasse ",(0,i.jsx)(n.em,{children:"Person"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"String getName()"})," soll den Namen der Person zur\xfcckgeben"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"hinweise-zur-klasse-employee",children:["Hinweise zur Klasse ",(0,i.jsx)(n.em,{children:"Employee"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"int getEmployeeId()"})," soll die Id des Mitarbeiters zur\xfcckgeben"]}),"\n",(0,i.jsx)(n.li,{children:"Die Methode String getName()` soll den Namen des Mitarbeiters zur\xfcckgeben"}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void setSalaryInEuro(salaryInEuro: int)"})," soll das Gehalt des\nMitarbeiters festlegen"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"int getSalaryInEuro()"})," soll das Gehalt des Mitarbeiters\nzur\xfcckgeben"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"String toString()"})," soll alle Attribute in der Form\n",(0,i.jsx)(n.em,{children:"Mitarbeiternummer - Name - Gehalt"})," zur\xfcckgeben"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"hinweise-zur-klasse-company",children:["Hinweise zur Klasse ",(0,i.jsx)(n.em,{children:"Company"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"String getName()"})," soll den Namen der Firma zur\xfcckgeben"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"ArrayList<Employee> getEmployees()"})," soll die Mitarbeiterliste\nzur\xfcckgeben"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"int getNumberOfEmployees()"})," soll die Anzahl der Mitarbeiter\nzur\xfcckgeben"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void addEmployee(employee: Employee)"})," soll den eingehenden\nMitarbeiter der Mitarbeiterliste hinzuf\xfcgen"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"String toString()"})," soll alle Attribute in der Form ",(0,i.jsx)(n.em,{children:"Firmenname\n(Mitarbeiteranzahl)\\nMitarbeiter\\n..."})," zur\xfcckgeben"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"Maier GmbH (5 Mitarbeiter)\n1 - Max Schmid - 50000\u20AC\n2 - Hans M\xfcller - 75000\u20AC\n3 - Lisa Meier - 40000\u20AC\n4 - Peter Schneider - 55000\u20AC\n5 - Miriam Albers - 90000\u20AC\n"})}),"\n",(0,i.jsx)(a.Z,{pullRequest:"39",branchSuffix:"class-diagrams/04"})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},97645:function(e,n,r){r.d(n,{Z:()=>l});var s=r("85893");r("67294");var i=r("67026");function l(e){let{children:n,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.Z)("tabItem_Ymn6",l),hidden:r,children:n})}},58168:function(e,n,r){r.d(n,{Z:()=>f});var s=r("85893"),i=r("67294"),l=r("67026"),a=r("34718"),t=r("16550"),o=r("8714"),c=r("89207"),u=r("69413"),d=r("54510");function m(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var p=r("6735");function g(e){let{className:n,block:r,selectedValue:i,selectValue:t,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),d=e=>{let n=e.currentTarget,r=o[c.indexOf(n)].value;r!==i&&(u(n),t(r))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{let r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1]}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},n),children:o.map(e=>{let{value:n,label:r,attributes:a}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>{c.push(e)},onKeyDown:m,onClick:d,...a,className:(0,l.Z)("tabs__item","tabItem_LNqP",a?.className,{"tabs__item--active":i===n}),children:r??n},n)})})}function x(e){let{lazy:n,children:r,selectedValue:a}=e,t=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=t.find(e=>e.props.value===a);return e?(0,i.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:t.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:s}=e,l=function(e){let{values:n,children:r}=e;return(0,i.useMemo)(()=>{let e=n??m(r).map(e=>{let{props:{value:n,label:r,attributes:s,default:i}}=e;return{value:n,label:r,attributes:s,default:i}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[a,p]=(0,i.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let s=r.find(e=>e.default)??r[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:n,tabValues:l})),[g,x]=function(e){let{queryString:n=!1,groupId:r}=e,s=(0,t.k6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c._X)(l),(0,i.useCallback)(e=>{if(!l)return;let n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})},[l,s])]}({queryString:r,groupId:s}),[b,f]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[s,l]=(0,d.Nk)(r);return[s,(0,i.useCallback)(e=>{r&&l.set(e)},[r,l])]}({groupId:s}),j=(()=>{let e=g??b;return h({value:e,tabValues:l})?e:null})();return(0,o.Z)(()=>{j&&p(j)},[j]),{selectedValue:a,selectValue:(0,i.useCallback)(e=>{if(!h({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);p(e),x(e),f(e)},[x,f,l]),tabValues:l}}(e);return(0,s.jsxs)("div",{className:(0,l.Z)("tabs-container","tabList__CuJ"),children:[(0,s.jsx)(g,{...n,...e}),(0,s.jsx)(x,{...n,...e})]})}function f(e){let n=(0,p.Z)();return(0,s.jsx)(b,{...e,children:m(e.children)},String(n))}},17490:function(e,n,r){r.d(n,{Z:function(){return o}});var s=r(85893);r(67294);var i=r(58168),l=r(97645),a=r(53367),t=r(31705);function o(e){let{pullRequest:n,branchSuffix:r}=e;return(0,s.jsxs)(i.Z,{children:[(0,s.jsxs)(l.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,s.jsx)(t.Z,{language:"console",children:`git switch exercises/${r}`}),(0,s.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(l.Z,{value:"solution",label:"Solution",children:[(0,s.jsx)(t.Z,{language:"console",children:`git switch solutions/${r}`}),(0,s.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(l.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,s.jsxs)(a.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);