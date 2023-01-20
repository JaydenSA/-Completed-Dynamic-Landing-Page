// DOM Elements 
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus'),
    sectionTwo = document.getElementById('sectiontwo');
    
// Adding Zeros 
function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Show Time 
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    minute = today.getMinutes(),
    seconds = today.getSeconds();

    // Set AM or PM 
    const amPM = hour >= 12 ? 'PM' : 'AM';

    // 12hour Format 
    hour = hour % 12 || 12;

    // Output Time 
    time.innerHTML = `${hour}<span>:</span>${addZero(minute)}<span>:</span>${addZero(seconds)}`;

    setTimeout(showTime, 1000);
}

// Set Background and Greeting 
function setBigGreet(){
    let today = new Date(),
        hour = today.getHours();

    if( hour < 12 ){
        document.body.style.backgroundImage = "url('./img/morning.jpg')";
        greeting.textContent = 'Good Morning';
        document.body.style.color = 'black';
        sectionTwo.style.color = 'black';
    }
    else if( hour > 18 ){
        document.body.style.backgroundImage = "url('./img/night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
        sectionTwo.style.color = 'white';
    } else {
        document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
        document.body.style.color = 'black';
        sectionTwo.style.color = 'black';
    }
}

// Get Name 
function getName(){
    if (localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Get Focus 
function getFocus(){
    if (localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Run 
showTime();
setBigGreet();
getName();
getFocus();