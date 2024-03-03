let allpro=document.getElementById("AllPro")

allpro.addEventListener("submit",(e)=>{
    e.preventDefault();
   let id=allpro.id_AllPro.value;
   let img=allpro.image_AllPro.value;
   let title=allpro.titl_eAllPro.value;
   let category=allpro.category_AllPro.value;
   let price=allpro.price_AllPro.value;
   let gender=allpro.gender.value
   updateAllPro(id,img,title,category,price,gender)

})
function updateAllPro(id,img,title,category,price,gender){
    
    fetch(`https://upset-red-outfit.cyclic.app/Mens/${id}`,{
        method:'PUT',
        body:JSON.stringify({
          images:[img],
          name:title,
          category:category,
          price:price,
          tag:[gender]
        }
      
        ),
        // 'Authorization':`Bearer_${token}`,
        
        headers:{
            "content-type":"application/json"
        }
    }).then((res)=>{
        return res.json()
        // console.log(res)
    }).then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    });
    alert("Product Updated")

}
