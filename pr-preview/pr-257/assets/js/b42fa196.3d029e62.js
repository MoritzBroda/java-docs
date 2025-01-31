"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["3761"],{47100:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>u,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>o});var t=JSON.parse('{"id":"documentation/exceptions","title":"Ausnahmen (Exceptions)","description":"","source":"@site/docs/documentation/exceptions.mdx","sourceDirName":"documentation","slug":"/documentation/exceptions","permalink":"/java-docs/pr-preview/pr-257/documentation/exceptions","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/exceptions.mdx","tags":[{"inline":true,"label":"exceptions","permalink":"/java-docs/pr-preview/pr-257/tags/exceptions"}],"version":"current","sidebarPosition":230,"frontMatter":{"title":"Ausnahmen (Exceptions)","description":"","sidebar_position":230,"tags":["exceptions"]},"sidebar":"documentationSidebar","previous":{"title":"B\xe4ume","permalink":"/java-docs/pr-preview/pr-257/documentation/trees"},"next":{"title":"Datenklassen (Records)","permalink":"/java-docs/pr-preview/pr-257/documentation/records"}}'),a=r("85893"),i=r("50065"),s=r("58168"),l=r("97645");let u={title:"Ausnahmen (Exceptions)",description:"",sidebar_position:230,tags:["exceptions"]},o=void 0,c={},d=[{value:"Die Klassenhierarchie der Laufzeitfehler",id:"die-klassenhierarchie-der-laufzeitfehler",level:2},{value:"Definition von Ausnahmenklassen",id:"definition-von-ausnahmenklassen",level:2},{value:"Ausl\xf6sen von Ausnahmen",id:"ausl\xf6sen-von-ausnahmen",level:2},{value:"Weiterleiten von Ausnahmen",id:"weiterleiten-von-ausnahmen",level:2},{value:"Abfangen von Ausnahmen",id:"abfangen-von-ausnahmen",level:2}];function h(e){let n={code:"code",em:"em",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Programmfehler (Bugs) f\xfchren dazu, dass Programme unerwartete Ergebnisse liefern\noder abst\xfcrzen. Je komplexer das Programm, desto wichtiger wird eine durchdachte\nund konsequente Fehlerbehandlung. Man unterscheidt dabei zwischen verschiedenen\nFehlerarten: Kompilierungsfehler, Logikfehler und Laufzeitfehler."}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(l.Z,{value:"a",label:"Kompilierungsfehler",default:!0,children:(0,a.jsx)(n.p,{children:"Kompilierungsfehler sind Programmfehler, die verhindern, dass das Programm\nausgef\xfchrt werden kann. Sie k\xf6nnen relativ einfach behoben werden, da sie schon\nzur Designzeit auftreten und von den meisten Entwicklungsumgebungen direkt\nangezeigt werden."})}),(0,a.jsx)(l.Z,{value:"b",label:"Logikfehler",children:(0,a.jsx)(n.p,{children:"Verh\xe4lt sich das Programm nicht wie beabsichtigt, spricht man von Logikfehlern.\nSie sind mit am schwersten zu entdecken und zu beheben. Zur Unterst\xfczung bei der\nFehlersuche und -behandlung kann unter Anderem der Debugger verwendet werden.\nDer Debugger erm\xf6glicht es, Programme zur Laufzeit zu analysieren und zu\nsteuern. Durch das Setzen von Haltepunkten (Breakpoints) kann die Ausf\xfchrung des\nProgramms an beliebiger Stelle angehalten werden. Dadurch lassen sich z.B. die\nInhalte von Datenobjekten \xfcberpr\xfcfen. Zudem bietet der Debugger die M\xf6glichkeit,\ndie weitere Ausf\xfchrung des Programms in der gew\xfcnschten Schrittweite\nforzuf\xfchren."})}),(0,a.jsx)(l.Z,{value:"c",label:"Laufzeitfehler",children:(0,a.jsxs)(n.p,{children:["Laufzeitfehler treten erst beim Ausf\xfchren des Programms auf. Sie entstehen meist\ndann, wenn das Programm versucht, eine Operation auszuf\xfchren, die nicht\nausgef\xfchrt werden kann (z.B. die Division durch Null). Diese Situationen werden\nauch als Ausnahmen (Exceptions) bezeichnet. Ausnahmen gew\xe4hrleisten eine klare\nTrennung zwischen funktionalem Code und Code zur Fehlerbehandlung. Die\nFehlerbehandlung erfolgt dabei gem\xe4\xdf dem Ausnahmenbehandlungsprozess: nachdem\neine Ausnahme ausgel\xf6st wurde, kann bzw. muss diese je nach Ausnahmenart vom\nEmpf\xe4nger der Ausnahme entweder behandelt oder weitergeleitet werden\n",(0,a.jsx)(n.em,{children:"Catch-or-Throw-Regel"})," Man unterscheidet zwischen ",(0,a.jsx)(n.em,{children:"gepr\xfcften"})," (checked) und\n",(0,a.jsx)(n.em,{children:"ungepr\xfcften"})," (unchecked) Ausnahmen. Gepr\xfcfte Ausnahmen m\xfcssen, ungepr\xfcfte\nAusnahmen k\xf6nnen behandelt bzw. weitergeleitet werden."]})})]}),"\n",(0,a.jsx)(n.h2,{id:"die-klassenhierarchie-der-laufzeitfehler",children:"Die Klassenhierarchie der Laufzeitfehler"}),"\n",(0,a.jsxs)(n.p,{children:["Die Klasse ",(0,a.jsx)(n.code,{children:"Throwable"})," stellt die Oberklasse aller Laufzeitfehler dar.\nSchwerwiegende Fehler (haupts\xe4chlich Probleme in der JVM (Java Virtual Machine))\nwerden durch Unterklassen der Klasse ",(0,a.jsx)(n.code,{children:"Error"})," abgebildet, gepr\xfcfte Ausnahmen\ndurch Unterklassen der Klasse ",(0,a.jsx)(n.code,{children:"Exception"})," und ungepr\xfcfte Ausnahmen durch\nUnterklassen der Klasse ",(0,a.jsx)(n.code,{children:"RuntimeException"}),"."]}),"\n",(0,a.jsx)(n.mermaid,{value:"classDiagram\n   Throwable <|-- Error\n   Throwable <|-- Exception\n   Exception <|-- TimeOutException\n   Exception <|-- RunTimeException\n   RunTimeException <|-- NullPointerException\n   RunTimeException <|-- ArithmeticException"}),"\n",(0,a.jsx)(n.h2,{id:"definition-von-ausnahmenklassen",children:"Definition von Ausnahmenklassen"}),"\n",(0,a.jsxs)(n.p,{children:["Eigene Ausnahmenklassen werden durch einfaches Ableiten von einer bestehenden\nAusnahmenklasse definiert. Ausnahmenklassen sollten dabei immer von der Klasse\n",(0,a.jsx)(n.code,{children:"Exception"})," oder einer ihrer Unterklassen abgeleitet werden, nicht von der\nKlasse ",(0,a.jsx)(n.code,{children:"Error"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="InvalidValueException.java" showLineNumbers',children:"public class InvalidValueException extends Exception {\n\n   public InvalidValueException() {}\n\n   public InvalidValueException(String message) {}\n\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"ausl\xf6sen-von-ausnahmen",children:"Ausl\xf6sen von Ausnahmen"}),"\n",(0,a.jsxs)(n.p,{children:["Mit dem Schl\xfcsselwort ",(0,a.jsx)(n.code,{children:"throw"})," kann innerhalb einer Methode eine Ausnahme\nausgel\xf6st werden. Die Methode, in der die Ausnahme ausgel\xf6st wird, muss mit dem\nSchl\xfcsselwort ",(0,a.jsx)(n.code,{children:"throws"})," die Ausnahmenklasse angeben, die ausgel\xf6st werden kann."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Computer.java (Auszug)" showLineNumbers',children:"public abstract class Computer {\n   ...\n   public Computer(String description, Cpu cpu, int memoryInGb) throws InvalidValueException {\n      if (memoryInGb <= 0) {\n         throw new InvalidValueException();\n      }\n      this.description = description;\n      this.cpu = cpu;\n      this.memoryInGb = memoryInGb;\n   }\n   ...\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"weiterleiten-von-ausnahmen",children:"Weiterleiten von Ausnahmen"}),"\n",(0,a.jsxs)(n.p,{children:["Ausnahmen k\xf6nnen weitergeleitet werden. Hierbei wird die Fehlerbehandlung an die\nn\xe4chsth\xf6here Ebene weitergegeben. Um eine Ausnahme weiterzuleiten, muss in der\nweiterleitenden Methode mit ",(0,a.jsx)(n.code,{children:"throws"})," die Ausnahme angegeben werden, die\nausgel\xf6st werden kann."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Notebook.java (Auszug)" showLineNumbers',children:"public final class Notebook extends Computer implements Comparable<Notebook> {\n   ...\n   public Notebook(String description, Cpu cpu, int memoryInGb, double screenSizeInInches)\n         throws InvalidValueException {\n      super(description, cpu, memoryInGb);\n      this.screenSizeInInches = screenSizeInInches;\n   }\n   ...\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"abfangen-von-ausnahmen",children:"Abfangen von Ausnahmen"}),"\n",(0,a.jsxs)(n.p,{children:["Mit Hilfe der try-catch-Anweisung k\xf6nnen Methoden, die eine Ausnahme ausl\xf6sen\nk\xf6nnen, \xfcberwacht werden; d.h. die Ausnahmen werden gegebenenfalls abgefangen.\nDer try-Block enth\xe4lt die Anweisungen, die \xfcberwacht werden sollen, der\ncatch-Block enth\xe4lt die eigentliche Fehlerbehandlung. Als Parameter von ",(0,a.jsx)(n.code,{children:"catch"}),"\nmuss angegeben werden, welche Ausnahme(n) abgefangen werden soll(en)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n   public static void main(String[] args) {\n      try {\n         Notebook notebook = new Notebook("Mein Gaming Laptop", new Cpu(4.7, 8), 32, 16);\n      } catch (InvalidValueException e) {\n         System.err.println(e.getMessage());\n      }\n   }\n\n}\n'})})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},97645:function(e,n,r){r.d(n,{Z:()=>i});var t=r("85893");r("67294");var a=r("67026");function i(e){let{children:n,hidden:r,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_Ymn6",i),hidden:r,children:n})}},58168:function(e,n,r){r.d(n,{Z:()=>v});var t=r("85893"),a=r("67294"),i=r("67026"),s=r("34718"),l=r("16550"),u=r("8714"),o=r("89207"),c=r("69413"),d=r("54510");function h(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var p=r("6735");function g(e){let{className:n,block:r,selectedValue:a,selectValue:l,tabValues:u}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{let n=e.currentTarget,r=u[o.indexOf(n)].value;r!==a&&(c(n),l(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{let r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},n),children:u.map(e=>{let{value:n,label:r,attributes:s}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{o.push(e)},onKeyDown:h,onClick:d,...s,className:(0,i.Z)("tabs__item","tabItem_LNqP",s?.className,{"tabs__item--active":a===n}),children:r??n},n)})})}function b(e){let{lazy:n,children:r,selectedValue:s}=e,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===s);return e?(0,a.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s}))})}function f(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,i=function(e){let{values:n,children:r}=e;return(0,a.useMemo)(()=>{let e=n??h(r).map(e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[s,p]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:i})),[g,b]=function(e){let{queryString:n=!1,groupId:r}=e,t=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o._X)(i),(0,a.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})},[i,t])]}({queryString:r,groupId:t}),[f,v]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[t,i]=(0,d.Nk)(r);return[t,(0,a.useCallback)(e=>{r&&i.set(e)},[r,i])]}({groupId:t}),x=(()=>{let e=g??f;return m({value:e,tabValues:i})?e:null})();return(0,u.Z)(()=>{x&&p(x)},[x]),{selectedValue:s,selectValue:(0,a.useCallback)(e=>{if(!m({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);p(e),b(e),v(e)},[b,v,i]),tabValues:i}}(e);return(0,t.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList__CuJ"),children:[(0,t.jsx)(g,{...n,...e}),(0,t.jsx)(b,{...n,...e})]})}function v(e){let n=(0,p.Z)();return(0,t.jsx)(f,{...e,children:h(e.children)},String(n))}},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return s}});var t=r(67294);let a={},i=t.createContext(a);function s(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);