const car = document.querySelector('#car');
/* 
const carStyle = getComputedStyle(car); 
//=> récupère les infos css du div car
const carStyleTop = carStyle.top; 
//=> renvoie la valeur de top (genre '164px') 
*/
let valeurTop = 130;
let valeurLeft = 10;

setInterval(function() {
    car.style.top = car.style.top == valeurTop +'px' ? valeurTop + 1 +'px' : valeurTop +'px';
    /* if(car.style.top === '164px'){
        car.style.top = '166px'; 
    } else {
        car.style.top = '164px'; 
    } */
}, 100) //1000 vaut 1 seconde
//let i = 0; (hors du setInterval)
//car.style.top = i % 2 === 0 ? '166px' : '164px';
//i++;


document.addEventListener('keydown', function(touche) {
    switch (touche.code) {
        case 'ArrowUp':
            car.style.top = valeurTop-- +'px';
            break;
        case 'ArrowDown':
            car.style.top = valeurTop++ +'px';
            break;
        case 'ArrowRight':
            car.style.left = valeurLeft++ +'px';
            /* car.style.left = (valeurLeft = valeurLeft+10) +'px'; */
            break;
        case 'ArrowLeft':
            car.style.left = valeurLeft-- +'px';
            /* car.style.left = (valeurLeft = valeurLeft-10) +'px'; */
            break;
    }
});


/* Solution Hugo:
let x = 0;
let y = 0;
document.addEventListener('keydown', function(event){
    if(event.code == 'ArrowRight'){
        x += 10;
    } else if(event.code == 'ArrowLeft') {
        x -= 10;
    } else if(event.code == 'ArrowDown') {
        y += 10;
    } else if(event.code == 'ArrowUp') {
        y -= 10;
    }
    car.style.transform = `translate(${x}px, ${y}px)`;
});
 */