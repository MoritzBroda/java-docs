"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["1972"],{68532:function(e,n,i){i.r(n),i.d(n,{default:()=>d,frontMatter:()=>s,metadata:()=>t,assets:()=>l,toc:()=>u,contentTitle:()=>o});var t=JSON.parse('{"id":"documentation/enumerations","title":"Aufz\xe4hlungen (Enumerations)","description":"","source":"@site/docs/documentation/enumerations.md","sourceDirName":"documentation","slug":"/documentation/enumerations","permalink":"/java-docs/pr-preview/pr-265/documentation/enumerations","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/enumerations.md","tags":[{"inline":true,"label":"enumerations","permalink":"/java-docs/pr-preview/pr-265/tags/enumerations"}],"version":"current","sidebarPosition":150,"frontMatter":{"title":"Aufz\xe4hlungen (Enumerations)","description":"","sidebar_position":150,"tags":["enumerations"]},"sidebar":"documentationSidebar","previous":{"title":"Dateien und Verzeichnisse","permalink":"/java-docs/pr-preview/pr-265/documentation/files"},"next":{"title":"Klassendiagramme","permalink":"/java-docs/pr-preview/pr-265/documentation/class-diagrams"}}'),a=i("85893"),r=i("50065");let s={title:"Aufz\xe4hlungen (Enumerations)",description:"",sidebar_position:150,tags:["enumerations"]},o=void 0,l={},u=[{value:"Implementieren von Aufz\xe4hlungen",id:"implementieren-von-aufz\xe4hlungen",level:2},{value:"Verwenden von Aufz\xe4hlungen",id:"verwenden-von-aufz\xe4hlungen",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Bei einer Aufz\xe4hlung (Enumeration) handelt es sich um eine spezielle Klasse, von\nder nur eine vorgegebene, endliche Anzahl an Instanzen existiert. Diese\nInstanzen werden als ",(0,a.jsx)(n.em,{children:"Aufz\xe4hlungskonstanten"})," bezeichnet. Technisch gesehen\nhandelt es sich bei Aufz\xe4hlungskonstanten um \xf6ffentliche, statische Konstanten\nvom Typ der Aufz\xe4hlung."]}),"\n",(0,a.jsx)(n.h2,{id:"implementieren-von-aufz\xe4hlungen",children:"Implementieren von Aufz\xe4hlungen"}),"\n",(0,a.jsxs)(n.p,{children:["Die Definition einer Aufz\xe4hlung erfolgt analog zur Definition von Klassen, das\nSchl\xfcsselwort hierf\xfcr lautet ",(0,a.jsx)(n.code,{children:"enum"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="WeekDay.java" showLineNumbers',children:'public enum Weekday {\n\n   MONDAY("Montag", true),\n   TUESDAY("Dienstag", true),\n   WEDNESDAY("Mittwoch", true),\n   THURSDAY("Donnerstag", true),\n   FRIDAY("Freitag", true),\n   SATURDAY("Samstag", true),\n   SUNDAY("Sonntag", false);\n\n   private final String description;\n   private final boolean isWorkingDay;\n\n   Weekday(String description, boolean isWorkingDay) {\n      this.description = description;\n      this.isWorkingDay = isWorkingDay;\n   }\n\n   public String description() {\n      return description;\n   }\n\n   public boolean workingDay() {\n      return isWorkingDay;\n   }\n\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"verwenden-von-aufz\xe4hlungen",children:"Verwenden von Aufz\xe4hlungen"}),"\n",(0,a.jsx)(n.p,{children:"Aufz\xe4hlungen besitzen eine Reihe hilfreicher Methoden:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Die statische Methode ",(0,a.jsx)(n.code,{children:"T[] values()"})," gibt alle Aufz\xe4hlunskonstanten als Feld\nzur\xfcck"]}),"\n",(0,a.jsxs)(n.li,{children:["Die statische Methode ",(0,a.jsx)(n.code,{children:"T valueOf(name: String)"})," gibt zu einer eingehenden\nZeichenkette die dazugeh\xf6rige Aufz\xe4hlungskonstante zur\xfcck"]}),"\n",(0,a.jsxs)(n.li,{children:["Die Methode ",(0,a.jsx)(n.code,{children:"int ordinal()"})," gibt die Ordnungszahl der Aufz\xe4hlungskonstanten\nzur\xfcck"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n   public static void main(String[] args) {\n      Weekday monday = Weekday.valueOf("MONDAY");\n      for (Weekday w : Weekday.values()) {\n         System.out.println(w.ordinal());\n      }\n   }\n\n}\n'})})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return s}});var t=i(67294);let a={},r=t.createContext(a);function s(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);