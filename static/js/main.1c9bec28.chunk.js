(this.webpackJsonpdeploy=this.webpackJsonpdeploy||[]).push([[0],{12:function(e,a,i){},13:function(e,a,i){},14:function(e,a,i){"use strict";i.r(a);var t=i(0),c=i.n(t),n=i(2),r=i.n(n),s=i(3),m=i(4),o=i(6),l=i(5),g=(i(12),function(e){return c.a.createElement("div",{className:"card",key:e.id,onClick:function(){return e.handleClick(e.id,e.clicked)}},c.a.createElement("img",{id:e.name,src:e.image}))}),d=[{id:1,name:"aquarius",clicked:!1,image:"/images/aquarius.jpg"},{id:2,name:"aries",clicked:!1,image:"/images/aries.jpg"},{id:3,name:"cancer",clicked:!1,image:"./images/cancer.jpg"},{id:4,name:"capicorn",clicked:!1,image:"./images/capicorn.jpg"},{id:5,name:"gemini",clicked:!1,image:"./images/gemini.jpg"},{id:6,name:"leo",clicked:!1,image:"./images/leo.jpg"},{id:7,name:"libra",clicked:!1,image:"./images/libra.jpg"},{id:8,name:"pisces",clicked:!1,image:"./images/pisces.jpg"},{id:9,name:"sagittarius",clicked:!1,image:"./images/sagittarius.jpg"},{id:10,name:"scorpio",clicked:!1,image:"./images/scorpio.jpg"},{id:11,name:"taurus",clicked:!1,image:"./images/taurus.jpg"},{id:12,name:"virgo",clicked:!1,image:"./images/virgo.jpg"}],u=function(e){Object(o.a)(i,e);var a=Object(l.a)(i);function i(){var e;Object(s.a)(this,i);for(var t=arguments.length,c=new Array(t),n=0;n<t;n++)c[n]=arguments[n];return(e=a.call.apply(a,[this].concat(c))).state={images:d,message:"Click to Begin",score:0,highScore:0},e.handleClick=function(a,i){var t=e.state.images;if(i)return t.forEach((function(e,a){t[a].clicked=!1})),e.setState({image:t.sort((function(){return Math.random()-.5})),message:"You Clicked that one already",score:0});t.forEach((function(e,i){a===e.id&&(t[i].clicked=!0)}));var c=e.state,n=c.highScore,r=c.score,s=r+1,m=r>n?s:n;return e.setState({image:t.sort((function(){return Math.random()-.5})),message:"Good Guess!",score:s,highScore:m})},e}return Object(m.a)(i,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"jumbotron"},c.a.createElement("div",{className:"container text-center"},c.a.createElement("h1",{className:"title"},"Match Game"),c.a.createElement("strong",null,"Click on an image to earn points, but don't click on any, more than once!"),c.a.createElement("p",{className:"score"},c.a.createElement("strong",null,"Score: ",this.state.score," | TopScore: ",this.state.highScore)),c.a.createElement("p",{className:"message"},c.a.createElement("strong",null,this.state.message)))),c.a.createElement("div",{className:"container text-center"},c.a.createElement("div",{className:"row row-cols-4npm"},this.state.images.map((function(a){return c.a.createElement(g,{key:a.id,id:a.id,name:a.name,clicked:a.clicked,image:a.image,handleClick:e.handleClick})})),";")))}}]),i}(t.Component);i(13);r.a.render(c.a.createElement(u,null),document.getElementById("root"))},7:function(e,a,i){e.exports=i(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.1c9bec28.chunk.js.map