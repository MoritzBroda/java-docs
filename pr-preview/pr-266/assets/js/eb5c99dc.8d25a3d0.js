"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2648"],{17214:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>i,assets:()=>d,toc:()=>l,contentTitle:()=>o});var i=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/class-diagrams/cashier-system","title":"Kassensystem","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/class-diagrams/cashier-system.md","sourceDirName":"exam-exercises/exam-exercises-java1/class-diagrams","slug":"/exam-exercises/exam-exercises-java1/class-diagrams/cashier-system","permalink":"/java-docs/pr-preview/pr-266/exam-exercises/exam-exercises-java1/class-diagrams/cashier-system","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/class-diagrams/cashier-system.md","tags":[{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-266/tags/oo"},{"inline":true,"label":"enumerations","permalink":"/java-docs/pr-preview/pr-266/tags/enumerations"},{"inline":true,"label":"inheritance","permalink":"/java-docs/pr-preview/pr-266/tags/inheritance"},{"inline":true,"label":"polymorphism","permalink":"/java-docs/pr-preview/pr-266/tags/polymorphism"}],"version":"current","frontMatter":{"title":"Kassensystem","description":"","tags":["oo","enumerations","inheritance","polymorphism"]},"sidebar":"examExercisesSidebar","previous":{"title":"Kartenausteiler","permalink":"/java-docs/pr-preview/pr-266/exam-exercises/exam-exercises-java1/class-diagrams/cards-dealer"},"next":{"title":"Weihnachtsbaum","permalink":"/java-docs/pr-preview/pr-266/exam-exercises/exam-exercises-java1/class-diagrams/christmas-tree"}}'),r=s("85893"),a=s("50065");let t={title:"Kassensystem",description:"",tags:["oo","enumerations","inheritance","polymorphism"]},o=void 0,d={},l=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>Item</em>",id:"hinweis-zur-klasse-item",level:2},{value:"Hinweise zur Klasse <em>ShoppingCart</em>",id:"hinweise-zur-klasse-shoppingcart",level:2},{value:"Hinweise zur Klasse <em>CashierSystem</em>",id:"hinweise-zur-klasse-cashiersystem",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse."}),"\n",(0,r.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    Product <|-- Goods : extends\n    Item o-- Goods\n    ShoppingCart o-- Item\n    Goods o-- ClassOfGoods\n    Goods --o CashierSystem\n    CashierSystem o-- Cashier\n    ShoppingCart --o CashierSystem\n\n    class Product {\n        -id: int #123;final#125;\n        -description: String #123;final#125;\n        -unit: String\n        -priceInEuro: double\n        +Product(id: int, description: String, unit: String, priceInEuro: double)\n        +setPriceInEuro(priceInEuro: double) void\n    }\n\n    class Goods {\n        -classOfGoods: ClassOfGoods #123;final#125;\n        +Goods(id: int, description: String, unit: String, priceInEuro: double, classOfGoods: ClassOfGoods)\n    }\n\n    class Item {\n        -goods: Goods #123;final#125;\n        -amount: int\n        +Item(goods: Goods, amount: int)\n        +setAmount(amount: int) void\n        +getSubTotalInEuro() double\n    }\n\n    class ShoppingCart {\n        -items: List~Item~ #123;final#125;\n        +ShoppingCart()\n        +createItem(goods: Goods, amount: int) void\n        +getTotalInEuro() double\n    }\n\n    class ClassOfGoods {\n        <<enumeration>>\n        BAKERY_PRODUCTS = Backwaren\n        DAIRY_PRODUCTS = Milchprodukte\n        FRUITS = Obst\n        VEGETABLES = Gem\xfcse\n        -description: String #123;final#125;\n    }\n\n    class CashierSystem {\n        -name: String #123;final#125;\n        -goods: List~Goods~ #123;final#125;\n        -cashiers: List~Cashier~ #123;final#125;\n        -shoppingCart: ShoppingCart\n        -cashier: Cashier\n        +CashierSystem(name: String)\n        +addGoods(goods: Goods) void\n        +addCashier(cahier: Cashier) void\n        +login(id: int) void\n        +createShoppingCart() void\n        +addItem(id: int, amount: int) void\n        +printBon() void\n    }\n\n    class Cashier {\n        -id: int #123;final#125;\n        -name: String #123;final#125;\n        +Cashier(name: String, id: int)\n    }"}),"\n",(0,r.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,r.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweis-zur-klasse-item",children:["Hinweis zur Klasse ",(0,r.jsx)(n.em,{children:"Item"})]}),"\n",(0,r.jsxs)(n.p,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"double getSubTotalInEuro()"})," soll die Zwischensumme als Produkt aus\nder Anzahl und dem Preis zur\xfcckgeben."]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-shoppingcart",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"ShoppingCart"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void createItem(goods: Goods, amount: int)"})," soll den Eintr\xe4gen\ndes Warenkorbs (",(0,r.jsx)(n.code,{children:"items"}),") die eingehende Ware und die eingehende Anzahl als\nEintrag hinzuf\xfcgen"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"double getTotalInEuro()"})," soll die Gesamtsumme zur\xfcckgeben"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-cashiersystem",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"CashierSystem"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void addGoods(goods: Goods)"})," soll der Warenliste (",(0,r.jsx)(n.code,{children:"goods"}),") die\neingehende Ware hinzuf\xfcgen"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void addCashier(cashier: Cashier)"})," soll der Kassiererliste\n(",(0,r.jsx)(n.code,{children:"cashiers"}),") den eingehenden Kassierer hinzuf\xfcgen"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void login(id: int)"}),' soll den Kassierer zur eingehenden\nKassierernummer an der Kasse "registrieren"']}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void createShoppingCart()"})," soll an der Kasse einen neuen\nWarenkorb erstellen"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void addItem(id: int, amount: int)"})," soll dem Warenkorb\n(",(0,r.jsx)(n.code,{children:"shoppingCart"}),") anhand der eingehenden Produktnummer und anhand der\neingehenden Anzahl einen neuen Warenkorbeintrag hinzuf\xfcgen"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void printBon()"})," soll alle relevanten Informationen zum Warenkorb\nauf der Konsole ausgeben"]}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return t}});var i=s(67294);let r={},a=i.createContext(r);function t(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);