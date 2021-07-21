(()=>{"use strict";var n={248:(n,r,t)=>{t.d(r,{Z:()=>a});var e=t(645),o=t.n(e)()((function(n){return n[1]}));o.push([n.id,"/*animation*/\r\n@keyframes eyeBrows{\r\n    from{\r\n      transform: translateY(0);\r\n    }\r\n    to{\r\n      transform: translateY(2px);\r\n    }\r\n  }\r\n  @keyframes rightArmLower{\r\n    from{\r\n      transform: translate(0,0) rotate(0);\r\n    }\r\n    to{\r\n      transform: translate(55px,-44px) rotate(10deg)\r\n    }\r\n  }\r\n  \r\n  @keyframes leftArmUpper{\r\n    from{\r\n      transform: translate(0,0) rotate(0);\r\n    }\r\n    to{\r\n      transform: translate(-26px, 37px) rotate(-6deg);\r\n    }\r\n  }\r\n  \r\n  @keyframes leftArmLower{\r\n    from{\r\n      transform: translate(0,0);\r\n    }\r\n    to{\r\n      transform: translate(7px, 0);\r\n    }\r\n  }\r\n  \r\n  @keyframes hand{\r\n    from{\r\n      transform: translate(0,0);\r\n    }\r\n    to{\r\n      transform: translate(10px, 1px)  \r\n    }\r\n  }\r\n\r\n  @keyframes slideTyping {\r\n    100%{\r\n      top: -200px;\r\n    }\r\n  }\r\n\r\n  @keyframes typing {\r\n    100%{\r\n        left: 100%;\r\n    }\r\n  }\r\n  \r\n  @keyframes backgroundMoveRightTop {\r\n    from{\r\n        transform: translate(0);\r\n      }\r\n    to{\r\n        transform: translate(10px, 5px)  \r\n    }\r\n  }\r\n  @keyframes backgroundMoveLeftTop {\r\n    from{\r\n        transform: translate(0,0);\r\n      }\r\n    to{\r\n        transform: translate(-20px,-30px)  \r\n    }\r\n  }\r\n  @keyframes backgroundMoveRight {\r\n    from{\r\n        transform: translateX(0);\r\n      }\r\n    to{\r\n        transform: translateX(20px)  \r\n    }\r\n  }\r\n  @keyframes backgroundMoveLeft {\r\n    from{\r\n        transform: translateX(0);\r\n      }\r\n    to{\r\n        transform: translateX(-20px)  \r\n    }\r\n  }\r\n  \r\n \r\n  \r\n  #eyebrows{\r\n    animation: eyeBrows 1.5s infinite alternate;\r\n  }\r\n  #right-arm-lower{\r\n    animation: rightArmLower 1.5s infinite alternate;\r\n  }\r\n  #left-arm-upper{\r\n    animation: leftArmUpper 1.5s infinite alternate;\r\n  }\r\n  #left-arm-lower{\r\n    animation: leftArmLower 1.5s infinite alternate;\r\n  }\r\n  #hand{\r\n    animation: hand 1.5s infinite alternate;\r\n  }\r\n\r\n  #background-1{\r\n    animation: backgroundMoveRightTop 3s infinite alternate;\r\n  }\r\n  #background-2{\r\n    animation: backgroundMoveLeftTop 3s infinite alternate;\r\n  }\r\n  #background-3{\r\n    animation: backgroundMoveRight 3s infinite alternate;\r\n  }\r\n  #background-4{\r\n    animation: backgroundMoveLeft 3s infinite alternate;\r\n  }\r\n  \r\n  \r\n  .main-wrapper .dynamic-texts{\r\n    padding-left: unset;\r\n    list-style: none;\r\n    height: 6.5rem;\r\n    line-height: 6.5rem;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .dynamic-texts .display-2{\r\n    white-space: nowrap;\r\n  }\r\n  .dynamic-texts li{\r\n    position: relative;\r\n    top: 0;\r\n    animation: slideTyping 8s steps(2) infinite;\r\n  }\r\n  .dynamic-texts li .type-content{\r\n    position: relative;\r\n  }\r\n  .dynamic-texts li .type-content::after{\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #1b1e21;\r\n    border-left: 2px solid #36F1CD;\r\n  }\r\n  .dynamic-name .type-content::after{\r\n    animation: typing 4s steps(30) infinite;\r\n  }\r\n  .dynamic-occupation .type-content::after{\r\n    min-width: 500px;\r\n    animation: typing 4s steps(50) infinite;\r\n  }\r\n\r\n  @media(max-width: 990px){\r\n    .dynamic-texts .dynamic-name .type-content::after{\r\n        height: 60px;\r\n    }\r\n    .dynamic-texts .dynamic-occupation .type-content::after{\r\n        height: 60px;\r\n    }\r\n   \r\n  }\r\n  @media(max-width: 480px){\r\n      \r\n    .dynamic-texts .dynamic-name .type-content::after{\r\n        bottom: 0;\r\n        height: 50px;\r\n    }\r\n    .dynamic-texts .dynamic-occupation .type-content::after{\r\n        bottom: 0;\r\n        height: 50px;\r\n    }\r\n  }\r\n  @media(max-width: 350px){\r\n    .dynamic-texts .dynamic-name .type-content::after{\r\n        bottom: 0;\r\n         height: 50px;\r\n    }\r\n    .dynamic-texts .dynamic-occupation .type-content::after{\r\n        bottom: 0;\r\n        height: 50px;\r\n    }\r\n    .description {\r\n        font-size: 12px; \r\n    }\r\n    .dynamic-texts li .fs-1{\r\n        font-size: 18px !important; \r\n    }\r\n  }",""]);const a=o},771:(n,r,t)=>{t.d(r,{Z:()=>a});var e=t(645),o=t.n(e)()((function(n){return n[1]}));o.push([n.id,"/* GLOBAL STYLES\n-------------------------------------------------- */\n/* Padding below the footer and lighter body text */\n*{\n  margin: 0;\n\tpadding: 0;\n\tborder: 0;\n  border-spacing: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\nbody {\n  margin: 0;\n\tpadding: 0;\n  color: #fafafa;\n  clear:both;\n  outline: 0;\n  font-family: 'Cairo', sans-serif;\n  overflow: auto !important;\n}\n\n#loading{\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  z-index: 10000;\n}\n#loading-image {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n}\n\na{\n  text-decoration: none;\n}\nol, ul{\n  padding: unset;\n}\n.overflow-hidden{\n  overflow: hidden;\n}\n/*-- component styles --*/\n.text-custom-primary{\n  color: #36F1CD;\n}\n.text-custom-secondary{\n  color: #39A0ED;\n}\n.text-custom-teriary{\n  color: #4C6085;\n}\n.font-light{\n  color: #bbb;\n}\n.btn-gradient{\n  background: linear-gradient(160deg,#36F1CD,#39A0ED);\n  color: #32322C;\n}\n.btn-gradient:hover{\n  background: linear-gradient(160deg,#35e7c4,#2883c9);\n  color: #32322C;\n}\n.btn-custom-primary{\n  background-color: #36F1CD;\n}\n.btn-custom-primary-border{\n  background-color: unset;\n  border: 2px solid #36F1CD;\n  color: #36F1CD;\n  transition: .5s;\n}\n.btn-custom-primary-border:hover{\n  background-color: #36F1CD;\n}\n.btn-custom-secondary{\n  background-color: #39A0ED;\n}\n.btn-custom-teritary{\n  background-color: #22939b;\n}\n\n.bg-custom-primary{\n  background-color: #1b1e21;\n}\n.bg-custom-secondary{\n  background-color: #16181b;\n}\n\n\n\n\n/*----- cotainer styles -----*/\n.navbar-dark .brand{\n  font-size: 2rem;\n}\n.navbar-dark .brand:hover{\n  color: #39A0ED;\n}\n.navbar-dark .nav-item .nav-link:hover{\n  color: #36F1CD;\n  transition: ease-in(.5s);\n}\n.navbar-dark .active .nav-link{\n  color: #36F1CD;\n  border-bottom: 2px solid #36F1CD;\n}\n.scrolled{\n  background-color: #171a1d;\n  transition: .5s;\n  box-shadow: 0 10px 20px #000;\n}\n\n.main-wrapper{\n  padding: 8rem 0;\n}\n.description-tw{\n  line-height: 1.5;\n}\n\n/*-- about me --*/\n.aboutme-container{\n  padding: 8rem 0;\n}\n.aboutme-container .headshot-img{\n  max-width: 300px;\n  width: 100%;\n  height: auto;\n  border-radius: 50%;  \n}\n\n.quote-text{\n  color: #aaa;\n}\n.aboutme-wrapper,.skill-wrapper, .work-wrapper, .contact-wrapper,\n .exp-wrapper, .anticipation-wrapper{\n  padding: 5rem 0;\n}\n\n/*-- exp --*/\n.exp-wrapper{\n  padding-bottom: 15rem;\n}\n.exp-wrapper .card{\n  min-height: 350px;\n  background-color: unset;\n  border: 1px solid #39A0ED;\n  border-image-slice: 1;\n  border-width: 5px;\n  border-image-source: linear-gradient(to left, #36F1CD, #39A0ED);\n  box-shadow: 4px 4px 8px #111;\n  transition: .3s;\n}\n.exp-wrapper .card:hover{\n  cursor: pointer;\n  box-shadow: 10px 10px 30px #010101;\n  transform: translateY(-50px);\n}\n\n/*-- skill --*/\n.skill-wrapper .badge{\n  padding: 10px;\n  border: 2px solid #36F1CD;\n  color: #36F1CD;\n}\n.skill-item{\n  position: relative;\n  width: 240px;\n  height: 240px;\n}\n.skill-item .circle .bar{\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  transform: translate(-50%,-20%);\n}\n.skill-item .circle .progress-txt{\n  position: absolute;\n  top: 35%;\n  left: 50%;\n  transform: translate(-50%,-35%);\n  color: #36F1CD;\n  font-size: 28px;\n  font-weight: 700;\n}\n.skill-item .skill-type{\n  position: absolute;\n  bottom: 10%;\n  left: 50%;\n  color: #36F1CD;\n  font-size: 18px;\n  transform: translate(-50%,-10%);\n}\n\n/*-- work --*/\n.work-wrapper .img-content{\n  border-radius: 20px 20px 0 0;\n}\n.work-wrapper .img-content img{\n  width: 100%;\n  height: auto;\n}\n.work-wrapper .card{\n  overflow: hidden;\n  height: 300px;\n  background-color: #16181b;\n  border-radius: 20px;\n  box-shadow: 8px 8px 15px #000;\n}\n.work-wrapper .card .demo{\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n}\n.work-wrapper .card .card-detail{\n  display: none;\n}\n/*-- anticipation --*/\n.anticipation-content{\n  position: relative;\n}\n\n.anticipation-content .vertical-line{\n  position: absolute;\n  z-index: 0;\n  top: 12%;\n  width: 3px;\n  height: 74%;\n  left: 148px;\n  background-color: #36F1CD;\n}\n.anticipation-list{\n  padding: 0 8rem;\n}\n.anticipation-list .item-content{\n  position: relative;\n  padding: 3rem;\n  color: #aaa;\n  background-color: #27282a;\n  border-radius: 10px;\n}\n.anticipation-list .item-content::before{\n  content: '';\n  position: absolute;\n  left: -15px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-top: 15px solid #16181b;\n  border-bottom: 15px solid #16181b;\n  border-right: 15px solid #27282a;\n}\n.anticipation-list h4{\n  color: #eee;\n  font-weight: 700;\n}\n.anticipation-list .dot{\n  margin-right: 1rem;\n  width: 20px;\n  height: 20px;\n  z-index: 2;\n  border-radius: 10px;\n  border: 3px solid #36F1CD;\n  background-color: #16181b;\n}\n\n\n\n/*-- contact --*/\n.contact-wrapper{\n  padding-bottom: 12rem;\n}\n.contact-wrapper .contact-info{\n  margin-left: 1rem;\n}\n.contact-wrapper .hyperlink-icon{\n  margin-right: 1rem;\n  color: #6c757d;\n}\n.contact-wrapper button:hover{\n  border: 1px solid #36F1CD;\n  color: #36F1CD;\n  background-color: unset;\n  transition: .3s;\n}\n.contact-wrapper .hyperlink-icon:hover{\n  color: #36F1CD;\n}\n.contact-wrapper input, .contact-wrapper textarea{\n  border: 1px solid #3a3a3a;\n  background-color: #1b1e21;\n  color: #36F1CD;\n}\n.contact-wrapper input:focus ,.contact-wrapper textarea:focus  {\n  background-color: #32363a;\n  border-color: #36F1CD;\n  color: #36F1CD;\n}\n.contact-form button:hover{\n  color: #010101;\n  background-color: #36F1CD;\n}\n\nfooter{\n  text-align: center;\n  border-top: 1px solid #222;\n}\n\n/* slider setting*/\n.work-slider{\n  width: 100%;\n  height: auto;\n}\n.slick-dots li button:before{\n  color: #36F1CD; \n}\n.slick-dots li.slick-active button:before{\n  color: #36F1CD; \n}\n\n/*---------- scroll trigger ----------*/\n.visible, .invisible {\n  opacity: 0.0;\n  transition: opacity 0.5s ease;\n}\n.visible {\n  opacity: 1.0;\n}\n\n/*---------- break-point ----------*/\n@media(max-width: 990px){\n  .contact-wrapper form{\n    margin-top: 2rem;\n  }\n  .skill-wrapper, .work-wrapper, .contact-wrapper, .exp-wrapper,.aboutme-wrapper, .anticipation-wrapper{\n    padding: 10rem 3rem;\n  }\n  .exp-wrapper .col-lg-4{\n    margin-bottom: 2rem;\n  }\n  .exp-wrapper .card:hover{\n    transform: translateY(0);\n    box-shadow: 10px 10px 30px #010101;\n  }\n}\n\n@media(max-width: 768px){\n  .navbar{\n    width: 100vw;\n  }\n  .navbar .collapse{\n    height: calc(100vh - 40px);\n  }\n  .navbar .navbar-nav li{\n    padding: 1rem;\n    font-size: 24px;\n  }\n  .navbar .btn-select-language{\n    margin-top: 2rem;\n    margin-left: 5rem;\n  }\n  .aboutme-content{\n    margin-top: 2rem;\n  }\n  .skill-wrapper, .work-wrapper, .contact-wrapper, .exp-wrapper,.aboutme-wrapper, .anticipation-wrapper{\n    padding-top: 0rem;\n  }\n  .anticipation-content .vertical-line{\n    height: 72%;\n    left: 20px;\n  }\n  .anticipation-list{\n    padding: 0;\n  }\n  .contact-wrapper .send-btn{\n    width: 100%;\n  }\n}\n\n@media(max-width: 480px){\n  html { font-size: 12px ;} \n  .dynamic-texts .dynamic-occupation .type-content::after{\n    bottom: 0;\n    height: 60px;\n  }\n  .skill-wrapper, .work-wrapper, .contact-wrapper, .exp-wrapper,.aboutme-wrapper, .anticipation-wrapper{\n    padding: 0 1rem;\n  }\n  .anticipation-content .vertical-line{\n    height: 75%;\n    left: 16px;\n  }\n}\n\n@media(max-width: 350px){\n\n}\n",""]);const a=o},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t=n(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(n,t,e){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(e)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);e&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),r.push(c))}},r}},379:n=>{var r=[];function t(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function e(n,e){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=e.base?c[0]+e.base:c[0],p=a[l]||0,d="".concat(l," ").concat(p);a[l]=p+1;var m=t(d),g={css:c[1],media:c[2],sourceMap:c[3]};-1!==m?(r[m].references++,r[m].updater(g)):r.push({identifier:d,updater:o(g,e),references:1}),i.push(d)}return i}function o(n,r){var t=r.domAPI(r);return t.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t.update(n=r)}else t.remove()}}n.exports=function(n,o){var a=e(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);r[s].references--}for(var c=e(n,o),l=0;l<a.length;l++){var p=t(a[l]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}a=c}}},569:n=>{var r={};n.exports=function(n,t){var e=function(n){if(void 0===r[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r),r}},565:(n,r,t)=>{n.exports=function(n){var r=t.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(t){!function(n,r,t){var e=t.css,o=t.media,a=t.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(e,n)}(r,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={id:e,exports:{}};return n[e](a,a.exports,t),a.exports}t.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return t.d(r,{a:r}),r},t.d=(n,r)=>{for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},t.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n=t(379),r=t.n(n),e=t(795),o=t.n(e),a=t(569),i=t.n(a),s=t(565),c=t.n(s),l=t(216),p=t.n(l),d=t(589),m=t.n(d),g=t(248),f={};f.styleTagTransform=m(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=p(),r()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals;var u=t(771),b={};b.styleTagTransform=m(),b.setAttributes=c(),b.insert=i().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=p(),r()(u.Z,b),u.Z&&u.Z.locals&&u.Z.locals,$(document).ready((function(){console.log("i am ready"),$(window).on("load",(function(){$("#loading").hide(),$("body").removeClass("fixed-top"),ScrollTrigger.refresh(),console.log("load success"),lozad().observe()})),$('[lang="en"]').hide(),$("#select_language").click((function(){$('[lang="tw"]').toggle(),$('[lang="en"]').toggle(),$(".collapse").hide(),$("body").removeClass("fixed-top")})),$(".navbar-toggler").click((function(){$(".collapse").toggle(),$("body").toggleClass("fixed-top")})),$(".collapse li").click((function(){$(".collapse").hide(),$("body").removeClass("fixed-top")})),$(document).scroll((function(){const n=$("#navbar");n.toggleClass("scrolled",$(this).scrollTop()>n.height()),function(n){$("#home_block").offset().top;const r=$("#aboutme_block").offset().top-30,t=$("#exp_block").offset().top-100,e=$("#skill_block").offset().top-60,o=$("#work_block").offset().top-60,a=$("#anticipation_block").offset().top-60,i=$("#contact_block").offset().top-80;n<r&&$(".nav-item").removeClass("active"),n>r&&($("#aboutme_item").addClass("active"),$("#aboutme_item").siblings().removeClass("active")),n>t&&($("#exp_item").addClass("active"),$("#exp_item").siblings().removeClass("active")),n>e&&($("#skill_item").addClass("active"),$("#skill_item").siblings().removeClass("active")),n>o&&($("#work_item").addClass("active"),$("#work_item").siblings().removeClass("active")),n>=a&&($("#anticipation_item").addClass("active"),$("#anticipation_item").siblings().removeClass("active")),n>=i&&($("#contact_item").addClass("active"),$("#contact_item").siblings().removeClass("active"))}($(document).scrollTop())})),$(".nav-item").click((function(){$(this).addClass("active"),$(this).siblings().removeClass("active")})),$(".brand").click((function(){$(".nav-item").removeClass("active")})),$(".work-slider").slick({arrows:!1,dots:!0,infinite:!0,speed:300,slidesToShow:1,centerMode:!0,centerPadding:"0px"}),gsap.timeline({scrollTrigger:{trigger:".aboutme-wrapper",start:"top 80%",endTrigger:".exp-wrapper",end:"bottom top",toggleActions:"restart none none reset"}}).from(".aboutme-container",{yPercent:100,duration:1,ease:"back"}).from(".aboutme-container",{opacity:0,duration:.5},0),gsap.timeline({scrollTrigger:{trigger:".exp-wrapper",start:"top 80%",end:"bottom top",toggleActions:"restart none none reset"}}).from(".exp-wrapper .card",{xPercent:100,stagger:.2,duration:2,ease:"back"}).from(".exp-wrapper .card",{opacity:0,stagger:.2,duration:.5},0),gsap.timeline({scrollTrigger:{trigger:".anticipation-wrapper",start:"top 50%",end:"bottom top",toggleActions:"restart none none reset"}}).from(".item-content",{xPercent:100,stagger:.3,duration:2,ease:"power3"}).from(".item-content",{opacity:0,stagger:.2,duration:.5},0);const n=()=>{$(".circle .bar").circleProgress({startAngle:-1.55,size:140,fill:{gradient:["#36F1CD","#268874"]}}).on("circle-animation-progress",(function(n,r,t){})),$("#circle_html").circleProgress({value:.8}),$("#circle_css").circleProgress({value:.72}),$("#circle_sass").circleProgress({value:.65}),$("#circle_javascript").circleProgress({value:.65}),$("#circle_jquery").circleProgress({value:.6}),$("#circle_angular").circleProgress({value:.6}),$("#circle_react").circleProgress({value:.45}),$("#circle_redux").circleProgress({value:.4})},r=()=>{$("#circle_html, #circle_css,#circle_sass,#circle_javascript,#circle_jquery,#circle_angular,#circle_react,#circle_redux ").circleProgress({value:0})};ScrollTrigger.create({trigger:".skill-wrapper",start:"top 50%",end:"bottom top",onEnter:n,onEnterBack:n,onLeave:r,onLeaveBack:r}),gsap.timeline({scrollTrigger:{trigger:".work-wrapper",start:"top 80%",end:"bottom top",toggleActions:"restart none none reset"}}).from(".work-wrapper .card",{yPercent:100,stagger:.2,duration:2,ease:"power3"}).from(".work-wrapper .card",{opacity:0,stagger:.2,duration:.5},0)}))})()})();