(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={inputFilter:"Filter_inputFilter__fLLJ3"}},19:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",name:"ContactForm_name__1yuhS",inputName:"ContactForm_inputName__26Y8y",inputTel:"ContactForm_inputTel__1C3lX",submitName:"ContactForm_submitName__2nn2T"}},20:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(8),r=n.n(i),s=(n(19),n(13)),o=n(9),l=n(10),u=n(14),m=n(12),b=(n(20),n(7)),d=n(24),f=n(2),j=n.n(f),h=n(0);function p(t){var e=t.formSubmitHandler,n=Object(a.useState)(""),c=Object(b.a)(n,2),i=c[0],r=c[1],s=Object(a.useState)(""),o=Object(b.a)(s,2),l=o[0],u=o[1],m=function(t){var e=t.target,n=e.name,a=e.value;"name"===n?r(a):u(a)},f=function(){r(""),u("")};return Object(h.jsxs)("form",{className:j.a.form,onSubmit:function(t){t.preventDefault();var n=Object(d.a)();e({id:n,name:i,number:l}),f()},children:[Object(h.jsx)("label",{htmlFor:"sendName",className:j.a.name,children:"Name"}),Object(h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:i,onChange:m,className:j.a.inputName,id:"sendName"}),Object(h.jsx)("label",{htmlFor:"sendTel",children:"Number"}),Object(h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:j.a.inputTel,onChange:m,value:l,id:"sendTel"}),Object(h.jsx)("button",{type:"submit",className:j.a.submitName,children:"Add contact"})]})}var O=n(11),C=n.n(O);var _=function(t){var e=t.filter,n=t.filterList;return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Find contacts by name"}),Object(h.jsx)("input",{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",className:C.a.inputFilter,onChange:n,value:e})]})},v=n(5),x=n.n(v);var N=function(t){var e=t.getVisibleContacts,n=t.deleteContact;return Object(h.jsx)("ul",{className:x.a.listContacts,children:e.map((function(t){return Object(h.jsxs)("li",{className:x.a.item,children:[t.name,": ",t.number,Object(h.jsx)("button",{type:"submit",className:x.a.button,onClick:function(){return n(t)},children:"Delete"})]},t.id)}))})},g=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.filterList=function(e){t.setState({filter:e.target.value})},t.formSubmitHandler=function(e){t.state.contacts.find((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contacts.")):t.setState((function(t){return{contacts:[e].concat(Object(s.a)(t.contacts))}}))},t.getVisibleList=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e.id}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleList();return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{className:"titlePhonebook",children:"Phonebook"}),Object(h.jsx)(p,{formSubmitHandler:this.formSubmitHandler}),Object(h.jsx)("h1",{className:"titleContacts",children:"Contacts"}),Object(h.jsx)(_,{filter:t,filterList:this.filterList}),Object(h.jsx)(N,{getVisibleContacts:e,deleteContact:this.deleteContact})]})}}]),n}(a.Component);r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))},5:function(t,e,n){t.exports={listContacts:"ContactList_listContacts__29K0_",button:"ContactList_button__1RuFy",item:"ContactList_item__3YsZK"}}},[[22,1,2]]]);
//# sourceMappingURL=main.a9f97e72.chunk.js.map