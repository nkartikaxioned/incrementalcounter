/* Author: 

*/

const numCounter=document.querySelectorAll('.counter');

numCounter.forEach((element) => {

const numberIncrement=() =>{
  const targetNum=parseInt(element.dataset.target)
  let start=parseInt(element.innerHTML)

  if(start<targetNum) {
   let interval=setInterval(() => {
   start+=10;
   element.innerText=`${start}`;

   if(start===targetNum) {
    clearInterval(interval)

   }
   })
  }
}

numberIncrement();
})























