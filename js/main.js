//Dom Element
const time=document.getElementById('time'),
    greeting=document.getElementById('greeting'),
    name=document.getElementById('name'),
    focus=document.getElementById('focus');

    //Show AmPm
    const showAmPm=true;

    //Show Time
    function showTime(){
        let today=new Date(),
           hour=today.getHours(),
           min=today.getMinutes(),
           sec=today.getSeconds();

    //Show AM or PM
    const amPm= hour >=12 ?'PM' : 'AM';

    //12 houre formate
    hour=hour % 12 || 12;

    //Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>
    ${addZero(sec)}${showAmPm ? amPm : ''}`;

    //Set time Out
    setTimeout(showTime, 1000);

    //Add Zero
    function addZero(num){
        return (parseInt(num, 10) < 10 ? '0' :'') + num;
    }
};

//Set Background and Greeting
function setBgGreet(){
    let today=new Date(),
       hour=today.getHours();

       if( hour < 12){
        //Morning
        document.body.style.backgroundImage= "url('img/morning.jpg')";
        greeting.textContent= 'Good Morning';
       } else if ( hour < 17){
        //Afternoon
        document.body.style.backgroundImage= "url('img/noon.jpg')";
        greeting.textContent= 'Good Afternoon';
       } else if ( hour < 19){
        //Evening
        document.body.style.backgroundImage= "url('img/sunset.jpg')" ;
        greeting.textContent= 'Good Evening'
       } else {
        //Night
        document.body.style.backgroundImage= "url('img/night.jpg')";
        greeting.textContent= 'Good Night';
        document.body.style.color='blue'
       }
};

//Get name
function getName(){
    if(localStorage.getItem('name')===null){
        name.textContent='[Enter Name]'
    } else {
        name.textContent=localStorage.getItem('name')
    }
}

//Set Name
function setName(e){
    if(e.type === 'keypress'){
        //Make sure Enter is press
        if(e.which== 13 || e.keyCode==13){
        localStorage.setItem('name', e.target.innerText);
        name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

//Get Focus
function getFocus(){
    if(localStorage.getItem('focus')===null){
        focus.textContent='[Enter Focus]'
    } else {
        name.textContent=localStorage.getItem('focus')
    }
};

//Set Focus
function setFocus(e){
    if(e.type === 'keypress'){
        //Make sure Enter is press
        if(e.which== 13 || e.keyCode==13){
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//Run Time
showTime();
setBgGreet();
getName();
getFocus();