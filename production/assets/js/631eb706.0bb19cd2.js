"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2852"],{1624:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>u,default:()=>p,assets:()=>c,toc:()=>d,frontMatter:()=>s});var r=JSON.parse('{"id":"documentation/lombok","title":"Lombok","description":"","source":"@site/docs/documentation/lombok.mdx","sourceDirName":"documentation","slug":"/documentation/lombok","permalink":"/java-docs/production/documentation/lombok","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/lombok.mdx","tags":[{"inline":true,"label":"lombok","permalink":"/java-docs/production/tags/lombok"}],"version":"current","sidebarPosition":255,"frontMatter":{"title":"Lombok","description":"","sidebar_position":255,"tags":["lombok"]},"sidebar":"documentationSidebar","previous":{"title":"Datenklassen (Records)","permalink":"/java-docs/production/documentation/records"},"next":{"title":"Innere Klassen (Inner Classes)","permalink":"/java-docs/production/documentation/inner-classes"}}'),a=n("85893"),o=n("50065"),l=n("47902"),i=n("5525");let s={title:"Lombok",description:"",sidebar_position:255,tags:["lombok"]},u=void 0,c={},d=[];function m(e){let t={a:"a",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://projectlombok.org/",children:"Lombok"})," stellt eine Java-Bibliothek dar, die das\nErstellen von Boilerplate-Code \xfcberfl\xfcssig macht. Repetitive Methoden wie\nKonstruktoren, Getter, Setter und die Objekt-Methoden m\xfcssen nicht manuell\nimplementiwert werden, sondern werden beim Kompilieren generiert. Durch\nentsprechende Annotationen kann dabei gesteuert werden, welche Methoden wie\ngeneriert werden sollen."]}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(i.Z,{value:"a",label:"Fachklasse",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",metastring:'title="Student.java" showLineNumbers',children:"@RequiredArgsConstructor\n@AllArgsConstructor\n@Getter\n@Setter\n@EqualsAndHashCode\n@ToString\npublic class Student {\n\n  public final int id;\n  public final String name;\n  public double averageGrade;\n\n}\n"})})}),(0,a.jsx)(i.Z,{value:"b",label:"Startklasse",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",metastring:'title="MainClass.java" showLineNumbers',children:'public class MainClass {\n\n  public static void main(String[] args) {\n\n    Student student1 = new Student("8172534", "Hans Maier");\n    student1.setAverageGrade(2.2);\n    System.out.println(student1.getName());\n\n    Student student2 = new Student("9167121", "Lisa M\xfcller", 1.8);\n    System.out.println(student2);\n\n  }\n\n}\n'})})})]})]})}function p(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},5525:function(e,t,n){n.d(t,{Z:()=>l});var r=n("85893");n("67294");var a=n("67026");let o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n,children:t})}},47902:function(e,t,n){n.d(t,{Z:()=>j});var r=n("85893"),a=n("67294"),o=n("67026"),l=n("69599"),i=n("16550"),s=n("32000"),u=n("4520"),c=n("38341"),d=n("76009");function m(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var f=n("7227");let b="tabList__CuJ",h="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:s}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{let t=e.currentTarget,n=s[u.indexOf(t)].value;n!==a&&(c(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{let n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:s.map(e=>{let{value:t,label:n,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>u.push(e),onKeyDown:m,onClick:d,...l,className:(0,o.Z)("tabs__item",h,l?.className,{"tabs__item--active":a===t}),children:n??t},t)})})}function g(e){let{lazy:t,children:n,selectedValue:l}=e,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=i.find(e=>e.props.value===l);return e?(0,a.cloneElement)(e,{className:(0,o.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:i.map((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function k(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:r}=e,o=function(e){let{values:t,children:n}=e;return(0,a.useMemo)(()=>{let e=t??m(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}});return!function(e){let t=(0,c.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[l,f]=(0,a.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:o})),[b,h]=function(e){let{queryString:t=!1,groupId:n}=e,r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n}),l=(0,u._X)(o);return[l,(0,a.useCallback)(e=>{if(!o)return;let t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})},[o,r])]}({queryString:n,groupId:r}),[v,g]=function(e){var t;let{groupId:n}=e;let r=(t=n)?`docusaurus.tab.${t}`:null,[o,l]=(0,d.Nk)(r);return[o,(0,a.useCallback)(e=>{if(!!r)l.set(e)},[r,l])]}({groupId:r}),k=(()=>{let e=b??v;return p({value:e,tabValues:o})?e:null})();return(0,s.Z)(()=>{k&&f(k)},[k]),{selectedValue:l,selectValue:(0,a.useCallback)(e=>{if(!p({value:e,tabValues:o}))throw Error(`Can't select invalid tab value=${e}`);f(e),h(e),g(e)},[h,g,o]),tabValues:o}}(e);return(0,r.jsxs)("div",{className:(0,o.Z)("tabs-container",b),children:[(0,r.jsx)(v,{...t,...e}),(0,r.jsx)(g,{...t,...e})]})}function j(e){let t=(0,f.Z)();return(0,r.jsx)(k,{...e,children:m(e.children)},String(t))}},50065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return l}});var r=n(67294);let a={},o=r.createContext(a);function l(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);