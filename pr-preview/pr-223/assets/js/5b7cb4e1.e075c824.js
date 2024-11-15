"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7610"],{78660:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>b,assets:()=>u,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"documentation/abstract-and-final","title":"Abstrakte und finale Klassen und Methoden","description":"","source":"@site/docs/documentation/abstract-and-final.mdx","sourceDirName":"documentation","slug":"/documentation/abstract-and-final","permalink":"/java-docs/pr-preview/pr-223/documentation/abstract-and-final","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/abstract-and-final.mdx","tags":[{"inline":true,"label":"abstract","permalink":"/java-docs/pr-preview/pr-223/tags/abstract"},{"inline":true,"label":"final","permalink":"/java-docs/pr-preview/pr-223/tags/final"}],"version":"current","sidebarPosition":200,"frontMatter":{"title":"Abstrakte und finale Klassen und Methoden","description":"","sidebar_position":200,"tags":["abstract","final"]},"sidebar":"documentationSidebar","previous":{"title":"Die Mutter aller Klassen","permalink":"/java-docs/pr-preview/pr-223/documentation/object"},"next":{"title":"Schnittstellen (Interfaces)","permalink":"/java-docs/pr-preview/pr-223/documentation/interfaces"}}'),r=a("85893"),s=a("50065"),l=a("47902"),i=a("5525");let o={title:"Abstrakte und finale Klassen und Methoden",description:"",sidebar_position:200,tags:["abstract","final"]},c=void 0,u={},d=[{value:"Abstrakte Klassen",id:"abstrakte-klassen",level:2},{value:"Abstrakte Methoden",id:"abstrakte-methoden",level:2},{value:"Finale Klassen",id:"finale-klassen",level:2},{value:"Finale Methoden",id:"finale-methoden",level:2}];function h(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Mit Hilfe der Schl\xfcsselw\xf6rter ",(0,r.jsx)(n.code,{children:"abstract"})," und ",(0,r.jsx)(n.code,{children:"final"})," kann die Verwendung von\nKlassen vorgegeben bzw. eingesch\xe4nkt werden."]}),"\n",(0,r.jsx)(n.h2,{id:"abstrakte-klassen",children:"Abstrakte Klassen"}),"\n",(0,r.jsx)(n.p,{children:"Abstrakte Klassen k\xf6nnen nicht instanziiert werden."}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(i.Z,{value:"a",label:"Abstrakte Klasse",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Person.java" showLineNumbers',children:"public abstract class Person { }\n"})})}),(0,r.jsx)(i.Z,{value:"b",label:"Startklasse",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:"public class MainClass {\n\n  public static void main(String[] args) {\n    Person person = new Person(); // Kompilierungsfehler\n  }\n\n}\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"abstrakte-methoden",children:"Abstrakte Methoden"}),"\n",(0,r.jsx)(n.p,{children:"Abstrakte Methoden werden in abstrakten Klassen definiert, besitzen dort keinen\nMethodenrumpf und m\xfcssen in den abgeleiteten Klassen der abstrakten Klasse\n\xfcberschrieben werden."}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(i.Z,{value:"a",label:"Abstrakte Klasse mit abstrakter Methode",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Person.java" showLineNumbers',children:"public abstract class Person {\n\n  public abstract print();\n\n}\n"})})}),(0,r.jsx)(i.Z,{value:"b",label:"Startklasse",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Student.java" showLineNumbers',children:"public class Student extends Person {\n\n  public print() { }\n\n}\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"finale-klassen",children:"Finale Klassen"}),"\n",(0,r.jsx)(n.p,{children:"Finale Klassen k\xf6nnen nicht abgeleitet werden."}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(i.Z,{value:"a",label:"Finale Klasse",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Person.java" showLineNumbers',children:"public final class Person { }\n"})})}),(0,r.jsx)(i.Z,{value:"b",label:"Unterklasse",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Student.java" showLineNumbers',children:"public class Student extends Person { } // Kompilierungsfehler\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"finale-methoden",children:"Finale Methoden"}),"\n",(0,r.jsx)(n.p,{children:"Finale Methoden k\xf6nnen nicht \xfcberschrieben werden."}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(i.Z,{value:"a",label:"Oberklasse mit finaler Methode",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Person.java" showLineNumbers',children:"public class Person {\n\n  private String name;\n\n  public Person(String name) {\n    this.name = name;\n  }\n  public final name() {\n    return name;\n  }\n\n}\n"})})}),(0,r.jsx)(i.Z,{value:"b",label:"Unterklasse",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Student.java" showLineNumbers',children:"public class Student extends Person {\n\n  public name() { } // Kompilierungsfehler\n\n}\n"})})})]})]})}function b(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5525:function(e,n,a){a.d(n,{Z:()=>l});var t=a("85893");a("67294");var r=a("67026");let s="tabItem_Ymn6";function l(e){let{children:n,hidden:a,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:a,children:n})}},47902:function(e,n,a){a.d(n,{Z:()=>g});var t=a("85893"),r=a("67294"),s=a("67026"),l=a("69599"),i=a("16550"),o=a("32000"),c=a("4520"),u=a("38341"),d=a("76009");function h(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function b(e){let{value:n,tabValues:a}=e;return a.some(e=>e.value===n)}var p=a("7227");let m="tabList__CuJ",f="tabItem_LNqP";function v(e){let{className:n,block:a,selectedValue:r,selectValue:i,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{let n=e.currentTarget,a=o[c.indexOf(n)].value;a!==r&&(u(n),i(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{let a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},n),children:o.map(e=>{let{value:n,label:a,attributes:l}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...l,className:(0,s.Z)("tabs__item",f,l?.className,{"tabs__item--active":r===n}),children:a??n},n)})})}function j(e){let{lazy:n,children:a,selectedValue:l}=e,i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){let e=i.find(e=>e.props.value===l);return e?(0,r.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function x(e){let n=function(e){let{defaultValue:n,queryString:a=!1,groupId:t}=e,s=function(e){let{values:n,children:a}=e;return(0,r.useMemo)(()=>{let e=n??h(a).map(e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,a])}(e),[l,p]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:a}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=a.find(e=>e.default)??a[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:s})),[m,f]=function(e){let{queryString:n=!1,groupId:a}=e,t=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a}),l=(0,c._X)(s);return[l,(0,r.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})},[s,t])]}({queryString:a,groupId:t}),[v,j]=function(e){var n;let{groupId:a}=e;let t=(n=a)?`docusaurus.tab.${n}`:null,[s,l]=(0,d.Nk)(t);return[s,(0,r.useCallback)(e=>{if(!!t)l.set(e)},[t,l])]}({groupId:t}),x=(()=>{let e=m??v;return b({value:e,tabValues:s})?e:null})();return(0,o.Z)(()=>{x&&p(x)},[x]),{selectedValue:l,selectValue:(0,r.useCallback)(e=>{if(!b({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);p(e),f(e),j(e)},[f,j,s]),tabValues:s}}(e);return(0,t.jsxs)("div",{className:(0,s.Z)("tabs-container",m),children:[(0,t.jsx)(v,{...n,...e}),(0,t.jsx)(j,{...n,...e})]})}function g(e){let n=(0,p.Z)();return(0,t.jsx)(x,{...e,children:h(e.children)},String(n))}},50065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return l}});var t=a(67294);let r={},s=t.createContext(r);function l(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);