"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["9308"],{97439:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>a,assets:()=>c,toc:()=>u,contentTitle:()=>o});var a=JSON.parse('{"id":"exercises/abstract-and-final/abstract-and-final01","title":"AbstractAndFinal01","description":"","source":"@site/docs/exercises/abstract-and-final/abstract-and-final01.mdx","sourceDirName":"exercises/abstract-and-final","slug":"/exercises/abstract-and-final/abstract-and-final01","permalink":"/java-docs/pr-preview/pr-259/exercises/abstract-and-final/abstract-and-final01","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/abstract-and-final/abstract-and-final01.mdx","tags":[],"version":"current","frontMatter":{"title":"AbstractAndFinal01","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Abstrakte und finale Klassen und Methoden","permalink":"/java-docs/pr-preview/pr-259/exercises/abstract-and-final/"},"next":{"title":"Schnittstellen (Interfaces)","permalink":"/java-docs/pr-preview/pr-259/exercises/interfaces/"}}'),r=t("85893"),i=t("50065"),s=t("17490");let l={title:"AbstractAndFinal01",description:""},o=void 0,c={},u=[{value:"Klassendiagramm",id:"klassendiagramm",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",mermaid:"mermaid",p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Passe die Klassen ",(0,r.jsx)(n.code,{children:"Vehicle"}),", ",(0,r.jsx)(n.code,{children:"Car"})," und ",(0,r.jsx)(n.code,{children:"Truck"})," aus \xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"../polymorphy/polymorphy03",children:"Polymorphism03"})," anhand des abgebildeten\nKlassendiagramms an."]}),"\n",(0,r.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    Vehicle <|-- Car: extends\n    Vehicle <|-- Truck: extends\n    Engine --o Vehicle\n    Rental o-- Vehicle\n\n    class Vehicle {\n        <<abstract>>\n        -make: String\n        -model: String\n        -engine: Engine\n        #speedInKmh: double\n        -numberOfVehicles: int$\n        +Vehicle(make String, model String, engine Engine)\n        +getMake() String\n        +getModel() String\n        +getEngine() Engine\n        +getSpeedInKmh() double\n        +accelerate(valueInKmh: int) void #123;final#125;\n        +brake(valueInKmh: int) void #123;final#125;\n        +toString() String #123;abstract#125;\n        +getNumberOfVehicles()$ int\n    }\n\n    class Engine {\n        <<enumeration>>\n        DIESEL = Diesel\n        PETROL = Benzin\n        GAS = Gas\n        ELECTRO = Elektro\n        -description: String #123;final#125;\n        Engine(description: String)\n        +getDescription() String\n    }\n\n    class Car {\n        <<final>>\n        -seats: int #123;final#125;\n        +Car(make: String, model: String, engine: Engine, seats: int)\n        +getSeats() int\n        +doATurboBoost() void\n        +toString() String\n    }\n\n    class Truck {\n        <<final>>\n        -cargo: int #123;final#125;\n        -isTransformed boolean\n        +Truck(make: String, model: String, engine: Engine, cargo: int)\n        +getCargo() int\n        +isTransformed() boolean\n        +transform() void\n        +toString() String\n    }\n\n    class Rental {\n        -name: String #123;final#125;\n        -vehicles: ArrayList~Vehicle~ #123;final#125;\n        +Rental(name: String)\n        +getName() String\n        +getVehicles() ArrayList~Vehicle~\n        +addVehicle(vehicle: Vehicle) void\n        +addAllVehicles(vehicles: Vehicle...) void\n        +transformAllTrucks() void\n        +toString() String\n    }"}),"\n",(0,r.jsx)(s.Z,{pullRequest:"45",branchSuffix:"abstract-and-final/01"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},97645:function(e,n,t){t.d(n,{Z:()=>i});var a=t("85893");t("67294");var r=t("67026");function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)("tabItem_Ymn6",i),hidden:t,children:n})}},58168:function(e,n,t){t.d(n,{Z:()=>v});var a=t("85893"),r=t("67294"),i=t("67026"),s=t("34718"),l=t("16550"),o=t("8714"),c=t("89207"),u=t("69413"),d=t("54510");function h(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var f=t("6735");function g(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),d=e=>{let n=e.currentTarget,t=o[c.indexOf(n)].value;t!==r&&(u(n),l(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1]}}n?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:s}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{c.push(e)},onKeyDown:h,onClick:d,...s,className:(0,i.Z)("tabs__item","tabItem_LNqP",s?.className,{"tabs__item--active":r===n}),children:t??n},n)})})}function m(e){let{lazy:n,children:t,selectedValue:s}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===s);return e?(0,r.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:a}=e,i=function(e){let{values:n,children:t}=e;return(0,r.useMemo)(()=>{let e=n??h(t).map(e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[s,f]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let a=t.find(e=>e.default)??t[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:n,tabValues:i})),[g,m]=function(e){let{queryString:n=!1,groupId:t}=e,a=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(i),(0,r.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})},[i,a])]}({queryString:t,groupId:a}),[b,v]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[a,i]=(0,d.Nk)(t);return[a,(0,r.useCallback)(e=>{t&&i.set(e)},[t,i])]}({groupId:a}),x=(()=>{let e=g??b;return p({value:e,tabValues:i})?e:null})();return(0,o.Z)(()=>{x&&f(x)},[x]),{selectedValue:s,selectValue:(0,r.useCallback)(e=>{if(!p({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);f(e),m(e),v(e)},[m,v,i]),tabValues:i}}(e);return(0,a.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList__CuJ"),children:[(0,a.jsx)(g,{...n,...e}),(0,a.jsx)(m,{...n,...e})]})}function v(e){let n=(0,f.Z)();return(0,a.jsx)(b,{...e,children:h(e.children)},String(n))}},17490:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(85893);t(67294);var r=t(58168),i=t(97645),s=t(53367),l=t(31705);function o(e){let{pullRequest:n,branchSuffix:t}=e;return(0,a.jsxs)(r.Z,{children:[(0,a.jsxs)(i.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,a.jsx)(l.Z,{language:"console",children:`git switch exercises/${t}`}),(0,a.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(i.Z,{value:"solution",label:"Solution",children:[(0,a.jsx)(l.Z,{language:"console",children:`git switch solutions/${t}`}),(0,a.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(i.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,a.jsxs)(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);