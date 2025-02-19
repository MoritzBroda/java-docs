"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["5785"],{45049:function(e,n,o){o.r(n),o.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>s});var t=JSON.parse('{"id":"documentation/comparators","title":"Komparatoren","description":"","source":"@site/docs/documentation/comparators.md","sourceDirName":"documentation","slug":"/documentation/comparators","permalink":"/java-docs/pr-preview/pr-266/documentation/comparators","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/comparators.md","tags":[{"inline":true,"label":"comparators","permalink":"/java-docs/pr-preview/pr-266/tags/comparators"}],"version":"current","sidebarPosition":220,"frontMatter":{"title":"Komparatoren","description":"","sidebar_position":220,"tags":["comparators"]},"sidebar":"documentationSidebar","previous":{"title":"Listen","permalink":"/java-docs/pr-preview/pr-266/documentation/lists"},"next":{"title":"Java Collections Framework","permalink":"/java-docs/pr-preview/pr-266/documentation/java-collections-framework"}}'),r=o("85893"),i=o("50065");let a={title:"Komparatoren",description:"",sidebar_position:220,tags:["comparators"]},s=void 0,c={},d=[];function l(e){let n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Mit Hilfe der Methode ",(0,r.jsx)(n.code,{children:"int compareTo(o: T)"})," der Schnittstelle ",(0,r.jsx)(n.code,{children:"Comparable<T>"}),"\nbzw. der Methode ",(0,r.jsx)(n.code,{children:"int compare(o1: T, o2: T)"})," der Schnittstelle ",(0,r.jsx)(n.code,{children:"Comparator<T>"}),"\nk\xf6nnen Objekte einer Klasse miteinander verglichen werden. Der R\xfcckgabewert\nbeider Methoden gibt die Ordnung der zu vergleichenden Objekte an:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"R\xfcckgabewert kleiner Null: das Vergleichsobjekt ist gr\xf6\xdfer"}),"\n",(0,r.jsx)(n.li,{children:"R\xfcckgabewert gleich Null: beide Objekte sind gleich gro\xdf"}),"\n",(0,r.jsx)(n.li,{children:"R\xfcckgabewert gr\xf6\xdfer Null: das Vergleichsobjekt ist kleiner"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Objekte der Klasse ",(0,r.jsx)(n.code,{children:"Notebook"})," k\xf6nnen durch die Implementierung der Methode\n",(0,r.jsx)(n.code,{children:"int compareTo(o: T)"})," der Schnittstelle ",(0,r.jsx)(n.code,{children:"Comparable<T>"})," miteinander verglichen\nwerden."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Notebook.java (Auszug)" showLineNumbers',children:"public final class Notebook extends Computer implements Comparable<Notebook> {\n   ...\n   @Override\n   public int compareTo(Notebook o) {\n      return Integer.compare(o.memoryInGb, memoryInGb);\n   }\n   ...\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Die Klasse ",(0,r.jsx)(n.code,{children:"NotebookByPowerInGhzComparator"})," erm\xf6glicht das Vergleichen von\nObjekten der Klasse ",(0,r.jsx)(n.code,{children:"Notebook"})," anhand der Prozessorleistung."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="NotebookByPowerInGhzComparator.java" showLineNumbers',children:"public class NotebookByPowerInGhzComparator implements Comparator<Notebook> {\n   ...\n   @Override\n   public int compare(Notebook o1, Notebook o2) {\n      return Integer.compare(o1.cpu().powerInGhz(), o2.cpu.powerInGhz());\n   }\n   ...\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In der main-Methode der Startklasse wird mit Hilfe der statischen Methode\n",(0,r.jsx)(n.code,{children:"void sort(list: List<T>)"})," der Klasse ",(0,r.jsx)(n.code,{children:"Collections"})," eine Liste mit Objekten der\nKlasse ",(0,r.jsx)(n.code,{children:"Notebook"})," sortiert. Aufgrund der Implementierung der compareTo-Methode\nwird die Liste zun\xe4chst absteigend nach dem Attribut ",(0,r.jsx)(n.code,{children:"memoryInGb"})," sortiert.\nAnschlie\xdfend wird die Liste aufsteigend nach der Prozessorleistung sortiert."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n   public static void main(String[] args) {\n      List<Notebook> notebooks = new ArrayList<>();\n      notebooks.add(new Notebook("Mein Office Laptop", new Cpu(3.5, 8), 16, 14));\n      notebooks.add(new Notebook("Mein Gaming Laptop", new Cpu(4.7, 8), 32, 16));\n\n      Collections.sort(notebooks);\n      Collections.sort(notebooks, new NotebookByPowerInGhzComparator());\n   }\n\n}\n'})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},50065:function(e,n,o){o.d(n,{Z:function(){return s},a:function(){return a}});var t=o(67294);let r={},i=t.createContext(r);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);