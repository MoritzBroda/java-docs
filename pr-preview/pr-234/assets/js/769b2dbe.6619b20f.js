"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["5195"],{57518:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>t,default:()=>m,assets:()=>d,toc:()=>c,frontMatter:()=>l});var i=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/class-diagrams/christmas-tree","title":"Weihnachtsbaum","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/class-diagrams/christmas-tree.md","sourceDirName":"exam-exercises/exam-exercises-java1/class-diagrams","slug":"/exam-exercises/exam-exercises-java1/class-diagrams/christmas-tree","permalink":"/java-docs/pr-preview/pr-234/exam-exercises/exam-exercises-java1/class-diagrams/christmas-tree","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/class-diagrams/christmas-tree.md","tags":[{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-234/tags/oo"},{"inline":true,"label":"inheritance","permalink":"/java-docs/pr-preview/pr-234/tags/inheritance"},{"inline":true,"label":"polymorphism","permalink":"/java-docs/pr-preview/pr-234/tags/polymorphism"}],"version":"current","frontMatter":{"title":"Weihnachtsbaum","description":"","tags":["oo","inheritance","polymorphism"]},"sidebar":"examExercisesSidebar","previous":{"title":"Kassensystem","permalink":"/java-docs/pr-preview/pr-234/exam-exercises/exam-exercises-java1/class-diagrams/cashier-system"},"next":{"title":"Pl\xe4tzchendose","permalink":"/java-docs/pr-preview/pr-234/exam-exercises/exam-exercises-java1/class-diagrams/cookie-jar"}}'),r=s("85893"),a=s("50065");let l={title:"Weihnachtsbaum",description:"",tags:["oo","inheritance","polymorphism"]},t=void 0,d={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>ChristmasTree</em>",id:"hinweise-zur-klasse-christmastree",level:2},{value:"Hinweise zur Klasse <em>Candle</em>",id:"hinweise-zur-klasse-candle",level:2},{value:"Hinweise zur Klasse <em>ElectricCandle</em>",id:"hinweise-zur-klasse-electriccandle",level:2}];function o(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse."}),"\n",(0,r.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    Candle <|-- ElectricCandle : extends\n    ChristmasTree o-- Candle\n\n    class ChristmasTree {\n        -type: String #123;final#125;\n        -sizeInM: double #123;final#125;\n        -candles: List~Candle~ #123;final#125;\n        +ChristmasTree(type: String, sizeInM: double)\n        +addCandle(candle: Candle) void\n        +lightChristmasTree() void\n        +getNumberOfElectricCandles() int\n\n    }\n\n    class Candle {\n        #isBurning: boolean\n        -colour: String #123;final#125;\n        +Candle(colour: String)\n        +lightACandle() void\n        +turnOffACandle() void\n    }\n\n    class ElectricCandle {\n        -powerInPercent: int\n        +ElectricCandle(colour: String)\n        +lightACandle() void\n        +recharge() void\n    }"}),"\n",(0,r.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,r.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-christmastree",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"ChristmasTree"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void addCandle(candle: Candle)"})," soll der Kerzenliste (",(0,r.jsx)(n.code,{children:"candles"}),")\ndie eingehende Kerze hinzuf\xfcgen"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void lightChristmasTree()"}),' soll alle Kerzen "entz\xfcnden"']}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"int getNumberOfElectricCandles()"})," soll die Anzahl elektrischer\nKerzen zur\xfcckgeben"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-candle",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"Candle"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void lightACandle()"}),' soll die Kerze "entz\xfcnden"']}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void turnOffACandle()"}),' soll die Kerze "ausmachen"']}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-electriccandle",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"ElectricCandle"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Der Konstruktor soll die Energie (",(0,r.jsx)(n.code,{children:"powerInPercent"}),") auf den Wert ",(0,r.jsx)(n.em,{children:"100"})," setzen"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void lightACandle()"}),' soll die elektrische Kerze "entz\xfcnden", wenn\ndiese noch \xfcber Energie verf\xfcgt und die Energie um den Wert ',(0,r.jsx)(n.em,{children:"10"})," reduzieren"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void recharge()"})," soll die Energie der elektrische Kerze wieder\nauf den Wert ",(0,r.jsx)(n.em,{children:"100"})," setzen"]}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return l}});var i=s(67294);let r={},a=i.createContext(r);function l(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);