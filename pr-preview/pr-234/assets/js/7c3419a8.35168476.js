"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["4196"],{99624:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>t});var r=JSON.parse('{"id":"exam-exercises/exam-exercises-java2/queries/phone-store","title":"Smartphone-Shop","description":"","source":"@site/docs/exam-exercises/exam-exercises-java2/queries/phone-store.md","sourceDirName":"exam-exercises/exam-exercises-java2/queries","slug":"/exam-exercises/exam-exercises-java2/queries/phone-store","permalink":"/java-docs/pr-preview/pr-234/exam-exercises/exam-exercises-java2/queries/phone-store","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/queries/phone-store.md","tags":[{"inline":true,"label":"records","permalink":"/java-docs/pr-preview/pr-234/tags/records"},{"inline":true,"label":"maps","permalink":"/java-docs/pr-preview/pr-234/tags/maps"},{"inline":true,"label":"optionals","permalink":"/java-docs/pr-preview/pr-234/tags/optionals"},{"inline":true,"label":"java-stream-api","permalink":"/java-docs/pr-preview/pr-234/tags/java-stream-api"}],"version":"current","frontMatter":{"title":"Smartphone-Shop","description":"","tags":["records","maps","optionals","java-stream-api"]},"sidebar":"examExercisesSidebar","previous":{"title":"Messdaten","permalink":"/java-docs/pr-preview/pr-234/exam-exercises/exam-exercises-java2/queries/measurement-data"},"next":{"title":"Planeten","permalink":"/java-docs/pr-preview/pr-234/exam-exercises/exam-exercises-java2/queries/planets"}}'),i=s("85893"),a=s("50065");let t={title:"Smartphone-Shop",description:"",tags:["records","maps","optionals","java-stream-api"]},o=void 0,l={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>PhoneStore</em>",id:"hinweise-zur-klasse-phonestore",level:2}];function d(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,i.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n    Phone o-- ConnectionType\n    Phone o-- Brand\n    PhoneStore o-- Phone\n\n    class ConnectionType {\n        <<enumeration>>\n        USB_C = USB C, true\n        USB_MICRO = USB Micro, false\n        THUNDERBOLT = Thunderbolt, true\n        -description: String #123;final#125;\n        -isModern: boolean #123;final#125;\n    }\n\n    class Brand {\n        <<enumeration>>\n        SAMSUNG\n        APPLE\n        HUAWEI\n    }\n\n    class Phone {\n        <<record>>\n        description: String\n        brand: Brand\n        conncetionType: ConnectionType\n        numberOfCameras: int\n        batteryCapacityInMAh: int\n        cpuPowerInGHz: double\n        priceInEuro: double\n    }\n\n    class PhoneStore {\n        <<record>>\n        phones: List~Phone~\n        +query1() List~Phone~\n        +query2() OptionalDouble\n        +query3(maxPriceInEuro: double) List~Phone~\n        +query4() Map~Phone, String~\n        +query5() Map~ConnectionTyp&sbquo; List~Phone~~\n    }"}),"\n",(0,i.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,i.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"hinweise-zur-klasse-phonestore",children:["Hinweise zur Klasse ",(0,i.jsx)(n.em,{children:"PhoneStore"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"List<Phone> query1()"})," soll die drei leistungsst\xe4rksten\nSmartphones mit 3 Kameras der Marke Huawei absteigend nach dem Preis\nzur\xfcckgeben"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"OptionalDouble query2()"})," soll die durchschnittliche Anzahl\nKameras aller Smartphones zur\xfcckgeben, die eine Akkukapazit\xe4t von 2500 mAh\noder mehr haben"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"List<Phone> query3(maxPriceInEuro: double)"})," soll alle Smartphones\naufsteigend nach Preis zur\xfcckgeben, die den eingehenden H\xf6chstpreis nicht\n\xfcberschreiten, einen modernen Anschlusstyp haben und weniger als 2,4 GHz\nLeistung besitzen"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"Map<Phone, String> query4()"})," soll jedes Smartphone mit der\nzusammengesetzten Zeichenkette aus Marke und Anschlusstyp zur\xfcckgeben"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"Map<ConnectionType, Phone> query4()"})," soll alle Smartphones\ngruppiert nach dem Anschlusstyp zur\xfcckgeben"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return t}});var r=s(67294);let i={},a=r.createContext(i);function t(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);