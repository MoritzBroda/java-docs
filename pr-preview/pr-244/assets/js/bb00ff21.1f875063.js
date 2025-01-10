"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["4328"],{30633:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>m,assets:()=>u,toc:()=>d,frontMatter:()=>c});var i=JSON.parse('{"id":"documentation/interfaces","title":"Schnittstellen (Interfaces)","description":"","source":"@site/docs/documentation/interfaces.mdx","sourceDirName":"documentation","slug":"/documentation/interfaces","permalink":"/java-docs/pr-preview/pr-244/documentation/interfaces","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/interfaces.mdx","tags":[{"inline":true,"label":"interfaces","permalink":"/java-docs/pr-preview/pr-244/tags/interfaces"}],"version":"current","sidebarPosition":210,"frontMatter":{"title":"Schnittstellen (Interfaces)","description":"","sidebar_position":210,"tags":["interfaces"]},"sidebar":"documentationSidebar","previous":{"title":"Abstrakte und finale Klassen und Methoden","permalink":"/java-docs/pr-preview/pr-244/documentation/abstract-and-final"},"next":{"title":"Listen","permalink":"/java-docs/pr-preview/pr-244/documentation/lists"}}'),r=t("85893"),s=t("50065"),a=t("47902"),l=t("5525");let c={title:"Schnittstellen (Interfaces)",description:"",sidebar_position:210,tags:["interfaces"]},o=void 0,u={},d=[{value:"Definition von Schnittstellen",id:"definition-von-schnittstellen",level:2},{value:"Implementieren von Schnittstellen",id:"implementieren-von-schnittstellen",level:2},{value:"Verwenden von Schnittstellen",id:"verwenden-von-schnittstellen",level:2}];function h(e){let n={admonition:"admonition",code:"code",em:"em",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Wird eine Klasse von mehreren Klassen abgeleitet, spricht man von\nMehrfachvererbung. Das Prinzip der Mehrfachvererbung wird von vielen\nProgrammiersprachen allerdings nicht (direkt) unterst\xfctzt. Der Hauptgrund hier\nsind m\xf6gliche Mehrdeutigkeiten. Erbt eine Klasse \xfcber mehrere m\xf6gliche Pfade von\neiner Basisklasse und werden dabei m\xf6glicherweise Methoden der Basisklasse\nunterschiedlich \xfcberschrieben, entstehen dadurch nicht eindeutige Varianten.\nAufgrund der Rautenform des Klassendiagramms wird dieses Szenario also\n",(0,r.jsx)(n.em,{children:"Diamantenproblem"})," bezeichnet."]}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    ClassA <|-- ClassB\n    ClassA <|-- ClassC\n    ClassB <|-- ClassD\n    ClassC <|-- ClassD\n\n    class ClassA {\n        +foo() void\n    }\n\n    class ClassB {\n        +foo() void\n    }\n\n    class ClassC {\n        +foo() void\n    }\n\n    class ClassD {\n\n    }"}),"\n",(0,r.jsx)(n.p,{children:"Zur L\xf6sung des Diamantenproblems werden Schnittstellen (Interfaces) verwendet.\nSchnittstellen sind im Prinzip abstrakte Klassen, die ausschlie\xdflich abstrakte\nMethoden besitzen. Durch Schnittstellen wird sichergestellt, dass Klassen\nbestimmte Methoden bereitstellen und dass verschiedene Klassen miteinander\nkommunizieren k\xf6nnen."}),"\n",(0,r.jsx)(n.h2,{id:"definition-von-schnittstellen",children:"Definition von Schnittstellen"}),"\n",(0,r.jsxs)(n.p,{children:["Die Definition einer Schnittstelle erfolgt analog zur Definition von Klassen.\nDas Schl\xfcsselwort f\xfcr Schnittstellen lautet ",(0,r.jsx)(n.code,{children:"interface"}),". Eine Schnittstelle kann\nnur \xf6ffentliche, abstrakte und \xf6ffentliche, statische Methoden beinhalten."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MobileDevice.java" showLineNumbers',children:"public interface MobileDevice {\n\n   int getScreenSizeInInches();\n\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,r.jsxs)(n.p,{children:["Die Angabe von ",(0,r.jsx)(n.code,{children:"abstract"})," und ",(0,r.jsx)(n.code,{children:"public"})," bei Methoden ist nicht erforderlich."]})}),"\n",(0,r.jsx)(n.h2,{id:"implementieren-von-schnittstellen",children:"Implementieren von Schnittstellen"}),"\n",(0,r.jsxs)(n.p,{children:["Schnittstellen werden mit Hilfe des Schl\xfcsselworts ",(0,r.jsx)(n.code,{children:"implements"})," von einer Klasse\nimplementiert. Durch die Implementierung der Schnittstelle verpflichtet sich die\nKlasse, alle Methoden der Schnittstelle zu implementieren."]}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(l.Z,{value:"a",label:"Schnittstelle",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MobileDevice.java" showLineNumbers',children:"public interface MobileDevice {\n\n   int getScreenSizeInInches();\n\n}\n"})})}),(0,r.jsx)(l.Z,{value:"b",label:"Implementierende Klasse",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Notebook.java (Auszug)" showLineNumbers',children:"public class Notebook extends Computer implements MobileDevice {\n   ...\n   @Override\n   public int getScreenSizeInInches() {\n      return screenSizeInInches;\n   }\n   ...\n}\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"verwenden-von-schnittstellen",children:"Verwenden von Schnittstellen"}),"\n",(0,r.jsxs)(n.p,{children:["Schnittstellen k\xf6nnen ebenso wie Klassen als Datentypen verwendet werden. Die\nTypumwandlung von der implementierenden Klasse zur Schnittstelle bezeichnet man\nals ",(0,r.jsx)(n.em,{children:"Upcast"})," die R\xfcckumwandlung als ",(0,r.jsx)(n.em,{children:"Downcast"})]}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(l.Z,{value:"a",label:"Schnittstelle",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MobileDevice.java" showLineNumbers',children:"public interface MobileDevice {\n\n   int getScreenSizeInInches();\n\n}\n"})})}),(0,r.jsx)(l.Z,{value:"b",label:"Implementierende Klasse A",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Notebook.java (Auszug)" showLineNumbers',children:'public class Notebook extends Computer implements MobileDevice {\n   ...\n   @Override\n   public int getScreenSizeInInches() {\n      return screenSizeInInches;\n   }\n\n   @Override\n   public ArrayList<String> getSpecification() {\n      ArrayList<String> specification = new ArrayList<>();\n      specification.add("description: " + description);\n      specification.add("cpu: " + cpu);\n      specification.add("memoryInGb: " + memoryInGb);\n      specification.add("screenSizeInInches: " + screenSizeInInches);\n      return specification;\n   }\n   ...\n}\n'})})}),(0,r.jsx)(l.Z,{value:"c",label:"Implementierende Klasse B",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Smartphone.java (Auszug)" showLineNumbers',children:"public class Smartphone implements MobileDevice {\n   ...\n   private double widthInInches;\n   private double heightInInches;\n\n   @Override\n   public int getScreenSizeInInches() {\n      return Math.sqrt(Math.pow(widthInInches) + Math.pow(heightInInches));\n   }\n   ...\n}\n"})})}),(0,r.jsx)(l.Z,{value:"d",label:"Startklasse",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n   public static void main(String[] args) {\n      ArrayList<MobileDevice> mobileDevices = new ArrayList<>();\n\n      mobileDevices.add(new Notebook("Mein Gaming Laptop", new Cpu(4.7, 8), 32, 16)); // Upcast\n      mobileDevices.add(new Smartphone("Google Pixel 9", 2.8, 6)); // Upcast\n\n      for (MobileDevice m : mobileDevices) {\n         System.out.println(m.getScreenSizeInInches()); // Polymorphie\n         if (m instanceof Notebook n) { // Downcast\n            System.out.println(n.getSpecification());\n         }\n      }\n   }\n\n}\n'})})})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5525:function(e,n,t){t.d(n,{Z:()=>a});var i=t("85893");t("67294");var r=t("67026");let s="tabItem_Ymn6";function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s,a),hidden:t,children:n})}},47902:function(e,n,t){t.d(n,{Z:()=>x});var i=t("85893"),r=t("67294"),s=t("67026"),a=t("69599"),l=t("16550"),c=t("32000"),o=t("4520"),u=t("38341"),d=t("76009");function h(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var p=t("7227");let v="tabList__CuJ",f="tabItem_LNqP";function b(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:c}=e,o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),d=e=>{let n=e.currentTarget,t=c[o.indexOf(n)].value;t!==r&&(u(n),l(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{let t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1]}}n?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:c.map(e=>{let{value:n,label:t,attributes:a}=e;return(0,i.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...a,className:(0,s.Z)("tabs__item",f,a?.className,{"tabs__item--active":r===n}),children:t??n},n)})})}function g(e){let{lazy:n,children:t,selectedValue:a}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===a);return e?(0,r.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,i.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))})}function j(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:i}=e,s=function(e){let{values:n,children:t}=e;return(0,r.useMemo)(()=>{let e=n??h(t).map(e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[a,p]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let i=t.find(e=>e.default)??t[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value})({defaultValue:n,tabValues:s})),[v,f]=function(e){let{queryString:n=!1,groupId:t}=e,i=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t}),a=(0,o._X)(s);return[a,(0,r.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})},[s,i])]}({queryString:t,groupId:i}),[b,g]=function(e){var n;let{groupId:t}=e;let i=(n=t)?`docusaurus.tab.${n}`:null,[s,a]=(0,d.Nk)(i);return[s,(0,r.useCallback)(e=>{if(!!i)a.set(e)},[i,a])]}({groupId:i}),j=(()=>{let e=v??b;return m({value:e,tabValues:s})?e:null})();return(0,c.Z)(()=>{j&&p(j)},[j]),{selectedValue:a,selectValue:(0,r.useCallback)(e=>{if(!m({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);p(e),f(e),g(e)},[f,g,s]),tabValues:s}}(e);return(0,i.jsxs)("div",{className:(0,s.Z)("tabs-container",v),children:[(0,i.jsx)(b,{...n,...e}),(0,i.jsx)(g,{...n,...e})]})}function x(e){let n=(0,p.Z)();return(0,i.jsx)(j,{...e,children:h(e.children)},String(n))}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var i=t(67294);let r={},s=i.createContext(r);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);