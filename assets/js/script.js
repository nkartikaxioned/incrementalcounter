/* Author: 

*/

const numCounter=document.querySelectorAll('.counter');

numCounter.forEach((element) => {
const speed=50;
const numberIncrement=() =>{
  const targetNum=parseInt(element.dataset.target)
  let start=parseInt(element.innerHTML)
  
  if(start<targetNum) {
   let interval=setInterval(() => {

//earlier code
//    start+=10;

//new code
start += targetNum/speed;

   element.innerText=`${start}`;

   if(start===targetNum) {
    clearInterval(interval)

   }
   },30);
  }
}

numberIncrement();
})























