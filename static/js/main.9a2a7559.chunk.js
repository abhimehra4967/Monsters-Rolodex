(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(1),c=n.n(r),a=n(3),o=n.n(a),i=(n(13),n(4)),l=n(5),h=n(7),u=n(6),d=(n(14),n(15),function(e){var t=e.placeholder,n=e.handleChange;return Object(s.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),j=(n(16),function(e){return Object(s.jsxs)("div",{className:"card-container",children:[Object(s.jsx)("img",{className:"photo",alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2")}),Object(s.jsx)("h1",{children:e.monster.name}),Object(s.jsx)("p",{children:e.monster.email})]})}),m=(n(17),function(e){return Object(s.jsxs)("div",{className:"card-list",children:[e.avengers.map((function(e){return Object(s.jsx)(j,{monster:e},e.id)})),";"]})}),f=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={avengers:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({avengers:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.avengers,r=t.searchField;console.log();var c=n.filter((function(e){return e.name.toLowerCase().includes(r.toLocaleLowerCase())}));return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{className:"heading",children:"Monsters Rolodex"}),Object(s.jsx)(d,{placeholder:"search-monsters",handleChange:function(t){return e.setState({searchField:t.target.value})}}),Object(s.jsx)(m,{avengers:c})]})}}]),n}(r.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),s(e),r(e),c(e),a(e)}))};o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.9a2a7559.chunk.js.map