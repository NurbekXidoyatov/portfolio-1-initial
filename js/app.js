"use strict"

const headerSearchicon=document.querySelector(".header-icon"),
  searchInput=document.querySelector(".search-input"),
  closebtn=document.querySelector(".header-search-close"),
  headerOpenBtn=document.querySelector(".header-open-btn"),
  headerCloseBtn=document.querySelector(".header-close-btn"),
  headerLinks=document.querySelector(".header-links"),
  headerLinkOpenBtn=document.querySelectorAll(".plus-btn"),
  headerLinkCloseBtn=document.querySelectorAll(".minus-btn"),
  headerLinkWrapper=document.querySelectorAll(".header-links ul"),
  section6Form=document.querySelector(".section6-form"),
  headerLinkParentLi=document.querySelectorAll(".necessary"),
  mainHeader=document.querySelector(".main-header")
console.log(section6Form)
headerSearchicon.addEventListener("click",()=>{
  searchInput.style.opacity=1
  headerSearchicon.style.display="none"
  closebtn.style.display="block"
})
closebtn.addEventListener("click", ()=>{
  searchInput.style.opacity=0
  headerSearchicon.style.display="block"
  closebtn.style.display="none"
})
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
//----------------------------------------------------------------------------------------------------
window.addEventListener("scroll",()=>{
  mainHeader.classList.toggle("fixed", window.scrollY>0)
})
//-------------------------------------------------------------------------------------------------------------
section6Form.addEventListener("submit",(e)=>{
  e.preventDefault()
  const name=document.querySelector("#name").value,
      email=document.querySelector("#email").value,
      number=document.querySelector("#number").value,
      subject=document.querySelector("#subject").value,
      text=document.querySelector("#section6-text").value
  section6Form.reset()
  fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify({
      name:name,
      number:number,
      email:email,
      subject:subject,
      text:text
    })
  })
  .then(res=>res.json())
  .then(data=>console.log(data))
})