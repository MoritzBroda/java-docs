"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["5650"],{99452:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>u});var t=JSON.parse('{"id":"exercises/trees/trees01","title":"Trees01","description":"","source":"@site/docs/exercises/trees/trees01.mdx","sourceDirName":"exercises/trees","slug":"/exercises/trees/trees01","permalink":"/java-docs/pr-preview/pr-255/exercises/trees/trees01","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/trees/trees01.mdx","tags":[],"version":"current","frontMatter":{"title":"Trees01","description":""},"sidebar":"exercisesSidebar","previous":{"title":"B\xe4ume","permalink":"/java-docs/pr-preview/pr-255/exercises/trees/"},"next":{"title":"Ausnahmen (Exceptions)","permalink":"/java-docs/pr-preview/pr-255/exercises/exceptions/"}}'),a=r("85893"),o=r("50065"),i=r("58168"),l=r("97645");let s={title:"Trees01",description:""},u=void 0,d={},c=[{value:"Bin\xe4rbaum",id:"bin\xe4rbaum",level:2}];function f(e){let n={h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Bestimme f\xfcr den abgebildeten Bin\xe4rbaum die H\xf6he"}),"\n",(0,a.jsx)(n.li,{children:"Bestimme f\xfcr jeden Knoten des abgebildeten Bin\xe4rbaums den Grad und die Tiefe"}),"\n",(0,a.jsx)(n.li,{children:"Traversiere den abgebildeten Bin\xe4rbaum unter Verwendung des Tiefendurchlaufs"}),"\n",(0,a.jsx)(n.li,{children:"Traversiere den abgebildeten Bin\xe4rbaum unter Verwendung des Breitendurchlaufs"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"bin\xe4rbaum",children:"Bin\xe4rbaum"}),"\n",(0,a.jsx)(n.mermaid,{value:"flowchart TD\n    node1 --\x3e node2\n    node1 --\x3e node3\n    node2 --\x3e node4\n    node2 --\x3e node5\n    node3 --\x3e node6\n    node3 --\x3e node7\n    node5 --\x3e node8\n    node5 --\x3e node9\n    node8 --\x3e node10\n\n    node1(44)\n    node2(29)\n    node3(65)\n    node4(17)\n    node5(37)\n    node6(50)\n    node7(66)\n    node8(35)\n    node9(40)\n    node10(30)"}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(l.Z,{value:"a",label:"-",default:!0}),(0,a.jsx)(l.Z,{value:"b",label:"H\xf6he",children:(0,a.jsx)(n.p,{children:"4"})}),(0,a.jsx)(l.Z,{value:"c",label:"Grad und Tiefe",children:(0,a.jsx)(n.mermaid,{value:"flowchart TD\n    node1 --\x3e node2\n    node1 --\x3e node3\n    node2 --\x3e node4\n    node2 --\x3e node5\n    node3 --\x3e node6\n    node3 --\x3e node7\n    node5 --\x3e node8\n    node5 --\x3e node9\n    node8 --\x3e node10\n\n    node1(44\\nGrad: 2, Tiefe: 0)\n    node2(29\\nGrad: 2, Tiefe: 1)\n    node3(65\\nGrad: 2, Tiefe: 1)\n    node4(17\\nGrad: 0, Tiefe: 2)\n    node5(37\\nGrad: 2, Tiefe: 2)\n    node6(50\\nGrad: 0, Tiefe: 2)\n    node7(66\\nGrad: 0, Tiefe: 2)\n    node8(35\\nGrad: 1, Tiefe: 3)\n    node9(40\\nGrad: 0, Tiefe: 3)\n    node10(30\\nGrad: 0, Tiefe: 4)"})}),(0,a.jsx)(l.Z,{value:"d",label:"Tiefendurchlauf",children:(0,a.jsx)(n.p,{children:"44, 29, 17, 37, 35, 30, 40, 65, 50, 66"})}),(0,a.jsx)(l.Z,{value:"e",label:"Breitendurchlauf",children:(0,a.jsx)(n.p,{children:"44, 29, 65, 17, 37, 50, 66, 35, 40, 30"})})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},97645:function(e,n,r){r.d(n,{Z:()=>o});var t=r("85893");r("67294");var a=r("67026");function o(e){let{children:n,hidden:r,className:o}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_Ymn6",o),hidden:r,children:n})}},58168:function(e,n,r){r.d(n,{Z:()=>x});var t=r("85893"),a=r("67294"),o=r("67026"),i=r("34718"),l=r("16550"),s=r("8714"),u=r("89207"),d=r("69413"),c=r("54510");function f(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var p=r("6735");function h(e){let{className:n,block:r,selectedValue:a,selectValue:l,tabValues:s}=e,u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{let n=e.currentTarget,r=s[u.indexOf(n)].value;r!==a&&(d(n),l(r))},f=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{let r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},n),children:s.map(e=>{let{value:n,label:r,attributes:i}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{u.push(e)},onKeyDown:f,onClick:c,...i,className:(0,o.Z)("tabs__item","tabItem_LNqP",i?.className,{"tabs__item--active":a===n}),children:r??n},n)})})}function b(e){let{lazy:n,children:r,selectedValue:i}=e,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===i);return e?(0,a.cloneElement)(e,{className:(0,o.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,o=function(e){let{values:n,children:r}=e;return(0,a.useMemo)(()=>{let e=n??f(r).map(e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[i,p]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:o})),[h,b]=function(e){let{queryString:n=!1,groupId:r}=e,t=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u._X)(o),(0,a.useCallback)(e=>{if(!o)return;let n=new URLSearchParams(t.location.search);n.set(o,e),t.replace({...t.location,search:n.toString()})},[o,t])]}({queryString:r,groupId:t}),[v,x]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[t,o]=(0,c.Nk)(r);return[t,(0,a.useCallback)(e=>{r&&o.set(e)},[r,o])]}({groupId:t}),j=(()=>{let e=h??v;return m({value:e,tabValues:o})?e:null})();return(0,s.Z)(()=>{j&&p(j)},[j]),{selectedValue:i,selectValue:(0,a.useCallback)(e=>{if(!m({value:e,tabValues:o}))throw Error(`Can't select invalid tab value=${e}`);p(e),b(e),x(e)},[b,x,o]),tabValues:o}}(e);return(0,t.jsxs)("div",{className:(0,o.Z)("tabs-container","tabList__CuJ"),children:[(0,t.jsx)(h,{...n,...e}),(0,t.jsx)(b,{...n,...e})]})}function x(e){let n=(0,p.Z)();return(0,t.jsx)(v,{...e,children:f(e.children)},String(n))}},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var t=r(67294);let a={},o=t.createContext(a);function i(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);