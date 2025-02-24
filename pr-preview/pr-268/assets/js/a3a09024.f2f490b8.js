"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["3345"],{52642:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>t,assets:()=>u,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"documentation/inheritance","title":"Vererbung","description":"","source":"@site/docs/documentation/inheritance.mdx","sourceDirName":"documentation","slug":"/documentation/inheritance","permalink":"/java-docs/pr-preview/pr-268/documentation/inheritance","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/inheritance.mdx","tags":[{"inline":true,"label":"oo","permalink":"/java-docs/pr-preview/pr-268/tags/oo"},{"inline":true,"label":"inhertiance","permalink":"/java-docs/pr-preview/pr-268/tags/inhertiance"}],"version":"current","sidebarPosition":170,"frontMatter":{"title":"Vererbung","description":"","sidebar_position":170,"tags":["oo","inhertiance"]},"sidebar":"documentationSidebar","previous":{"title":"Aktivit\xe4tsdiagramme","permalink":"/java-docs/pr-preview/pr-268/documentation/activity-diagrams"},"next":{"title":"(Dynamische) Polymorphie","permalink":"/java-docs/pr-preview/pr-268/documentation/polymorphy"}}'),i=r("85893"),s=r("50065"),a=r("58168"),l=r("97645");let o={title:"Vererbung",description:"",sidebar_position:170,tags:["oo","inhertiance"]},c=void 0,u={},d=[{value:"Implementieren von Vererbung",id:"implementieren-von-vererbung",level:2},{value:"\xdcberschreiben von Methoden",id:"\xfcberschreiben-von-methoden",level:2}];function h(e){let n={admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Bei der Modellierung von Klassen stellt man h\xe4ufig fest, dass sich einige\nKlassen der Struktur und dem Verhalten nach \xe4hneln. In solchen F\xe4llen hat man\ndie M\xf6glichkeit, die gemeinsamen Strukturen und Verhaltensweisen aus den\nspeziellen Klassen zu extrahieren und in einer allgemeineren Klasse\nunterzubringen. Dies wird als ",(0,i.jsx)(n.em,{children:"Generalisierung"})," bezeichnet. Umgekehrt gibt es\noftmals auch Bedarf, eine bestehende Klasse um zus\xe4tzliche Attribute und/oder\nMethoden zu erweitern. Dies bezeichnet man als ",(0,i.jsx)(n.em,{children:"Spezialisierung"})," Die Beziehung\nzwischen einer speziellen Klasse und einer allgemeinen Klasse wird ",(0,i.jsx)(n.em,{children:"Vererbung"}),"\nbezeichnet. Die speziellen Klasse einer Vererbung werden als ",(0,i.jsx)(n.em,{children:"Unterklassen"})," (Sub\nClasses), die allgemeinen Klassen als ",(0,i.jsx)(n.em,{children:"Oberklassen"})," (Super Classes) bezeichnet."]}),"\n",(0,i.jsx)(n.h2,{id:"implementieren-von-vererbung",children:"Implementieren von Vererbung"}),"\n",(0,i.jsxs)(n.p,{children:["Die Vererbung wird mit dem Schl\xfcsselwort ",(0,i.jsx)(n.code,{children:"extends"})," realisiert. In der Oberklasse\nk\xf6nnen Attribute und Methoden mit dem Schl\xfcsselwort ",(0,i.jsx)(n.code,{children:"protected"})," als gesch\xfctzt\nfestlegt werden. Unterklassen k\xf6nnen auf alle \xf6ffentlichen und gesch\xfctzten\nAttribute und Methoden der Oberklasse zugreifen."]}),"\n",(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(l.Z,{value:"a",label:"Oberklasse",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Computer.java (Auszug)" showLineNumbers',children:"public class Computer {\n   ...\n   protected Cpu cpu;\n   protected int memoryInGb;\n\n   public Computer(String description, Cpu cpu, int memoryInGb) {\n      this.description = description;\n      this.cpu = cpu;\n      this.memoryInGb = memoryInGb;\n   }\n   ...\n}\n"})})}),(0,i.jsx)(l.Z,{value:"b",label:"Unterklasse",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Notebook.java" showLineNumbers',children:"public class Notebook extends Computer {\n\n   private final double screenSizeInInches;\n\n   public Notebook(String description, Cpu cpu, int memoryInGb, double screenSizeInInches) {\n      super(description, cpu, memoryInGb);\n      this.screenSizeInInches = screenSizeInInches;\n   }\n\n   public double getScreenSizeInInches() {\n      return screenSizeInInches;\n   }\n\n}\n"})})})]}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"danger",children:(0,i.jsxs)(n.p,{children:["In den Konstruktoren der Unterklasse muss ein Konstruktor der Oberklasse mit\nHilfe von ",(0,i.jsx)(n.code,{children:"super"})," aufgerufen werden."]})}),"\n",(0,i.jsx)(n.h2,{id:"\xfcberschreiben-von-methoden",children:"\xdcberschreiben von Methoden"}),"\n",(0,i.jsxs)(n.p,{children:["Wird in einer Unterklasse eine Methode definiert, die der Signatur einer Methode\nder Oberklasse entspricht, wird die Methode der Oberklasse ",(0,i.jsx)(n.em,{children:"\xfcberschrieben"}),", d.h.\nvon der Unterklasse neu implementiert. Bei Bedarf kann die urspr\xfcngliche\nMethodenimplementierung der Oberklasse mit Hilfe der Objektreferenz ",(0,i.jsx)(n.code,{children:"super"}),"\naufgerufen werden."]}),"\n",(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(l.Z,{value:"a",label:"Oberklasse",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Computer.java (Auszug)" showLineNumbers',children:'public class Computer {\n   ...\n   public ArrayList<String> getSpecification() {\n      ArrayList<String> specification = new ArrayList<>();\n      specification.add("description: " + description);\n      specification.add("cpu: " + cpu);\n      specification.add("memoryInGb: " + memoryInGb);\n      return specification;\n   }\n   ...\n}\n\n'})})}),(0,i.jsx)(l.Z,{value:"b",label:"Unterklasse",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Notebook.java (Auszug)" showLineNumbers',children:'public class Notebook extends Computer {\n   ...\n   @Override\n   public ArrayList<String> getSpecification() {\n      ArrayList<String> specification = super.getSpecification();\n      specification.add("screenSizeInInches: " + screenSizeInInches);\n      return specification;\n   }\n   ...\n}\n'})})})]}),"\n",(0,i.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,i.jsxs)(n.p,{children:["Die Annotation ",(0,i.jsx)(n.code,{children:"@Override"})," sorgt bei fehlerhaftem \xdcberschreiben der Methode f\xfcr\nentsprechende Kompilierungsfehler."]})})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},97645:function(e,n,r){r.d(n,{Z:()=>s});var t=r("85893");r("67294");var i=r("67026");function s(e){let{children:n,hidden:r,className:s}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.Z)("tabItem_Ymn6",s),hidden:r,children:n})}},58168:function(e,n,r){r.d(n,{Z:()=>g});var t=r("85893"),i=r("67294"),s=r("67026"),a=r("34718"),l=r("16550"),o=r("8714"),c=r("89207"),u=r("69413"),d=r("54510");function h(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var m=r("6735");function b(e){let{className:n,block:r,selectedValue:i,selectValue:l,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),d=e=>{let n=e.currentTarget,r=o[c.indexOf(n)].value;r!==i&&(u(n),l(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{let r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:o.map(e=>{let{value:n,label:r,attributes:a}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>{c.push(e)},onKeyDown:h,onClick:d,...a,className:(0,s.Z)("tabs__item","tabItem_LNqP",a?.className,{"tabs__item--active":i===n}),children:r??n},n)})})}function f(e){let{lazy:n,children:r,selectedValue:a}=e,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===a);return e?(0,i.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,s=function(e){let{values:n,children:r}=e;return(0,i.useMemo)(()=>{let e=n??h(r).map(e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[a,m]=(0,i.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:s})),[b,f]=function(e){let{queryString:n=!1,groupId:r}=e,t=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c._X)(s),(0,i.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})},[s,t])]}({queryString:r,groupId:t}),[v,g]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[t,s]=(0,d.Nk)(r);return[t,(0,i.useCallback)(e=>{r&&s.set(e)},[r,s])]}({groupId:t}),j=(()=>{let e=b??v;return p({value:e,tabValues:s})?e:null})();return(0,o.Z)(()=>{j&&m(j)},[j]),{selectedValue:a,selectValue:(0,i.useCallback)(e=>{if(!p({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);m(e),f(e),g(e)},[f,g,s]),tabValues:s}}(e);return(0,t.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList__CuJ"),children:[(0,t.jsx)(b,{...n,...e}),(0,t.jsx)(f,{...n,...e})]})}function g(e){let n=(0,m.Z)();return(0,t.jsx)(v,{...e,children:h(e.children)},String(n))}},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return a}});var t=r(67294);let i={},s=t.createContext(i);function a(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);