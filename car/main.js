
const car = document.getElementById('car');
setInterval(function() {
    car.style.top = car.style.top == '164px' ? '166px' : '164px';
    /* if(car.style.top === '164px'){
        car.style.top = '166px'; 
    } else {
        car.style.top = '164px'; 
    } */
    //car.style.top = i % 2 === '164px' ? '166px' : '164px';
}, 100)
//1000 vaut 1 seconde