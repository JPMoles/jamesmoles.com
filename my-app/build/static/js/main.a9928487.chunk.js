(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,r){},9:function(e,t,r){"use strict";r.r(t);var n=r(8),s=r(3),a=r(4),o=r(6),c=r(5),i=r(1),u=r.n(i),l=r(7),h=r.n(l),b=(r(14),r(0));function d(e){return Object(b.jsx)("button",{className:"square",onClick:e.onClick,style:{backgroundColor:"#8BFF00"},children:e.value})}var j=function(e){Object(o.a)(r,e);var t=Object(c.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(b.jsx)(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){for(var e=[],t=0,r=0;r<3;r++)e.push(Object(b.jsxs)("div",{className:"board-row",children:[this.renderSquare(0+t),this.renderSquare(1+t),this.renderSquare(2+t)]},r)),t+=3;return Object(b.jsx)("div",{children:e})}}]),r}(u.a.Component),f=function(e){Object(o.a)(r,e);var t=Object(c.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0,buttonSelected:0},n}return Object(a.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();v(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r,col:e%3,row:Math.floor(e/3)}]),stepNumber:t.length,xIsNext:!this.state.xIsNext,buttonSelected:this.state.buttonSelected+1}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0,buttonSelected:e})}},{key:"setBoldButton",value:function(e){return this.state.buttonSelected===e?{fontWeight:"bold"}:{fontWeight:"normal"}}},{key:"render",value:function(){var e,t=this,r=this.state.history,n=r[this.state.stepNumber],s=v(n.squares),a=r.map((function(e,n){var s=n?"Go to move #"+n+" col: "+r[n].col+" row: "+r[n].row:"Go to game start";return Object(b.jsx)("li",{children:Object(b.jsx)("button",{style:t.setBoldButton(n),onClick:function(){return t.jumpTo(n)},children:s})},n)}));return e=s?"Winner: "+s:function(e){for(var t=0;t<e.length;t++)if(null===e[t])return!1;return!0}(n.squares)?"No Winner!":"Next player: "+(this.state.xIsNext?"X":"O"),Object(b.jsxs)("div",{className:"game",children:[Object(b.jsx)("div",{className:"game-board",children:Object(b.jsx)(j,{squares:n.squares,onClick:function(e){return t.handleClick(e)}})}),Object(b.jsxs)("div",{className:"game-info",children:[Object(b.jsx)("div",{children:e}),Object(b.jsx)("ol",{children:a})]})]})}}]),r}(u.a.Component);function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var s=Object(n.a)(t[r],3),a=s[0],o=s[1],c=s[2];if(e[a]&&e[a]===e[o]&&e[a]===e[c])return e[a]}return null}h.a.render(Object(b.jsx)(f,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.a9928487.chunk.js.map