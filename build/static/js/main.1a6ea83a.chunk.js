(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{22:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(2),a=t.n(c),r=t(16),o=t.n(r),i=(t(22),t(3)),u=t(17),s=t(4),d=t.n(s),l="/api/persons",b={getAll:function(){return d.a.get(l)},createPerson:function(e){return d.a.post(l,e)},deletePerson:function(e){return d.a.delete("".concat(l,"/").concat(e))},updatePerson:function(e){return d.a.put("".concat(l,"/").concat(e.id),e)}},j=t(0),h=function(e){return Object(j.jsxs)("div",{children:["filter shown with ",Object(j.jsx)("input",Object(u.a)({},e))]})},f=function(e){return Object(j.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(j.jsx)("h3",{children:"Add a new number"}),Object(j.jsxs)("div",{children:["name: ",Object(j.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(j.jsxs)("div",{children:["number:"," ",Object(j.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",children:"add"})})]})},m=function(e){var n=e.persons,t=e.filter,c=e.handleDelete;return Object(j.jsx)(j.Fragment,{children:n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(j.jsxs)("p",{children:[e.name," ",e.number," ",Object(j.jsx)("button",{onClick:function(){return c(e)},children:"delete"})]},e.id)}))})},O=function(e){var n=e.message,t=e.type;return null===n?null:Object(j.jsx)("div",{className:t,children:n})},p=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)(""),o=Object(i.a)(r,2),u=o[0],s=o[1],d=Object(c.useState)(""),l=Object(i.a)(d,2),p=l[0],x=l[1],g=Object(c.useState)(""),v=Object(i.a)(g,2),w=v[0],C=v[1],S=Object(c.useState)(null),N=Object(i.a)(S,2),P=N[0],k=N[1],y=Object(c.useState)(""),D=Object(i.a)(y,2),F=D[0],T=D[1];Object(c.useEffect)((function(){b.getAll().then((function(e){a(e.data)}))}),[]);return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Phonebook"}),Object(j.jsx)(O,{message:P,type:F}),Object(j.jsx)(h,{value:w,onChange:function(e){C(e.target.value)}}),Object(j.jsx)(f,{handleSubmit:function(e){e.preventDefault();var n=Object.create(t.find((function(e){return e.name===u})));if(n)window.confirm("".concat(u," is already added to phonebook, replace the old number with a new one?"))&&(n.number=p,b.updatePerson(n).then((function(e){a(t.map((function(n){return n.id!==e.data.id?n:e.data}))),T("notification"),k("Updated ".concat(n.name))})).catch((function(e){T("error"),k(e.response.data.error),setTimeout((function(){k(null)}),5e3)})));else{var c={name:u,number:p};b.createPerson(c).then((function(e){a(t.concat(e.data)),s(""),x(""),T("notification"),k("Added ".concat(u)),setTimeout((function(){k(null)}),5e3)})).catch((function(e){T("error"),k(e.response.data.error),setTimeout((function(){k(null)}),5e3)}))}},newName:u,handleNameChange:function(e){s(e.target.value)},newNumber:p,handleNumberChange:function(e){x(e.target.value)}}),Object(j.jsx)("h3",{children:"Numbers"}),Object(j.jsx)(m,{persons:t,filter:w,handleDelete:function(e){window.confirm("Delete ".concat(e.name,"?"))&&b.deletePerson(e.id).then((function(){a(t.filter((function(n){return e.id!==n.id})))}))}})]})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),x()}},[[42,1,2]]]);
//# sourceMappingURL=main.1a6ea83a.chunk.js.map