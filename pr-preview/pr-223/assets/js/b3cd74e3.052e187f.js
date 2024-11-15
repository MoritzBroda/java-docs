"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["8395"],{65465:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>l});var s=JSON.parse('{"id":"documentation/loops","title":"Schleifen","description":"","source":"@site/docs/documentation/loops.md","sourceDirName":"documentation","slug":"/documentation/loops","permalink":"/java-docs/pr-preview/pr-223/documentation/loops","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/loops.md","tags":[{"inline":true,"label":"control-structures","permalink":"/java-docs/pr-preview/pr-223/tags/control-structures"},{"inline":true,"label":"loops","permalink":"/java-docs/pr-preview/pr-223/tags/loops"}],"version":"current","sidebarPosition":105,"frontMatter":{"title":"Schleifen","description":"","sidebar_position":105,"tags":["control-structures","loops"]},"sidebar":"documentationSidebar","previous":{"title":"Verzweigungen","permalink":"/java-docs/pr-preview/pr-223/documentation/cases"},"next":{"title":"Felder (Arrays)","permalink":"/java-docs/pr-preview/pr-223/documentation/arrays"}}'),r=i("85893"),t=i("50065");let l={title:"Schleifen",description:"",sidebar_position:105,tags:["control-structures","loops"]},a=void 0,c={},o=[{value:"while-Schleifen",id:"while-schleifen",level:2},{value:"do/while-Schleifen",id:"dowhile-schleifen",level:2},{value:"for-Schleifen",id:"for-schleifen",level:2},{value:"for-each-Schleifen",id:"for-each-schleifen",level:2},{value:"Schleifensteuerung",id:"schleifensteuerung",level:2}];function d(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Schleifen sind eine von zwei M\xf6glichkeiten, Anweisungsbl\xf6cke wiederholt\nauszuf\xfchren. Die zweite M\xf6glichkeit sind Selbstaufrufe in Form rekursiver\nMethoden."}),"\n",(0,r.jsx)(n.h2,{id:"while-schleifen",children:"while-Schleifen"}),"\n",(0,r.jsxs)(n.p,{children:["Bei der while-Schleife wird eine bestimmte Anweisungsfolge (",(0,r.jsx)(n.em,{children:"Schleifenrumpf"}),")\nwiederholt, solange eine bestimmte Bedingung (",(0,r.jsx)(n.em,{children:"Schleifenbedingung"}),") wahr ist. Da\nzu Beginn der Schleife die Bedingung gepr\xfcft wird, spricht man auch von einer\n",(0,r.jsx)(n.em,{children:"kopfgesteuerten Schleife"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    int i = 0;\n    while (i < 10) {\n      System.out.println(i);\n      i++;\n    }\n  }\n\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"dowhile-schleifen",children:"do/while-Schleifen"}),"\n",(0,r.jsxs)(n.p,{children:["Im Gegensatz zur while-Schleife wird bei der do/while-Schleife der\nSchleifenrumpf immer mindestens einmal durchlaufen. Da die Bedingung hier am\nEnde der Schleife gepr\xfcft wird, spricht man hier von einer ",(0,r.jsx)(n.em,{children:"fu\xdfgesteuerten\nSchleife"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    int i = 0;\n    do {\n      System.out.println(i);\n      i++;\n    } while (i < 10);\n  }\n\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"for-schleifen",children:"for-Schleifen"}),"\n",(0,r.jsxs)(n.p,{children:["Bei der for-Schleife handelt es sich um eine indexgesteuerte Schleife, auch\n",(0,r.jsx)(n.em,{children:"Z\xe4hlschleife"})," genannt. Durch den Index wird bereits zu Schleifenbeginn\nfestgelegt, wie oft die Schleife durchlaufen wird."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    for (int i = 0; i < 10; i++) {\n      System.out.println(i);\n    }\n  }\n\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"for-each-schleifen",children:"for-each-Schleifen"}),"\n",(0,r.jsxs)(n.p,{children:["Mit Hilfe der for-each-Schleife k\xf6nnen Datensammlungen wie z.B. ",(0,r.jsx)(n.a,{href:"arrays",children:"Felder"}),"\nund ",(0,r.jsx)(n.a,{href:"lists",children:"Listen"})," elementweise durchlaufen werden. Allerdings k\xf6nnen die\nElemente einer Datensammlung nur ge\xe4ndert werden, nicht jedoch die Datensammlung\nselbst."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    int[] ids = {4, 8, 15, 16, 23, 42};\n    for (int i : ids) {\n      System.out.println(i);\n    }\n  }\n\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"schleifensteuerung",children:"Schleifensteuerung"}),"\n",(0,r.jsxs)(n.p,{children:["Die Anweisung ",(0,r.jsx)(n.code,{children:"break"})," sorgt daf\xfcr, dass eine Schleife ungeachtet der Bedingung\nkomplett verlassen wird. Mit der Anweisung ",(0,r.jsx)(n.code,{children:"continue"})," wird der aktuelle\nSchleifendurchgang abgebrochen und die Schleife wird mit dem n\xe4chsten Durchlauf\nfortgef\xfchrt."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    for (int i = 0; i < 10; i++) {\n      if (i == 6) {\n        break;\n      }\n      if (i % 2 == 0) {\n        continue;\n      }\n      System.out.println(i);\n    }\n  }\n\n}\n"})})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return l}});var s=i(67294);let r={},t=s.createContext(r);function l(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);