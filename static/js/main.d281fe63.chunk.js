(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{17:function(t,e,s){"use strict";s.r(e);var a=s(8),c=s.n(a),i=s(4),n=(s(14),s(15),s(1)),b=s(9),l=s.n(b),j=(s(0),s(2)),r=function(t){var e=t.tabs,s=Object(n.h)().tabId,a=e.find((function(t){return t.id===s}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ul",{className:"list tabs",children:e.map((function(t){return Object(j.jsx)("li",{className:"list__item",children:Object(j.jsx)(i.b,{to:"/tabs/".concat(t.id),children:Object(j.jsx)("button",{type:"button",className:l()("button",{"is-large":t.id===(null===a||void 0===a?void 0:a.id)}),children:t.title})})},t.id)}))}),null!==a&&void 0!==a&&a.content?Object(j.jsx)("h1",{className:"title notification is-large is-success",children:a.content}):Object(j.jsx)("h1",{className:"title notification is-danger is-light",children:"Please select a tab"})]})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],d=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("nav",{className:"navbar is-fixed-top has-background-light","data-cy":"nav",children:Object(j.jsx)("div",{className:"navbar-menu",children:Object(j.jsxs)("div",{className:"navbar-start has-navbar-fixed-top",children:[Object(j.jsx)(i.c,{to:"/",className:"navbar-item isActive",children:"Home"}),Object(j.jsx)(i.c,{to:"/tabs",className:"navbar-item isActive",children:"Tabs"})]})})}),Object(j.jsxs)(n.d,{children:[Object(j.jsx)(n.b,{path:"/",element:Object(j.jsx)("h1",{className:"title notification is-large is-success",children:"Home Page"})}),Object(j.jsx)(n.b,{path:"/home",element:Object(j.jsx)(n.a,{to:"/"})}),Object(j.jsx)(n.b,{path:"*",element:Object(j.jsx)("h1",{className:"title notification is-danger is-light",children:"Page not found"})}),Object(j.jsxs)(n.b,{path:"/tabs",children:[Object(j.jsx)(n.b,{index:!0,element:Object(j.jsx)(r,{tabs:o})}),Object(j.jsx)(n.b,{path:":tabId",element:Object(j.jsx)(r,{tabs:o})})]})]})]})};c.a.render(Object(j.jsx)(i.a,{children:Object(j.jsx)(d,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d281fe63.chunk.js.map