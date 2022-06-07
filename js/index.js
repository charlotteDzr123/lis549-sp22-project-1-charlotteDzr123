function filterObjects(c){
    $(".card").each((k,v)=>{
       if (c == "all"){
           $(v).show()
       }else{
           $(v).hide()
           if ($(v).hasClass(c)){
               $(v).show()
           }
       }
   })
}