(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(75),s=a.n(c),l=(a(91),a(22)),i=a.n(l),u=a(51),o=a(84),m=a(76),f=a(77),h=a(83),p=a(78),d=a(85),E=(a(94),a(52)),g=a.n(E),b=a(53),v=a.n(b),A=(a(113),function(){return r.a.createElement("section",{className:"header-section"},r.a.createElement("img",{className:"rotate-center",alt:"late",src:v.a}),r.a.createElement("h1",null,"Running Late!!!"),r.a.createElement("img",{className:"rotate-center",alt:"late",src:v.a}))}),S=(a(114),function(e){return r.a.createElement("div",{className:"scroll-content"},e.children)}),k=(a(115),function(e){var t=e.handleSubmit,a=e.status;return r.a.createElement("section",{className:"register-section"},r.a.createElement("form",{onSubmit:t},r.a.createElement("label",null,"Github Handle :",r.a.createElement("input",{type:"text",name:"handle",autoFocus:!0,required:!0})),r.a.createElement("label",null,"Email :",r.a.createElement("input",{type:"email",name:"email",required:!0})),r.a.createElement("button",null,"Submit")),!1===a&&r.a.createElement("p",null,"Bad Input!"))}),w=(a(116),function(e){var t=e.data,a=e.chosenUser,n=t.name,c=t.profile,s=t.email;return r.a.createElement("section",{className:"user-card"},r.a.createElement("button",{onClick:function(){return a(t)}},r.a.createElement("img",{alt:"user_profile",src:c}),r.a.createElement("h4",null,n),r.a.createElement("h4",null,s)))}),U=(a(117),function(e){var t=e.userData,a=e.chosenUser;return r.a.createElement("section",null,r.a.createElement("h1",{style:{color:"white"}},"Choose your profile"),r.a.createElement("div",{className:"User-List"},null!==t&&(t.length>0?t.map(function(e,t){return r.a.createElement(w,{key:t,data:e,chosenUser:a})}):r.a.createElement(w,{data:t}))))}),C=(a(118),a(79)),D=a.n(C),y=a(80),N=a.n(y),O=a(81),j=a.n(O),x=a(82),F=a.n(x),B=function(e){var t=e.getSituation;return r.a.createElement("section",null,r.a.createElement("h1",{style:{color:"white"}},"Choose your situation"),r.a.createElement("div",{className:"Situation-List"},r.a.createElement("button",{onClick:function(){return t("traffic")}},r.a.createElement("img",{alt:"situation3",src:j.a}),r.a.createElement("h4",null,"Stuck in traffic")),r.a.createElement("button",{onClick:function(){return t("accident")}},r.a.createElement("img",{alt:"situation1",src:D.a}),r.a.createElement("h4",null,"Got accident")),r.a.createElement("button",{onClick:function(){return t("broken")}},r.a.createElement("img",{alt:"situation2",src:N.a}),r.a.createElement("h4",null,"Car broken")),r.a.createElement("button",{onClick:function(){return t("weather")}},r.a.createElement("img",{alt:"situation4",src:F.a}),r.a.createElement("h4",null,"Bad weather"))))},R=(a(119),function(){return r.a.createElement("section",{className:"footer-section"},r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/april9288/rightnowkbbq",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{class:"fab fa-github-alt"})),r.a.createElement("a",{href:"https://www.linkedin.com/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{class:"fab fa-linkedin"}))),r.a.createElement("div",null,r.a.createElement("p",{style:{color:"white"}},"\xa9 2019 James Jongho Kim All Rights Reserved")))}),z=(a(120),function(e){var t=e.finish;return r.a.createElement("section",{className:"Status-section"},r.a.createElement("h1",null,t),r.a.createElement("div",null,r.a.createElement("h5",null,"Please follow my github and linkedin")))}),K=a(54);K.initializeApp({apiKey:'AIzaSyDsS9smcM0ksxevY2-9-7cfTuZaPXJiS7Q",',authDomain:'realtimegame-b4ee3.firebaseapp.com",',databaseURL:"https://realtimegame-b4ee3.firebaseio.com",projectId:'realtimegame-b4ee3",',storageBucket:'realtimegame-b4ee3.appspot.com",',messagingSenderId:"837731033820"});var P,G=K.database();P="https://runninglate.herokuapp.com";var Y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={userData:null,serverStatus:null,chosenUser:null,situation:null,finish:null},a.getUserDataFromFB=function(){G.ref("user").on("value",function(e){var t=[];e.forEach(function(e){t.push(Object(o.a)({id:e.key},e.val()))}),a.setState({userData:t})})},a.handleSubmit=function(){var e=Object(u.a)(i.a.mark(function e(t){var n,r,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements.handle.value,r=t.target.elements.email.value,e.next=5,g.a.post("".concat(P,"/register?handle=").concat(n,"&email=").concat(r));case 5:c=e.sent;try{200===c.data.status?(G.ref("user").push(c.data.user),a.setState({serverStatus:!0})):a.setState({serverStatus:!1})}catch(t){a.setState({serverStatus:!1})}case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.chosenUser=function(e){a.setState({chosenUser:e})},a.getSituation=function(){var e=Object(u.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({situation:t,finish:"pending"}),e.prev=1,e.next=4,g.a.post("https://runninglate.herokuapp.com/email",{chosenUser:a.state.chosenUser,situation:t});case 4:200===e.sent.data.status?(a.setState({finish:"success"}),G.ref("user").off()):a.setState({finish:"fail"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a.setState({finish:"fail"});case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}(),a.display=function(){return null===a.state.finish?r.a.createElement(S,null,r.a.createElement(k,{handleSubmit:a.handleSubmit,status:a.state.serverStatus}),null===a.state.chosenUser?r.a.createElement(U,{userData:a.state.userData,chosenUser:a.chosenUser}):r.a.createElement(U,{userData:a.state.chosenUser}),r.a.createElement(B,{getSituation:a.getSituation})):r.a.createElement(z,{finish:a.state.finish})},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.getUserDataFromFB()}},{key:"render",value:function(){return r.a.createElement("section",{className:"App"},r.a.createElement(A,null),this.display(),r.a.createElement(R,null))}}]),t}(n.Component);s.a.render(r.a.createElement(Y,null),document.getElementById("root"))},53:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEFUlEQVRYR+2XXWhbZRjH/8/5SNM0H0vAbdWutRlS6Cejk03b4dyqG6ygsO1CnMguttJ647zwyvpVQVBZvXElVCpoZbB14GDDzW1CWQuZSxzN1tRik9CmUqfYNh9L0+Sc80pOZ9ssWXuOdvTG9+Y9kOf//H/nfd/neXMI6zxonf3xP4CmFQhU720G4fmUoQCft3yWnnYUi4wpLA35/PnDG6//l21cFSDgbLLBzP4ESPTU7UbfS22LfgyY7TvksD9SAIbdQrCG94KoNvz4Vrhefx+SWKB6MuCHvkOOfY8EwOP3F4OJn4K4XZBkIxeNPcYYo/kiczrJG0QCmFnE7wSm6ABQwNgYI+7jpyudVzK6vFvwsz9YpoD1x9JUxpZlN3AMRl67Hc1GFlZqg+1BkUSK0lxf/dTlHADGGOcZCQ2E73HPnB63ZDFudySxd/OcZgJb69tqbKTrk3wa3/bKrXU5AN7hwFEZ6Pk6ZMHdpJAlXGMAJqbZ5iwAn2/cnhKkEd+MYdP3U0U51FoABP8o+OCEqjWeu6DOyYPN6iw7SyFVVizlVbArC+Dm8JgrpdDx7jEb7sncvwIo/OYsjBev5t2m5IEmzL12ePE3Ijq+CPDTyNizHKPr/XeNnPuvwrwJtKwAPx4GN/WHqjd196pz4tgRdVaKN0Iu27KUm3BSBfB4PCJMdu9simq+DNggs/z9SQvAcvJVDmEm9AK53b9aBSt3FsCLKQVIyg9vjnrLcFUAhl/opj/QScCbmmtLTyC730Uo/0sRECePPxAC8KSevGsZS0M9ZyQAOvrbWtoDFKhtWt5t1za7hmzrDzDUc2Z9V8DjD+QA8BwHY4EBgrBwNCRJRnI+BVnRdvPq0WeqIAsgY2w2FYKIwO6X0T/P8cScCrLS0KvPAGQubWsmqUEUYTWbMDM9DZfLhRs33KrXjh070dLSArvDgVg8gfl0Oi9DgSjCsoo+Gk8gtaSPknck2MsYezWT0WGzQpLSeKOtFZOTk7DaNqhG0cgsSkpK8MWpLgiCiOlINC+AXj0RfUvu28FNAs+uCTxfZbdZcPnSJXR2nkRV3TY0HXhZNbp68TsMD93CiRNvYd/+/ZiJxCDJchaEwPPQpZckv6Rwe9QeGQqFjAmFf6XIVFj9UUfHc4ODg/UHjxzFlrJy1SQ8HsK53q/Q0NDgbX/3vYFILKakpOwTaRA4zmaxcB0fftC4kv6d9vb+aGzujkWUT5eXlydzmnRF9bZWjudO1e9sROOeF1SAgR+vwOsegCIrbaN3bnWtdAj16nMAnM56m8HMhonoieKShbt7ajKcqYjfUnGqCga9C/80HzL06vNeUxW1tRWA0E1AQ8aHAYOAdGzU5xvV0F2hR7/il1FpaY361TMxcXtGi/GDMVr0fwNLdwDmbBOraAAAAABJRU5ErkJggg=="},79:function(e,t,a){e.exports=a.p+"static/media/accident.28cb46d7.jpg"},80:function(e,t,a){e.exports=a.p+"static/media/broken.1d758b8e.jpg"},81:function(e,t,a){e.exports=a.p+"static/media/traffic.c74fd50f.jpg"},82:function(e,t,a){e.exports=a.p+"static/media/weather.95256a9c.jpg"},86:function(e,t,a){e.exports=a(200)},91:function(e,t,a){},94:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.aa98ba09.chunk.js.map