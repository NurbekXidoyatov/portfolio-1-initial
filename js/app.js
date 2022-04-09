"use strict"

const headerSearchicon=document.querySelector(".header-icon"),
  searchInput=document.querySelector(".search-input"),
  closebtn=document.querySelector(".header-search-close"),
  headerOpenBtn=document.querySelector(".header-open-btn"),
  headerCloseBtn=document.querySelector(".header-close-btn"),
  headerLinks=document.querySelector(".header-links"),
  headerLinkOpenBtn=document.querySelectorAll(".plus-btn"),
  headerLinkCloseBtn=document.querySelectorAll(".minus-btn"),
  headerLinkWrapper=document.querySelectorAll(".header-links ul")
console.log(headerLinkWrapper)
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
//---------------------------------------------------------------------------------------------------------------
headerOpenBtn.addEventListener("click",()=>{
  headerLinks.classList.remove("close-header-links")
  headerLinks.classList.add("open-header-links");
  headerOpenBtn.style.display="none"
  headerCloseBtn.style.display="block"
})
headerCloseBtn.addEventListener("click", ()=>{
  headerLinks.classList.remove("open-header-links")
  headerLinks.classList.add("close-header-links")
  headerCloseBtn.style.display="none"
  headerOpenBtn.style.display="block"
})
//-------------------------------------------------------------------------------------------------------------------
headerLinkOpenBtn.forEach((item, index)=>{
  item.addEventListener("click",()=>{
    headerLinkWrapper[index].style.display="block"
    headerLinkWrapper.style.opacity=1
  })
})