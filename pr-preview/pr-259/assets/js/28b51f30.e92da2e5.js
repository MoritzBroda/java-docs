"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["6136"],{51841:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>i,assets:()=>d,toc:()=>o,contentTitle:()=>a});var i=JSON.parse('{"id":"additional-material/steffen/java-2/project-report","title":"Projektbericht","description":"","source":"@site/docs/additional-material/steffen/java-2/project-report.md","sourceDirName":"additional-material/steffen/java-2","slug":"/additional-material/steffen/java-2/project-report","permalink":"/java-docs/pr-preview/pr-259/additional-material/steffen/java-2/project-report","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/steffen/java-2/project-report.md","tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"title":"Projektbericht","description":"","sidebar_position":20,"tags":[]},"sidebar":"additionalMaterialSidebar","previous":{"title":"2024","permalink":"/java-docs/pr-preview/pr-259/additional-material/steffen/java-2/exam-preparation/2024"},"next":{"title":"Demos","permalink":"/java-docs/pr-preview/pr-259/additional-material/steffen/demos"}}'),t=r("85893"),l=r("50065");let s={title:"Projektbericht",description:"",sidebar_position:20,tags:[]},a="Inhalte",d={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zum Klassendiagramm",id:"hinweis-zum-klassendiagramm",level:3},{value:"Anforderungen an die Implementierung",id:"anforderungen-an-die-implementierung",level:2},{value:"Einleitung",id:"einleitung",level:2},{value:"Vorstellung Sortieralgorithmen",id:"vorstellung-sortieralgorithmen",level:2},{value:"Implementierung L\xf6sung",id:"implementierung-l\xf6sung",level:2},{value:"Schluss",id:"schluss",level:2}];function g(e){let n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"inhalte",children:"Inhalte"})}),"\n",(0,t.jsx)(n.p,{children:"Der Projektbericht ist eine f\xfcnfseitige Ausarbeitung zu einem Problem, welche\nvom Dozenten gestellt wird. Diese besteht aus vier Teilen:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Einleitung"}),"\n",(0,t.jsx)(n.li,{children:"Vorstellung Sortieralgorithmen und Auswahl"}),"\n",(0,t.jsx)(n.li,{children:"Implementierung der L\xf6sung"}),"\n",(0,t.jsx)(n.li,{children:"Schluss"}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"problemstellung",children:"Problemstellung"}),"\n",(0,t.jsxs)(n.p,{children:["Die ",(0,t.jsx)(n.strong,{children:"konkrete"})," Problemstellung ist als Kommentar in eurer Abgabe vom\n30.04.2024 in Moodle hinterlegt. Sie l\xe4sst sich in zwei Teilprobleme\nunterteilen. Zuerst m\xfcssen Daten aggregiert und anschlie\xdfend sortiert werden."]}),"\n",(0,t.jsxs)(n.p,{children:["F\xfcr die Implementierung der Aggregation soll die Aggregator Klasse implementiert\nwerden. Diese soll die Datens\xe4tze in eine aggregierte Liste umwandeln. F\xfcr die\nSortierung der aggregierten Daten soll die Sorter Klasse implementiert werden.\nDie Klasse ",(0,t.jsx)(n.strong,{children:"Row"})," soll alle ",(0,t.jsx)(n.strong,{children:"relevanten"})," Attribute eines Datensatzes\nenthalten, welche f\xfcr die Aggregation ben\xf6tigt werden. Die Klasse\n",(0,t.jsx)(n.strong,{children:"AggregatedRow"})," soll alle Attribute enthalten, welche eine aggregierte Zeile\neines Datensatzes enth\xe4lt."]}),"\n",(0,t.jsx)(n.p,{children:"F\xfcr die Implementierung der Sortierung ist ein Sortieralgorithmus auszuw\xe4hlen,\nwelcher in der Vorlesung behandelt wurde. F\xfcr die Auswahl gelten nachfolgende\nAnforderungen. Die Anzahl der aggregierten Zeilen wird mindestens eine Milliarde\nEintr\xe4ge enthalten. Der ausgew\xe4hlte Algorithmus soll theoretisch in der Lage\nsein, die Sortierung parallel zu verarbeiten."}),"\n",(0,t.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,t.jsx)(n.mermaid,{value:"classDiagram\n  Aggregator -- Row\n  Aggregator -- AggregatedRow\n  Sorter -- AggregatedRow\n\n  class Row {\n    +attributeOne String\n    +attributeTwo int\n  }\n\n  class AggregatedRow {\n    +attributeOne String\n    +attributeTwo double\n  }\n\n  class Aggregator {\n    +aggregate(rows: ArrayList~Row~) ArrayList~AggregatedRow~\n  }\n  class Sorter {\n    +sort(rows: ArrayList~AggregatedRow~) void\n  }"}),"\n",(0,t.jsx)(n.h3,{id:"hinweis-zum-klassendiagramm",children:"Hinweis zum Klassendiagramm"}),"\n",(0,t.jsxs)(n.p,{children:["Die Klassen ",(0,t.jsx)(n.strong,{children:"AggregatedRow"})," und ",(0,t.jsx)(n.strong,{children:"Row"})," enthalten nur beispielhafte Attribute.\nDie Attribute m\xfcssen abh\xe4ngig von der Problemstellung definiert werden."]}),"\n",(0,t.jsx)(n.h2,{id:"anforderungen-an-die-implementierung",children:"Anforderungen an die Implementierung"}),"\n",(0,t.jsxs)(n.p,{children:["Die Klassen ",(0,t.jsx)(n.strong,{children:"Row"})," und ",(0,t.jsx)(n.strong,{children:"AggregatedRow"})," sollen nur public Attribute enthalten.\nGetter und Setter sollen nicht implementiert werden."]}),"\n",(0,t.jsxs)(n.p,{children:["Die Klassen ",(0,t.jsx)(n.strong,{children:"Aggregator"})," und ",(0,t.jsx)(n.strong,{children:"Sorter"})," k\xf6nnen mehrere private Methoden\nenthalten, um den Code \xfcbersichtlicher zu gestalten."]}),"\n",(0,t.jsx)(n.p,{children:"F\xfcr die Implementierung, d\xfcrfen keine externen Frameworks oder Bibliotheken\nverwendet werden."}),"\n",(0,t.jsx)(n.p,{children:"F\xfcr die Implementierung darf die Stream API von Java nicht verwendet werden."}),"\n",(0,t.jsx)(n.p,{children:"F\xfcr die Implementierung darf keine Sort API von Java verwendet werden, z.B.\nCollections.sort."}),"\n",(0,t.jsx)(n.h1,{id:"inhalte-des-projektberichts",children:"Inhalte des Projektberichts"}),"\n",(0,t.jsx)(n.h2,{id:"einleitung",children:"Einleitung"}),"\n",(0,t.jsx)(n.p,{children:"Die Einleitung soll die eigene Problemstellung und die vom Dozenten gestellte\nProblemstellung enthalten."}),"\n",(0,t.jsx)(n.h2,{id:"vorstellung-sortieralgorithmen",children:"Vorstellung Sortieralgorithmen"}),"\n",(0,t.jsx)(n.p,{children:"Im zweiten Teil sollen die in der Vorlesung behandelten Sortieralgorithmen in\neigenen Worten vorgestellt und verglichen werden. Anschlie\xdfend soll ein\nSortieralgorithmus ausgew\xe4hlt werden, welcher f\xfcr die nachfolgende\nImplementierung verwendet wird. Die Auswahlentscheidung soll begr\xfcndet werden."}),"\n",(0,t.jsx)(n.h2,{id:"implementierung-l\xf6sung",children:"Implementierung L\xf6sung"}),"\n",(0,t.jsxs)(n.p,{children:["Im dritten Teil soll die L\xf6sung f\xfcr die individuelle Problemstellung\nimplementiert werden. Es sind vier Klassen entsprechend dem oben angegebenen\nKlassendiagramm zu implementieren. Der Quellcode in der Dokumentation soll keine\nimports und package Definitionen enthalten. Kommentare sind nur sparsam zu\nverwenden, falls erkl\xe4rt wird, ",(0,t.jsx)(n.strong,{children:"warum"})," etwas gemacht wurde."]}),"\n",(0,t.jsx)(n.h2,{id:"schluss",children:"Schluss"}),"\n",(0,t.jsx)(n.p,{children:"Der Schluss soll pr\xe4gnant das Problem, die Vorgehensweise mit\nZwischenergebnissen und das Ergebnis zusammenfassen."})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return s}});var i=r(67294);let t={},l=i.createContext(t);function s(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);