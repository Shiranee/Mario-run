const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const lose = document.querySelector('.lose');
const clouds = document.querySelector('.clouds');
const button = document.querySelector('.button');
let counterDisplayElem = document.querySelector('.counter-display');
let counter = 0;
let sec = 2;

updateDisplay();

const jump = function() {
    mario.classList.add('jump');

    setTimeout(function(){

        mario.classList.remove('jump');

    }, 500)
}

const loop = setInterval(
    function(){
        
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
        const cloudsPosition = clouds.offsetLeft;

        console.log(marioPosition)

        if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = "./Images/game-over.png";
            mario.style.width = '75px'
            mario.style.marginLeft = '50px'

            clouds.style.animation = 'none';
            clouds.style.left = `${cloudsPosition}px`;

            lose.style.width = '1000px'
            lose.style.marginLeft = '340px'
            lose.style.bottom = '20%'
            
            button.removeAttribute('hidden');

            clearInterval(loop);
           
        };
        if (pipePosition <= -79){
            counter++
            updateDisplay();

            //tentativa de fazer o jogo ficar mais rapido, porem codigo abaixo faz ficar mais lento.
            // if (counter ++){
            //     for(;sec <= counter; sec ++)
            //     uptime()
            // }
        };
                   
    },10);
document.addEventListener('keydown', jump);

function updateDisplay() {
counterDisplayElem.innerHTML = counter}

function uptime(){
        pipe.style.animationDuration = `${sec}s`;
}

function Tryagain() {
    location.reload(true)
}