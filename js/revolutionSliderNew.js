"use strict"

const  mainHeader=document.querySelector(".main-header"),
  btn1=document.querySelector(".btn1"),
  btn2=document.querySelector(".btn2"),
  section1=document.querySelector(".section1"),
  section4Slider=document.querySelector(".section4-slider"),
  section4imgs=document.querySelectorAll(".slider1"),
  section4SliderBtn=document.querySelectorAll(".section4-slider-btn");
  // service3=document.querySelectorAll(".service3"),
  // service3img=document.querySelectorAll(".section3-service-img3"),
  // service3btn=document.querySelectorAll(".section3-btn"),
  // service3paragraph=document.querySelectorAll(".section3-service-paragraph3"),
  // service3title=document.querySelectorAll(".section3-sevice-title3")
window.addEventListener("scroll",()=>{
  mainHeader.classList.toggle("fixed", window.scrollY>0)
})
btn1.addEventListener("click", ()=>{
  section1.style.transition="all 0.6s ease"
  section1.style.transform="translateX(-1300px)"
})
btn2.addEventListener("click", ()=>{
  section1.style.transition="all 0.6s ease"
  section1.style.transform="translateX(0)"
})
// service3.forEach((item,index)=>{
//   item.addEventListener("mouseenter",()=>{
//     item.style.backgroundColor="blue"
//     item.style.transform="rotateY(180deg)"
//     service3paragraph[index].style.transform="rotateY(-180deg)"
//     service3paragraph[index].style.color="white"
//     service3img[index].style.display="none"
//     service3btn[index].style.display="block"
//     service3btn[index].style.cssText="transform:rotateY(-180deg); display:flex; justify-content:center; align-items:center;"
//     service3title[index].style.transform="rotateY(-180deg)"
//     service3title[index].style.color="white"
//     service3title[index].style.marginTop="80px"
//     item.style.transformOrigin="center"
//   })
// })
// service3.forEach((item,index)=>{
//   item.addEventListener("mouseleave",()=>{
//     item.style.backgroundColor="white"
//     item.style.transform="rotateY(0deg)"
//     service3paragraph[index].style.transform="rotateY(0deg)"
//     service3paragraph[index].style.color="#6a7c92"
//     service3img[index].style.display="block"
//     service3btn[index].style.display="none"
//     service3btn[index].style.transform="rotateY(0deg)"
//     service3title[index].style.transform="rotateY(0deg)"
//     service3title[index].style.color="black"
//     service3title[index].style.marginTop="0px"
//     item.style.transformOrigin="center"
//   })
// })
let x=650;
section4SliderBtn.forEach((item, index)=>{
  item.addEventListener("click",()=>{
    section4Slider.style.transform=`translateX(${-x*index}px)`
    if(index==0){
      section4SliderBtn[0].style.backgroundColor="blue"
      section4SliderBtn[1].style.backgroundColor="#bfcadc"
      section4SliderBtn[2].style.backgroundColor="#bfcadc"
      section4SliderBtn[3].style.backgroundColor="#bfcadc"
      section4SliderBtn[4].style.backgroundColor="#bfcadc"
      section4SliderBtn[5].style.backgroundColor="#bfcadc"

    }
    else if(index==1){
      section4SliderBtn[1].style.backgroundColor="blue"
      section4SliderBtn[0].style.backgroundColor="#bfcadc"
      section4SliderBtn[2].style.backgroundColor="#bfcadc"
      section4SliderBtn[3].style.backgroundColor="#bfcadc"
      section4SliderBtn[4].style.backgroundColor="#bfcadc"
      section4SliderBtn[5].style.backgroundColor="#bfcadc"
    }
    else if(index==2){
      section4SliderBtn[2].style.backgroundColor="blue"
      section4SliderBtn[0].style.backgroundColor="#bfcadc"
      section4SliderBtn[1].style.backgroundColor="#bfcadc"
      section4SliderBtn[3].style.backgroundColor="#bfcadc"
      section4SliderBtn[4].style.backgroundColor="#bfcadc"
      section4SliderBtn[5].style.backgroundColor="#bfcadc"
    }
    else if(index==3){
      section4SliderBtn[3].style.backgroundColor="blue"
      section4SliderBtn[0].style.backgroundColor="#bfcadc"
      section4SliderBtn[2].style.backgroundColor="#bfcadc"
      section4SliderBtn[1].style.backgroundColor="#bfcadc"
      section4SliderBtn[4].style.backgroundColor="#bfcadc"
      section4SliderBtn[5].style.backgroundColor="#bfcadc"
    }
    else if(index==4){
      section4SliderBtn[4].style.backgroundColor="blue"
      section4SliderBtn[0].style.backgroundColor="#bfcadc"
      section4SliderBtn[2].style.backgroundColor="#bfcadc"
      section4SliderBtn[3].style.backgroundColor="#bfcadc"
      section4SliderBtn[1].style.backgroundColor="#bfcadc"
      section4SliderBtn[5].style.backgroundColor="#bfcadc"
    }
    else {
      section4SliderBtn[5].style.backgroundColor="blue"
      section4SliderBtn[0].style.backgroundColor="#bfcadc"
      section4SliderBtn[2].style.backgroundColor="#bfcadc"
      section4SliderBtn[3].style.backgroundColor="#bfcadc"
      section4SliderBtn[4].style.backgroundColor="#bfcadc"
      section4SliderBtn[1].style.backgroundColor="#bfcadc"
    }
  })
})
section4imgs.forEach((item, index)=>{
  item.addEventListener("click",()=>{
    section4Slider.style.transform=`translateX(${-x*index}px)`
    if(index==0){
      section4SliderBtn[0].style.backgroundColor="blue"
      section4SliderBtn[1].style.backgroundColor="#bfcadc"
      section4SliderBtn[2].style.backgroundColor="#bfcadc"
      section4SliderBtn[3].style.backgroundColor="#bfcadc"
      section4SliderBtn[4].style.backgroundColor="#bfcadc"
      section4SliderBtn[5].style.backgroundColor="#bfcadc"

    }
    else if(index==1){
      section4SliderBtn[1].style.backgroundColor="blue"
      section4SliderBtn[0].style.backgroundColor="#bfcadc"
      section4SliderBtn[2].style.backgroundColor="#bfcadc"
      section4SliderBtn[3].style.backgroundColor="#bfcadc"
      section4SliderBtn[4].style.backgroundColor="#bfcadc"
      section4SliderBtn[5].style.backgroundColor="#bfcadc"
    }
    else if(index==2){
      section4SliderBtn[2].style.backgroundColor="blue"
      section4SliderBtn[0].style.backgroundColor="#bfcadc"
      section4SliderBtn[1].style.backgroundColor="#bfcadc"
      section4SliderBtn[3].style.backgroundColor="#bfcadc"
      section4SliderBtn[4].style.backgroundColor="#bfcadc"
      section4SliderBtn[5].style.backgroundColor="#bfcadc"
    }
    else if(index==3){
      section4SliderBtn[3].style.backgroundColor="blue"
      section4SliderBtn[0].style.backgroundColor="#bfcadc"
      section4SliderBtn[2].style.backgroundColor="#bfcadc"
      section4SliderBtn[1].style.backgroundColor="#bfcadc"
      section4SliderBtn[4].style.backgroundColor="#bfcadc"
      section4SliderBtn[5].style.backgroundColor="#bfcadc"
    }
    else if(index==4){
      section4SliderBtn[4].style.backgroundColor="blue"
      section4SliderBtn[0].style.backgroundColor="#bfcadc"
      section4SliderBtn[2].style.backgroundColor="#bfcadc"
      section4SliderBtn[3].style.backgroundColor="#bfcadc"
      section4SliderBtn[1].style.backgroundColor="#bfcadc"
      section4SliderBtn[5].style.backgroundColor="#bfcadc"
    }
    else {
      section4SliderBtn[5].style.backgroundColor="blue"
      section4SliderBtn[0].style.backgroundColor="#bfcadc"
      section4SliderBtn[2].style.backgroundColor="#bfcadc"
      section4SliderBtn[3].style.backgroundColor="#bfcadc"
      section4SliderBtn[4].style.backgroundColor="#bfcadc"
      section4SliderBtn[1].style.backgroundColor="#bfcadc"
    }
  })
})

