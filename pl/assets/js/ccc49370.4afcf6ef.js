"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6103],{9379:(e,t,a)=>{a.d(t,{Z:()=>E});var l=a(7344),n=a(9496),r=a(1626),i=a(8491),s=a(425);const m="sidebar_rKG2",o="sidebarItemTitle_6Oy3",c="sidebarItemList_5jrb",d="sidebarItem_YK-S",g="sidebarItemLink_C5fj",u="sidebarItemLinkActive_dtJy";var p=a(2272);function v(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,r.Z)(m,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.Z)(o,"margin-bottom--md")},t.title),n.createElement("ul",{className:c},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:d},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:u},e.title))}))))}var h=["sidebar","toc","children"];const E=function(e){var t=e.sidebar,a=e.toc,s=e.children,m=(0,l.Z)(e,h),o=t&&t.items.length>0;return n.createElement(i.Z,m,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},o&&n.createElement("aside",{className:"col col--3"},n.createElement(v,{sidebar:t})),n.createElement("main",{className:(0,r.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},9324:(e,t,a)=>{a.d(t,{Z:()=>_});var l=a(9496),n=a(1626),r=a(9613),i=a(2272),s=a(425),m=a(2623),o=a(4394),c=a(8052),d=a(2725);const g="blogPostTitle_7fZK",u="blogPostData_5M8e",p="blogPostDetailsFull_MbmY";var v=a(7672);const h="image_nsAJ";const E=function(e){var t=e.author,a=t.name,n=t.title,r=t.url,i=t.imageURL;return l.createElement("div",{className:"avatar margin-bottom--sm"},i&&l.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:r},l.createElement("img",{className:h,src:i,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(s.Z,{href:r,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),n&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},b="authorCol_hGcJ";function N(e){var t=e.authors,a=e.assets;return 0===t.length?null:l.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var r;return l.createElement("div",{className:(0,n.Z)("col col--6",b),key:t},l.createElement(E,{author:Object.assign({},e,{imageURL:null!=(r=a.authorsImageUrls[t])?r:e.imageURL})}))})))}const _=function(e){var t,a,h,E,b=(h=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return h(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),_=(0,m.C)().withBaseUrl,f=e.children,Z=e.frontMatter,k=e.assets,P=e.metadata,C=e.truncated,L=e.isBlogPostPage,T=void 0!==L&&L,y=P.date,w=P.formattedDate,x=P.permalink,I=P.tags,A=P.readingTime,H=P.title,M=P.editUrl,B=P.authors,R=null!=(t=k.image)?t:Z.image,U=!T&&C,O=I.length>0;return l.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(E=T?"h1":"h2",l.createElement("header",null,l.createElement(E,{className:g,itemProp:"headline"},T?H:l.createElement(s.Z,{itemProp:"url",to:x},H)),l.createElement("div",{className:(0,n.Z)(u,"margin-vert--md")},l.createElement("time",{dateTime:y,itemProp:"datePublished"},w),void 0!==A&&l.createElement(l.Fragment,null," \xb7 ",b(A))),l.createElement(N,{authors:B,assets:k}))),R&&l.createElement("meta",{itemProp:"image",content:_(R,{absolute:!0})}),l.createElement("div",{className:"markdown",itemProp:"articleBody"},l.createElement(r.Zo,{components:c.Z},f)),(O||C)&&l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(a={},a[p]=T,a))},O&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":U})},l.createElement(v.Z,{tags:I})),T&&M&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.Z,{editUrl:M})),U&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":O})},l.createElement(s.Z,{to:P.permalink,"aria-label":"Read more about "+H},l.createElement("b",null,l.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},8995:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var l=a(9496),n=a(5061),r=a(9379),i=a(9324),s=a(2272),m=a(425);const o=function(e){var t=e.nextItem,a=e.prevItem;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(m.Z,{className:"pagination-nav__link",to:a.permalink},l.createElement("div",{className:"pagination-nav__sublabel"},l.createElement(s.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),l.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.createElement(m.Z,{className:"pagination-nav__link",to:t.permalink},l.createElement("div",{className:"pagination-nav__sublabel"},l.createElement(s.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),l.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))};var c=a(4394),d=a(4502);const g=function(e){var t,a=e.content,s=e.sidebar,m=a.frontMatter,g=a.assets,u=a.metadata,p=u.title,v=u.description,h=u.nextItem,E=u.prevItem,b=u.date,N=u.tags,_=u.authors,f=m.hide_table_of_contents,Z=m.keywords,k=m.toc_min_heading_level,P=m.toc_max_heading_level,C=null!=(t=g.image)?t:m.image;return l.createElement(r.Z,{wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogPostPage,sidebar:s,toc:!f&&a.toc&&a.toc.length>0?l.createElement(d.Z,{toc:a.toc,minHeadingLevel:k,maxHeadingLevel:P}):void 0},l.createElement(n.Z,{title:p,description:v,keywords:Z,image:C},l.createElement("meta",{property:"og:type",content:"article"}),l.createElement("meta",{property:"article:published_time",content:b}),_.some((function(e){return e.url}))&&l.createElement("meta",{property:"article:author",content:_.map((function(e){return e.url})).filter(Boolean).join(",")}),N.length>0&&l.createElement("meta",{property:"article:tag",content:N.map((function(e){return e.label})).join(",")})),l.createElement(i.Z,{frontMatter:m,assets:g,metadata:u,isBlogPostPage:!0},l.createElement(a,null)),(h||E)&&l.createElement(o,{nextItem:h,prevItem:E}))}},2725:(e,t,a)=>{a.d(t,{Z:()=>g});var l=a(9496),n=a(2272),r=a(9518),i=a(7344),s=a(1626);const m="iconEdit_RZ2H";var o=["className"];const c=function(e){var t=e.className,a=(0,i.Z)(e,o);return l.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(m,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var d=a(4394);function g(e){var t=e.editUrl;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:d.kM.common.editThisPage},l.createElement(c,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},4502:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(9518),n=a(7344),r=a(9496),i=a(1626),s=a(8203);const m="tableOfContents_xZOC";var o=["className"];const c=function(e){var t=e.className,a=(0,n.Z)(e,o);return r.createElement("div",{className:(0,i.Z)(m,"thin-scrollbar",t)},r.createElement(s.Z,(0,l.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},8203:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(9518),n=a(7344),r=a(9496),i=a(4394),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function m(e){var t=e.toc,a=e.className,l=e.linkClassName,n=e.isChild;return t.length?r.createElement("ul",{className:n?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(m,{isChild:!0,toc:e.children,className:a,linkClassName:l}))}))):null}function o(e){var t=e.toc,a=e.className,o=void 0===a?"table-of-contents table-of-contents__left-border":a,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,g=e.linkActiveClassName,u=void 0===g?void 0:g,p=e.minHeadingLevel,v=e.maxHeadingLevel,h=(0,n.Z)(e,s),E=(0,i.LU)(),b=null!=p?p:E.tableOfContents.minHeadingLevel,N=null!=v?v:E.tableOfContents.maxHeadingLevel,_=(0,i.DA)({toc:t,minHeadingLevel:b,maxHeadingLevel:N}),f=(0,r.useMemo)((function(){if(d&&u)return{linkClassName:d,linkActiveClassName:u,minHeadingLevel:b,maxHeadingLevel:N}}),[d,u,b,N]);return(0,i.Si)(f),r.createElement(m,(0,l.Z)({toc:_,className:o,linkClassName:d},h))}},7672:(e,t,a)=>{a.d(t,{Z:()=>u});var l=a(9496),n=a(1626),r=a(2272),i=a(425);const s="tag_9XE-",m="tagRegular_NEOa",o="tagWithCount_AVg7";const c=function(e){var t,a=e.permalink,r=e.name,c=e.count;return l.createElement(i.Z,{href:a,className:(0,n.Z)(s,(t={},t[m]=!c,t[o]=c,t))},r,c&&l.createElement("span",null,c))},d="tags_RCBR",g="tag_miQz";function u(e){var t=e.tags;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.Z)(d,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return l.createElement("li",{key:a,className:g},l.createElement(c,{name:t,permalink:a}))}))))}}}]);