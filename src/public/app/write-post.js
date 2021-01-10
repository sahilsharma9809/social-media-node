$(()=>{
     $('#submitbtn').click(submitPost)
      
})

function submitPost(){
     titleText=document.getElementById('titleId').value
     postText=document.getElementById('postBodyId').value
     
 
     if(titleText==""|| postText==""){
          window.alert("empty field")
 
     }
     else {
          obj={
              userId:JSON.parse(window.localStorage.user).id,
              title:titleText,
              body:postText,
         }
       $.post('/api/posts',obj)
 
     }
       
 }