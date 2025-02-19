"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["8972"],{97745:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"documentation/tests","title":"Softwaretests","description":"","source":"@site/docs/documentation/tests.md","sourceDirName":"documentation","slug":"/documentation/tests","permalink":"/java-docs/pr-preview/pr-266/documentation/tests","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/tests.md","tags":[{"inline":true,"label":"tests","permalink":"/java-docs/pr-preview/pr-266/tags/tests"}],"version":"current","sidebarPosition":310,"frontMatter":{"title":"Softwaretests","description":"","sidebar_position":310,"tags":["tests"]},"sidebar":"documentationSidebar","previous":{"title":"Die Java Stream API","permalink":"/java-docs/pr-preview/pr-266/documentation/java-stream-api"},"next":{"title":"Komponententests (Unit Tests)","permalink":"/java-docs/pr-preview/pr-266/documentation/unit-tests"}}'),i=t("85893"),r=t("50065");let o={title:"Softwaretests",description:"",sidebar_position:310,tags:["tests"]},a=void 0,d={},l=[];function c(e){let n={admonition:"admonition",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Softwaretests sollen sicherstellen, dass bei der Entwicklung oder \xc4nderung einer\nSoftware der Quellcode in allen festgelegten Anwendungsf\xe4llen korrekt\nfunktioniert. Mit Hilfe von Softwaretests k\xf6nnen Softwareentwickler im Idealfall\nschon w\xe4hrend des Entwicklungsprozesses m\xf6gliche Fehler identifizieren und\nbeheben. Man unterscheidet dabei zwischen verschiedenen Testarten:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Akzeptanztests: Testen des gesamten Systems unter realit\xe4tsgetreuen\nBedingungen"}),"\n",(0,i.jsx)(n.li,{children:"Systemtests: Testen des gesamten Systems"}),"\n",(0,i.jsx)(n.li,{children:"Integrationstests: Testen mehrerer, voneinander abh\xe4ngiger Komponenten"}),"\n",(0,i.jsx)(n.li,{children:"Komponententests: Testen einzelner, abgeschlossener Softwarebausteine"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Komponententests (Unit Tests) sowie Integrationstests spielen vor allem bei\nagilen Vorgehensweisen wie z.B. der testgetriebenen Entwicklung (Test Driven\nDevelopment) eine gro\xdfe Rolle. Hierbei werden Anwendungen Schritt f\xfcr Schritt\n(also inkrementell) um neue Funktionen erweitert (z.B. nach der\nRed-Green-Refactor-Methode): Zuerst wird ein Test geschrieben, der zun\xe4chst\nfehlschl\xe4gt (Red), anschlie\xdfend wird genau soviel Produktivcode geschrieben,\ndamit der Test erfolgreich durchl\xe4uft (Green). Schlie\xdflich werden beim\nRefactoring Testcode und Produktivcode aufger\xe4umt (also vereinfacht und\nverbessert)."}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart LR\n   Red --\x3e Green --\x3e Refactor --\x3e Red"}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,i.jsx)(n.p,{children:"Da durch die vorangestellten Tests eine kontinuierliche Designverbesserung\nstattfindet, wird die testgetriebene Entwicklung zu den Designstrategien\ngez\xe4hlt."})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var s=t(67294);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);