"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["5303"],{66006:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>t,metadata:()=>i,assets:()=>l,toc:()=>o,contentTitle:()=>d});var i=JSON.parse('{"id":"exam-exercises/exam-exercises-java2/class-diagrams/dictionary","title":"W\xf6rterbuch","description":"","source":"@site/docs/exam-exercises/exam-exercises-java2/class-diagrams/dictionary.md","sourceDirName":"exam-exercises/exam-exercises-java2/class-diagrams","slug":"/exam-exercises/exam-exercises-java2/class-diagrams/dictionary","permalink":"/java-docs/pr-preview/pr-247/exam-exercises/exam-exercises-java2/class-diagrams/dictionary","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/class-diagrams/dictionary.md","tags":[{"inline":true,"label":"interfaces","permalink":"/java-docs/pr-preview/pr-247/tags/interfaces"},{"inline":true,"label":"comparators","permalink":"/java-docs/pr-preview/pr-247/tags/comparators"},{"inline":true,"label":"exceptions","permalink":"/java-docs/pr-preview/pr-247/tags/exceptions"},{"inline":true,"label":"records","permalink":"/java-docs/pr-preview/pr-247/tags/records"},{"inline":true,"label":"maps","permalink":"/java-docs/pr-preview/pr-247/tags/maps"},{"inline":true,"label":"optionals","permalink":"/java-docs/pr-preview/pr-247/tags/optionals"},{"inline":true,"label":"io-streams","permalink":"/java-docs/pr-preview/pr-247/tags/io-streams"}],"version":"current","frontMatter":{"title":"W\xf6rterbuch","description":"","tags":["interfaces","comparators","exceptions","records","maps","optionals","io-streams"]},"sidebar":"examExercisesSidebar","previous":{"title":"Tante-Emma-Laden","permalink":"/java-docs/pr-preview/pr-247/exam-exercises/exam-exercises-java2/class-diagrams/corner-shop"},"next":{"title":"Personalverwaltung","permalink":"/java-docs/pr-preview/pr-247/exam-exercises/exam-exercises-java2/class-diagrams/human-resources"}}'),a=n("85893"),s=n("50065");let t={title:"W\xf6rterbuch",description:"",tags:["interfaces","comparators","exceptions","records","maps","optionals","io-streams"]},d=void 0,l={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>Word</em>",id:"hinweis-zur-klasse-word",level:2},{value:"Hinweise zur Klasse <em>Dictionary</em>",id:"hinweise-zur-klasse-dictionary",level:2},{value:"Beispielhafter Aufbau der W\xf6rterdatei",id:"beispielhafter-aufbau-der-w\xf6rterdatei",level:2}];function c(e){let r={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,a.jsx)(r.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,a.jsx)(r.mermaid,{value:"classDiagram\n    Comparable~Word~ <|.. Word : implements\n    Word o-- Language\n    Word --o Dictionary\n    Dictionary o-- Language\n\n    class Word {\n        <<record>>\n        value: String\n        language: Language\n        +compareTo(other: Word) int\n    }\n\n    class Comparable~Word~ {\n        <<interface>>\n        +compareTo(o: Word) int\n    }\n\n    class Language {\n        <<enumeration>>\n        DE = DE, Deutsch\n        EN = EN, Englisch\n        -code: String #123;final#125;\n        -description: String #123;final#125;\n    }\n\n    class Dictionary {\n        <<record>>\n        -sourceLanguage: Language\n        -targetLanguage: Language\n        -entries: Map~Word, Word~\n        +addEntry(sourceWord: Word, targetWord: Word) void\n        +importEntries(file: File) void\n        +getTranslation(word: String) Optional~String~\n    }"}),"\n",(0,a.jsx)(r.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,a.jsx)(r.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,a.jsxs)(r.h2,{id:"hinweis-zur-klasse-word",children:["Hinweis zur Klasse ",(0,a.jsx)(r.em,{children:"Word"})]}),"\n",(0,a.jsxs)(r.p,{children:["Die Methode ",(0,a.jsx)(r.code,{children:"int compareTo(other: Word)"})," soll so implementiert werden, dass\ndamit W\xf6rter aufsteigend nach ihrem Wert sortiert werden k\xf6nnen."]}),"\n",(0,a.jsxs)(r.h2,{id:"hinweise-zur-klasse-dictionary",children:["Hinweise zur Klasse ",(0,a.jsx)(r.em,{children:"Dictionary"})]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["Die Methode ",(0,a.jsx)(r.code,{children:"void addEntry(sourceWord: Word, targetWord: Word)"})," soll den\nEintr\xe4gen des W\xf6rterbuches (",(0,a.jsx)(r.code,{children:"entries"}),") die eingehenden W\xf6rter als Eintrag\nhinzuf\xfcgen. F\xfcr den Fall, dass die Sprache des ersten eingehenden Wortes nicht\nder Quellsprache (",(0,a.jsx)(r.code,{children:"sourceLanguage"}),") entspricht, oder die Sprache des zweiten\neingehenden Wortes nicht der Zielsprache (",(0,a.jsx)(r.code,{children:"targetLanguage"}),") entspricht, soll\ndie Ausnahme ",(0,a.jsx)(r.code,{children:"InvalidLanguageException"})," ausgel\xf6st werden"]}),"\n",(0,a.jsxs)(r.li,{children:["Die Methode ",(0,a.jsx)(r.code,{children:"void importEntries(file: File)"})," soll den Eintr\xe4gen des\nW\xf6rterbuches (",(0,a.jsx)(r.code,{children:"entries"}),") die W\xf6rter der eingehenden Datei als Eintr\xe4ge\nhinzuf\xfcgen. Die Ausnahme ",(0,a.jsx)(r.code,{children:"FileNotFoundException"})," soll dabei weitergeleitet\nwerden"]}),"\n",(0,a.jsxs)(r.li,{children:["Die Methode ",(0,a.jsx)(r.code,{children:"Optional<String> getTranslation(word: String)"})," soll die\n\xdcbersetzung zur eingehenden Zeichenkette als Optional zur\xfcckgeben"]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"beispielhafter-aufbau-der-w\xf6rterdatei",children:"Beispielhafter Aufbau der W\xf6rterdatei"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{children:"DE;Haus;EN;House\nDE;Maus;EN;Mouse\nDE;Baum;EN;Tree\n"})})]})}function m(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return t}});var i=n(67294);let a={},s=i.createContext(a);function t(e){let r=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);