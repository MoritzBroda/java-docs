"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7647"],{57123:function(n,e,a){a.r(e),a.d(e,{metadata:()=>t,contentTitle:()=>s,default:()=>l,assets:()=>d,toc:()=>u,frontMatter:()=>r});var t=JSON.parse('{"id":"documentation/pseudo-random-numbers","title":"Pseudozufallszahlen","description":"","source":"@site/docs/documentation/pseudo-random-numbers.md","sourceDirName":"documentation","slug":"/documentation/pseudo-random-numbers","permalink":"/java-docs/production/documentation/pseudo-random-numbers","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/pseudo-random-numbers.md","tags":[{"inline":true,"label":"java-api","permalink":"/java-docs/production/tags/java-api"},{"inline":true,"label":"random","permalink":"/java-docs/production/tags/random"}],"version":"current","sidebarPosition":80,"frontMatter":{"title":"Pseudozufallszahlen","description":"","sidebar_position":80,"tags":["java-api","random"]},"sidebar":"documentationSidebar","previous":{"title":"Mathematische Berechnungen","permalink":"/java-docs/production/documentation/calculations"},"next":{"title":"Konsolenanwendungen","permalink":"/java-docs/production/documentation/console-applications"}}'),o=a("85893"),i=a("50065");let r={title:"Pseudozufallszahlen",description:"",sidebar_position:80,tags:["java-api","random"]},s=void 0,d={},u=[];function c(n){let e={code:"code",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["Die Klasse ",(0,o.jsx)(e.code,{children:"Random"})," erm\xf6glicht das Erzeugen von Pseudozufallszahlen.\nPseudozufallszahlen sind scheinbar zuf\xe4llige Zahlen, die aber auf Grund einer\nFormel berechnet werden."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    Random random = new Random();\n    int randomNumber;\n\n    for (int i = 0; i < 100; i++) {\n      randomNumber = random.nextInt(100) + 1;\n      System.out.println(randomNumber);\n    }\n  }\n\n}\n"})})]})}function l(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(c,{...n})}):c(n)}},50065:function(n,e,a){a.d(e,{Z:function(){return s},a:function(){return r}});var t=a(67294);let o={},i=t.createContext(o);function r(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);