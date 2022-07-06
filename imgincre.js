let div1 = document.createElement('div');
let img1 = document.createElement('img');
div1.className = 'div1'
console.log(img1);
img1.src = "2.png";

div1.appendChild(img1);
document.body.append(div1);

let div2 = document.createElement('div');
div2.className = 'div2';



let butn1 = document.createElement('button');
butn1.textContent = "increase button";
butn1.className ="butn1";
butn1.setAttribute("onclick","increase()");
butn1.style.height = '50px';
butn1.style.width = '200px';
butn1.style.backgroundColor ="lightblue"
butn1.style.borderRadius ='20px'


let butn2 = document.createElement('button');
butn2.textContent = "decrease button";
butn2.className ="butn2";
butn2.setAttribute("onclick","decrease()");
butn2.style.height = '50px';
butn2.style.width = '200px';
butn2.style.backgroundColor ="lightblue"
butn2.style.borderRadius ='20px'

div2.append(butn1, butn2);

document.body.append(div2);

function increase(){

   first =  img1.clientWidth;
   img1.style.width = first + 20 + 'px' 

 
}


function decrease(){

    second =  img1.clientWidth;
   img1.style.width = second - 20 + 'px' 

}


