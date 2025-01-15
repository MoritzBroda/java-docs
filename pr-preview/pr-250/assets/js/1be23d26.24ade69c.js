"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2541"],{8985:function(e,n,s){s.r(n),s.d(n,{default:()=>d,frontMatter:()=>t,metadata:()=>i,assets:()=>o,toc:()=>m,contentTitle:()=>l});var i=JSON.parse('{"id":"exam-exercises/exam-exercises-java2/class-diagrams/team","title":"Team","description":"","source":"@site/docs/exam-exercises/exam-exercises-java2/class-diagrams/team.md","sourceDirName":"exam-exercises/exam-exercises-java2/class-diagrams","slug":"/exam-exercises/exam-exercises-java2/class-diagrams/team","permalink":"/java-docs/pr-preview/pr-250/exam-exercises/exam-exercises-java2/class-diagrams/team","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/class-diagrams/team.md","tags":[{"inline":true,"label":"inheritance","permalink":"/java-docs/pr-preview/pr-250/tags/inheritance"},{"inline":true,"label":"polymorphism","permalink":"/java-docs/pr-preview/pr-250/tags/polymorphism"},{"inline":true,"label":"interfaces","permalink":"/java-docs/pr-preview/pr-250/tags/interfaces"},{"inline":true,"label":"comparators","permalink":"/java-docs/pr-preview/pr-250/tags/comparators"},{"inline":true,"label":"exceptions","permalink":"/java-docs/pr-preview/pr-250/tags/exceptions"},{"inline":true,"label":"records","permalink":"/java-docs/pr-preview/pr-250/tags/records"},{"inline":true,"label":"generics","permalink":"/java-docs/pr-preview/pr-250/tags/generics"},{"inline":true,"label":"maps","permalink":"/java-docs/pr-preview/pr-250/tags/maps"},{"inline":true,"label":"optionals","permalink":"/java-docs/pr-preview/pr-250/tags/optionals"}],"version":"current","frontMatter":{"title":"Team","description":"","tags":["inheritance","polymorphism","interfaces","comparators","exceptions","records","generics","maps","optionals"]},"sidebar":"examExercisesSidebar","previous":{"title":"Raumstation","permalink":"/java-docs/pr-preview/pr-250/exam-exercises/exam-exercises-java2/class-diagrams/space-station"},"next":{"title":"Videosammlung","permalink":"/java-docs/pr-preview/pr-250/exam-exercises/exam-exercises-java2/class-diagrams/video-collection"}}'),a=s("85893"),r=s("50065");let t={title:"Team",description:"",tags:["inheritance","polymorphism","interfaces","comparators","exceptions","records","generics","maps","optionals"]},l=void 0,o={},m=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>Sportsman</em>",id:"hinweise-zur-klasse-sportsman",level:2},{value:"Hinweise zur Klasse <em>Team</em>",id:"hinweise-zur-klasse-team",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,a.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,a.jsx)(n.mermaid,{value:"classDiagram\n    Sportsman <|-- Footballer : extends\n    Team~T extends Sportsman~ o-- Position\n    Comparable~Sportsman~ <|.. Sportsman : implements\n\n    class Footballer {\n        -numberOfGoals: int\n        -numberOfAssists: int\n        +Footballer(name: String, numberOfGoals: int, numberOfAssists: int)\n        +getScorerPoints() int\n    }\n\n    class Position {\n        <<enumeration>>\n        DEFENDER\n        GOALKEEPER\n        MIDFIELDER\n        STRIKER\n    }\n\n    class Sportsman {\n        <<abstract>>\n        -name: String #123;final#125;\n        +Sportsman(name: String)\n        +getScorerPoints() int #123;abstract#125;\n        +compareTo(other: Sportsman) int\n    }\n\n    class Team~T extends Sportsman~ {\n        <<record>>\n        name: String\n        members: Map~T, Position~\n        +addTeamMember(member: T, position: Position) void\n        +getBestScorer() Optional~T~\n        +getAllTeamMembersByPosition(position: Position) List~T~\n    }\n\n    class Comparable~Sportsman~ {\n        <<interface>>\n        +compareTo(o: Sportsman) int\n    }"}),"\n",(0,a.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,a.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"hinweise-zur-klasse-sportsman",children:["Hinweise zur Klasse ",(0,a.jsx)(n.em,{children:"Sportsman"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren"}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"int compareTo(other: Sportsman)"})," soll so implementiert werden,\ndass Sportler absteigend nach ihren Scorer-Punkten sortiert werden k\xf6nnen"]}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"hinweise-zur-klasse-team",children:["Hinweise zur Klasse ",(0,a.jsx)(n.em,{children:"Team"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Der Assoziativspeicher ",(0,a.jsx)(n.code,{children:"members"})," beinhaltet als Schl\xfcssel alle Mitglieder der\nMannschaft sowie als Wert deren Position"]}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"void addTeamMember(member: T, position: Position)"})," soll der\nMannschaft den eingehenden Sportler als Mitglied mit der eingehenden Position\nhinzuf\xfcgen. F\xfcr den Fall, dass der Sportler bereits Teil der Mannschaft ist,\nsoll die Ausnahme ",(0,a.jsx)(n.code,{children:"DuplicateKeyException"})," ausgel\xf6st werden"]}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"Optional<T> getBestScorer()"})," soll den Sportler mit den meisten\nScorer-Punkten als Optional zur\xfcckgeben"]}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"List<T> getAllTeamMembersByPosition(position: Position)"})," soll\nalle Sportler zur eingehenden Position als Liste zur\xfcckgeben"]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return t}});var i=s(67294);let a={},r=i.createContext(a);function t(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);