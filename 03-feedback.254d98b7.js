function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e};var n={},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),m=Object.prototype.toString,d=Math.max,g=Math.min,v=function(){return c.Date.now()};function b(e,t,r){var n,i,o,a,s,u,f=0,l=!1,c=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var r=n,o=i;return n=i=void 0,f=t,a=e.apply(o,r)}function y(e){return f=e,s=setTimeout(L,t),l?b(e):a}function S(e){var r=e-u;return void 0===u||r>=t||r<0||c&&e-f>=o}function L(){var e=v();if(S(e))return T(e);s=setTimeout(L,function(e){var r=t-(e-u);return c?g(r,o-(e-f)):r}(e))}function T(e){return s=void 0,m&&n?b(e):(n=i=void 0,a)}function j(){var e=v(),r=S(e);if(n=arguments,i=this,u=e,r){if(void 0===s)return y(u);if(c)return s=setTimeout(L,t),b(u)}return void 0===s&&(s=setTimeout(L,t)),a}return t=p(t)||0,h(r)&&(l=!!r.leading,o=(c="maxWait"in r)?d(p(r.maxWait)||0,t):o,m="trailing"in r?!!r.trailing:m),j.cancel=function(){void 0!==s&&clearTimeout(s),f=0,n=u=i=s=void 0},j.flush=function(){return void 0===s?a:T(v())},j}function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=a.test(e);return r||s.test(e)?u(e.slice(2),r?2:8):o.test(e)?NaN:+e}n=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return h(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),b(e,t,{leading:n,maxWait:t,trailing:i})};const y={formRef:document.querySelector(".feedback-form"),emailRef:document.querySelector('input[name="email"]'),messageRef:document.querySelector('textarea[name="message"]')};y.emailRef.setAttribute("required",!0),y.messageRef.setAttribute("required",!0),y.messageRef.setAttribute("minlength",3);new class{init(){this.setFormInputFromLS(this.emailRef,this.messageRef),this.addListeners(this.formRef)}addListeners(e){e.addEventListener("input",n(this.saveFormDataToLS.bind(this),500)),e.addEventListener("submit",this.onSubmit.bind(this))}onSubmit(e){e.preventDefault();const{elements:{email:t,message:r}}=e.currentTarget,n=this.createObj(t.value,r.value);console.log("FormDataObject =>",n),this.formRef.reset(),this.clearLS()}setFormInputFromLS(e,t){const r=this.readFromLS();e.value=r.email,t.value=r.message}saveFormDataToLS(e){const t=this.readFromLS();"INPUT"===e.target.nodeName&&(t.email=e.target.value),"TEXTAREA"===e.target.nodeName&&(t.message=e.target.value),this.saveToLS(t)}readFromLS(){try{const e=JSON.parse(localStorage.getItem(this.LS_KEY));return e||this.createObj("","")}catch(e){return console.log("Error ",e),this.createObj("","")}}clearLS(){this.saveToLS(null)}saveToLS(e){localStorage.setItem(this.LS_KEY,JSON.stringify(e))}createObj(e,t){return{email:e,message:t}}constructor({formRef:t,emailRef:n,messageRef:i}){e(r)(this,"LS_KEY","feedback-form-state"),this.formRef=t,this.emailRef=n,this.messageRef=i}}(y).init();
//# sourceMappingURL=03-feedback.254d98b7.js.map