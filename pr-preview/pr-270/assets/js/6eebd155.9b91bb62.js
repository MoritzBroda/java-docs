"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["8317"],{65168:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>a,assets:()=>o,toc:()=>d,contentTitle:()=>l});var a=JSON.parse('{"id":"exam-exercises/exam-exercises-java2/queries/tanks","title":"Panzer","description":"","source":"@site/docs/exam-exercises/exam-exercises-java2/queries/tanks.md","sourceDirName":"exam-exercises/exam-exercises-java2/queries","slug":"/exam-exercises/exam-exercises-java2/queries/tanks","permalink":"/java-docs/pr-preview/pr-270/exam-exercises/exam-exercises-java2/queries/tanks","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/queries/tanks.md","tags":[{"inline":true,"label":"records","permalink":"/java-docs/pr-preview/pr-270/tags/records"},{"inline":true,"label":"maps","permalink":"/java-docs/pr-preview/pr-270/tags/maps"},{"inline":true,"label":"optionals","permalink":"/java-docs/pr-preview/pr-270/tags/optionals"},{"inline":true,"label":"java-stream-api","permalink":"/java-docs/pr-preview/pr-270/tags/java-stream-api"}],"version":"current","frontMatter":{"title":"Panzer","description":"","tags":["records","maps","optionals","java-stream-api"]},"sidebar":"examExercisesSidebar","previous":{"title":"Planeten","permalink":"/java-docs/pr-preview/pr-270/exam-exercises/exam-exercises-java2/queries/planets"}}'),i=s("85893"),r=s("50065");let t={title:"Panzer",description:"",tags:["records","maps","optionals","java-stream-api"]},l=void 0,o={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>TankQueries</em>",id:"hinweise-zur-klasse-tankqueries",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,i.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n    Tank o-- Type\n    Tank o-- Nation\n    TankQueries o-- Tank\n\n    class Tank {\n        <<record>>\n        name: String\n        type: Type\n        nation: Nation\n        performanceInHorsePower: int\n        weightInTons: int\n        lengthInMeters :double\n        maxSpeedInKmh: int\n    }\n\n    class Type {\n        <<enumeration>>\n        ARTILLERY_TANK\n        BATTLE_TANK\n        SHIELD_TANK\n        WORLD_WAR_II_TANK\n    }\n\n    class Nation {\n        <<enumeration>>\n        CHN\n        FRA\n        GER\n        SWE\n        USA\n    }\n\n    class TankQueries {\n        <<record>>\n        tanks: List~Tank~\n        +printAllTanksWithWeightBT25TonsByType() void\n        +getAveragePerformanceInHorsePower() OptionalDouble\n        +getAllNations() List~Nation~\n        +isAllTanksMaxSpeedBE50Kmh() boolean\n        +printLongestTankFromGermany() void\n    }"}),"\n",(0,i.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,i.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"hinweise-zur-klasse-tankqueries",children:["Hinweise zur Klasse ",(0,i.jsx)(n.em,{children:"TankQueries"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void printAllTanksWithWeightBT25TonsByType()"})," soll alle Panzer\nmit einem Gewicht von mehr als 25 Tonnen gruppiert nach dem Typ in der Form\n",(0,i.jsx)(n.em,{children:"Typ: [Panzer, Panzer,...]"})," ausgeben"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"OptionalDouble getAveragePerformanceInHorsePower()"})," soll die\ndurchschnittliche Leistung in Pfer- dest\xe4rken aller Panzer zur\xfcckgeben"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"List<Nation> getAllNations()"})," soll die Nationen aller Panzer\nzur\xfcckgeben"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"boolean isAllTanksMaxSpeedBE50KMH()"})," soll zur\xfcckgeben, ob alle\nKampfpanzer eine H\xf6chstgeschwindigkeit von min. 50 km/h besitzen"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void printLongestTankFromGermany()"})," soll den Namen des l\xe4ngsten\nPanzers aus Deutschland auf der Konsole aus- geben. Gibt es keinen Panzer aus\nDeutschland, soll stattdessen der Wert ",(0,i.jsx)(n.code,{children:"null"})," ausgegeben werden"]}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return t}});var a=s(67294);let i={},r=a.createContext(i);function t(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);