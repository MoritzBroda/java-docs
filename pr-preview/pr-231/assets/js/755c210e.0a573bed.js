"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["9684"],{43242:function(e,n,a){a.r(n),a.d(n,{metadata:()=>r,contentTitle:()=>t,default:()=>g,assets:()=>d,toc:()=>o,frontMatter:()=>l});var r=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/class-diagrams/parking-garage","title":"Tiefgarage","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/class-diagrams/parking-garage.md","sourceDirName":"exam-exercises/exam-exercises-java1/class-diagrams","slug":"/exam-exercises/exam-exercises-java1/class-diagrams/parking-garage","permalink":"/java-docs/pr-preview/pr-231/exam-exercises/exam-exercises-java1/class-diagrams/parking-garage","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/class-diagrams/parking-garage.md","tags":[{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-231/tags/oo"},{"inline":true,"label":"inheritance","permalink":"/java-docs/pr-preview/pr-231/tags/inheritance"},{"inline":true,"label":"polymorphism","permalink":"/java-docs/pr-preview/pr-231/tags/polymorphism"}],"version":"current","frontMatter":{"title":"Tiefgarage","description":"","tags":["oo","inheritance","polymorphism"]},"sidebar":"examExercisesSidebar","previous":{"title":"Geschenkesack","permalink":"/java-docs/pr-preview/pr-231/exam-exercises/exam-exercises-java1/class-diagrams/gift-bag"},"next":{"title":"Geometrische Form","permalink":"/java-docs/pr-preview/pr-231/exam-exercises/exam-exercises-java1/class-diagrams/shape"}}'),i=a("85893"),s=a("50065");let l={title:"Tiefgarage",description:"",tags:["oo","inheritance","polymorphism"]},t=void 0,d={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>ParkingGarage</em>",id:"hinweise-zur-klasse-parkinggarage",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse."}),"\n",(0,i.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n    ParkingGarage o-- ParkingSpot\n    ParkingSpot o-- Vehicle\n    Vehicle <|-- Car : extends\n    Vehicle <|-- Bus : extends\n\n    class ParkingSpot {\n        -vehicle: Vehicle #123;final#125;\n        -lengthInM: double #123;final#125;\n        -heightInM: double #123;final#125;\n        -isForBusesOnly: boolean #123;final#125;\n        +ParkingSpot(lengthInM: double, heightInM: double, isForBusesOnly: boolean)\n        +setVehicle(vehicle: Vehicle) void\n    }\n\n    class Vehicle {\n        -make: String #123;final#125;\n        -model: String #123;final#125;\n        -lengthInM: double #123;final#125;\n        -heightInM: double #123;final#125;\n        +Vehicle(make: String, model: String, lengthInM: double, heightInM: double)\n    }\n\n    class Car {\n        +Car(make: String, model: String, lengthInM: double, heightInM: double)\n    }\n\n    class Bus {\n        +Bus(make: String, model: String, lengthInM: double, heightInM: double)\n    }\n\n    class ParkingGarage {\n        -parkingSpots: ParkingSpot[] #123;final#125;\n        +ParkingGarage(numberOfParkingSpots: int)\n        +parkIn(car: Car, parkingSpotNumber: int) String\n        +parkOut(car: Car) String\n        +getNextFreeParkingSpotNumber() int\n    }"}),"\n",(0,i.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,i.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"hinweise-zur-klasse-parkinggarage",children:["Hinweise zur Klasse ",(0,i.jsx)(n.em,{children:"ParkingGarage"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"String parkIn(car: Car, parkingSpotNumber: int)"})," soll das\neingehende Fahrzeug dem Parkplatz mit der eingehenden Parkplatznummer zuweisen\nund eine enstprechende Erfolgsmeldung zur\xfcckgegeben. F\xfcr den Fall, dass der\nParkplatz bereits besetzt ist, oder dass es sich bei dem eingehenden Fahrzeug\num ein Auto handelt, der Parkplatz aber nur f\xfcr Busse ist, oder dass der\nParkplatz zu klein ist, soll eine entsprechende Fehlermeldung zur\xfcckgegeben\nwerden"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"String parkOut(car: Car)"}),' soll das eingehende Fahrzeug\n"ausparken" und eine enstsprechende Erfolgsmeldung zur\xfcckgeben. F\xfcr den Fall,\ndass das Fahrzeug in der Tiefgarage nicht vorhanden ist, soll eine\nentsprechende Fehlermeldung zur\xfcckgegeben werden']}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"int getNextFreeParkingSpotNumber()"})," soll die Nummer des n\xe4chsten\nfreien Parkplatzes zur\xfcckgeben"]}),"\n"]})]})}function g(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return t},a:function(){return l}});var r=a(67294);let i={},s=r.createContext(i);function l(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);