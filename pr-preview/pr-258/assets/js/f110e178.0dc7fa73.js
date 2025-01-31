"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2319"],{69891:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>c,toc:()=>u,contentTitle:()=>o});var i=JSON.parse('{"id":"exercises/exceptions/exceptions01","title":"Exceptions01","description":"","source":"@site/docs/exercises/exceptions/exceptions01.mdx","sourceDirName":"exercises/exceptions","slug":"/exercises/exceptions/exceptions01","permalink":"/java-docs/pr-preview/pr-258/exercises/exceptions/exceptions01","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/exceptions/exceptions01.mdx","tags":[],"version":"current","frontMatter":{"title":"Exceptions01","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Ausnahmen (Exceptions)","permalink":"/java-docs/pr-preview/pr-258/exercises/exceptions/"},"next":{"title":"Exceptions02","permalink":"/java-docs/pr-preview/pr-258/exercises/exceptions/exceptions02"}}'),r=t("85893"),s=t("50065"),a=t("17490");let l={title:"Exceptions01",description:""},o=void 0,c={},u=[{value:"Hinweise zur Klasse <em>Vehicle</em>",id:"hinweise-zur-klasse-vehicle",level:2}];function d(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Erstelle die Ausnahmenklasse ",(0,r.jsx)(n.code,{children:"InvalidValueException"})]}),"\n",(0,r.jsxs)(n.li,{children:["Passe die Klasse ",(0,r.jsx)(n.code,{children:"Vehicle"})," anhand der Hinweise an"]}),"\n",(0,r.jsxs)(n.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"../interfaces/interfaces01",children:"Interfaces01"})," so an, dass ein Auto mit einem\nung\xfcltigen Wert beschleunigt wird und in der Konsole ausgegeben wird, dass der\nWert gr\xf6\xdfer als 0 sein muss."]}),"\n"]}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    Vehicle <|-- Car : extends\n    Vehicle <|-- Truck : extends\n    Engine --o Vehicle\n    Rental o-- Vehicle\n    Partner <|.. Rental : implements\n    TravelAgency o-- Partner\n\n    class Vehicle {\n        <<abstract>>\n        -make: String\n        -model: String\n        -engine: Engine\n        #speedInKmh: double\n        -numberOfVehicles: int$\n\n        +Vehicle(make: String, model: String, engine: Engine)\n        +getMake() String\n        +getModel() String\n        +getEngine() Engine\n        +getSpeedInKmh() double\n        +accelerate(valueInKmh: int) void #123;final#125;\n        +brake(valueInKmh: int) void #123;final#125;\n        +toString() String #123;abstract#125;\n        +getNumberOfVehicles()$ int\n    }\n\n    class Engine {\n        <<enumeration>>\n        DIESEL = Diesel\n        PETROL = Benzin\n        GAS = Gas\n        ELECTRO = Elektro\n        -description: String #123;final#125;\n        +getDescription() String\n    }\n\n    class Car {\n        <<final>>\n        -seats: int #123;final#125;\n        +Car(make: String, model: String, engine: Engine, seats: int)\n        +getSeats() int\n        +doATurboBoost() void\n        +toString() String\n    }\n\n    class Truck {\n        <<final>>\n        -cargo: int #123;final#125;\n        -isTransformed: boolean\n        +Truck(make: String, model: String, engine: Engine, cargo: int)\n        +getCargo() int\n        +isTransformed() boolean\n        +transform() void\n        +toString() String\n    }\n\n    class Rental {\n        -name: String #123;final#125;\n        -vehicles: ArrayList~Vehicle~ #123;final#125;\n        +Rental(name: String)\n        +getName() String\n        +getVehicles() ArrayList~Vehicle~\n        +addVehicle(vehicle: Vehicle) void\n        +addAllVehicles(vehicles: Vehicle...) void\n        +transformAllTrucks() void\n        +toString() String\n    }\n\n    class Partner {\n        <<interface>>\n        +toString() String\n    }\n\n    class TravelAgency {\n        -name: String #123;final#125;\n        -partners: ArrayList~Partner~\n        +TravelAgency(name: String)\n        +addPartner(partner: Partner) void\n        +toString() String\n    }"}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-vehicle",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"Vehicle"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void accelerate(valueInKmh: int)"})," soll den eingehenden Wert\n\xfcberpr\xfcfen. Ist der eingehende Wert kleiner als 0 soll die Ausnahme\n",(0,r.jsx)(n.code,{children:"InvalidValueException"})," ausgel\xf6st werden"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void brake(valueInKmh: int)"})," soll den eingehenden Wert\n\xfcberpr\xfcfen. Ist der eingehende Wert kleiner als 0 soll die Ausnahme\n",(0,r.jsx)(n.code,{children:"InvalidValueException"})," ausgel\xf6st werden"]}),"\n"]}),"\n",(0,r.jsx)(a.Z,{pullRequest:"49",branchSuffix:"exceptions/01"})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},97645:function(e,n,t){t.d(n,{Z:()=>s});var i=t("85893");t("67294");var r=t("67026");function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)("tabItem_Ymn6",s),hidden:t,children:n})}},58168:function(e,n,t){t.d(n,{Z:()=>v});var i=t("85893"),r=t("67294"),s=t("67026"),a=t("34718"),l=t("16550"),o=t("8714"),c=t("89207"),u=t("69413"),d=t("54510");function h(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var g=t("6735");function m(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),d=e=>{let n=e.currentTarget,t=o[c.indexOf(n)].value;t!==r&&(u(n),l(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1]}}n?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:a}=e;return(0,i.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{c.push(e)},onKeyDown:h,onClick:d,...a,className:(0,s.Z)("tabs__item","tabItem_LNqP",a?.className,{"tabs__item--active":r===n}),children:t??n},n)})})}function f(e){let{lazy:n,children:t,selectedValue:a}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===a);return e?(0,r.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,i.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))})}function x(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:i}=e,s=function(e){let{values:n,children:t}=e;return(0,r.useMemo)(()=>{let e=n??h(t).map(e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[a,g]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let i=t.find(e=>e.default)??t[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value})({defaultValue:n,tabValues:s})),[m,f]=function(e){let{queryString:n=!1,groupId:t}=e,i=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(s),(0,r.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})},[s,i])]}({queryString:t,groupId:i}),[x,v]=function(e){let{groupId:n}=e,t=n?`docusaurus.tab.${n}`:null,[i,s]=(0,d.Nk)(t);return[i,(0,r.useCallback)(e=>{t&&s.set(e)},[t,s])]}({groupId:i}),b=(()=>{let e=m??x;return p({value:e,tabValues:s})?e:null})();return(0,o.Z)(()=>{b&&g(b)},[b]),{selectedValue:a,selectValue:(0,r.useCallback)(e=>{if(!p({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);g(e),f(e),v(e)},[f,v,s]),tabValues:s}}(e);return(0,i.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList__CuJ"),children:[(0,i.jsx)(m,{...n,...e}),(0,i.jsx)(f,{...n,...e})]})}function v(e){let n=(0,g.Z)();return(0,i.jsx)(x,{...e,children:h(e.children)},String(n))}},17490:function(e,n,t){t.d(n,{Z:function(){return o}});var i=t(85893);t(67294);var r=t(58168),s=t(97645),a=t(53367),l=t(31705);function o(e){let{pullRequest:n,branchSuffix:t}=e;return(0,i.jsxs)(r.Z,{children:[(0,i.jsxs)(s.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch exercises/${t}`}),(0,i.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(s.Z,{value:"solution",label:"Solution",children:[(0,i.jsx)(l.Z,{language:"console",children:`git switch solutions/${t}`}),(0,i.jsx)(a.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(s.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(a.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);