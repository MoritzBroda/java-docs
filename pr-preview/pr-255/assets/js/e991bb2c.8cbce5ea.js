"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["3559"],{34809:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>d,toc:()=>u,contentTitle:()=>c});var i=JSON.parse('{"id":"documentation/coding","title":"Programmieren","description":"","source":"@site/docs/documentation/coding.mdx","sourceDirName":"documentation","slug":"/documentation/coding","permalink":"/java-docs/pr-preview/pr-255/documentation/coding","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/coding.mdx","tags":[{"inline":true,"label":"coding","permalink":"/java-docs/pr-preview/pr-255/tags/coding"}],"version":"current","sidebarPosition":10,"frontMatter":{"title":"Programmieren","description":"","sidebar_position":10,"tags":["coding"]},"sidebar":"documentationSidebar","previous":{"title":"Einf\xfchrung","permalink":"/java-docs/pr-preview/pr-255/"},"next":{"title":"Git","permalink":"/java-docs/pr-preview/pr-255/documentation/git"}}'),t=r("85893"),a=r("50065"),s=r("58168"),l=r("97645");let o={title:"Programmieren",description:"",sidebar_position:10,tags:["coding"]},c=void 0,d={},u=[{value:"Programmierparadigmen",id:"programmierparadigmen",level:2},{value:"Programmausf\xfchrung",id:"programmausf\xfchrung",level:2},{value:"Programmiersprachen",id:"programmiersprachen",level:2}];function m(e){let n={a:"a",admonition:"admonition",em:"em",h2:"h2",mermaid:"mermaid",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Als ein Teilbereich der Softwareentwicklung umfasst das Programmieren vor allem\ndie Umsetzung eines Softwareentwurfes in Quellcode. Generell versteht man unter\nProgrammieren die Umsetzung von ",(0,t.jsx)(n.a,{href:"algorithms",children:"Algorithmen"})," in lauff\xe4hige\nComputer-Programme."]}),"\n",(0,t.jsx)(n.mermaid,{value:"flowchart LR\n   Analyse --\x3e Entwurf --\x3e Umsetzung --\x3e Auslieferung --\x3e Wartung --\x3e Analyse"}),"\n",(0,t.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,t.jsx)(n.p,{children:"Ein Algorithmus ist eine Handlungsvorschrift zur L\xf6sung eines Problems."})}),"\n",(0,t.jsx)(n.h2,{id:"programmierparadigmen",children:"Programmierparadigmen"}),"\n",(0,t.jsx)(n.p,{children:"Unter einem Programmierparadigma versteht man die grundlegende Herangehensweise,\nProbleme mit Hilfe einer Programmiersprache zu l\xf6sen. Aber auuch wenn\nProgrammiersprachen oft anhand ihrer grundlegenden Merkmale genau einem\nProgrammierparadigma zugeordnet werden, unterst\xfctzen viele Programmiersprachen\nmehrere Programmierparadigmen."}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsxs)(l.Z,{value:"a",label:"Imperative Programmierung",default:!0,children:[(0,t.jsx)(n.p,{children:"Bei der imperativen Programmierung bestehen Programme aus verzweigten und sich\nwiederholenden Folgen von Anweisungen, die den Programmablauf steuern."}),(0,t.jsx)(n.mermaid,{value:'stateDiagram-v2\n   state "Ausgabe: Zahl gr\xf6\xdfer Null eingeben" as activity1\n   state "Eingabe: Zahl" as activity2\n   state "Ausgabe: Zahl ist nicht gr\xf6\xdfer Null" as activity3\n   state "Ausgabe: Zahl ist gr\xf6\xdfer Null" as activity4\n   state if <<choice>>\n   [*] --\x3e activity1\n   activity1--\x3e activity2\n   activity2 --\x3e if\n   if --\x3e activity3 : Zahl kleiner gleich Null\n   if --\x3e activity4 : Zahl gr\xf6\xdfer Null\n   activity3 --\x3e activity1\n   activity4 --\x3e [*]'})]}),(0,t.jsxs)(l.Z,{value:"b",label:"Deklarative Programmierung",children:[(0,t.jsx)(n.p,{children:'Die deklarative Programmierung stellt einen Gegenentwurf zur imperativen\nProgrammierung dar, bei der nicht das "Wie", sondern das "Was" im Vordergrund\nsteht.'}),(0,t.jsx)(n.mermaid,{value:"flowchart TD\n   subgraph Ausgangsmenge\n      direction LR\n      p1 -.- p2 -.- p3 -.- p4\n      p1(Hans, 42, m, Stuttgart)\n      p2(Peter, 17, m, Freiburg)\n      p3(Lisa, 19, w, Berlin)\n      p4(Maria, 33, w, Freiburg)\n   end\n   subgraph Ergebnismenge\n      direction LR\n      p5 -.- p6\n      p5(Maria, 33)\n      p6(Peter, 17)\n   end\n   Ausgangsmenge --\x3e|\"SELECT Name, Age FROM Person WHERE City = 'Freiburg' ORDER BY Name\"| Ergebnismenge"})]}),(0,t.jsxs)(l.Z,{value:"c",label:"Objektorientierte Programmierung",children:[(0,t.jsx)(n.p,{children:"Die ojektorientierte Programmierung baut auf der imperativen Programmierung auf,\nsetzt den Fokus aber auf abstrakte Datentypen und die Verbindung von Daten und\nRoutinen."}),(0,t.jsx)(n.mermaid,{value:"classDiagram\n   Person --o Team\n   class Person {\n     -name String\n      +Person(name String)\n      +name() String\n   }\n   class Team {\n      -members List~Person~\n      +addMember(person Person) void\n      +members() List~Person~\n   }"})]})]}),"\n",(0,t.jsx)(n.h2,{id:"programmausf\xfchrung",children:"Programmausf\xfchrung"}),"\n",(0,t.jsx)(n.p,{children:"Programme auf einem Computer k\xf6nnen auf unterschiedliche Arten ausgef\xfchrt\nwerden: Compilersprachen \xfcbersetzen den Quellcode in eine Datei, die vom\njeweiligen Betriebssystem ausgef\xfchrt werden kann, Interpretersprachen \xfcbersetzen\nden Quellcode direkt in den Arbeitsspeicher und f\xfchren das Programm sofort aus\nund Just-In-Time Compilersprachen (JIT) \xfcbersetzen den Quellcode mit Hilfe eines\nCompilers zun\xe4chst in den sogenannten Bytecode und \xfcbersetzen diesen bei der\nAusf\xfchrung in den Arbeitsspeicher. Compilersprachen wie z.B. C++ sind dabei\ndeutlich performanter und erm\xf6glichen eine sicherere Entwicklung,\nInterpretersprachen wie z.B. PHP sind dagegen plattformunabh\xe4ngig und\nJust-In-Time Compliersprachen vereinen die Vorteile von beiden."}),"\n",(0,t.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,t.jsxs)(n.p,{children:["In Java wird der Interpreter als ",(0,t.jsx)(n.em,{children:"Java Virtual Machine"})," bezeichnet."]})}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(l.Z,{value:"a",label:"Compilersprachen",default:!0,children:(0,t.jsx)(n.mermaid,{value:"flowchart LR\n   sourcecode[Quellcode]@{ shape: doc }\n   machinecode[Maschinencode]@{ shape: doc }\n   compiler[Compiler]\n   cpu[CPU]\n   subgraph Entwicklungszeit\n      sourcecode -.-> compiler -.-> machinecode\n   end\n   subgraph Laufzeit\n      cpu\n   end\n   machinecode -.-> cpu"})}),(0,t.jsx)(l.Z,{value:"b",label:"Interpretersprachen",children:(0,t.jsx)(n.mermaid,{value:"flowchart LR\n   sourcecode[Quellcode]@{ shape: doc }\n   interpreter[Interpreter]\n   cpu[CPU]\n   subgraph Entwicklungszeit\n      sourcecode\n   end\n   subgraph Laufzeit\n      interpreter -.-> cpu\n   end\n   sourcecode -.-> interpreter"})}),(0,t.jsx)(l.Z,{value:"c",label:"Just-In-Time Compilersprachen",children:(0,t.jsx)(n.mermaid,{value:"flowchart LR\n   sourcecode[Quellcode]@{ shape: doc }\n   bytecode[Bytecode]@{ shape: doc }\n   compiler[Compiler]\n   interpreter[Interpreter]\n   cpu[CPU]\n   subgraph Entwicklungszeit\n      sourcecode -.-> compiler -.-> bytecode\n   end\n   subgraph Laufzeit\n      interpreter -.-> cpu\n   end\n   bytecode -.-> interpreter"})})]}),"\n",(0,t.jsx)(n.h2,{id:"programmiersprachen",children:"Programmiersprachen"}),"\n",(0,t.jsxs)(n.p,{children:["Maschinen sind im Vergleich zu menschlichen Gehirnen sehr primitive Gebilde. Die\nDiskrepanz zwischen der menschlichen Denkweise und der Arbeitsweise von\nMaschinen bezeichnet mal als ",(0,t.jsx)(n.em,{children:"Semantische L\xfccke"}),". Programmiersprachen\nerm\xf6glichen es, Problemstellungen der realen Welt abstrahiert und\nmaschinengerecht abzubilden und damit die Semantische L\xfccke zu verringern. Je\nh\xf6her die Abstraktion einer Programmiersprache dabei ist, desto mehr kann die\nSemantische L\xfccke verringert werden: Maschinenorientierte Programmiersprachen\n(wie z.B. Assembler) abstrahieren kaum und sind daher f\xfcr den Menschen schwerer\nverst\xe4ndlich, problemorientierte Programmiersprachen (wie z.B. Java)\nabstrahieren stark und sind daher f\xfcr den Menschen leichter verst\xe4ndlich."]}),"\n",(0,t.jsx)(n.p,{children:"Die Programmiersprachen Java, Python und JavaScript geh\xf6ren zu den am weitesten\nverbreiteten bzw. beliebtesten Programmiersprachen."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"TIOBE"}),(0,t.jsx)(n.th,{children:"RedMonk"}),(0,t.jsx)(n.th,{children:"PYPL"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Python"}),(0,t.jsx)(n.td,{children:"JavaScript"}),(0,t.jsx)(n.td,{children:"Python"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"C"}),(0,t.jsx)(n.td,{children:"Python"}),(0,t.jsx)(n.td,{children:"Java"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"C++"}),(0,t.jsx)(n.td,{children:"Java"}),(0,t.jsx)(n.td,{children:"JavaScript"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Java"}),(0,t.jsx)(n.td,{children:"PHP"}),(0,t.jsx)(n.td,{children:"C/C++"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"C#"}),(0,t.jsx)(n.td,{children:"C++"}),(0,t.jsx)(n.td,{children:"C#"})]})]})]}),"\n",(0,t.jsx)(n.admonition,{title:"Quellen",type:"note",children:(0,t.jsx)(n.p,{children:"Tiobe Programming Community Index Januar 2024, RedMonk Programming Language\nRankings Januar 2023, PopularitY of Programming Language Januar 2024"})})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},97645:function(e,n,r){r.d(n,{Z:()=>a});var i=r("85893");r("67294");var t=r("67026");function a(e){let{children:n,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)("tabItem_Ymn6",a),hidden:r,children:n})}},58168:function(e,n,r){r.d(n,{Z:()=>v});var i=r("85893"),t=r("67294"),a=r("67026"),s=r("34718"),l=r("16550"),o=r("8714"),c=r("89207"),d=r("69413"),u=r("54510");function m(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var p=r("6735");function g(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),u=e=>{let n=e.currentTarget,r=o[c.indexOf(n)].value;r!==t&&(d(n),l(r))},m=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{let r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1]}}n?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:o.map(e=>{let{value:n,label:r,attributes:s}=e;return(0,i.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{c.push(e)},onKeyDown:m,onClick:u,...s,className:(0,a.Z)("tabs__item","tabItem_LNqP",s?.className,{"tabs__item--active":t===n}),children:r??n},n)})})}function b(e){let{lazy:n,children:r,selectedValue:s}=e,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===s);return e?(0,t.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,i.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s}))})}function f(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:i}=e,a=function(e){let{values:n,children:r}=e;return(0,t.useMemo)(()=>{let e=n??m(r).map(e=>{let{props:{value:n,label:r,attributes:i,default:t}}=e;return{value:n,label:r,attributes:i,default:t}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[s,p]=(0,t.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let i=r.find(e=>e.default)??r[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value})({defaultValue:n,tabValues:a})),[g,b]=function(e){let{queryString:n=!1,groupId:r}=e,i=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c._X)(a),(0,t.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})},[a,i])]}({queryString:r,groupId:i}),[f,v]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[i,a]=(0,u.Nk)(r);return[i,(0,t.useCallback)(e=>{r&&a.set(e)},[r,a])]}({groupId:i}),j=(()=>{let e=g??f;return h({value:e,tabValues:a})?e:null})();return(0,o.Z)(()=>{j&&p(j)},[j]),{selectedValue:s,selectValue:(0,t.useCallback)(e=>{if(!h({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);p(e),b(e),v(e)},[b,v,a]),tabValues:a}}(e);return(0,i.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList__CuJ"),children:[(0,i.jsx)(g,{...n,...e}),(0,i.jsx)(b,{...n,...e})]})}function v(e){let n=(0,p.Z)();return(0,i.jsx)(f,{...e,children:m(e.children)},String(n))}},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return s}});var i=r(67294);let t={},a=i.createContext(t);function s(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);