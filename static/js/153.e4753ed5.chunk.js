"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[153],{3309:function(n,e,t){t.d(e,{Nn:function(){return x},PR:function(){return d},kK:function(){return m}});var a,r,i,o=t(168),c=t(9243),s=t(3360),l=t(1424),u=t(5867),d=(0,u.zo)(c.Z)(a||(a=(0,o.Z)(["\n  width: 300px;\n  margin-top: 15px;\n"]))),x=(0,u.zo)(s.Z)(r||(r=(0,o.Z)(["\n  display: block;\n  margin: auto;\n  width: 300px;\n"]))),m=(0,u.zo)(l.Z)(i||(i=(0,o.Z)(["\n  font-weight: 500;\n  color: #0d6efd;\n  margin-bottom: 5px;\n"])))},7153:function(n,e,t){t.r(e),t.d(e,{default:function(){return rn}});var a=t(9434),r=t(1413),i=t(5987),o=t(1694),c=t.n(o),s=t(2791),l=(t(2391),t(8580)),u=t(7503),d=t(162),x=t(9439),m=t(9007),f=t(4787),v=t(8633),p=t(184),h=["bsPrefix","active","disabled","eventKey","className","variant","action","as"],j=s.forwardRef((function(n,e){var t=n.bsPrefix,a=n.active,o=n.disabled,s=n.eventKey,l=n.className,u=n.variant,j=n.action,b=n.as,Z=(0,i.Z)(n,h);t=(0,d.vE)(t,"list-group-item");var g=(0,f.v)((0,r.Z)({key:(0,v.h)(s,Z.href),active:a},Z)),y=(0,x.Z)(g,2),C=y[0],N=y[1],w=(0,m.Z)((function(n){if(o)return n.preventDefault(),void n.stopPropagation();C.onClick(n)}));o&&void 0===Z.tabIndex&&(Z.tabIndex=-1,Z["aria-disabled"]=!0);var k=b||(j?Z.href?"a":"button":"div");return(0,p.jsx)(k,(0,r.Z)((0,r.Z)((0,r.Z)({ref:e},Z),C),{},{onClick:w,className:c()(l,t,N.isActive&&"active",o&&"disabled",u&&"".concat(t,"-").concat(u),j&&"".concat(t,"-action"))}))}));j.displayName="ListGroupItem";var b=j,Z=["className","bsPrefix","variant","horizontal","numbered","as"],g=s.forwardRef((function(n,e){var t,a=(0,l.Ch)(n,{activeKey:"onSelect"}),o=a.className,s=a.bsPrefix,x=a.variant,m=a.horizontal,f=a.numbered,v=a.as,h=void 0===v?"div":v,j=(0,i.Z)(a,Z),b=(0,d.vE)(s,"list-group");return m&&(t=!0===m?"horizontal":"horizontal-".concat(m)),(0,p.jsx)(u.Z,(0,r.Z)((0,r.Z)({ref:e},j),{},{as:h,className:c()(o,b,x&&"".concat(b,"-").concat(x),t&&"".concat(b,"-").concat(t),f&&"".concat(b,"-numbered"))}))}));g.displayName="ListGroup";var y,C=Object.assign(g,{Item:b}),N=t(3360),w=t(4227),k=t(3634),z=t(2598),P=function(n){return n.contacts.contacts},I=function(n){return n.contacts.filter},L=function(n){return n.contacts.isLoading},R=function(n){return n.contacts.error},S=t(168),E=t(5867),G=(0,E.zo)(b)(y||(y=(0,S.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),K=function(){var n=(0,a.v9)(z.Wo),e=(0,a.v9)(P),t=(0,a.v9)(L),r=(0,a.v9)(R),i=(0,a.v9)(I),o=(0,a.I0)();(0,s.useEffect)((function(){n&&o((0,k.VC)())}),[o,n]);var c=Array.isArray(e)&&e.length>0;return(0,p.jsxs)("div",{style:{width:"inherit"},children:[r&&(0,p.jsx)("p",{children:r}),t&&(0,p.jsx)(w.a,{}),c&&(0,p.jsx)(C,{children:function(){var n=i.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}().map((function(n){var e=n.id,t=n.name,a=n.number;return(0,p.jsxs)(G,{children:[(0,p.jsxs)("div",{children:[(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Name:"})," ",t]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Number:"})," ",a]})]}),(0,p.jsx)(N.Z,{"aria-label":"Delete",variant:"primary",type:"button",onClick:function(){return o((0,k.xX)(e))},children:"Delete"})]},e)}))})]})},T=t(6543),_=t(6882),A=s.createContext(null);A.displayName="InputGroupContext";var D=A,V=["bsPrefix","size","hasValidation","className","as"],M=(0,T.Z)("input-group-text",{Component:"span"}),U=s.forwardRef((function(n,e){var t=n.bsPrefix,a=n.size,o=n.hasValidation,l=n.className,u=n.as,x=void 0===u?"div":u,m=(0,i.Z)(n,V);t=(0,d.vE)(t,"input-group");var f=(0,s.useMemo)((function(){return{}}),[]);return(0,p.jsx)(D.Provider,{value:f,children:(0,p.jsx)(x,(0,r.Z)((0,r.Z)({ref:e},m),{},{className:c()(l,t,a&&"".concat(t,"-").concat(a),o&&"has-validation")}))})}));U.displayName="InputGroup";var q,F,O,B,W=Object.assign(U,{Text:M,Radio:function(n){return(0,p.jsx)(M,{children:(0,p.jsx)(_.Z,(0,r.Z)({type:"radio"},n))})},Checkbox:function(n){return(0,p.jsx)(M,{children:(0,p.jsx)(_.Z,(0,r.Z)({type:"checkbox"},n))})}}),X=t(9243),H=t(1538),J=E.zo.div(q||(q=(0,S.Z)(["\n  display: flex;\n    flex-direction: column;\n    padding-top: 12px;\n    padding-bottom: 12px;\n    gap: 8px;\n"]))),Q=E.zo.label(F||(F=(0,S.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  margin: auto;\n"]))),Y=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}(),$=function(){var n=(0,a.v9)(I),e=(0,a.I0)();return(0,p.jsxs)(J,{children:[(0,p.jsx)(Q,{htmlFor:Y,children:"Find contacts by name"}),(0,p.jsxs)(W,{className:"mb-3",children:[(0,p.jsx)(W.Text,{children:(0,p.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",children:(0,p.jsx)("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,p.jsx)(X.Z.Control,{type:"text",placeholder:"Search","aria-label":"Username",name:"filter",value:n,id:Y,onChange:function(n){var t=n.target;e((0,H.T)(t.value))}})]})]})},nn=t(3309),en=t(7022),tn=(0,E.zo)(en.Z)(O||(O=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),an=(0,E.zo)((function(){var n=(0,a.v9)(P),e=(0,a.I0)(),t=(0,s.useState)(""),r=(0,x.Z)(t,2),i=r[0],o=r[1],c=(0,s.useState)(""),l=(0,x.Z)(c,2),u=l[0],d=l[1],m=function(n){var e=n.target,t=e.name,a=e.value;"name"!==t?"number"!==t||d(a):o(a)},f=function(){o(""),d("")};return(0,p.jsxs)(nn.PR,{className:"mb-4",onSubmit:function(t){t.preventDefault();var a=n.some((function(n){return n.name.toLowerCase()===i.toLowerCase()}));a?alert("This contact is already exist"):(e((0,k.je)({name:i,number:u})),f())},children:[(0,p.jsxs)(X.Z.Group,{className:"mb-2",children:[(0,p.jsx)(nn.kK,{children:"Contact name"}),(0,p.jsx)(X.Z.Control,{name:"name",value:i,type:"text",placeholder:"Enter contact name",required:!0,onChange:m}),(0,p.jsx)(X.Z.Text,{className:"text-muted"})]}),(0,p.jsxs)(X.Z.Group,{className:"mb-4",children:[(0,p.jsx)(nn.kK,{children:"Phone"}),(0,p.jsx)(X.Z.Control,{name:"number",value:u,type:"tel",placeholder:"Enter contact phone",required:!0,onChange:m})]}),(0,p.jsx)(nn.Nn,{variant:"primary",type:"submit",children:"Create contact"})]})}))(B||(B=(0,S.Z)(["\n  margin: auto;\n"]))),rn=function(){return(0,p.jsxs)(tn,{children:[(0,p.jsx)("h1",{children:"My contacts"}),(0,p.jsx)(an,{}),(0,p.jsx)($,{}),(0,p.jsx)(K,{})]})}}}]);
//# sourceMappingURL=153.e4753ed5.chunk.js.map