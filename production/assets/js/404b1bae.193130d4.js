"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7395"],{40241:function(e,n,i){i.r(n),i.d(n,{metadata:()=>a,contentTitle:()=>o,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>t});var a=JSON.parse('{"id":"exam-exercises/exam-exercises-java2/class-diagrams/library","title":"Bibliothek","description":"","source":"@site/docs/exam-exercises/exam-exercises-java2/class-diagrams/library.md","sourceDirName":"exam-exercises/exam-exercises-java2/class-diagrams","slug":"/exam-exercises/exam-exercises-java2/class-diagrams/library","permalink":"/java-docs/production/exam-exercises/exam-exercises-java2/class-diagrams/library","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java2/class-diagrams/library.md","tags":[{"inline":true,"label":"inheritance","permalink":"/java-docs/production/tags/inheritance"},{"inline":true,"label":"polymorphy","permalink":"/java-docs/production/tags/polymorphy"},{"inline":true,"label":"exceptions","permalink":"/java-docs/production/tags/exceptions"},{"inline":true,"label":"records","permalink":"/java-docs/production/tags/records"},{"inline":true,"label":"maps","permalink":"/java-docs/production/tags/maps"},{"inline":true,"label":"optionals","permalink":"/java-docs/production/tags/optionals"}],"version":"current","frontMatter":{"title":"Bibliothek","description":"","tags":["inheritance","polymorphy","exceptions","records","maps","optionals"]},"sidebar":"examExercisesSidebar","previous":{"title":"Lego-Baustein","permalink":"/java-docs/production/exam-exercises/exam-exercises-java2/class-diagrams/lego-brick"},"next":{"title":"Kartenspieler","permalink":"/java-docs/production/exam-exercises/exam-exercises-java2/class-diagrams/player"}}'),s=i("85893"),r=i("50065");let t={title:"Bibliothek",description:"",tags:["inheritance","polymorphy","exceptions","records","maps","optionals"]},o=void 0,l={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse <em>EBook</em>",id:"hinweis-zur-klasse-ebook",level:2},{value:"Hinweise zur Klasse <em>Library</em>",id:"hinweise-zur-klasse-library",level:2}];function d(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine\nausf\xfchrbare Klasse und/oder eine Testklasse."}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    Library o-- Book\n    Status --o Library\n    Book <|-- EBook : extends\n    Book <|-- PaperBook : extends\n    Author --o Book\n    EBook o-- FileFormat\n\n    class Library {\n        <<record>>\n        name: String &#123final&#125\n        books: Map~Book, Status~ &#123final&#125\n        +addBook(book: Book) void\n        +getBookByTitle(title: String) Optional~Book~\n        +getPaperBooksByStatus(status: Status) List~PaperBook~\n    }\n\n    class Status {\n        <<enumeration>>\n        AVAILABLE = verf\xfcgbar\n        LENT = verliehen\n        -description: String &#123final&#125\n    }\n\n    class Book {\n        <<abstract>>\n        -id: UUID &#123final&#125\n        -author: Author &#123final&#125\n        -title: String &#123final&#125\n        +Book(author: Author, title: String)\n    }\n\n    class EBook {\n        -fileFormat: FileFormat &#123final&#125\n        -fileSizeInKb: int &#123final&#125\n        +EBook(author: Author, title: String, fileFormat: FileFormat, fileSizeInKb: int)\n    }\n\n    class PaperBook {\n        -pages: int &#123final&#125\n        +PaperBook(author: Author, title: String, pages: int)\n    }\n\n    class Author {\n        <<record>>\n        name: String\n        nationality: String\n    }\n\n    class FileFormat {\n        <<enumeration>>\n        AZW = Amazon Kindle\n        EPUB = Electronic Publication\n        LRF = Portable Reader File\n        -description: String &#123final&#125\n    }"}),"\n",(0,s.jsx)(n.h2,{id:"allgemeine-hinweise",children:"Allgemeine Hinweise"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und\nObject-Methoden dargestellt"}),"\n",(0,s.jsx)(n.li,{children:"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die\nObject-Methoden wie gewohnt implementiert werden"}),"\n",(0,s.jsxs)(n.li,{children:["Die statische Methode ",(0,s.jsx)(n.code,{children:"UUID randomUUID()"})," der Klasse ",(0,s.jsx)(n.code,{children:"UUID"})," gibt eine zuf\xe4llig\nerstellte UUID zur\xfcck"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-ebook",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"EBook"})]}),"\n",(0,s.jsxs)(n.p,{children:["Der Konstruktor soll alle Attribute initialisieren. F\xfcr den Fall, dass die\neingehende Dateigr\xf6\xdfe kleiner gleich Null ist, soll die Ausnahme\n",(0,s.jsx)(n.code,{children:"WrongFileSizeException"})," ausgel\xf6st werden."]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-library",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"Library"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void addBook(book: Book)"})," soll der B\xfccherliste (",(0,s.jsx)(n.code,{children:"books"}),") das\neingehende Buch mit dem Status ",(0,s.jsx)(n.code,{children:"verf\xfcgbar"})," hinzuf\xfcgen"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"Optional<Book> getBookByTitle(title: String)"})," soll das Buch zum\neingehenden Titel als Optional zur\xfcckgeben"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"List<PaperBook> getPaperBooksByStatus(status: Status)"})," soll alle\ngedruckten B\xfccher zum eingehenden Status zur\xfcckgeben"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return t}});var a=i(67294);let s={},r=a.createContext(s);function t(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);