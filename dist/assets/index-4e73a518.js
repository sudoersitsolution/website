(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();console.log("d");const b=()=>{const r=document.querySelectorAll("#theme-toggle"),n=localStorage.getItem("theme");n&&document.body.classList.add(n);const o=()=>{document.body.classList.toggle("light-mode"),document.body.classList.contains("light-mode")?localStorage.setItem("theme","light-mode"):(localStorage.removeItem("theme"),document.body.removeAttribute("class"))};r.forEach(t=>t.addEventListener("click",o))};b();const f=()=>{const r=document.querySelector(".header__bars"),n=document.querySelector(".mobile-nav"),o=document.querySelectorAll(".mobile-nav__link");let t=!1;r.addEventListener("click",()=>{t=!t,t?(n.style.display="flex",document.body.style.overflowY="hidden"):(n.style.display="none",document.body.style.overflowY="auto")}),o.forEach(e=>{e.addEventListener("click",()=>{t=!1,n.style.display="none",document.body.style.overflowY="auto"})})};f();document.addEventListener("DOMContentLoaded",()=>{(()=>{const n=[{title:"Chronic Obstructive Pulmonary Disease Prediction System",description:"to-do description"},{title:"Liver Cirrhosis Prediction System using Random Forest",description:"to-do description"},{title:"Multiple Disease Prediction System using Machine Learning",description:"to-do description"},{title:"Stroke Prediction System using Linear Regression",description:"to-do description"},{title:"Heart Failure Prediction System",description:"to-do description"},{title:"Pneumonia Detection using Chest X-Ray",description:"to-do description"},{title:"Parkinson’s Detection System using Python",description:"to-do description"},{title:"Breast Cancer Prediction using Naive Bayes",description:"to-do description"},{title:"Depression Detection System using Python",description:"to-do description"},{title:"Credit Card Fraud Detection System Python",description:"to-do description"},{title:"Fake Product Review Monitoring and Removal for Genuine Ratings",description:"to-do description"},{title:"Movie Success Prediction System using Python",description:"to-do description"},{title:"Predicting House Price Using Decision Tree",description:"to-do description"},{title:"Cryptocurrency Price Prediction Using Machine Learning Python",description:"to-do description"},{title:"TV Show Popularity Analysis Using Data Mining",description:"to-do description"},{title:"Music Genres Classification using KNN System",description:"to-do description"},{title:"Personality Prediction System Through CV Analysis",description:"to-do description"},{title:"Malware Analysis and Detection Using Machine Learning Algorithm",description:"to-do description"},{title:"SMS Spam Detection using Machine Learning",description:"to-do description"},{title:"Sleep Disorder Prediction Using Machine Learning",description:"to-do description"},{title:"Drug Addiction Prediction Using Machine Learning",description:"to-do description"},{title:"Obesity Risk Prediction using Machine Learning",description:"to-do description"},{title:"Health Insurance Price Prediction using Machine Learning",description:"to-do description"},{title:"Smart Diabetes Prediction System Using Machine Learning Algorithms",description:"to-do description"},{title:"Customer Churn Prediction using Machine Learning",description:"to-do description"},{title:"Real Estate Price Prediction using Machine Learning",description:"to-do description"},{title:"Bitcoin Price Prediction using Machine Learning",description:"to-do description"},{title:"Sleep Time Prediction",description:"to-do description"}],o=5;let t=1;const e=Math.ceil(n.length/o),i=()=>{const s=(t-1)*o,m=s+o,a=n.slice(s,m);let p="";a.forEach((c,d)=>{p+=`
      <div class="project__item-wrapper">
        <div class="project__item">
          <p>${s+d+1}. ${c.title}</p> <span class="project__item-plus">+</span>  
        </div>
        <p class="project__item-description">${c.description}</p>
      </div>
      `});const u=`
<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.017 1.995c5.517 0 9.997 4.48 9.997 9.998s-4.48 9.998-9.997 9.998c-5.518 0-9.998-4.48-9.998-9.998s4.48-9.998 9.998-9.998zm0 1.5c-4.69 0-8.498 3.808-8.498 8.498s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.498-8.497-8.498zm-1.528 4.715s-1.502 1.505-3.255 3.259c-.147.147-.22.339-.22.531s.073.383.22.53c1.753 1.754 3.254 3.258 3.254 3.258.145.145.335.217.526.217.192-.001.384-.074.531-.221.292-.293.294-.766.003-1.057l-1.977-1.977h6.693c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-6.693l1.978-1.979c.29-.289.287-.762-.006-1.054-.147-.147-.339-.221-.53-.222-.19 0-.38.071-.524.215z" fill-rule="nonzero"/></svg>
    `,g=`
    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z" fill-rule="nonzero"/></svg>

    `,h=document.querySelector(".project__list-ai");h.innerHTML=p;const y=`
      <button ${t===1?"disabled":""} id="prev">${u}</button>
      <span>Page ${t} of ${e}</span>
      <button ${t===e?"disabled":""} id="next">${g}</button>
    `,P=document.querySelector(".pagination-ai");P.innerHTML=y,document.querySelectorAll(".project__item").forEach(c=>{c.addEventListener("click",function(){const d=this.nextElementSibling,v=this.children[1];v.textContent=="+"?v.textContent="-":v.textContent="+",d.classList.toggle("active")})}),document.getElementById("prev").addEventListener("click",()=>{t>1&&(t--,i())}),document.getElementById("next").addEventListener("click",()=>{t<e&&(t++,i())})};i()})()});const L=()=>{const r=[{title:"exam seating arrangement system",description:"to-do description"},{title:"vu alumni-student connectbook",description:"to-do description"},{title:"career counseling platform",description:"to-do description"},{title:"mcq based test system for exam prepration",description:"to-do description"},{title:"recipe finder application",description:"to-do description"},{title:"Secure Voting System Using Blockchain",description:"to-do description"},{title:"personalized nutrition and fitness management system",description:"to-do description"},{title:"online tutor finding application",description:"to-do description"},{title:"health tracker monitor and record health data",description:"to-do description"},{title:"Online book exchange platform ",description:"to-do description"},{title:"Online cosmetics store ",description:"to-do description"},{title:"Online tourist guide",description:"to-do description"},{title:"Expense tracker application",description:"to-do description"},{title:"Stationary shop management system",description:"to-do description"},{title:"Patient Record Management system",description:"to-do description"},{title:"Advance attendence using QR code",description:"to-do description"},{title:"Personality Prediction System Through CV Analysis",description:"to-do description"},{title:"Malware Analysis and Detection Using Machine Learning Algorithm",description:"to-do description"},{title:"SMS Spam Detection using Machine Learning",description:"to-do description"},{title:"Sleep Disorder Prediction Using Machine Learning",description:"to-do description"},{title:"Drug Addiction Prediction Using Machine Learning",description:"to-do description"},{title:"Obesity Risk Prediction using Machine Learning",description:"to-do description"},{title:"Health Insurance Price Prediction using Machine Learning",description:"to-do description"},{title:"Smart Diabetes Prediction System Using Machine Learning Algorithms",description:"to-do description"},{title:"Customer Churn Prediction using Machine Learning",description:"to-do description"},{title:"Real Estate Price Prediction using Machine Learning",description:"to-do description"},{title:"Bitcoin Price Prediction using Machine Learning",description:"to-do description"},{title:"Sleep Time Prediction",description:"to-do description"}],n=5;let o=1;const t=Math.ceil(r.length/n),e=()=>{const i=(o-1)*n,s=i+n,m=r.slice(i,s);let a="";m.forEach((l,c)=>{a+=`
      <div class="project__item-wrapper">
        <div class="project__item-web">
          <p>${i+c+1}. ${l.title}</p> <span class="project__item-plus">+</span>  
        </div>
          <p class="project__item-description">${l.description}</p>
        </div>
      `});const p=`
<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.017 1.995c5.517 0 9.997 4.48 9.997 9.998s-4.48 9.998-9.997 9.998c-5.518 0-9.998-4.48-9.998-9.998s4.48-9.998 9.998-9.998zm0 1.5c-4.69 0-8.498 3.808-8.498 8.498s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.498-8.497-8.498zm-1.528 4.715s-1.502 1.505-3.255 3.259c-.147.147-.22.339-.22.531s.073.383.22.53c1.753 1.754 3.254 3.258 3.254 3.258.145.145.335.217.526.217.192-.001.384-.074.531-.221.292-.293.294-.766.003-1.057l-1.977-1.977h6.693c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-6.693l1.978-1.979c.29-.289.287-.762-.006-1.054-.147-.147-.339-.221-.53-.222-.19 0-.38.071-.524.215z" fill-rule="nonzero"/></svg>
    `,u=`
    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z" fill-rule="nonzero"/></svg>

    `,g=document.querySelector(".project__list-web");g.innerHTML=a;const h=`
      <button ${o===1?"disabled":""} id="prev-web">${p}</button>
      <span>Page ${o} of ${t}</span>
      <button ${o===t?"disabled":""} id="next-web" >${u}</button>
    `,y=document.querySelector(".pagination-web");y.innerHTML=h,document.querySelectorAll(".project__item-web").forEach(l=>{l.addEventListener("click",function(){const c=this.nextElementSibling,d=this.children[1];d.textContent=="+"?d.textContent="-":d.textContent="+",c.classList.toggle("active")})}),document.getElementById("prev-web").addEventListener("click",()=>{o>1&&(o--,e())}),document.getElementById("next-web").addEventListener("click",()=>{o<t&&(o++,e())})};e()};L();
