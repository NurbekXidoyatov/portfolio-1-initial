"use strict"

const headerSearchicon=document.querySelector(".header-icon"),
  searchInput=document.querySelector(".search-input"),
  closebtn=document.querySelector(".fa-xmark")
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