"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["4745"],{33379:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>u,assets:()=>t,toc:()=>o,frontMatter:()=>a});var r=JSON.parse('{"id":"exercises/javafx/javafx06","title":"JavaFX06","description":"","source":"@site/docs/exercises/javafx/javafx06.md","sourceDirName":"exercises/javafx","slug":"/exercises/javafx/javafx06","permalink":"/java-docs/pr-preview/pr-240/exercises/javafx/javafx06","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/javafx/javafx06.md","tags":[],"version":"current","frontMatter":{"title":"JavaFX06","description":""},"sidebar":"exercisesSidebar","previous":{"title":"JavaFX05","permalink":"/java-docs/pr-preview/pr-240/exercises/javafx/javafx05"},"next":{"title":"JavaFX07","permalink":"/java-docs/pr-preview/pr-240/exercises/javafx/javafx07"}}'),l=i("85893"),s=i("50065");let a={title:"JavaFX06",description:""},d=void 0,t={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Szenegraph zur Szene <em>LoginView</em>",id:"szenegraph-zur-szene-loginview",level:2},{value:"Szenegraph zur Szene <em>UserView</em>",id:"szenegraph-zur-szene-userview",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse <em>Model</em>",id:"hinweise-zur-klasse-model",level:2},{value:"Hinweise zur Klasse <em>LoginController</em>",id:"hinweise-zur-klasse-logincontroller",level:2},{value:"Hinweis zur Klasse <em>UserController</em>",id:"hinweis-zur-klasse-usercontroller",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Erstelle eine JavaFX-Anwendung zum Anmelden anhand des abgebildeten\nKlassendiagramms sowie der abgebildeten Szenegraphen."}),"\n",(0,l.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,l.jsx)(n.mermaid,{value:"classDiagram\n    Initializable <|.. LoginController : implements\n    Initializable <|.. UserController : implements\n    LoginController o-- Model\n    UserController o-- Model\n    Model o-- User\n\n    class User {\n        <<record>>\n        userName: String\n        password: String\n        firstname: String\n        familyName: String\n    }\n\n    class Model {\n        -instance: Model$\n        -user: User\n        -users: List~User~$\n        -Model()\n        +getInstance() Model$\n        +setUser(userName: String, password: String) boolean\n        +getUser() User\n    }\n\n    class LoginController {\n        -userNameTextField: TextField #123;FXML#125;\n        -passwordPasswordField: PasswordField #123;FXML#125;\n        -model: Model\n        +initialize(location: URL, resources: ResourceBundle) void\n        +login(actionEvent: ActionEvent) void #123;FXML#125;\n    }\n\n    class UserController {\n        -greetingsLabel: Label #123;FXML#125;\n        -model: Model\n        +initialize(location: URL, resources: ResourceBundle) void\n    }\n\n    class Initializable {\n        <<interface>>\n        +initialize(location: URL, resources: ResourceBundle) void\n    }"}),"\n",(0,l.jsxs)(n.h2,{id:"szenegraph-zur-szene-loginview",children:["Szenegraph zur Szene ",(0,l.jsx)(n.em,{children:"LoginView"})]}),"\n",(0,l.jsx)(n.mermaid,{value:"flowchart LR\n	gridpane[GridPane\\nfx:controller=Pfad.LoginController]\n	label1[Label\\ntext=Benutzername\\nGridPane.columnIndex=0\\nGridPane.rowIndex=0]\n	label2[Label\\ntext=Passwort\\nGridPane.columnIndex=0\\nGridPane.rowIndex=1]\n	textfield1[TextField\\nfx:id=userNameTextField\\nGridPane.columnIndex=1\\nGridPane.rowIndex=0]\n	textfield2[TextField\\nfx:id=passwordTextField\\nGridPane.columnIndex=1\\nGridPane.rowIndex=1]\n	button[Button\\ntext=Anmelden\\nonAction=#login\\nGridPane.columnIndex=0\\nGridPane.rowIndex=2\\nGridPane.columnSpan=2\\nGridPane.halignment=CENTER]\n\n    gridpane --\x3e label1\n    gridpane --\x3e textfield1\n    gridpane --\x3e label2\n    gridpane --\x3e textfield2\n    gridpane --\x3e button"}),"\n",(0,l.jsxs)(n.h2,{id:"szenegraph-zur-szene-userview",children:["Szenegraph zur Szene ",(0,l.jsx)(n.em,{children:"UserView"})]}),"\n",(0,l.jsx)(n.mermaid,{value:"flowchart LR\n	vbox[VBox\\nfx:controller=Pfad.UserController]\n	label[Label\\nfx:id=greetingsLabel]\n\n    vbox --\x3e label"}),"\n",(0,l.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Der Konstruktor\n",(0,l.jsx)(n.code,{children:"Alert(alertType: AlertType, contentText: String, buttons: ButtonType...)"})," der\nKlasse ",(0,l.jsx)(n.code,{children:"Alert"})," erm\xf6glicht das Erzeugen eines Nachrichtendialoges"]}),"\n",(0,l.jsxs)(n.li,{children:["Die Methode ",(0,l.jsx)(n.code,{children:"void show()"})," der Klasse ",(0,l.jsx)(n.code,{children:"Alert"})," zeigt den Nachrichtendialog an"]}),"\n"]}),"\n",(0,l.jsxs)(n.h2,{id:"hinweise-zur-klasse-model",children:["Hinweise zur Klasse ",(0,l.jsx)(n.em,{children:"Model"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Der Konstruktor soll die Beuntzerliste initialisieren und dieser einige\nBenutzern hinzuf\xfcgen"}),"\n",(0,l.jsxs)(n.li,{children:["Die Methode ",(0,l.jsx)(n.code,{children:"boolean setUser(userName: String, password: String)"})," soll den\nBenutzer festlegen und den Wert ",(0,l.jsx)(n.code,{children:"true"})," zur\xfcckgeben. F\xfcr den Fall, dass zu den\neingehenden Anmeldedaten kein Benutzer in der Benutzerliste ermittelt werden\nkann, soll der Wert ",(0,l.jsx)(n.code,{children:"false"})," zur\xfcckgegeben werden"]}),"\n"]}),"\n",(0,l.jsxs)(n.h2,{id:"hinweise-zur-klasse-logincontroller",children:["Hinweise zur Klasse ",(0,l.jsx)(n.em,{children:"LoginController"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Die Methode ",(0,l.jsx)(n.code,{children:"void initialize(location: URL, resources: ResourceBundle)"})," soll\ndas Model initialisieren"]}),"\n",(0,l.jsxs)(n.li,{children:["Die Methode ",(0,l.jsx)(n.code,{children:"void login(actionEvent: ActionEvent)"})," soll anhand der\neingegebenen Anmeldedaten den Benutzer festlegen und anschlie\xdfend die View\n",(0,l.jsx)(n.code,{children:"UserView"})," anzeigen. F\xfcr den Fall, dass die Anmeldedaten ung\xfcltig sind, soll\nein entsprechender Nachrichtendialog angezeigt werden"]}),"\n"]}),"\n",(0,l.jsxs)(n.h2,{id:"hinweis-zur-klasse-usercontroller",children:["Hinweis zur Klasse ",(0,l.jsx)(n.em,{children:"UserController"})]}),"\n",(0,l.jsxs)(n.p,{children:["Die Methode ",(0,l.jsx)(n.code,{children:"void initialize(location: URL, resources: ResourceBundle)"})," soll das\nModel initialisieren und dem Begr\xfc\xdfungs-Ausgabfeld eine Zeichenkette in der Form\n",(0,l.jsx)(n.em,{children:"Hallo [Benutzer].[Vorname] [Benutzer].[Nachname]"})," zuweisen."]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return a}});var r=i(67294);let l={},s=r.createContext(l);function a(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);