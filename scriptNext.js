
let tableLine = document.getElementsByClassName('tableLine'),
    tableBox = document.getElementsByClassName('tableBox');

document.getElementsByClassName('table')[0].parentNode.addEventListener(
    'click', function(){
        if(event.target && event.target.matches('.tableBox')){
            alert('Ok');
        }
    }
);

let scrollBtn = document.querySelector('.scrollBtn'),
    scrollBtnTop = document.querySelector('.scrollBtnTop'),
    scrollArrea = document.querySelector('.praktOpenInf');

scrollBtnTop.addEventListener('click', function(){
    let i = scrollArrea.scrollTop;
    let fun = setInterval(() => {
        scrollArrea.scrollTop = i;
        i+=5;
        if(i > scrollArrea.scrollHeight) {clearInterval(fun);}
    }, 5);
});
scrollBtn.addEventListener('click', function(){
    let i = scrollArrea.scrollTop;
    let fun = setInterval(() => {
        scrollArrea.scrollTop = i;
        i-=5;
        if(i < 1) {clearInterval(fun);}
    }, 5);
});

scrollArrea.style.height = 400 + 'px';

let openTextBtn = document.querySelector('.openTextBtn'),
    check = {
        few: false,
        all: false
    },
    regulVar = /\d+/,
    openTextBtnAll = document.querySelector('.openTextBtnAll');

openTextBtn.addEventListener('click', ()=>{
     if(check.few == false){
        scrollArrea.style.height = +scrollArrea.style.height.match(regulVar) + 50 + 'px';
        check.few = true;
        openTextBtn.textContent = 'Close all';
     } else{
        scrollArrea.style.height = +scrollArrea.style.height.match(regulVar) - 50 + 'px';
        check.few = false;
        openTextBtn.textContent = 'Open all';
     }
});

openTextBtnAll.addEventListener('click', ()=>{
    if(check.all == false){
        scrollArrea.style.height = scrollArrea.scrollHeight + 'px';
        check.all = true;
        openTextBtnAll.textContent = 'Close';
    } else{
        scrollArrea.style.height = '400px';
        check.all = false;
        openTextBtnAll.textContent = 'Open + 50px';
    }
});


let time = {
    hour : document.querySelector('.hour'),
    minute : document.querySelector('.minute'),
    second : document.querySelector('.second')
};

let intervalID, timeStart;
let timerOnOff = false, timerStartBtn = document.querySelector('.startTimer');
timerStartBtn.addEventListener('click', ()=>{
    timeStart = Date.parse(new Date());
    if(timerOnOff == false) {
        timerOnOff = true;    
                intervalID = setInterval(() => {
                    time.hour.textContent = ('0' + Math.floor((Date.parse(new Date()) - timeStart)/1000/60/60 % 60)).slice(-2);
                    time.minute.textContent = ('0' + Math.floor((Date.parse(new Date()) - timeStart)/1000/60 % 60)).slice(-2);
                    time.second.textContent = ('0' + Math.floor((Date.parse(new Date()) - timeStart)/1000 % 60)).slice(-2);
                }, 1000);

    } else{
        clearInterval(intervalID);
        time.hour.textContent = '00';
        time.minute.textContent = '00';
        time.second.textContent = '00';
        timerOnOff = false;
    }
});

let pause = document.querySelector('.pause'),
    pauseOff = document.querySelector('.pauseOff'),
    allTimeSecind = 0;

pause.addEventListener('click', ()=>{
    allTimeSecind =  Math.floor((Date.parse(new Date()) - timeStart)) - 1;
    clearInterval(intervalID);
});

pauseOff.addEventListener('click', ()=>{
    timeStart = Math.floor(Date.parse(new Date())) - allTimeSecind;
    intervalID = setInterval(() => {
        time.hour.textContent = ('0' + Math.floor((Date.parse(new Date()) - timeStart)/1000/60/60 % 60)).slice(-2);
        time.minute.textContent = ('0' + Math.floor((Date.parse(new Date()) - timeStart)/1000/60 % 60)).slice(-2);
        time.second.textContent = ('0' + Math.floor((Date.parse(new Date()) - timeStart)/1000 % 60)).slice(-2);
    }, 1000);
});

