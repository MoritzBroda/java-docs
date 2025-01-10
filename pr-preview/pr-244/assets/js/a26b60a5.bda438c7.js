"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["4121"],{20801:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>h,assets:()=>a,toc:()=>l,frontMatter:()=>o});var i=JSON.parse('{"id":"documentation/object","title":"Die Mutter aller Klassen","description":"","source":"@site/docs/documentation/object.md","sourceDirName":"documentation","slug":"/documentation/object","permalink":"/java-docs/pr-preview/pr-244/documentation/object","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/object.md","tags":[{"inline":true,"label":"object","permalink":"/java-docs/pr-preview/pr-244/tags/object"}],"version":"current","sidebarPosition":190,"frontMatter":{"title":"Die Mutter aller Klassen","description":"","sidebar_position":190,"tags":["object"]},"sidebar":"documentationSidebar","previous":{"title":"(Dynamische) Polymorphie","permalink":"/java-docs/pr-preview/pr-244/documentation/polymorphy"},"next":{"title":"Abstrakte und finale Klassen und Methoden","permalink":"/java-docs/pr-preview/pr-244/documentation/abstract-and-final"}}'),s=t("85893"),r=t("50065");let o={title:"Die Mutter aller Klassen",description:"",sidebar_position:190,tags:["object"]},d=void 0,a={},l=[{value:"Die Methode <em>boolean equals(object: Object)</em>",id:"die-methode-boolean-equalsobject-object",level:2},{value:"Die Methode <em>int hashCode()</em>",id:"die-methode-int-hashcode",level:2},{value:"Die Methode <em>String toString()</em>",id:"die-methode-string-tostring",level:2}];function c(e){let n={admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Alle Klassen in Java sind letztlich Unterklassen der Klasse ",(0,s.jsx)(n.code,{children:"Object"}),". Daher wird\ndiese auch als die Mutter aller Klassen bezeichnet. Die Klasse vererbt ihren\nUnterklassen unter anderem die Methoden ",(0,s.jsx)(n.code,{children:"boolean equals(object: Object)"}),",\n",(0,s.jsx)(n.code,{children:"int hashCode()"})," und ",(0,s.jsx)(n.code,{children:"String toString()"}),". Diese drei Methoden sollte jede\nUnterklasse sinnvoll \xfcberschreiben."]}),"\n",(0,s.jsxs)(n.h2,{id:"die-methode-boolean-equalsobject-object",children:["Die Methode ",(0,s.jsx)(n.em,{children:"boolean equals(object: Object)"})]}),"\n",(0,s.jsxs)(n.p,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"boolean equals(object: Object)"})," pr\xfcft zwei Objekte auf Gleichheit.\nZwei Objekte gelten dabei in der Regel als gleich, wenn all ihre Attribute\ngleich sind."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="Computer.java (Auszug)" showLineNumbers',children:"public class Computer {\n   ...\n   @Override\n   public boolean equals(Object object) {\n      if (this == object) {\n         return true;\n      }\n      if (object == null) {\n         return false;\n      }\n      if (getClass() != object.getClass()) {\n         return false;\n      }\n      Computer other = (Computer) object;\n      return Objects.equals(description, other.description) && Objects.equals(cpu, other.cpu)\n            && memoryInGb == other.memoryInGb;\n   }\n   ...\n}\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"die-methode-int-hashcode",children:["Die Methode ",(0,s.jsx)(n.em,{children:"int hashCode()"})]}),"\n",(0,s.jsxs)(n.p,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"int hashCode()"})," liefert den Hashcode des aktuellen Objektes zur\xfcck.\nDie Methode sollte so \xfcberschrieben werden, dass gleiche Objekte den gleichen\nHashwert zur\xfcckgeben. Dies ist vor allem beim Arbeiten mit Hash-basierten\nDatensammlungen wie z.B. der Klasse ",(0,s.jsx)(n.code,{children:"HashMap<K, V>"})," notwendig."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="Computer.java (Auszug)" showLineNumbers',children:"public class Computer {\n   ...\n   @Override\n   public int hashCode() {\n      return Objects.hash(description, cpu, memoryInGb);\n   }\n   ...\n}\n\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,s.jsxs)(n.p,{children:["Die statische Methode ",(0,s.jsx)(n.code,{children:"int hash(values: Object...)"})," der Klasse ",(0,s.jsx)(n.code,{children:"Objects"})," liefert\neine einfache M\xf6glichkeit zur Implementierung der Methode ",(0,s.jsx)(n.code,{children:"boolean hashCode()"}),"."]})}),"\n",(0,s.jsxs)(n.h2,{id:"die-methode-string-tostring",children:["Die Methode ",(0,s.jsx)(n.em,{children:"String toString()"})]}),"\n",(0,s.jsxs)(n.p,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"String toString()"})," liefert eine eindeutige Kennung des Objektes in\nder Form ",(0,s.jsx)(n.em,{children:"[Vollst\xe4ndiger Klassenname]"}),"@",(0,s.jsx)(n.em,{children:"[Adresse des Objektes im Hauptspeicher\nin hexadezimaler Notation]"})," zur\xfcck. Die Methode sollte so \xfcberschrieben werden,\ndass alle relevanten Attribute des Objektes als Zeichenkette zur\xfcckgegeben\nwerden. In der Regel geschieht dies in der Form ",(0,s.jsx)(n.em,{children:"[Klassenname]\n[[Attribut]=[Attributswert], ...]"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="Computer.java" showLineNumbers',children:'public class Computer {\n   ...\n   @Override\n   public String toString() {\n      return "Computer [description=" + description + ", cpu=" + cpu + ", memoryInGb=" + memoryInGb\n            + "]";\n   }\n   ...\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,s.jsxs)(n.p,{children:["Wird den print-Methoden des Ausgabestroms ",(0,s.jsx)(n.code,{children:"System.out"})," eine Objektreferenz\n\xfcbergeben, wird implizit die Methode ",(0,s.jsx)(n.code,{children:"String toString()"})," des jeweiligen Objektes\naufgerufen."]})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var i=t(67294);let s={},r=i.createContext(s);function o(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);