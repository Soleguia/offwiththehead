(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1732)}])},6283:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var s=n(5893),i=n(9008),o=n.n(i);function c(){return(0,s.jsxs)(o(),{children:[(0,s.jsx)("title",{children:"Off With The Head"}),(0,s.jsx)("meta",{name:"description",content:"NextJS app"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("link",{rel:"icon",href:"/guillotine.svg"})]})}},1732:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var s=n(5893),i=n(7294),o=n(6283),c=n(9111),r=n(7640),h=n.n(r);function u(e){let t=e.post,n=t.categories.map(t=>{let n=e.categories.find(e=>e.id===t);return(null==n?void 0:n.name)||""});return(0,s.jsxs)("article",{className:h().post,children:[(0,s.jsx)("h2",{children:(0,c.decode)(t.title.rendered)}),(0,s.jsx)("hr",{}),(0,s.jsx)("p",{children:n.join(", ")})]})}function a(){let[e,t]=(0,i.useState)([]),[n,c]=(0,i.useState)([]),[r,h]=(0,i.useState)([]);return(0,i.useEffect)(()=>{fetch("https://offwiththehead.soleguia.es/wp/wp-json/wp/v2/categories").then(e=>e.json()).then(e=>h(e))},[]),(0,i.useEffect)(()=>{fetch("https://offwiththehead.soleguia.es/wp/wp-json/wp/v2/tags").then(e=>e.json()).then(e=>t(e))},[]),(0,i.useEffect)(()=>{fetch("https://offwiththehead.soleguia.es/wp/wp-json/wp/v2/posts").then(e=>e.json()).then(e=>c(e))},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{}),(0,s.jsx)("main",{className:"",children:n.map(e=>(0,s.jsx)(u,{post:e,categories:r},e.id))})]})}},7640:function(e){e.exports={post:"Post_post__f8WCU"}}},function(e){e.O(0,[864,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);