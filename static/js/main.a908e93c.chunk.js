(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{36:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(25),a=c(8),r=(c(34),c(35),c(36),c(2)),s=c(3),j=function(){return Object(s.jsx)("h1",{className:"title",children:"Home Page"})},i=function(){return Object(s.jsx)("h1",{className:"title",children:"Page not found"})},l=c(4),o=c(23),b=c(0);function h(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){if(!e.ok)throw new Error;return e.json()}));var e}c(38);var d=function(){return Object(s.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(s.jsx)("div",{className:"Loader__content"})})},O=c(12),u=c.n(O),x=function(e){var t=e.person;return Object(s.jsx)(a.b,{to:"../".concat(t.slug),className:u()({"has-text-danger":"f"===t.sex}),children:t.name})},m=function(e){var t=e.people,c=Object(r.q)().slug;return Object(s.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Name"}),Object(s.jsx)("th",{children:"Sex"}),Object(s.jsx)("th",{children:"Born"}),Object(s.jsx)("th",{children:"Died"}),Object(s.jsx)("th",{children:"Mother"}),Object(s.jsx)("th",{children:"Father"})]})}),Object(s.jsx)("tbody",{children:t.map((function(e){return Object(s.jsxs)("tr",{"data-cy":"person",className:u()({"has-background-warning":e.slug===c}),children:[Object(s.jsx)("td",{children:Object(s.jsx)(x,{person:e})}),Object(s.jsx)("td",{children:e.sex}),Object(s.jsx)("td",{children:e.born}),Object(s.jsx)("td",{children:e.died}),Object(s.jsx)("td",{children:e.mother?Object(s.jsx)(x,{person:e.mother}):e.motherName||"-"}),Object(s.jsx)("td",{children:e.father?Object(s.jsx)(x,{person:e.father}):e.fatherName||"-"})]},e.slug)}))})]})},p=function(){var e=Object(b.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(b.useState)(!1),r=Object(l.a)(a,2),j=r[0],i=r[1],O=Object(b.useState)(!1),u=Object(l.a)(O,2),x=u[0],p=u[1];return Object(b.useEffect)((function(){i(!0),h().then((function(e){return n(function(e){return e.map((function(t){var c=e.find((function(e){return e.name===t.motherName})),n=e.find((function(e){return e.name===t.fatherName}));return Object(o.a)(Object(o.a)({},t),{},{mother:c,father:n})}))}(e))})).catch((function(){return p(!0)})).finally((function(){i(!1)}))}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"title",children:"People Page"}),Object(s.jsx)("div",{className:"block",children:Object(s.jsxs)("div",{className:"box table-container",children:[j&&Object(s.jsx)(d,{}),x&&Object(s.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!j&&!x&&0===c.length&&Object(s.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),c.length>0&&!j&&Object(s.jsx)(m,{people:c})]})})]})},f=function(){var e=function(e){var t=e.isActive;return u()("navbar-item",{"has-background-grey-lighter":t})};return Object(s.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"navbar-brand",children:[Object(s.jsx)(a.c,{className:e,to:"/",children:"Home"}),Object(s.jsx)(a.c,{className:e,to:"people",children:"People"})]})})})},v=function(){return Object(s.jsxs)("div",{"data-cy":"app",children:[Object(s.jsx)(f,{}),Object(s.jsx)("main",{className:"section",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)(r.d,{children:[Object(s.jsx)(r.b,{path:"/",element:Object(s.jsx)(j,{})}),Object(s.jsx)(r.b,{path:"home",element:Object(s.jsx)(r.a,{to:"/",replace:!0})}),Object(s.jsx)(r.b,{path:"people",children:Object(s.jsx)(r.b,{path:":slug?",element:Object(s.jsx)(p,{})})}),Object(s.jsx)(r.b,{path:"*",element:Object(s.jsx)(i,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(s.jsx)(a.a,{children:Object(s.jsx)(v,{})}))}},[[39,1,2]]]);
//# sourceMappingURL=main.a908e93c.chunk.js.map