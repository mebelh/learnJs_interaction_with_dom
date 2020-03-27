let lineButtons = document.querySelector('.lineButtons'),
    startButton = document.querySelector('.startButt'),
    createButton = document.querySelector('.button'),
    copyButtons = [];

startButton.addEventListener('click', startFunc);
let pos = 0;
function startFunc(){
    copyButtons[pos] = createButton.cloneNode(false);
    lineButtons.appendChild(copyButtons[pos]);
        setTimeout(function(){
            lineButtons.lastChild.style.opacity = 1; 
        }, 100);

    pos++;
    
}
lineButtons.addEventListener('click', copiFunc);

function copiFunc(){
    if(event.target && event.target.matches('.button')){
        lineButtons.removeChild(lineButtons.lastChild);
    }
}

