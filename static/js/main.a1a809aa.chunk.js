(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),a=c(4),o=c(5),l=c(8),r=c(7),i=c(1),d=c(6),u=c.n(d),j=(c(13),c(14),c(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(l.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(a.a)(this,c);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:"Jam"},e.checkEquality=function(t){return e.state.selectedGood===t?e.setState({selectedGood:""}):e.setState({selectedGood:t})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("main",{className:"section container",children:[t?Object(j.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(t," is selected"),Object(j.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){e.setState({selectedGood:""})}})]}):Object(j.jsx)("h1",{className:"title",children:"No goods selected"}),Object(j.jsx)("table",{className:"table",children:Object(j.jsx)("tbody",{children:b.map((function(c){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("tr",{"data-cy":"Good",className:u()({"has-background-success-light":t===c}),children:[Object(j.jsx)("td",{children:Object(j.jsx)("button",{"data-cy":t===c?"RemoveButton":"AddButton",type:"button",className:t===c?"button is-info":"button",onClick:function(){e.checkEquality(c)},children:t===c?"-":"+"})}),Object(j.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)})}))})})]})})}}]),c}(i.Component);n.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a1a809aa.chunk.js.map