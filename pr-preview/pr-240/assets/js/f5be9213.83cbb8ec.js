"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["0"],{6347:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>o,default:()=>d,assets:()=>p,toc:()=>c,frontMatter:()=>s});var a=JSON.parse('{"id":"documentation/wrappers","title":"Wrapper-Klassen","description":"","source":"@site/docs/documentation/wrappers.md","sourceDirName":"documentation","slug":"/documentation/wrappers","permalink":"/java-docs/pr-preview/pr-240/documentation/wrappers","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/wrappers.md","tags":[{"inline":true,"label":"java-api","permalink":"/java-docs/pr-preview/pr-240/tags/java-api"},{"inline":true,"label":"wrappers","permalink":"/java-docs/pr-preview/pr-240/tags/wrappers"}],"version":"current","sidebarPosition":141,"frontMatter":{"title":"Wrapper-Klassen","description":"","sidebar_position":141,"tags":["java-api","wrappers"]},"sidebar":"documentationSidebar","previous":{"title":"Die Java API","permalink":"/java-docs/pr-preview/pr-240/documentation/java-api"},"next":{"title":"Datums- und Zeitangaben","permalink":"/java-docs/pr-preview/pr-240/documentation/dates-and-times"}}'),i=t("85893"),r=t("50065");let s={title:"Wrapper-Klassen",description:"",sidebar_position:141,tags:["java-api","wrappers"]},o=void 0,p={},c=[];function l(e){let n={admonition:"admonition",code:"code",em:"em",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Wrapper-Klassen (auch H\xfcllenklassen genannt) verpacken primitive Datentypen in\nvollwertigen Klassen und erweitern so die primitiven Datentypen um hilfreiche\nMethoden. Das Verpacken eines primitiven Datentyps bezeichnet man als ",(0,i.jsx)(n.em,{children:"Boxing"}),",\ndas Entpacken als ",(0,i.jsx)(n.em,{children:"Unboxing"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    Integer i = Integer.valueOf(\"631\");\n    System.out.println(i);\n    Boolean b = Boolean.logicalXor(true, false);\n    System.out.println(b);\n    Character c = Character.toUpperCase('a');\n    System.out.println(c);\n  }\n\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,i.jsxs)(n.p,{children:["Wrapper-Klassen basieren auf dem Entwurfsmuster ",(0,i.jsx)(n.em,{children:"Adapter"}),", welches die\nKommunikation zwischen Klassen mit zueinander inkompatiblen Schnittstellen\nerm\xf6glicht."]})})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var a=t(67294);let i={},r=a.createContext(i);function s(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);