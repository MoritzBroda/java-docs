"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["8173"],{44624:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>l,assets:()=>a,toc:()=>c,contentTitle:()=>o});var l=JSON.parse('{"id":"exercises/javafx/javafx04","title":"JavaFX04","description":"","source":"@site/docs/exercises/javafx/javafx04.md","sourceDirName":"exercises/javafx","slug":"/exercises/javafx/javafx04","permalink":"/java-docs/pr-preview/pr-250/exercises/javafx/javafx04","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/javafx/javafx04.md","tags":[],"version":"current","frontMatter":{"title":"JavaFX04","description":""},"sidebar":"exercisesSidebar","previous":{"title":"JavaFX03","permalink":"/java-docs/pr-preview/pr-250/exercises/javafx/javafx03"},"next":{"title":"JavaFX05","permalink":"/java-docs/pr-preview/pr-250/exercises/javafx/javafx05"}}'),s=i("85893"),r=i("50065");let t={title:"JavaFX04",description:""},o=void 0,a={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Szenegraph",id:"szenegraph",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>LED</em>",id:"hinweise-zur-klasse-led",level:2},{value:"Hinweis zur Klasse <em>Model</em>",id:"hinweis-zur-klasse-model",level:2},{value:"Hinweise zur Klasse <em>Controller</em>",id:"hinweise-zur-klasse-controller",level:2}];function d(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Erstelle eine JavaFX-Anwendung zum Ein- und Ausschalten einer farbigen LED\nanhand des abgebildeten Klassendiagramms sowie des abgebildeten Szenegraphs."}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    Initializable <|.. Controller : implements\n    Controller o-- Model\n    Model o-- LED\n\n    class LED {\n        -color: color\n        -isShining: boolean\n        +Light()\n        +getColor() Color\n        +isShining() boolean\n        +switchOn() void\n        +switchOff() void\n        +switchColor() void\n    }\n\n    class Model {\n        -instance: Model$\n        -led: LED\n        -Model()\n        +getInstance() Model$\n        +getLED() LED\n    }\n\n    class Controller {\n        -layer1: Circle #123;FXML#125;\n        -layer2: Circle #123;FXML#125;\n        -layer3: Circle #123;FXML#125;\n        -layer4: Circle #123;FXML#125;\n        -model: Model\n        +initialize(location: URL, resources: ResourceBundle) void\n        +switchOn(actionEvent: ActionEvent) void #123;FXML#125;\n        +switchOff(actionEvent: ActionEvent) void #123;FXML#125;\n        +switchColor(actionEvent: ActionEvent) void #123;FXML#125;\n    }\n\n    class Initializable {\n        <<interface>>\n        +initialize(location: URL, resources: ResourceBundle) void\n    }"}),"\n",(0,s.jsx)(n.h2,{id:"szenegraph",children:"Szenegraph"}),"\n",(0,s.jsx)(n.mermaid,{value:"flowchart LR\n	vbox[VBox\n	     fx:controller=Pfad.Controller]\n	group[Group]\n	circle1[Circle\n	        fx:id=layer1\n	        radius=25]\n	circle2[Circle\n	        fx:id=layer2\n	        radius=50]\n	circle3[Circle\n	        fx:id=layer3\n	        radius=75]\n	circle4[Circle\n	        fx:id=layer4\n	        radius=100]\n	hbox[HBox]\n	button1[Button\n	        text=Einschalten\n	        onAction=#switchOn]\n	button2[Button\n	        text=Ausschalten\n	        onAction=#switchOff]\n	button3[Button\n	        text=Farbe wechseln\n	        onAction=#switchColor]\n\n    vbox --\x3e group\n    vbox --\x3e hbox\n    group --\x3e circle1\n    group --\x3e circle2\n    group --\x3e circle3\n    group --\x3e circle4\n    hbox --\x3e button1\n    hbox --\x3e button2\n    hbox --\x3e button3"}),"\n",(0,s.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die Klasse ",(0,s.jsx)(n.code,{children:"AnimationTimer"})," repr\xe4sentiert einen Zeitmesser"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void start()"})," der Klasse ",(0,s.jsx)(n.code,{children:"AnimationTimer"})," startet den Zeitmesser"]}),"\n",(0,s.jsxs)(n.li,{children:["Der Konstruktor\n",(0,s.jsx)(n.code,{children:"Color(red: double, green: double, blue: double, opacity: double)"})," der Klasse\n",(0,s.jsx)(n.code,{children:"Color"})," erm\xf6glicht das Erzeugen einer (durchsichtigen) Farbe"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-led",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"LED"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll die LED auf die Farbe Rot setzen"}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void switchOn()"})," soll das Attribut ",(0,s.jsx)(n.code,{children:"isShining"})," auf den Wert\n",(0,s.jsx)(n.em,{children:"true"})," setzen"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void switchOff()"})," soll das Attribut ",(0,s.jsx)(n.code,{children:"isShining"})," auf den Wert\n",(0,s.jsx)(n.em,{children:"false"})," setzen"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void switchColor()"})," soll die Farbe der LED von Rot auf Gr\xfcn bzw.\nvon Gr\xfcn auf Blau bzw. von Blau auf Rot wechseln"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-model",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"Model"})]}),"\n",(0,s.jsx)(n.p,{children:"Der Konstruktor soll die LED initialisieren"}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-controller",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"Controller"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void initialize(location: URL, resources: ResourceBundle)"})," soll\ndas Model initialisieren und kontinuierlich pr\xfcfen, ob die LED leuchtet. F\xfcr\nden Fall, dass die LED leuchtet, sollen alle 4 Ebenen in der Farbe der LED mit\naufsteigender Durchsichtigkeit (0%, 25%, 50%, 75%) angezeigt werden und f\xfcr\nden Fall, dass die LED nicht leuchtet, soll aussschlie\xdflich die erste Ebene in\nder Farbe der LED angezeigt werden"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void switchOn(actionEvent: ActionEvent)"})," soll die LED einschalten"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void switchOff(actionEvent: ActionEvent)"})," soll die LED\nausschalten"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void switchColor(actionEvent: ActionEvent)"})," soll die Farbe der\nLED wechseln"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return t}});var l=i(67294);let s={},r=l.createContext(s);function t(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);