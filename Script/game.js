var num_of_sq=6;
var colors = genrateColor(num_of_sq);
// ["rgb(255, 0, 0)",

var selected =pickcolor();
var square = document.querySelectorAll(".square");
var display =document.querySelector("#ans");
var tryag = document.querySelector("#alt");
var h1 =document.querySelector("h1");
var reset =document.querySelector("#reset");
var Mode_btn = document.querySelectorAll(".Mode");
//var hard = document.querySelector("#btn-hard");
display.textContent=selected;

for(var i=0;i<square.length;i++){
    square[i].style.backgroundColor=colors[i];
    square[i].addEventListener("click",function(){
    console.log(selected,this.style.backgroundColor);
       if(selected===this.style.backgroundColor)
        { changeColor(selected);
            alt.textContent="Correct";
            h1.style.backgroundColor=selected;
            reset.textContent="Play Again?";
            }
        else{
            this.style.backgroundColor="#232323";
            alt.textContent="Try again";
            
            }
    })
}




for(var i=0;i<Mode_btn.length;i++){
   Mode_btn[i].addEventListener("click",function(){
    Mode_btn[0].classList.remove("selected");
    Mode_btn[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent==="Easy"?num_of_sq=3:num_of_sq=6;
    reset1();
    

   })

}




function reset1(){
    colors = genrateColor(num_of_sq);
    for(var i=0;i<square.length;i++){
        if(colors.length>i){
        square[i].style.display="block";
        square[i].style.backgroundColor=colors[i];
    }
    else
    square[i].style.display="none";
        
        }
    selected=pickcolor();
    display.textContent=selected;
    h1.style.backgroundColor="steelblue";
    reset.textContent="New Colors";
    alt.textContent="";
}


reset.addEventListener("click",function(){
    
    reset1();
    
})





function changeColor(color){
    for(var i=0;i<square.length;i++){
        square[i].style.backgroundColor=color;
    }
}
function pickcolor(){
    var val =Math.floor(Math.random()*colors.length);
    return colors[val];
}
function genrateColor(num){
 var arr=[];
 for(var i=0;i<num;i++){
     var r,g,b;
     r=Math.floor(Math.random()*256);
     g=Math.floor(Math.random()*256);
     b=Math.floor(Math.random()*256);
     var str="rgb("+ r+", "+ g+", "+ b +")";
     arr.push(str); 
  }
 return arr;
}