"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7317"],{34:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>a});var i=JSON.parse('{"id":"documentation/strings","title":"Zeichenketten (Strings)","description":"","source":"@site/docs/documentation/strings.md","sourceDirName":"documentation","slug":"/documentation/strings","permalink":"/java-docs/pr-preview/pr-245/documentation/strings","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/strings.md","tags":[{"inline":true,"label":"java-api","permalink":"/java-docs/pr-preview/pr-245/tags/java-api"},{"inline":true,"label":"strings","permalink":"/java-docs/pr-preview/pr-245/tags/strings"}],"version":"current","sidebarPosition":50,"frontMatter":{"title":"Zeichenketten (Strings)","description":"","sidebar_position":50,"tags":["java-api","strings"]},"sidebar":"documentationSidebar","previous":{"title":"Datenobjekte","permalink":"/java-docs/pr-preview/pr-245/documentation/data-objects"},"next":{"title":"Operatoren","permalink":"/java-docs/pr-preview/pr-245/documentation/operators"}}'),r=t("85893"),s=t("50065");let a={title:"Zeichenketten (Strings)",description:"",sidebar_position:50,tags:["java-api","strings"]},c=void 0,d={},l=[{value:"Escape-Sequenzen",id:"escape-sequenzen",level:2},{value:"Textbl\xf6cke",id:"textbl\xf6cke",level:2}];function o(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Ketten von beliebigen Zeichen werden durch die Klasse ",(0,r.jsx)(n.code,{children:"String"})," realisiert. Diese\nstellt einige hilfreiche Methoden zur Verf\xfcgung, die bei der Analyse und der\nVerarbeitung von Zeichenketten Verwendung finden. Die Angabe einer Zeichenkette\nerfolgt \xfcber die Anf\xfchrungszeichen."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    String text = "Winter";\n    String text2 = "Coming";\n\n    String text3 = text + " is " + text2;\n\n    int length = text3.length();\n    char charAt1 = text3.charAt(0);\n    String upperCase = text3.toUpperCase();\n  }\n\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"escape-sequenzen",children:"Escape-Sequenzen"}),"\n",(0,r.jsx)(n.p,{children:"Steuer- und Sonderzeichen in Zeichenketten k\xf6nnen mit Hilfe einer Escape-Sequenz\nrealisiert werden."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Escape-Squenz"}),(0,r.jsx)(n.th,{children:"Beschreibung"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\\n"}),(0,r.jsx)(n.td,{children:"Zeilensprung"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\\t"}),(0,r.jsx)(n.td,{children:"Tabulatorsprung"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\\\\"}),(0,r.jsx)(n.td,{children:"Schr\xe4ger rechts"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'\\"'}),(0,r.jsx)(n.td,{children:"Anf\xfchrungszeichen"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\\'"}),(0,r.jsx)(n.td,{children:"Hochkomma"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\\u0000 bis \\uFFFF"}),(0,r.jsx)(n.td,{children:"Unicode-Zeichen"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"textbl\xf6cke",children:"Textbl\xf6cke"}),"\n",(0,r.jsx)(n.p,{children:"Seit Java 15 erm\xf6glichen Textbl\xf6cke mehrzeilige Zeichenketten ohne umst\xe4ndliche\nUmwege."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    String text = """\n        <html>\n          <body>\n            <p>Winter is Coming</p>\n          </body>\n        </html>""";\n    System.out.println(text);\n  }\n\n}\n'})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return a}});var i=t(67294);let r={},s=i.createContext(r);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);