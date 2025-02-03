"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["6656"],{12583:function(e,t,a){a.r(t),a.d(t,{default:()=>d,frontMatter:()=>r,metadata:()=>s,assets:()=>o,toc:()=>u,contentTitle:()=>c});var s=JSON.parse('{"id":"exam-exercises/exam-exercises-java1/activity-diagrams/discount-calculator","title":"Rabattrechner","description":"","source":"@site/docs/exam-exercises/exam-exercises-java1/activity-diagrams/discount-calculator.md","sourceDirName":"exam-exercises/exam-exercises-java1/activity-diagrams","slug":"/exam-exercises/exam-exercises-java1/activity-diagrams/discount-calculator","permalink":"/java-docs/pr-preview/pr-260/exam-exercises/exam-exercises-java1/activity-diagrams/discount-calculator","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exam-exercises/exam-exercises-java1/activity-diagrams/discount-calculator.md","tags":[{"inline":true,"label":"activity-diagrams","permalink":"/java-docs/pr-preview/pr-260/tags/activity-diagrams"}],"version":"current","frontMatter":{"title":"Rabattrechner","description":"","tags":["activity-diagrams"]},"sidebar":"examExercisesSidebar","previous":{"title":"Geldautomat","permalink":"/java-docs/pr-preview/pr-260/exam-exercises/exam-exercises-java1/activity-diagrams/cash-machine"},"next":{"title":"Insertionsort","permalink":"/java-docs/pr-preview/pr-260/exam-exercises/exam-exercises-java1/activity-diagrams/insertion-sort"}}'),i=a("85893"),n=a("50065");let r={title:"Rabattrechner",description:"",tags:["activity-diagrams"]},c=void 0,o={},u=[{value:"Aktivit\xe4tsdiagramm zur Klasse <em>DiscountCalculator</em>",id:"aktivit\xe4tsdiagramm-zur-klasse-discountcalculator",level:2}];function m(e){let t={code:"code",em:"em",h2:"h2",mermaid:"mermaid",p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Erstelle die ausf\xfchrbare Klasse ",(0,i.jsx)(t.code,{children:"DiscountCalculator"})," anhand des abgebildeten\nAktivit\xe4tsdiagramms."]}),"\n",(0,i.jsxs)(t.h2,{id:"aktivit\xe4tsdiagramm-zur-klasse-discountcalculator",children:["Aktivit\xe4tsdiagramm zur Klasse ",(0,i.jsx)(t.em,{children:"DiscountCalculator"})]}),"\n",(0,i.jsx)(t.mermaid,{value:'stateDiagram-v2\n    state "Ausgabe: Bitte Jahresumsatz in Euro eingeben" as state1\n    state "Eingabe: [Jahresumsatz in Euro]" as state2\n    state "Ausgabe: Bitte Rechnungsbetrag in Euro eingeben" as state3\n    state "Eingabe: [Rechnungsbetrag in Euro]" as state4\n    state "[Rabatt in %] = 0" as state5\n    state "[Rabatt in %] = 10" as state6\n    state "[Rabatt in %] = 20" as state7\n    state "[Rabatt in Euro] = [Rechnungsbetrag in Euro] * [Rabatt in %] / 100" as state8\n    state "[Rabattierter Rechnungsbetrag in Euro] = [Rechnungsbetrag in Euro] - [Rabatt in Euro]" as state9\n    state "Ausgabe: Rabattierter Rechnungsbetrag in Euro: [Rabattierter Rechnungsbetrag in Euro]" as state10\n    state "Ausgabe: Weitere Berechnung durchf\xfchren (Ja, Nein)?" as state11\n    state "Eingabe: [Wiederholung]" as state12\n\n    state if1 <<choice>>\n    state if2 <<choice>>\n    state fork1 <<fork>>\n\n    state "Rabattrechner" as main {\n        [*] --\x3e state1\n        state1 --\x3e state2\n        state2 --\x3e state3\n        state3 --\x3e state4\n        state4 --\x3e if1\n        if1 --\x3e state5: sonst\n        if1 --\x3e state6: [Jahresumsatz in Euro] > 1.000 und <= 5.000\n        if1 --\x3e state7: [Jahresumsatz in Euro] > 5.000\n        state5 --\x3e fork1\n        state6 --\x3e fork1\n        state7 --\x3e fork1\n        fork1 --\x3e state8\n        state8 --\x3e state9\n        state9 --\x3e state10\n        state10 --\x3e state11\n        state11 --\x3e state12\n        state12 --\x3e if2\n        if2 --\x3e state1: [Wiederholung] = Ja\n        if2 --\x3e [*]: sonst\n    }'})]})}function d(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},50065:function(e,t,a){a.d(t,{Z:function(){return c},a:function(){return r}});var s=a(67294);let i={},n=s.createContext(i);function r(e){let t=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);