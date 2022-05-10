
// const container=document.querySelector(".container")
// const cards=document.querySelector(".cards")
// let pressed=false;
// let startx;


// container.addEventListener("mousedown", (e)=>{
//   pressed=true;
//   startx=e.offsetX-cards.offsetLeft;
// })

// window.addEventListener("mouseup", ()=>{
//   pressed=false;
// })


// container.addEventListener("mousemove", (e)=>{
//   if(!pressed) return;
//   e.preventDefault();
//   cards.style.left=`${e.offsetX - startx}px`;
//   boundcards();
// })


// function boundcards(){
//   const containerRect=container.getBoundingClientRect();
//   const cardsRect=cards.getBoundingClientRect();
//   if(parseInt(cards.style.left) > 0){
//     cards.style.left = 0;
//   }
//   else if(cardsRect.right < containerRect.right){
//     cards.style.left = `-${cardsRect.width - containerRect.width}px`
//     console.log(`-${cardsRect.width - containerRect.width}px`)
//   }
// }
// boundcards()
