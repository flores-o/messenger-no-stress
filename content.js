console.log("Am I running this script");

$('document').ready(function(){
 console.log("document loaded")
 if ($("[aria-label=Conversations]"))
     console.log("We can select the element that has aria-label=Conversations");
 else
     console.log("We cannot select the elem that has aria-label=Conversations");
 try
 {
     console.log($("[aria-label=Conversations]").css('visibility', 'hidden'))
     
 }
 catch(err)
 {  
     console.log("trying to set the css property threw an error")
     console.log(err)
 }
 if (($("[aria-label=Conversations]").css('visibility')) == 'hidden')
     console.log("Our extension changed the css")
 else
     console.log("Our extension did not change the css")

 });