const  searchInput=document.querySelector(".search-input"),
  headerOpenBtn=document.querySelector(".header-open-btn"),
  headerCloseBtn=document.querySelector(".header-close-btn"),
  headerLinks=document.querySelector(".header-links"),
  headerLinkOpenBtn=document.querySelectorAll(".plus-btn"),
  headerLinkCloseBtn=document.querySelectorAll(".minus-btn"),
  headerLinkWrapper=document.querySelectorAll(".header-links ul"),
  section6Form=document.querySelector(".section6-form"),
  headerLinkParentLi=document.querySelectorAll(".necessary");

//-------------------------------------------------------------------------------------------------------------
headerOpenBtn.addEventListener("click",()=>{
  headerLinks.classList.remove("close-header-links")
  headerLinks.classList.add("open-header-links");
  headerOpenBtn.style.display="none"
  headerCloseBtn.style.display="inline-block"
  // headerLinkParentLi.forEach(item=>{
  //   item.style.opacity=1
  // })
})
headerCloseBtn.addEventListener("click", ()=>{
  headerLinks.classList.remove("open-header-links")
  headerLinks.classList.add("close-header-links")
  headerCloseBtn.style.display="none"
  headerOpenBtn.style.display="block"
  // headerLinkParentLi.forEach(item=>{
  //   item.style.opacity=0
  // })
})
//------------------------------------------------------------------------------------------------------------
headerLinkOpenBtn.forEach((item, index)=>{
  item.addEventListener("click",()=>{
    headerLinkWrapper[index].style.display="block"
    headerLinkOpenBtn[index].style.display="none"
    headerLinkCloseBtn[index].style.display="inline-block"
  })
})
headerLinkCloseBtn.forEach((item, index)=>{
  item.addEventListener("click",()=>{
    headerLinkWrapper[index].style.display="none"
    headerLinkCloseBtn[index].style.display="none"
    headerLinkOpenBtn[index].style.display="inline-block"
  })
})
