let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.jpg'){
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myButton.onclick = function setUserName(){
    let myName = prompt("please enter your name here");
    
    if(!myName){
        myName = prompt("please enter your name here");
    } else{
        localStorage.setItem('name', myName);
        myHeading.textContent = "I am getting well with JS, " + myName;
    }

}

if(!localStorage.getItem('name')){
    setUserName();
} else{
    let myStoredName = localStorage.getItem('name');
    myHeading.textContent = "I am getting well with JS, " + myStoredName;
}