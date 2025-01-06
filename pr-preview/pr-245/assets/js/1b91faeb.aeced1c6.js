"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2736"],{10125:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>u,assets:()=>d,toc:()=>a,frontMatter:()=>o});var t=JSON.parse('{"id":"exercises/unit-tests/unit-tests03","title":"UnitTests03","description":"","source":"@site/docs/exercises/unit-tests/unit-tests03.md","sourceDirName":"exercises/unit-tests","slug":"/exercises/unit-tests/unit-tests03","permalink":"/java-docs/pr-preview/pr-245/exercises/unit-tests/unit-tests03","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/unit-tests/unit-tests03.md","tags":[],"version":"current","frontMatter":{"title":"UnitTests03","description":""},"sidebar":"exercisesSidebar","previous":{"title":"UnitTests02","permalink":"/java-docs/pr-preview/pr-245/exercises/unit-tests/unit-tests02"},"next":{"title":"UnitTests04","permalink":"/java-docs/pr-preview/pr-245/exercises/unit-tests/unit-tests04"}}'),i=s("85893"),r=s("50065");let o={title:"UnitTests03",description:""},l=void 0,d={},a=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>TelephoneBookTest</em>",id:"hinweise-zur-klasse-telephonebooktest",level:2},{value:"Hinweis",id:"hinweis",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Erstelle die JUnit5-Testklasse ",(0,i.jsx)(n.code,{children:"TelephoneBookTest"})," anhand des abgebildeten\nKlassendiagramms."]}),"\n",(0,i.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n    TelephoneBook o-- Person\n    TelephoneBook o-- TelephoneNumber\n    TelephoneBookTest o-- TelephoneBook\n\n    class Person {\n        <<record>>\n        name: String\n    }\n\n    class TelephoneNumber {\n        <<record>>\n        value: String\n    }\n\n    class TelephoneBook {\n        <<record>>\n        entries: Map~Person, TelephoneNumber~\n        +addEntry(person: Person, telephoneNumber: TelephoneNumber) void\n        +getTelephoneNumberByName(name: String) Optional~TelephoneNumber~\n    }\n\n    class TelephoneBookTest {\n        <<test>>\n        -telephoneBook: TelephoneBook\n        +setUp() void\n        +testAddEntry() void\n        +testGetTelephoneNumberByName1() void\n        +testGetTelephoneNumberByName2() void\n    }"}),"\n",(0,i.jsxs)(n.h2,{id:"hinweise-zur-klasse-telephonebooktest",children:["Hinweise zur Klasse ",(0,i.jsx)(n.em,{children:"TelephoneBookTest"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Die Lebenszyklus-Methode ",(0,i.jsx)(n.code,{children:"void setUp()"})," soll ein Telefonbuch samt\ndazugeh\xf6riger Eintr\xe4ge erzeugen"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Testmethode ",(0,i.jsx)(n.code,{children:"void testAddEntry()"})," soll pr\xfcfen, ob nach dem Ausf\xfchren der\nMethode ",(0,i.jsx)(n.code,{children:"void addEntry(person: Person, telephoneNumber: TelephoneNumber)"})," mit\neiner Person, zu der es bereits einen Eintrag im Telefonbuch gibt, die\nTelefonnummer aktualisiert wurde"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Testmethode ",(0,i.jsx)(n.code,{children:"void testGetTelephoneNumberByName1()"})," soll pr\xfcfen, ob beim\nAusf\xfchren der Methode\n",(0,i.jsx)(n.code,{children:"Optional<TelephoneNumber> getTelephoneNumberByName(name: String)"})," mit einem\nNamen, zu dem es eine entsprechende Person im Telefonbuch gibt, die\ndazugeh\xf6rige Telefonnummer als Optional zur\xfcckgegeben wird"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Testmethode ",(0,i.jsx)(n.code,{children:"void testGetTelephoneNumberByName2()"})," soll pr\xfcfen, ob beim\nAusf\xfchren der Methode\n",(0,i.jsx)(n.code,{children:"Optional<TelephoneNumber> getTelephoneNumberByName(name: String)"})," mit einem\nNamen, zu dem es keine entsprechende Person im Telefonbuch gibt, ein leeres\nOptional zur\xfcckgegeben wird"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"hinweis",children:"Hinweis"}),"\n",(0,i.jsxs)(n.p,{children:["Verweden die Klasse ",(0,i.jsx)(n.code,{children:"TelephoneBook"})," aus \xdcbungsaufgabe\n",(0,i.jsx)(n.a,{href:"../optionals/optionals02",children:"Optionals02"}),"."]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return o}});var t=s(67294);let i={},r=t.createContext(i);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);