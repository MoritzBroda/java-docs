"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["5175"],{10107:function(e,n,r){r.r(n),r.d(n,{default:()=>c,frontMatter:()=>d,metadata:()=>i,assets:()=>o,toc:()=>h,contentTitle:()=>l});var i=JSON.parse('{"type":"mdx","permalink":"/java-docs/pr-preview/pr-243/mermaid/tree","source":"@site/src/pages/mermaid/tree.md","title":"Tree Example","description":"Root Node (Wurzelknoten)","frontMatter":{"title":"Tree Example","hide_table_of_contents":true},"unlisted":false}'),s=r("85893"),t=r("50065");let d={title:"Tree Example",hide_table_of_contents:!0},l="Tree",o={},h=[{value:"Root Node (Wurzelknoten)",id:"root-node-wurzelknoten",level:2},{value:"Child Node (Kindknoten)",id:"child-node-kindknoten",level:2},{value:"Parent Node (Elternknoten)",id:"parent-node-elternknoten",level:2},{value:"Leaf Node (Blatt)",id:"leaf-node-blatt",level:2},{value:"Ancestor Node (Vorg\xe4nger)",id:"ancestor-node-vorg\xe4nger",level:2},{value:"Descendant (Nachfolger)",id:"descendant-nachfolger",level:2},{value:"Sibling (Geschwister)",id:"sibling-geschwister",level:2},{value:"Level (Tiefe)",id:"level-tiefe",level:2},{value:"Neighbor (Nachbar)",id:"neighbor-nachbar",level:2},{value:"Subtree (Teilbaum)",id:"subtree-teilbaum",level:2},{value:"Depth First Search",id:"depth-first-search",level:2},{value:"Code",id:"code",level:3},{value:"Breath First Search",id:"breath-first-search",level:2},{value:"Min Heap",id:"min-heap",level:2},{value:"Max Heap",id:"max-heap",level:2},{value:"Indizes",id:"indizes",level:2}];function a(e){let n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"tree",children:"Tree"})}),"\n",(0,s.jsx)(n.mermaid,{value:"graph\n  A--\x3eB\n  A--\x3eC\n  B--\x3eD\n  B--\x3eE\n  C--\x3eF\n  C--\x3eG\n  C--\x3eH\n  D--\x3eI\n  D--\x3eK\n  E--\x3eJ"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h2,{id:"root-node-wurzelknoten",children:"Root Node (Wurzelknoten)"}),"\n",(0,s.jsxs)(n.p,{children:["Der Root Node ist der oberste Knoten in einem Baum oder der Knoten, der keinen\nParent Node (Elternknoten) hat. ",(0,s.jsx)(n.strong,{children:"A"})," ist der Root Node des Baumes. Ein nicht\nleerer Baum muss exakt einen Root Node besitzen."]}),"\n",(0,s.jsx)(n.h2,{id:"child-node-kindknoten",children:"Child Node (Kindknoten)"}),"\n",(0,s.jsxs)(n.p,{children:["Ein Knoten, welcher der direkte Nachfolger eines Knoten ist, nennt man Child\nNode. Die Knoten ",(0,s.jsx)(n.strong,{children:"D"})," und ",(0,s.jsx)(n.strong,{children:"E"})," sind Child Nodes von ",(0,s.jsx)(n.strong,{children:"B"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"parent-node-elternknoten",children:"Parent Node (Elternknoten)"}),"\n",(0,s.jsxs)(n.p,{children:["Ein Knoten, welcher der direkte Vorg\xe4nger eines Knoten ist, nenne man Parent\nNode. Der Knoten ",(0,s.jsx)(n.strong,{children:"B"})," ist der Parent Node von ",(0,s.jsx)(n.strong,{children:"D"})," und ",(0,s.jsx)(n.strong,{children:"E"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"leaf-node-blatt",children:"Leaf Node (Blatt)"}),"\n",(0,s.jsxs)(n.p,{children:["Ein Knoten, welcher keine direkten Nachfolger hat, nennt man Leaf Node. ",(0,s.jsx)(n.strong,{children:"I"}),",\n",(0,s.jsx)(n.strong,{children:"K"}),", ",(0,s.jsx)(n.strong,{children:"J"}),", ",(0,s.jsx)(n.strong,{children:"F"}),", ",(0,s.jsx)(n.strong,{children:"G"})," und ",(0,s.jsx)(n.strong,{children:"H"})," sind die Leaf Nodes des Baumes."]}),"\n",(0,s.jsx)(n.h2,{id:"ancestor-node-vorg\xe4nger",children:"Ancestor Node (Vorg\xe4nger)"}),"\n",(0,s.jsxs)(n.p,{children:["Alle Vorg\xe4nger von einem Knoten bis einschlie\xdflich dem Root Node sind Ancestor\nNodes. ",(0,s.jsx)(n.strong,{children:"A"})," und ",(0,s.jsx)(n.strong,{children:"B"})," sind Ancestor Nodes des Knoten ",(0,s.jsx)(n.strong,{children:"E"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"descendant-nachfolger",children:"Descendant (Nachfolger)"}),"\n",(0,s.jsxs)(n.p,{children:["Alle Nachfolger von einem Knoten sind Descendant Nodes. ",(0,s.jsx)(n.strong,{children:"D"}),", ",(0,s.jsx)(n.strong,{children:"I"})," und ",(0,s.jsx)(n.strong,{children:"K"}),"\nsind Descendant Nodes des Knoten ",(0,s.jsx)(n.strong,{children:"B"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"sibling-geschwister",children:"Sibling (Geschwister)"}),"\n",(0,s.jsxs)(n.p,{children:["Alle Child Nodes eines Knotens sind Siblings. ",(0,s.jsx)(n.strong,{children:"D"})," und ",(0,s.jsx)(n.strong,{children:"E"})," sind Siblings,\naber auch ",(0,s.jsx)(n.strong,{children:"F"}),", ",(0,s.jsx)(n.strong,{children:"G"})," und ",(0,s.jsx)(n.strong,{children:"H"})," sind Siblings."]}),"\n",(0,s.jsx)(n.h2,{id:"level-tiefe",children:"Level (Tiefe)"}),"\n",(0,s.jsxs)(n.p,{children:["Die Anzahl der Kanten vom Root Node bis zu diesem Knoten beschreibt das Level.\nDer Root Knoten hat immer das Level 0. ",(0,s.jsx)(n.strong,{children:"I"})," hat das Level 3, ",(0,s.jsx)(n.strong,{children:"G"})," das Level 2\nund ",(0,s.jsx)(n.strong,{children:"B"})," hat das Level 1."]}),"\n",(0,s.jsx)(n.h2,{id:"neighbor-nachbar",children:"Neighbor (Nachbar)"}),"\n",(0,s.jsxs)(n.p,{children:["Ein Parent Node oder ein Child Node nennt man Neighbor eines Knoten. ",(0,s.jsx)(n.strong,{children:"B"}),",\n",(0,s.jsx)(n.strong,{children:"I"})," und ",(0,s.jsx)(n.strong,{children:"K"})," sind die Nachbarn des Knoten ",(0,s.jsx)(n.strong,{children:"D"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"subtree-teilbaum",children:"Subtree (Teilbaum)"}),"\n",(0,s.jsxs)(n.p,{children:["Ein Teilbaum ist jeder Knoten im Baum mit seinen Nachfolgern. Alles Unterhalb\nvon ",(0,s.jsx)(n.strong,{children:"B"})," ist ein Subtree. Alles Unterhalb von ",(0,s.jsx)(n.strong,{children:"D"})," ist ein Subtree. Alles\nUnterhalb von ",(0,s.jsx)(n.strong,{children:"E"})," ist ein Subtree. Alles Unterhalb von ",(0,s.jsx)(n.strong,{children:"C"})," ist ein Subtree."]}),"\n",(0,s.jsx)(n.h1,{id:"binary-tree",children:"Binary Tree"}),"\n",(0,s.jsx)(n.mermaid,{value:"graph\n  7--\x3e23\n  7--\x3e3\n  23--\x3e5\n  23--\x3e4\n  3--\x3e18\n  3--\x3e21"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h2,{id:"depth-first-search",children:"Depth First Search"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Pre Order Traversal: ",(0,s.jsx)(n.strong,{children:"7"}),", 23, 5, 4, 3, 18, 21"]}),"\n",(0,s.jsxs)(n.li,{children:["In Order Traversal: 5, 23, 4, ",(0,s.jsx)(n.strong,{children:"7"}),", 18, 3, 21."]}),"\n",(0,s.jsxs)(n.li,{children:["Post Order Traversal: 5, 4, 23, 18, 21, 3, ",(0,s.jsx)(n.strong,{children:"7"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,s.jsx)(n.p,{children:"Wenn unser aktueller Node null ist. Return Ansonsten recurse left, recurse\nright."}),"\n",(0,s.jsx)(n.h2,{id:"breath-first-search",children:"Breath First Search"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"7, 23, 3, 5, 4, 18, 21"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"binary-search-tree",children:"Binary Search Tree"}),"\n",(0,s.jsx)(n.mermaid,{value:"graph\n  17--\x3e15\n  17--\x3e50\n  15--\x3e4\n  15--\x3e16\n  50--\x3e25\n  50--\x3enull\n  25--\x3e21\n  25--\x3e30"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h1,{id:"heap",children:"Heap"}),"\n",(0,s.jsx)(n.mermaid,{value:"graph\n  50--\x3e71\n  50--\x3e100\n  71--\x3e101\n  71--\x3e80\n  100--\x3e200\n  100--\x3e102"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h2,{id:"min-heap",children:"Min Heap"}),"\n",(0,s.jsx)(n.p,{children:"Ein Min Heap hat immer an der obersten Stelle das kleinste Element. D.h. jeder\nDescendant des Root Knotens ist gr\xf6\xdfer oder gleich gro\xdf wie der Root Knoten."}),"\n",(0,s.jsx)(n.h2,{id:"max-heap",children:"Max Heap"}),"\n",(0,s.jsx)(n.p,{children:"Ein Max Heap hat immer an der obersten Stelle das gr\xf6\xdfte Element. D.h. jeder\nDescendant des Root Knotens ist kleiner oder gleich gro\xdf wie der Root Knoten."}),"\n",(0,s.jsx)(n.h2,{id:"indizes",children:"Indizes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Parent: (index - 1) / 2"}),"\n",(0,s.jsx)(n.li,{children:"Left Child: 2 * index + 1"}),"\n",(0,s.jsx)(n.li,{children:"Right Child: 2 * index + 2"}),"\n"]})]})}function c(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return d}});var i=r(67294);let s={},t=i.createContext(s);function d(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);