"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[276],{8276:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var r=t(9439),o=t(2791),a=t(9126),i=t(9434),s=t(1686),c=t(6975),l=function(n){return n.contacts.contacts},u=t(9589),d=t(5325),p=t(7298),f=t(1692),h=t(7943),x=t(9640),m=t(9163),g=t(9055),b=t(4910),j=t(3329);function v(){var n=(0,o.useState)(""),e=(0,r.Z)(n,2),t=e[0],v=e[1],y=(0,o.useState)(""),k=(0,r.Z)(y,2),C=k[0],w=k[1],Z=(0,i.I0)(),N=(0,i.v9)(l),z=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":v(r);break;case"number":w(r);break;default:return}},I=function(){v(""),w("")};return(0,j.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e={name:t,number:C};if(N.some((function(n){return n.name.toLowerCase()===t.toLowerCase()||n.number===C})))return I(),void s.Notify.info("".concat(t," is already in contacts"),{position:"center-top",info:{background:"#738ddae4"}});Z((0,c.BN)(e)).then((function(){s.Notify.success("Contact added successfully",{position:"center-top",clickToClose:!0,success:{background:"#9dbc89df"}})})).catch((function(){s.Notify.failure("Somthing was wrong, try again",{position:"center-top"})})),I()},children:[(0,j.jsx)(u.X,{sx:b.Uq,children:"Add contact"}),(0,j.jsxs)(d.NI,{children:[(0,j.jsx)(p.l,{sx:b.Xv,children:"Name"}),(0,j.jsxs)(f.B,{sx:b.aY,children:[(0,j.jsx)(h.Z,{sx:b.sP,children:(0,j.jsx)(x.J,{as:a.HHm,color:"customColor.200"})}),(0,j.jsx)(m.I,{variant:"filled",value:t,onChange:z,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})]}),(0,j.jsxs)(d.NI,{children:[(0,j.jsx)(p.l,{sx:b.Xv,children:"Number"}),(0,j.jsxs)(f.B,{sx:b.aY,children:[(0,j.jsx)(h.Z,{sx:b.sP,children:(0,j.jsx)(x.J,{as:a.lfG,color:"customColor.200"})}),(0,j.jsx)(m.I,{variant:"filled",value:C,onChange:z,type:"tel",name:"number",pattern:"\\+?[0-9\\s\\-\\(\\)]+",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})]}),(0,j.jsx)(g.z,{variant:"myBtn",type:"submit",children:"Add contact"})]})}var y,k,C=t(7425),w=t(168),Z=t(225),N=Z.Z.li(y||(y=(0,w.Z)(["\n  display: flex;\n  justify-content: space-around;\n  padding: 12px;\n  padding-left: 30px;\n  color: #555;\n  -webkit-tap-highlight-color: transparent;\n\n  :hover {\n    background: #fff;\n    outline: none;\n    position: relative;\n    background-color: #fff;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n  }\n\n  :hover::after {\n    content: '';\n    position: absolute;\n    background-color: transparent;\n    bottom: 100%;\n    right: 0;\n    height: 35px;\n    width: 35px;\n    border-bottom-right-radius: 18px;\n    box-shadow: 0 20px 0 0 #fff;\n  }\n\n  :hover::before {\n    content: '';\n    position: absolute;\n    background-color: transparent;\n    top: 38px;\n    right: 0;\n    height: 35px;\n    width: 35px;\n    border-top-right-radius: 18px;\n    box-shadow: 0 -20px 0 0 #fff;\n  }\n  p {\n    width: 140px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 18px;\n  }\n\n  div {\n    display: flex;\n  }\n"]))),z=Z.Z.button(k||(k=(0,w.Z)(["\n  display: flex;\n  width: 24px;\n  height: 24px;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  cursor: pointer;\n  color: #555;\n  background-color: #ccc;\n  border-radius: 4px;\n  transition: background-color 0.3s ease;\n  :hover {\n    background-color: #999;\n  }\n"]))),I=t(1666),S=t(5494),A=t(7263),B=t(7227),T=t(2008),q=t(5510),P=t(2966),O=t(4164),_=document.querySelector("#modal-root");var F=function(n){var e=n.isOpen,t=n.onClose,a=n.contact,l=(0,i.I0)(),u=(0,o.useState)(a.name),f=(0,r.Z)(u,2),h=f[0],x=f[1],b=(0,o.useState)(a.number),v=(0,r.Z)(b,2),y=v[0],k=v[1];return(0,O.createPortal)((0,j.jsxs)(I.u_,{isOpen:e,onClose:t,children:[(0,j.jsx)(S.Z,{bg:"blackAlpha.300",backdropFilter:"blur(2px) hue-rotate(90deg)"}),(0,j.jsxs)(A.h,{children:[(0,j.jsx)(B.x,{children:"Edit Contact"}),(0,j.jsx)(T.o,{}),(0,j.jsxs)(q.f,{children:[(0,j.jsxs)(d.NI,{children:[(0,j.jsx)(p.l,{children:"Name"}),(0,j.jsx)(m.I,{variant:"filled",value:h,onChange:function(n){return x(n.target.value)}})]}),(0,j.jsxs)(d.NI,{mt:4,children:[(0,j.jsx)(p.l,{children:"Number"}),(0,j.jsx)(m.I,{variant:"filled",value:y,onChange:function(n){return k(n.target.value)}})]})]}),(0,j.jsxs)(P.m,{children:[(0,j.jsx)(g.z,{variant:"myBtn",mr:3,onClick:function(){""!==h&&""!==y?(l((0,c.gg)({id:a.id,name:h,number:y})).then((function(){s.Notify.success("Updated",{position:"center-top",clickToClose:!0,timeout:1500,success:{background:"#9dbc89df"}})})).catch((function(){s.Notify.failure("Somthing was wrong, try again",{position:"center-top"})})),t()):s.Notify.failure("Fields can not be empty. Please, enter some value",{position:"center-top"})},children:"Save"}),(0,j.jsx)(g.z,{variant:"myBtn",onClick:t,children:"Cancel"})]})]})]}),_)},L=t(8348);var G,J,X=function(n){var e=n.id,t=n.name,r=n.number,o=(0,i.I0)(),a=(0,L.q)(),l=a.isOpen,u=a.onOpen,d=a.onClose;return(0,j.jsxs)(N,{id:e,children:[(0,j.jsx)("p",{children:t}),(0,j.jsxs)("div",{children:[(0,j.jsx)("p",{children:r}),(0,j.jsx)(z,{type:"button",onClick:u,children:(0,j.jsx)(C.enh,{})}),(0,j.jsx)(F,{isOpen:l,onClose:d,contact:{id:e,name:t,number:r}}),(0,j.jsx)(z,{type:"button",onClick:function(){return n=e,void o((0,c.QZ)(n)).then((function(){s.Notify.success("Deleted",{position:"center-top",clickToClose:!0,timeout:1500,success:{background:"#9dbc89df"}})})).catch((function(){s.Notify.failure("Somthing was wrong, try again",{position:"center-top"})}));var n},children:(0,j.jsx)(C.GnT,{})})]})]})},D=Z.Z.ul(G||(G=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-left: 30px;\n  height: 100hv;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 16px;\n  background-image: linear-gradient(70deg, #d6d6d6, #f7f7f7);\n"]))),E=Z.Z.h2(J||(J=(0,w.Z)(["\n  display: block;\n  text-align: center;\n  margin-bottom: 8px;\n  font-size: 24px;\n  color: #555;\n  cursor: default;\n"]))),H=t(6916),U=function(n){return n.filter.filter.toLowerCase()},Y=(0,H.P1)([l,U],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e)}))})),$=t(7692),M=t(1449);var Q=function(){var n=(0,i.I0)(),e=(0,i.v9)(U);return(0,j.jsxs)(f.B,{children:[(0,j.jsx)(m.I,{value:e,type:"text",placeholder:"Search by names...",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",name:"search",onChange:function(e){n((0,M.T)(e.currentTarget.value))}}),!e&&(0,j.jsx)($.Goc,{size:"20"}),e&&(0,j.jsx)($.czh,{size:"20",onClick:function(){n((0,M.T)(""))}})]})};var K=function(){var n=(0,i.v9)(Y),e=(0,i.I0)();return(0,o.useEffect)((function(){e((0,c.qu)()).catch((function(){s.Notify.failure("Somthing was wrong, refresh the page",{position:"center-top"})}))}),[e]),(0,j.jsxs)(D,{children:[(0,j.jsx)(Q,{}),0!==n.length?n.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,j.jsx)(X,{name:e,number:t,id:r},r)})):(0,j.jsx)(E,{children:"Contact list is empty"})]})};var R=function(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(v,{}),(0,j.jsx)(K,{})]})}}}]);
//# sourceMappingURL=276.091f12c1.chunk.js.map