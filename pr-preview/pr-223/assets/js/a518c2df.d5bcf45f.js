"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["9210"],{41975:function(e,n,o){o.r(n),o.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>p,assets:()=>l,toc:()=>c,frontMatter:()=>i});var t=JSON.parse('{"id":"exercises/optionals/optionals01","title":"Optionals01","description":"","source":"@site/docs/exercises/optionals/optionals01.md","sourceDirName":"exercises/optionals","slug":"/exercises/optionals/optionals01","permalink":"/java-docs/pr-preview/pr-223/exercises/optionals/optionals01","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/optionals/optionals01.md","tags":[],"version":"current","frontMatter":{"title":"Optionals01","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Optionals","permalink":"/java-docs/pr-preview/pr-223/exercises/optionals/"},"next":{"title":"Optionals02","permalink":"/java-docs/pr-preview/pr-223/exercises/optionals/optionals02"}}'),s=o("85893"),a=o("50065");let i={title:"Optionals01",description:""},r=void 0,l={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",mermaid:"mermaid",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Passe die Klasse ",(0,s.jsx)(n.code,{children:"BookCollection"})," aus \xdcbungsaufgabe ",(0,s.jsx)(n.a,{href:"../maps/maps02",children:"Maps02"}),"\nanhand des abgebildeten Klassendiagramms an"]}),"\n",(0,s.jsxs)(n.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe ",(0,s.jsx)(n.a,{href:"../maps/maps02",children:"Maps02"})," so an,\ndass entweder die gefundenen Werte oder alternativ entsprechende Meldungen\nausgegeben werden"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n    BookCollection o-- Author\n    BookCollection o-- Book\n    DuplicateKeyException <.. BookCollection : throws\n\n    class Author {\n        <<record>>\n        name: String\n    }\n\n    class Book {\n        <<record>>\n        title: String\n    }\n\n    class BookCollection {\n        <<record>>\n        collection Map~Author&sbquo; List~Book~~\n        +addAuthor(author: Author) void\n        +addBook(author: Author, book: Book) void\n        +getMostDiligentAuthor() Optional~Author~\n        +getBookByTitle(title: String) Optional~Book~\n    }\n\n    class DuplicateKeyException {\n        <<exception>>\n    }"})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,o){o.d(n,{Z:function(){return r},a:function(){return i}});var t=o(67294);let s={},a=t.createContext(s);function i(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);