(this.webpackJsonpstarwars2=this.webpackJsonpstarwars2||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(1),c=a.n(o),l=(a(14),a(3)),i=a(4),s=a(7),m=a(5),u=a(8),h=(a(15),a(16),a(6)),p=a.n(h),w=function(e){var t=e.character;return console.log(t),r.a.createElement(p.a,{className:"Tilt br2 shadow-2",options:{max:20}},r.a.createElement("article",{id:"charactercard",className:"br5 ba  bw3 b--yellow -10 mv4 w-200 w-50-m w-25-l mw6 center shadow-5"},r.a.createElement("div",null,r.a.createElement("p",null," Name : ",t.name),r.a.createElement("p",null," Height: ",t.height),r.a.createElement("p",null," Mass: ",t.mass),r.a.createElement("p",null," Skincolor: ",t.skin_color),r.a.createElement("p",null," Eye color: ",t.eye_color," "),r.a.createElement("p",null," Birth year: ",t.birth_year," "),r.a.createElement("p",null," Gender: ",t.gender," "),r.a.createElement("p",null," Home World : ",t.homeworld))))},b=function(e){var t=e.onButtonSubmit;return r.a.createElement("div",null,r.a.createElement("button",{className:" br2 w-15 grow f4 link ph3 pv2 dib black bg-yellow",onClick:t},"Generate New Character!"))},d=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).onButtonSubmit=function(){var t=Math.floor(100*Math.random()).toString(),a="https://swapi.co/api/people/"+t+"/";console.log(t),console.log(a),fetch(a).then((function(e){return e.json()})).then((function(t){e.setState({character:t})}))},e.state={character:[]},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("Render"),r.a.createElement("div",{className:"App tc"},r.a.createElement("h1",{className:"f1"}," Star Wars API"),r.a.createElement("h2",{className:"f3"}," Details "),r.a.createElement(w,{character:this.state.character}),r.a.createElement(b,{onButtonSubmit:this.onButtonSubmit}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(17);c.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.76435a6c.chunk.js.map