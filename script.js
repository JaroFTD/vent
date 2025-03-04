'use strict';

let d, e, f, g, H, i;

let x;
let Lo;
let Aop;

let sumX = document.querySelector('[data-sum-x]');
let sumLo = document.querySelector('[data-sumLo]');
let sumAop = document.querySelector('[data-sumAop]');

// window.addEventListener('dblclick', function (e) {
//    const target = e.target;
//    const copy = target.innerHTML;
//    const titleTwo = document.createElement('h2');
//    target.parentElement.append(input);

// });

let inputs = document.querySelectorAll('input');

for (let elem = 0; elem < inputs.length; elem++){
   inputs[elem].addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
         const target = event.target;
         if (target.parentElement.tagName == 'P' || target.parentElement.tagName == 'LABEL') {
            let p = target.parentElement.textContent;
            p += this.value;
            target.parentElement.textContent = p;
            this.remove();
         } else {
            const titleTwo = document.createElement('h2');
            titleTwo.textContent = this.value;
            this.parentElement.append(titleTwo);
            this.remove();
         }
         if (this.hasAttribute('data-length-room')) {
            d = this.value;
         }
         if (this.hasAttribute('data-width-room')) {
            e = this.value;
            allValue('[data-width-room]', e);
         }
         if (this.hasAttribute('data-height-room')) {
            f = this.value;
            allValue('[data-height-room]', f);
         }
         if (this.hasAttribute('data-сalculated-air')) {
            g = this.value;
            allValue('[data-сalculated-air]', g);
         }
         if (this.hasAttribute('data-degree-internal')) {
            H = this.value;
         }
         if (this.hasAttribute('data-height-working')) {
            i = this.value;
            allValue('[data-height-working]', i);
         }

         if (e && f && i) {
            e = e.split(',').join('.');
            f = f.split(',').join('.');
            i = i.split(',').join('.');
            x = Number(e) + Number(f) - Number(i);
            sumX.textContent = x;
         }

         if (g) {
            g = g.split(',').join('.');

            Lo = Number(g) / 1;
            sumLo.textContent = Lo;

            Aop = g / (1.5 * 3600);
            sumAop.textContent = Aop.toFixed(2);
         }
      }
   });
}

function allValue(item, value) {
   let items = document.querySelectorAll(item);
   for (let i = 0; i < items.length; i++){
      const span = document.createElement('span');
      span.textContent = value;
      items[i].parentElement.append(span);
      items[i].remove();
   }
}