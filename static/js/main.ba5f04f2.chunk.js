(this["webpackJsonpmath-magicians"]=this["webpackJsonpmath-magicians"]||[]).push([[0],{15:function(t,n,e){},16:function(t,n,e){},18:function(t,n,e){"use strict";e.r(n);var a=e(1),l=e.n(a),i=e(9),c=e.n(i),o=(e(15),e(16),e(10)),s=e(3),r=e(4),u=e(2),b=e(6),h=e(5),d=e(0),j=function(t){return t||"0"},k=function(t,n){return t&&n?j(n):t||j(n)},p=function(t){Object(b.a)(e,t);var n=Object(h.a)(e);function e(t){var a;return Object(s.a)(this,e),(a=n.call(this,t)).state={},a}return Object(r.a)(e,[{key:"render",value:function(){var t=this.props.total,n=this.props.next;return Object(d.jsx)("div",{className:"Display-container",children:Object(d.jsx)("p",{className:"Display-display",children:k(t,n)})})}}]),e}(l.a.Component);p.defaultProps={total:null,next:null};var C=function(t){Object(b.a)(e,t);var n=Object(h.a)(e);function e(t){var a;return Object(s.a)(this,e),(a=n.call(this,t)).handleClick=a.handleClick.bind(Object(u.a)(a)),a.state={},a}return Object(r.a)(e,[{key:"handleClick",value:function(t){var n=this.props.handleClick;n(t.target.value)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Other-Operations-container",children:[Object(d.jsx)("button",{onClick:this.handleClick,type:"button",className:"Other-Operations-btn btn",value:"AC",children:"AC"}),Object(d.jsx)("button",{onClick:this.handleClick,type:"button",className:"Other-Operations-btn btn",value:"+/-",children:"+ / -"}),Object(d.jsx)("button",{onClick:this.handleClick,type:"button",className:"Other-Operations-btn btn",value:"%",children:"%"})]})}}]),e}(l.a.Component);C.defaultProps={handleClick:null};var O=function(t){Object(b.a)(e,t);var n=Object(h.a)(e);function e(t){var a;return Object(s.a)(this,e),(a=n.call(this,t)).handleClick=a.handleClick.bind(Object(u.a)(a)),a.state={},a}return Object(r.a)(e,[{key:"handleClick",value:function(t){var n=this.props.handleClick;n(t.target.value)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Digits-container",children:[Object(d.jsx)("button",{onClick:this.handleClick,type:"button",className:"Digits-btn btn",value:"7",children:"7"}),Object(d.jsx)("button",{onClick:this.handleClick,type:"button",className:"Digits-btn btn",value:"8",children:"8"}),Object(d.jsx)("button",{onClick:this.handleClick,type:"button",className:"Digits-btn btn",value:"9",children:"9"}),Object(d.jsx)("button",{onClick:this.handleClick,type:"button",className:"Digits-btn btn",value:"4",children:"4"}),Object(d.jsx)("button",{onClick:this.handleClick,type:"button",className:"Digits-btn btn",value:"5",children:"5"}),Object(d.jsx)("button",{onClick:this.handleClick,type:"button",className:"Digits-btn btn",value:"6",children:"6"}),Object(d.jsx)("button",{onClick:this.handleClick,type:"button",className:"Digits-btn btn",value:"1",children:"1"}),Object(d.jsx)("button",{onClick:this.handleClick,type:"button",className:"Digits-btn btn",value:"2",children:"2"}),Object(d.jsx)("button",{onClick:this.handleClick,type:"button",className:"Digits-btn btn",value:"3",children:"3"}),Object(d.jsx)("button",{onClick:this.handleClick,type:"button",className:"Digits-btn zero-btn btn",value:"0",children:"0"}),Object(d.jsx)("button",{onClick:this.handleClick,type:"button",className:"Digits-btn btn",value:".",children:"."})]})}}]),e}(l.a.Component);O.defaultProps={handleClick:null};var v=function(t){Object(b.a)(e,t);var n=Object(h.a)(e);function e(t){var a;return Object(s.a)(this,e),(a=n.call(this,t)).handleClick=a.handleClick.bind(Object(u.a)(a)),a.state={},a}return Object(r.a)(e,[{key:"handleClick",value:function(t){var n=this.props.handleClick;n(t.target.value)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Operators-container",children:[Object(d.jsx)("button",{onClick:this.handleClick,type:"button",className:"Operators-btn btn",value:"\xf7",children:"\xf7"}),Object(d.jsx)("button",{onClick:this.handleClick,type:"button",className:"Operators-btn btn",value:"x",children:"\xd7"}),Object(d.jsx)("button",{onClick:this.handleClick,type:"button",className:"Operators-btn btn",value:"-",children:"\u2212"}),Object(d.jsx)("button",{onClick:this.handleClick,type:"button",className:"Operators-btn btn",value:"+",children:"+"})]})}}]),e}(l.a.Component);v.defaultProps={handleClick:null};var x=function(t){Object(b.a)(e,t);var n=Object(h.a)(e);function e(t){var a;return Object(s.a)(this,e),(a=n.call(this,t)).handleClick=a.handleClick.bind(Object(u.a)(a)),a.state={},a}return Object(r.a)(e,[{key:"handleClick",value:function(t){var n=this.props.handleClick;n(t.target.value)}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"Equal-container",children:Object(d.jsx)("button",{onClick:this.handleClick,type:"button",className:"Equal-btn btn",value:"=",children:"="})})}}]),e}(l.a.Component);x.defaultProps={handleClick:null};var f=e(8),m=e.n(f);function y(t,n,e){var a=m()(t),l=m()(n);if("+"===e)return a.plus(l).toString();if("-"===e)return a.minus(l).toString();if("x"===e)return a.times(l).toString();if("\xf7"===e)return a.div(l).toString();if("%"===e)return a.mod(l).toString();throw Error("Unknown operation '".concat(e,"'"))}var g=function(t){Object(b.a)(e,t);var n=Object(h.a)(e);function e(t){var a;return Object(s.a)(this,e),(a=n.call(this,t)).handleClick=a.handleClick.bind(Object(u.a)(a)),a.updateState=a.updateState.bind(Object(u.a)(a)),a.state={total:null,next:null,operation:null},a}return Object(r.a)(e,[{key:"handleClick",value:function(t){var n=function(t,n){return"AC"===n?{total:null,next:null,operation:null}:n.match(/[0-9]+/)?"0"===n&&"0"===t.next?{}:t.operation?t.next?{next:t.next+n}:{next:n}:t.next?{next:t.next+n,total:null}:{next:n,total:null}:"."===n?t.next?t.next.includes(".")?{}:{next:"".concat(t.next,".")}:t.operation?{next:"0."}:t.total?t.total.includes(".")?{}:{total:"".concat(t.total,".")}:{total:"0."}:"="===n?t.next&&t.operation?{total:y(t.total,t.next,t.operation),next:null,operation:null}:{}:"+/-"===n?t.next?{next:(-1*parseFloat(t.next)).toString()}:t.total?{total:(-1*parseFloat(t.total)).toString()}:{}:t.next||t.total?t.operation?{total:y(t.total,t.next,t.operation),next:null,operation:n}:t.next?{total:t.next,next:null,operation:n}:{operation:n}:{}}(this.state,t);this.updateState(n)}},{key:"updateState",value:function(t){this.setState(Object(o.a)({},t))}},{key:"render",value:function(){var t=this.state,n=t.total,e=t.next;return Object(d.jsxs)("div",{className:"Calculator-container",children:[Object(d.jsx)(p,{total:n,next:e}),Object(d.jsx)(C,{handleClick:this.handleClick}),Object(d.jsx)(O,{handleClick:this.handleClick}),Object(d.jsx)(v,{handleClick:this.handleClick}),Object(d.jsx)(x,{handleClick:this.handleClick})]})}}]),e}(l.a.Component);var N=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(g,{})})},D=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,19)).then((function(n){var e=n.getCLS,a=n.getFID,l=n.getFCP,i=n.getLCP,c=n.getTTFB;e(t),a(t),l(t),i(t),c(t)}))};c.a.render(Object(d.jsx)(l.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),D()}},[[18,1,2]]]);
//# sourceMappingURL=main.ba5f04f2.chunk.js.map