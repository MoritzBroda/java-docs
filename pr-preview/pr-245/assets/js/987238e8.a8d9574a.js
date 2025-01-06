"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["5742"],{84100:function(e,n,i){i.r(n),i.d(n,{metadata:()=>l,contentTitle:()=>d,default:()=>u,assets:()=>s,toc:()=>o,frontMatter:()=>t});var l=JSON.parse('{"id":"exercises/javafx/javafx03","title":"JavaFX03","description":"","source":"@site/docs/exercises/javafx/javafx03.md","sourceDirName":"exercises/javafx","slug":"/exercises/javafx/javafx03","permalink":"/java-docs/pr-preview/pr-245/exercises/javafx/javafx03","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/javafx/javafx03.md","tags":[],"version":"current","frontMatter":{"title":"JavaFX03","description":""},"sidebar":"exercisesSidebar","previous":{"title":"JavaFX02","permalink":"/java-docs/pr-preview/pr-245/exercises/javafx/javafx02"},"next":{"title":"JavaFX04","permalink":"/java-docs/pr-preview/pr-245/exercises/javafx/javafx04"}}'),a=i("85893"),r=i("50065");let t={title:"JavaFX03",description:""},d=void 0,s={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Szenegraph",id:"szenegraph",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>Model</em>",id:"hinweis-zur-klasse-model",level:2},{value:"Hinweise zur Klasse <em>Controller</em>",id:"hinweise-zur-klasse-controller",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Erstelle eine JavaFX-Anwendung zum Berechnen von Zinsen anhand des abgebildeten\nKlassendiagramms sowie des abgebildeten Szenegraphs."}),"\n",(0,a.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,a.jsx)(n.mermaid,{value:"classDiagram\n    Initializable <|.. Controller : implements\n    Controller o-- Model\n\n    class Model {\n        -instance: Model$\n        -Model()\n        +getInstance() Model$\n        +getInterest(initialCapital: double, interestRate: double, runningTime: int) double\n    }\n\n    class Controller {\n        -initialCapitalTextField: TextField #123;FXML#125;\n        -interestRateTexField: TextField #123;FXML#125;\n        -runningTimeTextField: TextField #123;FXML#125;\n        -interestLabel: Label #123;FXML#125;\n        -model: Model\n        +initialize(location: URL, resources: ResourceBundle) void\n        +calculateInterest(actionEvent: ActionEvent) void #123;FXML#125;\n    }\n\n    class Initializable {\n        <<interface>>\n        +initialize(location: URL, resources: ResourceBundle) void\n    }"}),"\n",(0,a.jsx)(n.h2,{id:"szenegraph",children:"Szenegraph"}),"\n",(0,a.jsx)(n.mermaid,{value:"flowchart LR\n	gridpane[GridPane\\nfx:controller=Pfad.Controller]\n	label1[Label\\ntext=Anfangskapital\\nGridPane.columnIndex=0\\nGridPane.rowIndex=0]\n	label2[Label\\ntext=Zinssatz\\nGridPane.columnIndex=0\\nGridPane.rowIndex=1]\n	label3[Label\\ntext=Laufzeit\\nGridPane.columnIndex=0\\nGridPane.rowIndex=2]\n	label4[Label\\ntext=Zinsen\\nGridPane.columnIndex=0\\nGridPane.rowIndex=3]\n	label5[Label\\nfx:id=interestLabel\\nGridPane.columnIndex=1\\nGridPane.rowIndex=3]\n	textfield1[TextField\\nfx:id=initialCapitalTextField\\nGridPane.columnIndex=1\\nGridPane.rowIndex=0]\n	textfield2[TextField\\nfx:id=interestRateTextField\\nGridPane.columnIndex=1\\nGridPane.rowIndex=1]\n	textfield3[TextField\\nfx:id=runningTimeTextField\\nGridPane.columnIndex=1\\nGridPane.rowIndex=2]\n	button[Button\\ntext=Zinsen berechnen\\nonAction=#calculateInterest\\nGridPane.columnIndex=0\\nGridPane.rowIndex=4\\nGridPane.columnSpan=2\\nGridPane.halignment=CENTER]\n\n    gridpane --\x3e label1\n    gridpane --\x3e textfield1\n    gridpane --\x3e label2\n    gridpane --\x3e textfield2\n    gridpane --\x3e label3\n    gridpane --\x3e textfield3\n    gridpane --\x3e label4\n    gridpane --\x3e label5\n    gridpane --\x3e button"}),"\n",(0,a.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Der Konstruktor\n",(0,a.jsx)(n.code,{children:"Alert(alertType: AlertType, contentText: String, buttons: ButtonType...)"})," der\nKlasse ",(0,a.jsx)(n.code,{children:"Alert"})," erm\xf6glicht das Erzeugen eines Nachrichtendialoges"]}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"void show()"})," der Klasse ",(0,a.jsx)(n.code,{children:"Alert"})," zeigt den Nachrichtendialog an"]}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"hinweis-zur-klasse-model",children:["Hinweis zur Klasse ",(0,a.jsx)(n.em,{children:"Model"})]}),"\n",(0,a.jsxs)(n.p,{children:["Die Methode\n",(0,a.jsx)(n.code,{children:"double getInterest(initialCapital: double, interestRate: double, runningTime: int)"}),"\nsoll die Zinsen zu den eingehenden Informationen berechnen und zur\xfcckgeben."]}),"\n",(0,a.jsxs)(n.h2,{id:"hinweise-zur-klasse-controller",children:["Hinweise zur Klasse ",(0,a.jsx)(n.em,{children:"Controller"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"void initialize(location: URL, resources: ResourceBundle)"})," soll\ndas Model initialisieren"]}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"void calculateInterest(actionEvent: ActionEvent)"})," soll zu den\neingegebenen Informationen die Zinsen berechnen und diese dem\nZinsen-Ausgabenfeld zuweisen. F\xfcr den Fall, dass die eingegebenen\nInformationen nicht konvertiert werden k\xf6nnen, soll ein entsprechender\nNachrichtendialog angezeigt werden und f\xfcr den Fall, dass die eingegebenen\nWerte kleiner gleich Null sind, soll ebenfalls ein entsprechender\nNachrichtendialog angezeigt werden"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return t}});var l=i(67294);let a={},r=l.createContext(a);function t(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);