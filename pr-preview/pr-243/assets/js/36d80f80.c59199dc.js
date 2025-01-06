"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["5785"],{6243:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>s});var r=JSON.parse('{"id":"documentation/comparators","title":"Komparatoren","description":"","source":"@site/docs/documentation/comparators.md","sourceDirName":"documentation","slug":"/documentation/comparators","permalink":"/java-docs/pr-preview/pr-243/documentation/comparators","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/comparators.md","tags":[{"inline":true,"label":"comparators","permalink":"/java-docs/pr-preview/pr-243/tags/comparators"}],"version":"current","sidebarPosition":220,"frontMatter":{"title":"Komparatoren","description":"","sidebar_position":220,"tags":["comparators"]},"sidebar":"documentationSidebar","previous":{"title":"Listen","permalink":"/java-docs/pr-preview/pr-243/documentation/lists"},"next":{"title":"Java Collections Framework","permalink":"/java-docs/pr-preview/pr-243/documentation/java-collections-framework"}}'),i=t("85893"),a=t("50065");let o={title:"Komparatoren",description:"",sidebar_position:220,tags:["comparators"]},s=void 0,c={},l=[];function d(e){let n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Mit Hilfe der Methode ",(0,i.jsx)(n.code,{children:"int compareTo(o: T)"})," der Schnittstelle ",(0,i.jsx)(n.code,{children:"Comparable<T>"}),"\nbzw. der Methode ",(0,i.jsx)(n.code,{children:"int compare(o1: T, o2: T)"})," der Schnittstelle ",(0,i.jsx)(n.code,{children:"Comparator<T>"}),"\nk\xf6nnen Objekte einer Klasse miteinander verglichen werden. Der R\xfcckgabewert\nbeider Methoden gibt die Ordnung der zu vergleichenden Objekte an:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"R\xfcckgabewert kleiner Null: das Vergleichsobjekt ist gr\xf6\xdfer"}),"\n",(0,i.jsx)(n.li,{children:"R\xfcckgabewert gleich Null: beide Objekte sind gleich gro\xdf"}),"\n",(0,i.jsx)(n.li,{children:"R\xfcckgabewert gr\xf6\xdfer Null: das Vergleichsobjekt ist kleiner"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Objekte der Klasse ",(0,i.jsx)(n.code,{children:"Foo"})," k\xf6nnen durch die Implementierung der Methode\n",(0,i.jsx)(n.code,{children:"int compareTo(o: T)"})," der Schnittstelle ",(0,i.jsx)(n.code,{children:"Comparable<T>"})," miteinander verglichen\nwerden."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Container.java" showLineNumbers',children:"public class Container implements Comparable<Container> {\n\n  private String value;\n\n  public Container(String value) {\n    this.value = value;\n  }\n\n  public void setValue(String value) {\n    this.value = value;\n  }\n\n  public String getValue() {\n    return value;\n  }\n\n  @Override\n  public int compareTo(Container o) {\n    return value.compareTo(o.value);\n  }\n\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In der main-Methode der Startklasse wird mit Hilfe der statischen Methode\n",(0,i.jsx)(n.code,{children:"void sort(list: List<T>)"})," der Klasse ",(0,i.jsx)(n.code,{children:"Collections"})," eine Liste mit Objekten der\nKlasse ",(0,i.jsx)(n.code,{children:"Foo"})," sortiert. Aufgrund der Implementierung der compareTo-Methode wird\ndie Liste aufsteigend nach dem Attribut ",(0,i.jsx)(n.code,{children:"bar"})," sortiert."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n    List<Container> containers = new ArrayList<>();\n    containers.add(new Container("Winter"));\n    containers.add(new Container("is"));\n    containers.add(new Container("Coming"));\n\n    Collections.sort(containers);\n  }\n\n}\n'})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return o}});var r=t(67294);let i={},a=r.createContext(i);function o(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);