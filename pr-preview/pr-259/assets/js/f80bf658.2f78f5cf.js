"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["5348"],{7969:function(e,a,n){n.r(a),n.d(a,{default:()=>p,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>l});var s=JSON.parse('{"id":"exam-exercises/exam-exercises-java2/class-diagrams/space-station","title":"Raumstation","description":"","source":"@site/docs/exam-exercises/exam-exercises-java2/class-diagrams/space-station.md","sourceDirName":"exam-exercises/exam-exercises-java2/class-diagrams","slug":"/exam-exercises/exam-exercises-java2/class-diagrams/space-station","permalink":"/java-docs/pr-preview/pr-259/exam-exercises/exam-exercises-java2/class-diagrams/space-station","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/class-diagrams/space-station.md","tags":[{"inline":true,"label":"exceptions","permalink":"/java-docs/pr-preview/pr-259/tags/exceptions"},{"inline":true,"label":"records","permalink":"/java-docs/pr-preview/pr-259/tags/records"},{"inline":true,"label":"maps","permalink":"/java-docs/pr-preview/pr-259/tags/maps"},{"inline":true,"label":"optionals","permalink":"/java-docs/pr-preview/pr-259/tags/optionals"}],"version":"current","frontMatter":{"title":"Raumstation","description":"","tags":["exceptions","records","maps","optionals"]},"sidebar":"examExercisesSidebar","previous":{"title":"Einkaufsportal","permalink":"/java-docs/pr-preview/pr-259/exam-exercises/exam-exercises-java2/class-diagrams/shopping-portal"},"next":{"title":"Team","permalink":"/java-docs/pr-preview/pr-259/exam-exercises/exam-exercises-java2/class-diagrams/team"}}'),i=n("85893"),t=n("50065");let r={title:"Raumstation",description:"",tags:["exceptions","records","maps","optionals"]},l=void 0,c={},d=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>SpaceStation</em>",id:"hinweise-zur-klasse-spacestation",level:2}];function o(e){let a={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,i.jsx)(a.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,i.jsx)(a.mermaid,{value:"classDiagram\n    SpaceStation o-- SpaceFighter\n    SpaceFighter o-- Type\n\n    class SpaceStation {\n        <<record>>\n        name: String\n        bays: Map~Integer, SpaceFighter~\n        +land(bayNumber: Integer, spaceFighter: SpaceFighter) void\n        +getFastestSpaceFighter() Optional~SpaceFighter~\n    }\n\n    class SpaceFighter {\n        <<record>>\n        id: String\n        type: Type\n    }\n\n    class Type {\n        <<enumeration>>\n        A_WING = 1300\n        B_WING = 950\n        X_WING = 1050\n        Y_WING = 1000\n        TIE_FIGHTER = 1200\n        -maxSpeedInKmh: int #123;final#125;\n    }"}),"\n",(0,i.jsx)(a.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,i.jsx)(a.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n"]}),"\n",(0,i.jsxs)(a.h2,{id:"hinweise-zur-klasse-spacestation",children:["Hinweise zur Klasse ",(0,i.jsx)(a.em,{children:"SpaceStation"})]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["Die Methode ",(0,i.jsx)(a.code,{children:"void land(bayNumber: Integer, spaceFighter: SpaceFighter)"})," soll\nden eingehenden Sternenj\xe4ger in der Bucht mit der eingehenden Buchtnummer\nlanden lassen. F\xfcr den Fall, dass der eingehende Sternenj\xe4ger bereits gelandet\nist (also bereits eine Bucht belegt), soll die Ausnahme\n",(0,i.jsx)(a.code,{children:"SpaceFighterAlreadyLandedException"})," ausgel\xf6st werden und f\xfcr den Fall, dass\ndie Bucht bereits belegt ist, die Ausnahme ",(0,i.jsx)(a.code,{children:"BayAlreadyLoadedException"})]}),"\n",(0,i.jsxs)(a.li,{children:["Die Methode ",(0,i.jsx)(a.code,{children:"Optional<SpaceFighter> getFastestSpaceFighter()"})," soll den\nschnellsten Sternenj\xe4ger der Raumstation als Optional zur\xfcckgeben"]}),"\n"]})]})}function p(e={}){let{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,a,n){n.d(a,{Z:function(){return l},a:function(){return r}});var s=n(67294);let i={},t=s.createContext(i);function r(e){let a=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:a},e.children)}}}]);