import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a={form:document.querySelector(".feedback-form")},m="feedback-form-state";let e={email:"",message:""};l();a.form.addEventListener("input",t=>{e.email=t.currentTarget.elements.email.value.trim(),e.message=t.currentTarget.elements.message.value.trim(),o(m,e)});a.form.addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(m),e.email=e.message="",a.form.reset()});function l(){e=n(m)||e,a.form.elements.email.value=e.email,a.form.elements.message.value=e.message}function o(t,r){const s=JSON.stringify(r);localStorage.setItem(t,s)}function n(t){const r=localStorage.getItem(t);try{return JSON.parse(r)}catch{return r}}
//# sourceMappingURL=2-form.js.map
