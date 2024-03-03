
let idarray=JSON.parse(localStorage.getItem("idarray"))
let cart_count=document.getElementById("count")
cart_count.innerText=idarray.length
// let adminData=JSON.parse(localStorage.getItem("AdminData"))||[]
// console.log(adminData)
