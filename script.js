'use strict';

window.addEventListener('dblclick', function (e) {
   const target = e.target;
   const copy = target.innerHTML;
   const titleTwo = document.createElement('h2');
   target.parentElement.append(input);

});

let inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++){
   inputs[i].addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
         const target = e.target;
         if (target.parentElement.tagName == 'P') {
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
      }
   });
}
   