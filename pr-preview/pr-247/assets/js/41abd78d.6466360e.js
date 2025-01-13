"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["6897"],{13690:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>t,toc:()=>o,contentTitle:()=>a});var s=JSON.parse('{"id":"exercises/javafx/javafx08","title":"JavaFX08","description":"","source":"@site/docs/exercises/javafx/javafx08.md","sourceDirName":"exercises/javafx","slug":"/exercises/javafx/javafx08","permalink":"/java-docs/pr-preview/pr-247/exercises/javafx/javafx08","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/javafx/javafx08.md","tags":[],"version":"current","frontMatter":{"title":"JavaFX08","description":""},"sidebar":"exercisesSidebar","previous":{"title":"JavaFX07","permalink":"/java-docs/pr-preview/pr-247/exercises/javafx/javafx07"}}'),r=i("85893"),l=i("50065");let d={title:"JavaFX08",description:""},a=void 0,t={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Szenegraph",id:"szenegraph",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>ChessFigure</em>",id:"hinweis-zur-klasse-chessfigure",level:2},{value:"Hinweise zur Klasse <em>Field</em>",id:"hinweise-zur-klasse-field",level:2},{value:"Hinweise zur Klasse <em>ChessBoard</em>",id:"hinweise-zur-klasse-chessboard",level:2},{value:"Hinweise zur Klasse <em>Controller</em>",id:"hinweise-zur-klasse-controller",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Erstelle eine JavaFX-Anwendung zum Schachspielen anhand des abgebildeten\nKlassendiagramms sowie des abgebildeten Szenegraphs."}),"\n",(0,r.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    Initializable <|.. Controller : implements\n    Controller o-- Field\n    ImageView  <|-- ChessFigure : extends\n    ChessFigure o-- ChessColor\n    ChessFigure o-- ChessFigureType\n    ChessBoard --|> GridPane : extends\n    Field --o ChessBoard\n    Field --|> StackPane : extends\n\n    class ChessFigure {\n        -color: ChessColor #123;final#125;\n        -type: ChessFigureType #123;final#125;\n        +ChessFigure(type: ChessFigureType, color: ChessColor, image: Image)\n        +getColor() ChessColor\n        +getType() ChessFigureType\n    }\n\n    class ChessColor {\n    	<<enumeration>>\n        BLACK = schwarz\n        WHITE = wei\xdf\n        -description: String #123;final#125;\n        +getDescription() String\n    }\n\n    class ChessFigureType {\n    	<<enumeration>>\n		BISHOP = L\xe4ufer\n		KING = K\xf6nig\n		KNIGHT = Springer\n		PAWN = Bauer\n		QUEEN = Dame\n		ROOK = Turm\n        -description: String #123;final#125;\n        +getDescription() String\n    }\n\n    class ChessBoard {\n    	-fields: Field[][] #123;final#125;\n    	+ChessBoard()\n    	+getFields() [][]\n    }\n\n    class Field {\n    	-row: int #123;final#125;\n    	-column: char #123;final#125;\n    	-isSelected: boolean\n    	+Field(row: int, column: char, color: Color)\n    	+setSelected(boolean: isSelected) void\n    	+isSelected() boolean\n    	+setFigure(figure: ChessFigure) void\n    	+getFigure() ChessFigure\n    	+getBackgroundLayer() Rectangle\n    	+getRow() int\n    	+getColumn() char\n	}\n\n    class Controller {\n        -board: ChessBoard #123;FXML#125;\n        -oldField: Field\n        +initialize(location: URL, resources: ResourceBundle) void\n        -setHighlight(field: Field, highlight: boolean) void\n    }\n\n    class Initializable {\n        <<interface>>\n        +initialize(location: URL, resources: ResourceBundle) void\n    }"}),"\n",(0,r.jsx)(n.h2,{id:"szenegraph",children:"Szenegraph"}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart LR\n	board[ChessBoard\n	      fx:controller=Pfad.Controller\n	      fx:id=board]"}),"\n",(0,r.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Der Konstruktor ",(0,r.jsx)(n.code,{children:"Image(url: String)"})," der Klasse ",(0,r.jsx)(n.code,{children:"Image"})," erm\xf6glicht das\nErzeugen eines Grafik-Objektes"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void setImage(value: Image)"})," der Klasse ",(0,r.jsx)(n.code,{children:"ImageView"})," setzt die\nGrafik eines Bilderrahmens auf den eingehenden Wert"]}),"\n",(0,r.jsxs)(n.li,{children:["Der Konstruktor ",(0,r.jsx)(n.code,{children:"Rectangle(width: double, height: double)"})," der Klasse\n",(0,r.jsx)(n.code,{children:"Rectangle"})," erm\xf6glicht das Erzeugen eines Rechtecks"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void setFill(value: Paint)"})," der Klasse ",(0,r.jsx)(n.code,{children:"Shape"})," setzt die\nF\xfcllfarbe einer geometrischen Form auf den eingehenden Wert"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"ObservableList<Node> getChildren()"})," der Klasse ",(0,r.jsx)(n.code,{children:"Pane"})," gibt die\nKindknotenliste eines Containers zur\xfcck"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void setEffect(effect: Effect)"})," der Klasse ",(0,r.jsx)(n.code,{children:"Node"})," setzt den\nEffekt eines Bildschirmelements auf den eingehenden Wert"]}),"\n",(0,r.jsxs)(n.li,{children:["Der Konstruktor\n",(0,r.jsx)(n.code,{children:"ColorAdjust(hue: double, saturation: double, brightness: double, contrast: double)"}),"\nder Klasse ",(0,r.jsx)(n.code,{children:"ColorAdjust"})," erm\xf6glicht das Erzeugen einer Farbanpassung"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweis-zur-klasse-chessfigure",children:["Hinweis zur Klasse ",(0,r.jsx)(n.em,{children:"ChessFigure"})]}),"\n",(0,r.jsx)(n.p,{children:"Der Konstruktor soll alle Attribute (inklusive der Grafik) initialisieren."}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-field",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"Field"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren, ein Rechteck als\nHintergrund-Ebene mit der eingehenden Farbe erzeugen und dieses der\nKindknotenliste hinzuf\xfcgen"}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void setFigure(figure: ChessFigure)"})," soll die eingehende\nSchachfigur der Kindknoteliste hinzuf\xfcgen bzw. die bestehende Schachfigur der\nKinknotenliste durch die eingehende Schachfigur ersetzen bzw. die bestehende\nSchachfigur der Kindknotenliste entfernen"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"ChessFigure getFigure()"})," soll die Schachfigur der Kindknotenliste\nbzw. den Wert ",(0,r.jsx)(n.code,{children:"null"})," zur\xfcckgeben"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"Rectangle getBackgroundLayer()"})," soll die Hintergrund-Ebene der\nKindknotenliste zur\xfcckgeben"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-chessboard",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"ChessBoard"})]}),"\n",(0,r.jsx)(n.p,{children:"Der Konstruktor soll alle Felder inklusive aller Schachfiguren initialisieren."}),"\n",(0,r.jsxs)(n.h2,{id:"hinweise-zur-klasse-controller",children:["Hinweise zur Klasse ",(0,r.jsx)(n.em,{children:"Controller"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void initialize(location: URL, resources: ResourceBundle)"})," soll\ndas Ausw\xe4hlen und Bewegen der Schachfiguren per Mausklick erm\xf6glichen"]}),"\n",(0,r.jsxs)(n.li,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void setHighlight(field: Field, highlight: boolean)"})," soll das\neingehende Feld hervorheben bzw. nicht mehr hervorheben"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return d}});var s=i(67294);let r={},l=s.createContext(r);function d(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);