"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["5674"],{59453:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>o,assets:()=>d,toc:()=>c,frontMatter:()=>a});var t=JSON.parse('{"id":"documentation/io-streams","title":"Datenstr\xf6me (IO-Streams)","description":"","source":"@site/docs/documentation/io-streams.md","sourceDirName":"documentation","slug":"/documentation/io-streams","permalink":"/java-docs/pr-preview/pr-223/documentation/io-streams","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/io-streams.md","tags":[{"inline":true,"label":"io-streams","permalink":"/java-docs/pr-preview/pr-223/tags/io-streams"}],"version":"current","sidebarPosition":340,"frontMatter":{"title":"Datenstr\xf6me (IO-Streams)","description":"","sidebar_position":340,"tags":["io-streams"]},"sidebar":"documentationSidebar","previous":{"title":"Komponententests (Unit Tests)","permalink":"/java-docs/pr-preview/pr-223/documentation/unit-tests"},"next":{"title":"Algorithmen","permalink":"/java-docs/pr-preview/pr-223/documentation/algorithms"}}'),r=i("85893"),s=i("50065");let a={title:"Datenstr\xf6me (IO-Streams)",description:"",sidebar_position:340,tags:["io-streams"]},l=void 0,d={},c=[{value:"Standard-Datenstr\xf6me zur Ein- und Ausgabe",id:"standard-datenstr\xf6me-zur-ein--und-ausgabe",level:2},{value:"Schreiben und Lesen byteorientierter Daten",id:"schreiben-und-lesen-byteorientierter-daten",level:2},{value:"Schreiben byteorientierter Daten",id:"schreiben-byteorientierter-daten",level:3},{value:"Lesen byteorientierter Daten",id:"lesen-byteorientierter-daten",level:3},{value:"Schreiben und Lesen zeichenorientierter Daten",id:"schreiben-und-lesen-zeichenorientierter-daten",level:2},{value:"Schreiben zeichenorientierter Daten",id:"schreiben-zeichenorientierter-daten",level:3},{value:"Lesen zeichenorientierter Daten",id:"lesen-zeichenorientierter-daten",level:3},{value:"Schreiben und Lesen serialisierter Objekte",id:"schreiben-und-lesen-serialisierter-objekte",level:2},{value:"Schreiben serialisierter Objekte",id:"schreiben-serialisierter-objekte",level:3},{value:"Lesen serialisierter Objekte",id:"lesen-serialisierter-objekte",level:3},{value:"Versionierung bei der Serialisierung",id:"versionierung-bei-der-serialisierung",level:3},{value:"Die try-with-resources-Anweisung",id:"die-try-with-resources-anweisung",level:2}];function u(e){let n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:'Datenstr\xf6me (IO-Streams) sind unidirektionale Pipelines, die Schnittstellen\neines Java-Programms nach au\xdfen darstellen. Daten k\xf6nnen unabh\xe4ngig von der Art\nder Quelle bzw. des Ziels vorne in einen Datenstrom geschrieben und hinten\nwieder ausgelesen werden. Ein Datenstrom kann dabei immer nur in eine Richtung\nverwendet werden (also entweder zur Ein- oder Ausgabe). Neben den\nStandard-Datenstr\xf6men zur Ein- und Ausgabe existieren verschiedene Klassen zum\nSchreiben und Lesen zeichenorientierter Daten, zum Schreiben und Lesen\nbyteorientierter Daten und zum Schreiben und Lesen serialisierter Objekte. Das\nArbeiten mit Datenstrom-Klassen kann dabei aufw\xe4ndig \xfcber "normale"\ntry-catch-Anweisungen oder mit Hilfe von try-with-resources-Anweisungen\nrealisiert werden.'}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart LR\n    subgraph Datenstrom\n        direction LR\n        data1((4.2)) -.- data2((2.3)) -.- data3((1.6)) -.- data4((3.7))\n    end\n    write[Schreiben] ---\x3e Datenstrom\n    Datenstrom ---\x3e read[Lesen]"}),"\n",(0,r.jsx)(n.h2,{id:"standard-datenstr\xf6me-zur-ein--und-ausgabe",children:"Standard-Datenstr\xf6me zur Ein- und Ausgabe"}),"\n",(0,r.jsxs)(n.p,{children:["Java stellt Standard-Datenstr\xf6me f\xfcr die Eingabe (",(0,r.jsx)(n.code,{children:"System.in"}),"), die Ausgabe\n(",(0,r.jsx)(n.code,{children:"System.out"}),"), sowie die Fehlerausgabe (",(0,r.jsx)(n.code,{children:"System.err"}),") zur Verf\xfcgung."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    byte input[] = new byte[256];\n    int noBytes = 0;\n    String output = "";\n\n    try {\n      noBytes = System.in.read(input);\n    } catch (IOException e) {\n      System.err.println(e.getMessage());\n    }\n\n    if (noBytes > 0) {\n      output = new String(input, 0, noBytes);\n      System.out.println(output);\n    }\n  }\n\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,r.jsxs)(n.p,{children:["Die Klasse ",(0,r.jsx)(n.code,{children:"Scanner"}),", die ebenfalls auf dem Datenstrom-Konzept basiert,\nerm\xf6glicht eine einfache M\xf6glichkeit der Eingabe."]})}),"\n",(0,r.jsx)(n.h2,{id:"schreiben-und-lesen-byteorientierter-daten",children:"Schreiben und Lesen byteorientierter Daten"}),"\n",(0,r.jsxs)(n.p,{children:["F\xfcr die Verarbeitung von byteorientierten Daten (z.B. Bild- und Video-Dateien)\nstehen die abstrakten Basisklassen ",(0,r.jsx)(n.code,{children:"InputStream"})," und ",(0,r.jsx)(n.code,{children:"OutputStream"})," zur\nVerf\xfcgung."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Datenstromklasse"}),(0,r.jsx)(n.th,{children:"Ein- und Ausgabe in..."})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"BufferedInputStream"})," und ",(0,r.jsx)(n.code,{children:"BufferedOutputStream"})]}),(0,r.jsx)(n.td,{children:"...einen Puffer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"FileInputStream"})," und ",(0,r.jsx)(n.code,{children:"FileOutputStream"})]}),(0,r.jsx)(n.td,{children:"...eine Datei"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"StringInputStream"})," und ",(0,r.jsx)(n.code,{children:"StringOutputStream"})]}),(0,r.jsx)(n.td,{children:"...eine Zeichenkette"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"schreiben-byteorientierter-daten",children:"Schreiben byteorientierter Daten"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Datei-Objekt erzeugen"}),"\n",(0,r.jsx)(n.li,{children:"FileOutputStream-Objekt erzeugen"}),"\n",(0,r.jsx)(n.li,{children:"BufferedOutputStream-Objekt erzeugen"}),"\n",(0,r.jsx)(n.li,{children:"Daten schreiben"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    File file = new File("stark.bin");\n\n    try (FileOutputStream fileOutputStream = new FileOutputStream(file);\n        BufferedOutputStream bufferedOutputStream = new BufferedOutputStream(fileOutputStream)) {\n      bufferedOutputStream.write("Winter is Coming".getBytes());\n    } catch (IOException e) {\n      e.printStackTrace();\n    }\n  }\n\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"lesen-byteorientierter-daten",children:"Lesen byteorientierter Daten"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Datei-Objekt erzeugen"}),"\n",(0,r.jsx)(n.li,{children:"FileInputStream-Objekt erzeugen"}),"\n",(0,r.jsx)(n.li,{children:"BufferedInputStream-Objekt erzeugen"}),"\n",(0,r.jsx)(n.li,{children:"Werte auslesen"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    File file = new File("stark.bin");\n\n    try (FileInputStream fileInputStream = new FileInputStream(file);\n        BufferedInputStream bufferedInputStream = new BufferedInputStream(fileInputStream)) {\n      byte[] input = bufferedInputStream.readAllBytes();\n      System.out.println(new String(input));\n    } catch (IOException e) {\n      e.printStackTrace();\n    }\n  }\n\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"schreiben-und-lesen-zeichenorientierter-daten",children:"Schreiben und Lesen zeichenorientierter Daten"}),"\n",(0,r.jsxs)(n.p,{children:["F\xfcr die Verarbeitung von zeichenorientierten Daten (z.B. Textdokumente) stehen\ndie abstrakten Basisklassen ",(0,r.jsx)(n.code,{children:"Reader"})," und ",(0,r.jsx)(n.code,{children:"Writer"})," zur Verf\xfcgung."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Datenstromklasse"}),(0,r.jsx)(n.th,{children:"Ein- und Ausgabe in..."})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"BufferedReader"})," und ",(0,r.jsx)(n.code,{children:"BufferedWriter"})]}),(0,r.jsx)(n.td,{children:"...einen Puffer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"FileReader"})," und ",(0,r.jsx)(n.code,{children:"FileWriter"})]}),(0,r.jsx)(n.td,{children:"...eine Datei"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"StringReader"})," und ",(0,r.jsx)(n.code,{children:"StringWriter"})]}),(0,r.jsx)(n.td,{children:"...eine Zeichenkette"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"schreiben-zeichenorientierter-daten",children:"Schreiben zeichenorientierter Daten"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Datei-Objekt erzeugen"}),"\n",(0,r.jsx)(n.li,{children:"FileWriter-Objekt erzeugen"}),"\n",(0,r.jsx)(n.li,{children:"BufferedWriter-Objekt erzeugen"}),"\n",(0,r.jsx)(n.li,{children:"Daten schreiben"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    File file = new File("stark.txt");\n\n    try (FileWriter fileWriter = new FileWriter(file);\n        BufferedWriter bufferedWriter = new BufferedWriter(fileWriter)) {\n      bufferedWriter.write("Winter is Coming");\n    } catch (IOException e) {\n      e.printStackTrace();\n    }\n  }\n\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"lesen-zeichenorientierter-daten",children:"Lesen zeichenorientierter Daten"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Datei-Objekt erzeugen"}),"\n",(0,r.jsx)(n.li,{children:"FileReader-Objekt erzeugen"}),"\n",(0,r.jsx)(n.li,{children:"BufferedReader-Objekt erzeugen"}),"\n",(0,r.jsx)(n.li,{children:"Werte auslesen"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    File file = new File("stark.txt");\n\n    try (FileReader fileReader = new FileReader(file);\n        BufferedReader bufferedReader = new BufferedReader(fileReader)) {\n      String line;\n      while ((line = bufferedReader.readLine()) != null) {\n        System.out.println(line);\n      }\n    } catch (IOException e) {\n      e.printStackTrace();\n    }\n  }\n\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"schreiben-und-lesen-serialisierter-objekte",children:"Schreiben und Lesen serialisierter Objekte"}),"\n",(0,r.jsxs)(n.p,{children:["Um ein Objekt persistent zu machen (also zu sichern) und um ein Objekt durch das\nNetzwerk zu schicken (also f\xfcr entfernte Methodenaufrufe) ist es notwendig, das\nObjekt in einen Byte-Strom umzuwandeln. Die Umwandlung eines Objektes in einen\nByte-Strom bezeichnet man als ",(0,r.jsx)(n.em,{children:"Serialisierung"})," die R\xfcckumwandlung als\n",(0,r.jsx)(n.em,{children:"Deserialisierung"})," Die Serialisierung erfolgt \xfcber die writeObject-Methode der\nKlasse ",(0,r.jsx)(n.code,{children:"ObjectOutputStream"}),", die Deserialisierung \xfcber die readObject-Methode\nder Klasse ",(0,r.jsx)(n.code,{children:"ObjectInputStream"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Damit Objekte einer Klasse serialisiert werden k\xf6nnen, muss die entsprechende\nKlasse die Schnittstelle ",(0,r.jsx)(n.code,{children:"Serializable"})," implementieren. Die Schnittstelle\n",(0,r.jsx)(n.code,{children:"Serializable"})," ist eine sogenannte Marker-Schnittstelle, d.h. sie besitzt keine\nzu implementierenden Methoden."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Foo.java" showLineNumbers',children:"public class Foo implements Serializable {\n\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"schreiben-serialisierter-objekte",children:"Schreiben serialisierter Objekte"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Datei-Objekt erzeugen"}),"\n",(0,r.jsx)(n.li,{children:"FileOutputStream-Objekt erzeugen"}),"\n",(0,r.jsx)(n.li,{children:"ObjectOutputStream-Objekt erzeugen"}),"\n",(0,r.jsx)(n.li,{children:"Objekte schreiben"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    List<Foo> foos = new ArrayList<>();\n    foos.add(new Foo());\n    foos.add(new Foo());\n\n    File file = new File("foos.bin");\n\n    try (FileOutputStream fileOutputStream = new FileOutputStream(file);\n        ObjectOutputStream objectOutputStream = new ObjectOutputStream(fileOutputStream)) {\n      for (Foo f : foos) {\n        objectOutputStream.writeObject(f);\n      }\n    } catch (IOException e) {\n      e.printStackTrace();\n    }\n  }\n\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"lesen-serialisierter-objekte",children:"Lesen serialisierter Objekte"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Datei-Objekt erzeugen"}),"\n",(0,r.jsx)(n.li,{children:"FileInputStream-Objekt erzeugen"}),"\n",(0,r.jsx)(n.li,{children:"ObjectInputStream-Objekt erzeugen"}),"\n",(0,r.jsx)(n.li,{children:"Objekte auslesen"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    File file = new File("foos.bin");\n\n    try (FileInputStream fileInputStream = new FileInputStream(file);\n        ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream)) {\n      while (true) {\n        Foo foo = (Foo) objectInputStream.readObject();\n        System.out.println(foo);\n      }\n    } catch (EOFException e) {\n      /* End of File */\n    } catch (IOException | ClassNotFoundException e) {\n      e.printStackTrace();\n    }\n  }\n\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"versionierung-bei-der-serialisierung",children:"Versionierung bei der Serialisierung"}),"\n",(0,r.jsxs)(n.p,{children:["Die Konstante ",(0,r.jsx)(n.code,{children:"serialVersionUID"})," vom Datentyp ",(0,r.jsx)(n.code,{children:"long"})," dient zur eindeutigen\nIdentifikation der Version einer serialisierbaren Klasse. Durch die Konstante\nkann sichergestellt werden, dass Empf\xe4nger von serialisierten Objekten\ntypkompatibel zum Sender sind, d.h. eine passende Klassenstruktur aufweisen."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Foo.java" showLineNumbers',children:"public class Foo implements Serializable {\n\n  public static final long serialVersionUID = 1L;\n\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"danger",children:(0,r.jsx)(n.p,{children:"Obwohl jede serialisierbare Klasse automatisch eine ID erh\xe4lt, wird die manuelle\nZuweisung dringend empfohlen."})}),"\n",(0,r.jsx)(n.h2,{id:"die-try-with-resources-anweisung",children:"Die try-with-resources-Anweisung"}),"\n",(0,r.jsx)(n.p,{children:'Bei einer "normalen" try-catch-Anweisung m\xfcssen die Datenstrom-Klassen manuell\ngeschlossen werden, was sich als sehr aufw\xe4ndig darstellt.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    File file = new File("stark.txt");\n    FileWriter fileWriter = null;\n    BufferedWriter bufferedWriter = null;\n\n    try {\n      fileWriter = new FileWriter(file);\n      bufferedWriter = new BufferedWriter(fileWriter);\n      bufferedWriter.write("Winter is Coming");\n    } catch (IOException e) {\n      e.printStackTrace();\n    } finally {\n      if (bufferedWriter != null) {\n        try {\n          bufferedWriter.close();\n        } catch (IOException e) {\n          e.printStackTrace();\n        }\n      }\n    }\n  }\n\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,r.jsx)(n.p,{children:"Der finally-Block einer try-Anweisung wird in jedem Fall durchlaufen."})}),"\n",(0,r.jsx)(n.p,{children:"Die try-with-resources-Anweisung erm\xf6glicht die Deklaration von Ressourcen, die\nam Ende des try-Blockes automatisch geschlossen werden."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    File file = new File("stark.txt");\n\n    try (FileWriter fileWriter = new FileWriter(file);\n        BufferedWriter bufferedWriter = new BufferedWriter(fileWriter)) {\n      bufferedWriter.write("Winter is Coming");\n    } catch (IOException e) {\n      e.printStackTrace();\n    }\n  }\n\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,r.jsxs)(n.p,{children:["Voraussetzung f\xfcr den Einsatz der try-with-resources-Anweisung ist, dass die\nRessourcen-Klassen die Schnittstelle ",(0,r.jsx)(n.code,{children:"AutoCloseable"})," implementiert haben."]})})]})}function o(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return a}});var t=i(67294);let r={},s=t.createContext(r);function a(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);