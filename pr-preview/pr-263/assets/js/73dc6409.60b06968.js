"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7568"],{83500:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>t});var r=JSON.parse('{"id":"exam-exercises/exam-exercises-java2/class-diagrams/corner-shop","title":"Tante-Emma-Laden","description":"","source":"@site/docs/exam-exercises/exam-exercises-java2/class-diagrams/corner-shop.md","sourceDirName":"exam-exercises/exam-exercises-java2/class-diagrams","slug":"/exam-exercises/exam-exercises-java2/class-diagrams/corner-shop","permalink":"/java-docs/pr-preview/pr-263/exam-exercises/exam-exercises-java2/class-diagrams/corner-shop","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/class-diagrams/corner-shop.md","tags":[{"inline":true,"label":"inheritance","permalink":"/java-docs/pr-preview/pr-263/tags/inheritance"},{"inline":true,"label":"polymorphism","permalink":"/java-docs/pr-preview/pr-263/tags/polymorphism"},{"inline":true,"label":"interfaces","permalink":"/java-docs/pr-preview/pr-263/tags/interfaces"},{"inline":true,"label":"comparators","permalink":"/java-docs/pr-preview/pr-263/tags/comparators"},{"inline":true,"label":"exceptions","permalink":"/java-docs/pr-preview/pr-263/tags/exceptions"},{"inline":true,"label":"records","permalink":"/java-docs/pr-preview/pr-263/tags/records"},{"inline":true,"label":"maps","permalink":"/java-docs/pr-preview/pr-263/tags/maps"}],"version":"current","frontMatter":{"title":"Tante-Emma-Laden","description":"","tags":["inheritance","polymorphism","interfaces","comparators","exceptions","records","maps"]},"sidebar":"examExercisesSidebar","previous":{"title":"Klassendiagramme","permalink":"/java-docs/pr-preview/pr-263/exam-exercises/exam-exercises-java2/class-diagrams/"},"next":{"title":"W\xf6rterbuch","permalink":"/java-docs/pr-preview/pr-263/exam-exercises/exam-exercises-java2/class-diagrams/dictionary"}}'),i=s("85893"),a=s("50065");let o={title:"Tante-Emma-Laden",description:"",tags:["inheritance","polymorphism","interfaces","comparators","exceptions","records","maps"]},t=void 0,l={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>Goods</em>",id:"hinweis-zur-klasse-goods",level:2},{value:"Hinweise zur Klasse <em>CornerShop</em>",id:"hinweise-zur-klasse-cornershop",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,i.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n    Product <|-- Goods : extends\n    CornerShop o-- Goods\n    Goods ..|> Comparable~Goods~ : implements\n    Goods o-- ClassOfGoods\n\n    class Product {\n        <<abstract>>\n        -description: String #123;final#125;\n        -price: double\n        -currency: String\n        +Product(description: String, price: double, currency: String)\n    }\n\n    class Goods {\n        -classOfGoods: ClassOfGoods #123;final#125;\n        -unit: String #123;final#125;\n        +Goods(description: String, price: double, currency: String, classOfGoods: ClassOfGoods, unit: String)\n        +compareTo(other: Goods) int\n    }\n\n    class Comparable~Goods~ {\n        <<interface>>\n        +compareTo(o: Goods) int\n    }\n\n    class CornerShop {\n        <<record>>\n        name: String\n        store: Map~Goods, Integer~\n        +getAmountByDescription(description: String) Optional~Integer~\n        +buyGoods(goods: Goods, amount: int) void\n        +sellGoods(goods: Goods, amount: int) void\n    }\n\n    class ClassOfGoods {\n        <<enumeration>>\n        BAKERY_PRODUCTS = Backwaren\n        DAIRY_PRODUCTS = Milchprodukte\n        FRUITS = Obst\n        VEGETABLES = Gem\xfcse\n        -description: String #123;final#125;\n    }"}),"\n",(0,i.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,i.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"hinweis-zur-klasse-goods",children:["Hinweis zur Klasse ",(0,i.jsx)(n.em,{children:"Goods"})]}),"\n",(0,i.jsxs)(n.p,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"int compareTo(other: Goods)"})," soll so implementiert werden, dass\ndamit Waren aufsteigend nach ihrer Beschreibung sortiert werden k\xf6nnen."]}),"\n",(0,i.jsxs)(n.h2,{id:"hinweise-zur-klasse-cornershop",children:["Hinweise zur Klasse ",(0,i.jsx)(n.em,{children:"CornerShop"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"Optional<Integer> getAmountByDescription(description: String)"}),"\nsoll die Anzahl Waren zur eingehenden Warenbeschreibung als Optional\nzur\xfcckgeben"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void buyGoods(goods: Goods, amount: int)"})," soll die eingehende\nWare im Lager (",(0,i.jsx)(n.code,{children:"store"}),") um die eingehende Anzahl erh\xf6hen"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void sellGoods(goods: Goods, amount: int)"})," soll die eingehende\nWare im Lager (",(0,i.jsx)(n.code,{children:"store"}),") um die eingehende Anzahl reduzieren. F\xfcr den Fall,\ndass keine ausreichende Anzahl an Waren vorhanden ist, soll die Ausnahme\n",(0,i.jsx)(n.code,{children:"OutOfStockException"})," ausgel\xf6st werden"]}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return o}});var r=s(67294);let i={},a=r.createContext(i);function o(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);