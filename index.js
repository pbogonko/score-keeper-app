 
a=b=c=d=0;

     function foul(){
      
        document.getElementById("foul-liv").innerHTML=a++;


     }
     function city_foul(){
     
        document.getElementById("foul-manc").innerHTML=b++;
        
     }
     function city_goal(){
  
        document.getElementById("goal-manc").innerHTML=c++;
     }
     function liv_goal(){
         
        document.getElementById("goal-liv").innerHTML=d++;

     }
     function reset(){
        var elems=document.getElementsByClassName("score");
        for (var i=0;i<elems.length;i++){
            elems[i].innerHTML=0;
           a=b=c=d=0;
        }
     }