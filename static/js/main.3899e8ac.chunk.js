(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(4),o=a.n(r),s=(a(9),a(2)),l=(a(10),a(0));function i(e){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"\\",children:"Home"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(l.jsxs)("div",{class:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"," "),children:[Object(l.jsx)("input",{class:"form-check-input",onClick:e.toggalmode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(l.jsx)("label",{class:"form-check-label",for:"flexSwitchCheckDefault",children:"Dark Mode"})]})})]})})})}function b(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],r=a[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Enter the Text to analyze below"}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"myBox",className:"form-label"}),Object(l.jsx)("textarea",{className:"form-control",style:{backgroundColor:"light"===e.mode?"gray":"dark"},value:c,onChange:function(e){r(e.target.value)},id:"myBox",rows:"8",children:" "})]}),Object(l.jsx)("button",{type:"button",className:"btn btn-warning",onClick:function(){var e=c.toUpperCase();r(e)},children:"Convert to Uppercase "}),Object(l.jsx)("button",{type:"button",className:"btn btn-primary mx-3",onClick:function(){var e=c.toLowerCase();r(e)},children:"Convert to Lowercase"}),Object(l.jsx)("button",{type:"button",className:"btn btn-secondary mx-3",onClick:function(){var e=document.getElementById("myBox");e.select(),navigator.clipboard.writeText(e.value)},children:"Copy Text"}),Object(l.jsx)("button",{type:"button",className:"btn btn-success mx-3",onClick:function(){var e=c.split(/[ ]+/);r(e.join(" "))},children:"Remove Space"}),Object(l.jsx)("button",{type:"button",class:"btn btn-dark",onClick:function(){r("")},children:"Clear Text"}),Object(l.jsxs)("h1",{children:["Number of charcter + ",c.length," of charcter"]}),Object(l.jsx)("p",{children:c})]})}var d=function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)};var j=function(e){return e.alert&&Object(l.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(l.jsxs)("strong",{children:[" ",d(e.alert.type)]})," : ",e.alert.msg,Object(l.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})};var u=function(){var e=Object(n.useState)("light"),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),o=Object(s.a)(r,2),d=o[0],u=o[1],h=function(e,t){u({msg:e,type:t}),setTimeout((function(){u(null)}),3e3)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{title:"Titleutlies",mode:a,toggalmode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="grey",h("Dark mode enable","success")):(c("light"),document.body.style.backgroundColor="white",h("Light mode enable","success"))}}),Object(l.jsx)(j,{alert:d}),Object(l.jsx)("div",{className:"container my-3",children:Object(l.jsx)(b,{})})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),h()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.3899e8ac.chunk.js.map