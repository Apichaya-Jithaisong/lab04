function ClickBox(event) {    
    press = !press
    if(press)   
    {
        Box1.classList.add('selected');
        Box2.classList.add('selected');
        Box3.classList.add('selected');
        Box4.classList.add('selected');
    }   
    else  { 
        Box1.classList.remove('selected');
        Box2.classList.remove('selected');
        Box3.classList.remove('selected');
        Box4.classList.remove('selected');
    }      
}

let press = false

const Box1 = document.querySelector('#box1');
const Box2 = document.querySelector('#box2');
const Box3 = document.querySelector('#box3');
const Box4 = document.querySelector('#box4');
Box1.addEventListener('click', ClickBox);
Box2.addEventListener('click', ClickBox);
Box3.addEventListener('click', ClickBox);
Box4.addEventListener('click', ClickBox);