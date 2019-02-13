
var b1=document.getElementById("b1");

  var b1=document.getElementById("b1");
    var b2=document.getElementById("b2");
    var b3=document.getElementById("b3");
    var b4=document.getElementById("b4");
    var b5=document.getElementById("b5");
    var b6=document.getElementById("b6");
    var b7=document.getElementById("b7");
    var b8=document.getElementById("b8");
    var b9=document.getElementById("b9");


function getwinner(){ 
    
    if(player<9)
    if(b1.value === b2.value && b1.value === b3.value)
        {
      win(b1);
            console.log("win");
        }
if(b1.value === b4.value && b1.value === b7.value)
        win(b1);
    if(b1.value === b5.value && b1.value === b9.value)
        win(b1);
     if(b2.value === b5.value && b2.value === b8.value)
        win(b2);
     if(b3.value === b6.value && b3.value === b9.value)
        win(b3);
   if(b3.value === b5.value && b3.value === b7.value)
        win(b3);
    if(b4.value===b5.value&& b4.value===b6.value)
        win(b4);
    if(b7.value===b8.value&& b7.value===b9.value)
        win(b7);
    else if(player===9)
        tie();
    
        
    
}
var w,s;
function win(w){
    console.log(w.value);
   s=w.value;
   console.log(s); 
document.getElementById("p").value =w.value + " " + "WINS!!";    
    console.log("hello");
}
function tie(){
  
document.getElementById("p").value ="DRAW!";    
    console.log("hello");
}


var val;

var player=0;
var a;
function sign(a){
    
    if(document.getElementById(a).value !== "X" && document.getElementById(a).value!== "O"){

    
           if(player%2===0){
           document.getElementById(a).value="X";
               
            player+=1;
               document.getElementById("p").value="O Turn";
               
            getwinner();
               
            document.getElementById(a).style.background="rgb(0,0,255,0.6)";
            }
            else
            {
             document.getElementById(a).value="O";
               console.log(document.getElementById(a).value);  document.getElementById("p").value="X Turn";   
            getwinner();
            player+=1;
               
            document.getElementById(a).style.background="rgb(128,0,0,0.6)";
            }
    
}
}
function reset()
{
    b1.value="1";
    b2.value="2";
    b3.value="3";
    b4.value="4";
    b5.value="5";
    b6.value="6";
    b7.value="7";
    b8.value="8";
    b9.value="9";
    document.getElementById("p").value="PLAY";  
    
    b1.style.background="black";
    b2.style.background="black";
    b3.style.background="black";
    b4.style.background="black";
    b5.style.background="black";
    b6.style.background="black";
    b7.style.background="black";
    b8.style.background="black";
    b9.style.background="black";
    
    
    
    
}
    


