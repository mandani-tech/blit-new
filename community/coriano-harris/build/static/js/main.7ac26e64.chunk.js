(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(2),o=a.n(c),r=(a(14),a(3)),i=a(4),l=a(6),m=a(5),u=a(7),h=(a(15),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={businesses:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("section",{className:"hero"},s.a.createElement("div",{className:"hero-body"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"title"},"BLiT Businesses"),s.a.createElement("h2",{className:"subtitle"},"by Coriano")))),s.a.createElement("hr",null),this.state.businesses.map(function(e){return s.a.createElement("div",{className:"card",key:e.objectID},s.a.createElement("div",{className:"card-content"},s.a.createElement("p",{className:"title"},e.name),s.a.createElement("p",{className:"subtitle"},e.owner)),s.a.createElement("footer",{className:"card-footer"},s.a.createElement("p",{className:"card-footer-item"},s.a.createElement("span",null,s.a.createElement("a",{href:"{business.url}"},"View Website")))))}))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://blacklatinoit.com/api/businesses").then(function(e){return e.json()}).then(function(t){var a=Object.keys(t).map(function(e){return t[e]});console.log(a),e.setState({businesses:a})})}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.7ac26e64.chunk.js.map