"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["4228"],{42785:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>u,assets:()=>d,toc:()=>o,frontMatter:()=>t});var i=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/class-diagrams/creature","title":"Kreatur","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/class-diagrams/creature.md","sourceDirName":"exam-exercises/exam-exercises-java1/class-diagrams","slug":"/exam-exercises/exam-exercises-java1/class-diagrams/creature","permalink":"/java-docs/pr-preview/pr-234/exam-exercises/exam-exercises-java1/class-diagrams/creature","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/class-diagrams/creature.md","tags":[{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-234/tags/oo"},{"inline":true,"label":"enumerations","permalink":"/java-docs/pr-preview/pr-234/tags/enumerations"},{"inline":true,"label":"io-streams","permalink":"/java-docs/pr-preview/pr-234/tags/io-streams"}],"version":"current","frontMatter":{"title":"Kreatur","description":"","tags":["oo","enumerations","io-streams"]},"sidebar":"examExercisesSidebar","previous":{"title":"Pl\xe4tzchendose","permalink":"/java-docs/pr-preview/pr-234/exam-exercises/exam-exercises-java1/class-diagrams/cookie-jar"},"next":{"title":"Fast Food","permalink":"/java-docs/pr-preview/pr-234/exam-exercises/exam-exercises-java1/class-diagrams/fast-food"}}'),s=r("85893"),a=r("50065");let t={title:"Kreatur",description:"",tags:["oo","enumerations","io-streams"]},l=void 0,d={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>Creature</em>",id:"hinweise-zur-klasse-creature",level:2},{value:"Hinweis zur Klasse <em>CreaturesReader</em>",id:"hinweis-zur-klasse-creaturesreader",level:2},{value:"Beispielhafter Aufbau der Kreaturendatei",id:"beispielhafter-aufbau-der-kreaturendatei",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse."}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    Creature o-- Position\n    Creature o-- Type\n\n    class Creature {\n        -name: String #123;final#125;\n        -position: Position #123;final#125;\n        -type: Type #123;final#125;\n        +Creature(name: String, position: Position, type: Type)\n        +moveUp() void\n        +moveDown() void\n        +moveLeft() void\n        +moveRight() void\n    }\n\n    class Type {\n        <<enumeration>>\n        MONSTER\n        SKELETON\n        VAMPIRE\n        ZOMBIE\n    }\n\n    class Position {\n        -x: int\n        -y: int\n        +Position(x: int, y: int)\n        +increaseY() void\n        +decreaseY() void\n        +increaseX() void\n        +decreaseX() void\n    }\n\n    class CreaturesReader {\n        +getCreatures(file: File) List~Creature~\n    }"}),"\n",(0,s.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,s.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-creature",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"Creature"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void moveUp()"})," soll den Y-Wert der Position inkrementieren"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void moveDown()"})," soll den Y-Wert der Position dekrementieren"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void moveLeft()"})," soll den X-Wert der Position dekrementieren"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void moveRigth()"})," soll den X-Wert der Position inkrementieren"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-creaturesreader",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"CreaturesReader"})]}),"\n",(0,s.jsxs)(n.p,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"List<Creature> getCreatures(file: File)"})," soll alle Kreaturen der\neingehenden Datei zur\xfcckgeben und die Kreaturen die Bewegungen der eingehenden\nDatei ausf\xfchren lassen."]}),"\n",(0,s.jsx)(n.h2,{id:"beispielhafter-aufbau-der-kreaturendatei",children:"Beispielhafter Aufbau der Kreaturendatei"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Frankensteins Monster;MONSTER;0;5\nDOWN;DOWN;LEFT;LEFT\nDracula;VAMPIRE;3;3\nUP;RIGHT;UP\nKurt;ZOMBIE;-2;-2\nDOWN\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return t}});var i=r(67294);let s={},a=i.createContext(s);function t(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);