"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["4407"],{73586:function(e,n,a){a.r(n),a.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>s,assets:()=>u,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"documentation/inner-classes","title":"Innere Klassen (Inner Classes)","description":"","source":"@site/docs/documentation/inner-classes.mdx","sourceDirName":"documentation","slug":"/documentation/inner-classes","permalink":"/java-docs/pr-preview/pr-266/documentation/inner-classes","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/inner-classes.mdx","tags":[{"inline":true,"label":"inner-classes","permalink":"/java-docs/pr-preview/pr-266/tags/inner-classes"}],"version":"current","sidebarPosition":260,"frontMatter":{"title":"Innere Klassen (Inner Classes)","description":"","sidebar_position":260,"tags":["inner-classes"]},"sidebar":"documentationSidebar","previous":{"title":"Simple Logging Facade for Java (SLF4J)","permalink":"/java-docs/pr-preview/pr-266/documentation/slf4j"},"next":{"title":"Lambda-Ausdr\xfccke (Lambdas)","permalink":"/java-docs/pr-preview/pr-266/documentation/lambdas"}}'),t=a("85893"),r=a("50065"),l=a("58168"),i=a("97645");let o={title:"Innere Klassen (Inner Classes)",description:"",sidebar_position:260,tags:["inner-classes"]},c=void 0,u={},d=[{value:"Geschachtelte Klassen (Nested Classes)",id:"geschachtelte-klassen-nested-classes",level:2},{value:"Elementklassen (Member Classes)",id:"elementklassen-member-classes",level:2},{value:"Lokale Klassen",id:"lokale-klassen",level:2},{value:"Anonyme Klassen",id:"anonyme-klassen",level:2}];function m(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Java bietet die M\xf6glichkeit, Klassen und Schnittstellen zu verschachteln. Das\nZiel von inneren Klassen ist eine Definition von Hilfsklassen m\xf6glichst nahe an\nder Stelle, wo sie gebraucht werden. Beispiele f\xfcr Hilfsklassen sind\nAusnahmeklassen, Komparatoren und Ereignisbehandler. Alle bisherigen Klassen\nwerden auch als ",(0,t.jsx)(n.em,{children:"\xe4u\xdferer Klassen"})," bzw. ",(0,t.jsx)(n.em,{children:"Top-Level-Klassen"})," bezeichnet."]}),"\n",(0,t.jsx)(n.h2,{id:"geschachtelte-klassen-nested-classes",children:"Geschachtelte Klassen (Nested Classes)"}),"\n",(0,t.jsxs)(n.p,{children:["Geschachtelte Klassen sind Top-Level-Klassen, die zur Strukturierung des\nNamensraumes in anderen Top-Level-Klassen definiert sind. Ein Namensraum ist die\nvollst\xe4ndige Pfadangabe zur Klasse (z.B. ",(0,t.jsx)(n.code,{children:"java.lang"}),"). Geschachtelte Klassen\nm\xfcssen statisch definiert werden und sind daher im eigentlichen Sinne keine\nrichtigen inneren Klassen."]}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(i.Z,{value:"a",label:"Geschachtelte Klasse",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Computer.java (Auszug)" showLineNumbers',children:"public abstract class Computer {\n   ...\n   public static final class Notebook extends Computer implements Comparable<Notebook> {...}\n\n   public static final class Cpu {...}\n   ...\n}\n"})})}),(0,t.jsx)(i.Z,{value:"b",label:"Startklasse",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n   public static void main(String[] args) {\n      Computer.Cpu cpu = new Computer.Cpu(4.7, 8);\n      Computer.Notebook notebook = new Computer.Notebook("Mein Gaming Laptop", cpu, 32, 16);\n   }\n\n}\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"elementklassen-member-classes",children:"Elementklassen (Member Classes)"}),"\n",(0,t.jsxs)(n.p,{children:["Objekte von Elementklassen sind immer mit einem Objekt der umgebenden Klasse\nverbunden. Dies erm\xf6glicht die Umsetzung von Kompositionen (siehe\n",(0,t.jsx)(n.a,{href:"class-diagrams#darstellung-von-assoziationen",children:"Darstellung von Assoziationen"}),").\nSie haben Zugriff auf alle Variablen und Methoden der sie umgebenden Klasse und\nd\xfcrfen keine statischen Elemente enthalten."]}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(i.Z,{value:"a",label:"Elementklasse",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="List.java (Auszug)" showLineNumbers',children:"public class List {\n   ...\n   public class Item {...}\n   ...\n}\n"})})}),(0,t.jsx)(i.Z,{value:"b",label:"Startklasse",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    List list = new List();\n    List.Item item = new List.Item(); // Kompilierungsfehler\n    List.Item item = list.new Item();\n  }\n\n}\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"lokale-klassen",children:"Lokale Klassen"}),"\n",(0,t.jsxs)(n.p,{children:["Lokale Klassen werden innerhalb einer Methode definiert und k\xf6nnen auch nur dort\nverwendet werden. Sie d\xfcrfen nicht als ",(0,t.jsx)(n.code,{children:"public"}),", ",(0,t.jsx)(n.code,{children:"protected"}),", ",(0,t.jsx)(n.code,{children:"private"})," oder\n",(0,t.jsx)(n.code,{children:"static"})," definiert werden, d\xfcrfen keine statischen Elemente enthalten und k\xf6nnen\nnur die mit ",(0,t.jsx)(n.code,{children:"final"})," markierten Variablen und Parameter der umgebenden Methode\nverwenden."]}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(i.Z,{value:"a",label:"Schnittstelle",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Translator.java" showLineNumbers',children:"public interface Translator {\n\n   String translate(String s);\n\n}\n"})})}),(0,t.jsx)(i.Z,{value:"b",label:"Verwenderklasse",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Computers.java" showLineNumbers',children:"public class Computers {\n\n   public static String translateDescription(Computer computer, Translator translator) {\n      return translator.translate(computer.getDescription());\n   }\n\n}\n"})})}),(0,t.jsx)(i.Z,{value:"c",label:"Startklasse mit lokaler Klasse",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n   public static void main(String[] args) throws InvalidValueException {\n      class ToUpperCaseTranslator implements Translator {\n\n         @Override\n         public String translate(String s) {\n            return s.toUpperCase();\n         }\n\n      }\n\n      ToUpperCaseTranslator translator = new ToUpperCaseTranslator();\n      Computer computer = new Notebook("Mein Gaming Laptop", new Cpu(4.7, 8), 32, 16);\n      String description = Computers.translateDescription(computer, translator);\n      System.out.println(description);\n   }\n\n}\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"anonyme-klassen",children:"Anonyme Klassen"}),"\n",(0,t.jsx)(n.p,{children:"Anonyme Klassen besitzen im Gegensatz zu lokalen Klassen keinen Namen und werden\ninnerhalb eines Ausdrucks definiert und instanziiert; Klassendeklaration und\nObjekterzeugung sind also in einem Sprachkonstrukt vereint. Wird als Datentyp\neine Schnittstelle ben\xf6tigt, implementiert die anonyme Klasse diese\nSchnittstelle, wird als Datentyp eine Klasse ben\xf6tigt, so wird die anonyme\nKlasse daraus abgeleitet."}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(i.Z,{value:"a",label:"Schnittstelle",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Translator.java" showLineNumbers',children:"public interface Translator {\n\n   String translate(String s);\n\n}\n"})})}),(0,t.jsx)(i.Z,{value:"b",label:"Verwenderklasse",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Computers.java" showLineNumbers',children:"public class Computers {\n\n   public static String translateDescription(Computer computer, Translator translator) {\n      return translator.translate(computer.getDescription());\n   }\n\n}\n"})})}),(0,t.jsx)(i.Z,{value:"c",label:"Startklasse mit anonymer Klasse",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n   public static void main(String[] args) throws InvalidValueException {\n      Computer computer = new Notebook("Mein Gaming Laptop", new Cpu(4.7, 8), 32, 16);\n      String description = Computers.translateDescription(computer, new Translator() {\n\n         @Override\n         public String translate(String s) {\n            return s.toUpperCase();\n         }\n\n      });\n      System.out.println(description);\n   }\n\n}\n'})})})]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},97645:function(e,n,a){a.d(n,{Z:()=>r});var s=a("85893");a("67294");var t=a("67026");function r(e){let{children:n,hidden:a,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)("tabItem_Ymn6",r),hidden:a,children:n})}},58168:function(e,n,a){a.d(n,{Z:()=>f});var s=a("85893"),t=a("67294"),r=a("67026"),l=a("34718"),i=a("16550"),o=a("8714"),c=a("89207"),u=a("69413"),d=a("54510");function m(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:a}=e;return a.some(e=>e.value===n)}var h=a("6735");function b(e){let{className:n,block:a,selectedValue:t,selectValue:i,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{let n=e.currentTarget,a=o[c.indexOf(n)].value;a!==t&&(u(n),i(a))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{let a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1]}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:o.map(e=>{let{value:n,label:a,attributes:l}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{c.push(e)},onKeyDown:m,onClick:d,...l,className:(0,r.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":t===n}),children:a??n},n)})})}function v(e){let{lazy:n,children:a,selectedValue:l}=e,i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){let e=i.find(e=>e.props.value===l);return e?(0,t.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function g(e){let n=function(e){let{defaultValue:n,queryString:a=!1,groupId:s}=e,r=function(e){let{values:n,children:a}=e;return(0,t.useMemo)(()=>{let e=n??m(a).map(e=>{let{props:{value:n,label:a,attributes:s,default:t}}=e;return{value:n,label:a,attributes:s,default:t}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,a])}(e),[l,h]=(0,t.useState)(()=>(function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let s=a.find(e=>e.default)??a[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:n,tabValues:r})),[b,v]=function(e){let{queryString:n=!1,groupId:a}=e,s=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c._X)(r),(0,t.useCallback)(e=>{if(!r)return;let n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})},[r,s])]}({queryString:a,groupId:s}),[g,f]=function(e){let{groupId:n}=e,a=n?`docusaurus.tab.${n}`:null,[s,r]=(0,d.Nk)(a);return[s,(0,t.useCallback)(e=>{a&&r.set(e)},[a,r])]}({groupId:s}),j=(()=>{let e=b??g;return p({value:e,tabValues:r})?e:null})();return(0,o.Z)(()=>{j&&h(j)},[j]),{selectedValue:l,selectValue:(0,t.useCallback)(e=>{if(!p({value:e,tabValues:r}))throw Error(`Can't select invalid tab value=${e}`);h(e),v(e),f(e)},[v,f,r]),tabValues:r}}(e);return(0,s.jsxs)("div",{className:(0,r.Z)("tabs-container","tabList__CuJ"),children:[(0,s.jsx)(b,{...n,...e}),(0,s.jsx)(v,{...n,...e})]})}function f(e){let n=(0,h.Z)();return(0,s.jsx)(g,{...e,children:m(e.children)},String(n))}},50065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return l}});var s=a(67294);let t={},r=s.createContext(t);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);