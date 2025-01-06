"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7048"],{32945:function(e,t,n){n.r(t),n.d(t,{default:()=>en});var s=n("85893"),a=n("67294"),l=n("14713"),i=n("85346");let o=a.createContext(null);function r(e){let{children:t,content:n}=e,l=(0,a.useMemo)(()=>({metadata:n.metadata,frontMatter:n.frontMatter,assets:n.assets,contentTitle:n.contentTitle,toc:n.toc}),[n]);return(0,s.jsx)(o.Provider,{value:l,children:t})}function c(){let e=(0,a.useContext)(o);if(null===e)throw new i.i6("DocProvider");return e}function d(){let{metadata:e,frontMatter:t,assets:n}=c();return(0,s.jsx)(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n("67026"),m=n("54704"),h=n("96025"),b=n("83012");function x(e){let{permalink:t,title:n,subLabel:a,isNext:l}=e;return(0,s.jsxs)(b.Z,{className:(0,u.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,s.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,s.jsx)("div",{className:"pagination-nav__label",children:n})]})}function p(e){let{previous:t,next:n}=e;return(0,s.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,s.jsx)(x,{...t,subLabel:(0,s.jsx)(h.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,s.jsx)(x,{...n,subLabel:(0,s.jsx)(h.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function v(){let{metadata:e}=c();return(0,s.jsx)(p,{previous:e.previous,next:e.next})}var j=n("2933"),g=n("98057"),f=n("84681"),_=n("93896"),C=n("68529");let N={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,s.jsx)(h.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,s.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,s.jsx)(h.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,s.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function Z(e){let t=N[e.versionMetadata.banner];return(0,s.jsx)(t,{...e})}function k(e){let{versionLabel:t,to:n,onClick:a}=e;return(0,s.jsx)(h.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,s.jsx)("b",{children:(0,s.jsx)(b.Z,{to:n,onClick:a,children:(0,s.jsx)(h.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function L(e){let{className:t,versionMetadata:n}=e,{siteConfig:{title:a}}=(0,j.Z)(),{pluginId:l}=(0,g.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,_.J)(l),{latestDocSuggestion:o,latestVersionSuggestion:r}=(0,g.Jo)(l),c=o??r.docs.find(e=>e.id===r.mainDocId);return(0,s.jsxs)("div",{className:(0,u.Z)(t,f.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,s.jsx)("div",{children:(0,s.jsx)(Z,{siteTitle:a,versionMetadata:n})}),(0,s.jsx)("div",{className:"margin-top--md",children:(0,s.jsx)(k,{versionLabel:r.label,to:c.path,onClick:()=>i(r.name)})})]})}function T(e){let{className:t}=e,n=(0,C.E)();return n.banner?(0,s.jsx)(L,{className:t,versionMetadata:n}):null}function w(e){let{className:t}=e,n=(0,C.E)();return n.badge?(0,s.jsx)("span",{className:(0,u.Z)(t,f.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,s.jsx)(h.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}var I=n("48627");function B(e){let{tags:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("b",{children:(0,s.jsx)(h.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,s.jsx)("ul",{className:(0,u.Z)("tags_jXut","padding--none","margin-left--sm"),children:t.map(e=>(0,s.jsx)("li",{className:"tag_QGVx",children:(0,s.jsx)(I.Z,{...e})},e.permalink))})]})}var E=n("86594");function M(){let{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,tags:l}=e,i=l.length>0,o=!!(t||n||a);return i||o?(0,s.jsxs)("footer",{className:(0,u.Z)(f.k.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,s.jsx)("div",{className:(0,u.Z)("row margin-top--sm",f.k.docs.docFooterTagsRow),children:(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(B,{tags:l})})}),o&&(0,s.jsx)(E.Z,{className:(0,u.Z)("margin-top--sm",f.k.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a})]}):null}var V=n("57455"),y=n("76365");let A={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function H(e){let{collapsed:t,...n}=e;return(0,s.jsx)("button",{type:"button",...n,className:(0,u.Z)("clean-btn",A.tocCollapsibleButton,!t&&A.tocCollapsibleButtonExpanded,n.className),children:(0,s.jsx)(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}let P={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function F(e){let{toc:t,className:n,minHeadingLevel:a,maxHeadingLevel:l}=e,{collapsed:i,toggleCollapsed:o}=(0,V.u)({initialState:!0});return(0,s.jsxs)("div",{className:(0,u.Z)(P.tocCollapsible,!i&&P.tocCollapsibleExpanded,n),children:[(0,s.jsx)(H,{collapsed:i,onClick:o}),(0,s.jsx)(V.z,{lazy:!0,className:P.tocCollapsibleContent,collapsed:i,children:(0,s.jsx)(y.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:l})})]})}function R(){let{toc:e,frontMatter:t}=c();return(0,s.jsx)(F,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(f.k.docs.docTocMobile,"tocMobile_ITEo")})}var D=n("1397");function O(){let{toc:e,frontMatter:t}=c();return(0,s.jsx)(D.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f.k.docs.docTocDesktop})}var S=n("34403"),z=n("14722");function U(e){let{children:t}=e,n=function(){let{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,s.jsxs)("div",{className:(0,u.Z)(f.k.docs.docMarkdown,"markdown"),children:[n&&(0,s.jsx)("header",{children:(0,s.jsx)(S.Z,{as:"h1",children:n})}),(0,s.jsx)(z.Z,{children:t})]})}var G=n("69369"),W=n("79246"),J=n("4757");function Q(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}function X(){let e=(0,J.ZP)("/");return(0,s.jsx)("li",{className:"breadcrumbs__item",children:(0,s.jsx)(b.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,s.jsx)(Q,{className:"breadcrumbHomeIcon_YNFT"})})})}function Y(e){let{children:t,href:n,isLast:a}=e,l="breadcrumbs__link";return a?(0,s.jsx)("span",{className:l,itemProp:"name",children:t}):n?(0,s.jsx)(b.Z,{className:l,href:n,itemProp:"item",children:(0,s.jsx)("span",{itemProp:"name",children:t})}):(0,s.jsx)("span",{className:l,children:t})}function $(e){let{children:t,active:n,index:a,addMicrodata:l}=e;return(0,s.jsxs)("li",{...l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,s.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function q(){let e=(0,G.s1)(),t=(0,W.Ns)();return e?(0,s.jsx)("nav",{className:(0,u.Z)(f.k.docs.docBreadcrumbs,"breadcrumbsContainer_Z_bl"),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,s.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,s.jsx)(X,{}),e.map((t,n)=>{let a=n===e.length-1,l="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,s.jsx)($,{active:a,index:n,addMicrodata:!!l,children:(0,s.jsx)(Y,{href:l,isLast:a,children:t.label})},n)})]})}):null}var K=n("38813");let ee={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function et(e){let{children:t}=e,n=function(){let{frontMatter:e,toc:t}=c(),n=(0,m.i)(),a=e.hide_table_of_contents,l=!a&&t.length>0;return{hidden:a,mobile:l?(0,s.jsx)(R,{}):void 0,desktop:l&&("desktop"===n||"ssr"===n)?(0,s.jsx)(O,{}):void 0}}(),{metadata:a}=c();return(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:(0,u.Z)("col",!n.hidden&&ee.docItemCol),children:[(0,s.jsx)(K.Z,{metadata:a}),(0,s.jsx)(T,{}),(0,s.jsxs)("div",{className:ee.docItemContainer,children:[(0,s.jsxs)("article",{children:[(0,s.jsx)(q,{}),(0,s.jsx)(w,{}),n.mobile,(0,s.jsx)(U,{children:t}),(0,s.jsx)(M,{})]}),(0,s.jsx)(v,{})]})]}),n.desktop&&(0,s.jsx)("div",{className:"col col--3",children:n.desktop})]})}function en(e){let t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,s.jsx)(r,{content:e.content,children:(0,s.jsxs)(l.FG,{className:t,children:[(0,s.jsx)(d,{}),(0,s.jsx)(et,{children:(0,s.jsx)(n,{})})]})})}},48627:function(e,t,n){n.d(t,{Z:()=>o});var s=n("85893");n("67294");var a=n("67026"),l=n("83012");let i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function o(e){let{permalink:t,label:n,count:o,description:r}=e;return(0,s.jsxs)(l.Z,{href:t,title:r,className:(0,a.Z)(i.tag,o?i.tagWithCount:i.tagRegular),children:[n,o&&(0,s.jsx)("span",{children:o})]})}}}]);