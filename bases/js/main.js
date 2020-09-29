const myButton = document.getElementById('bouton1');

if(myButton != null) { //si l'élément du dom existe (si pas il renvoie null)'
    let toggle = '1';
    myButton.addEventListener('click', function(){
        /* alert('Message') */
        if(toggle === '1') {
            myButton.classList.remove('btn-success');
            myButton.classList.add('btn-danger');
            myButton.textContent = 'Bouton Rouge';
            toggle = '2';
        } 
        else if (toggle === '2') {
            myButton.classList.remove('btn-danger');
            myButton.classList.add('btn-success');
            myButton.textContent = 'Bouton Vert';
            toggle = '3';
        }else if (toggle === '3') {
            myButton.classList.remove('btn-success');
            myButton.classList.add('btn-primary');
            myButton.textContent = 'Bouton Bleu';
            toggle = '1';
        }
    })
}

let display = 1;
document.getElementById('bouton2').addEventListener('click', function() {
    if(display === 1) {
        document.getElementsByTagName('table')[0].style = 'display: none;';
        display = 2;
    } else if (display === 2) {
        document.getElementsByTagName('table')[0].style = 'display: display;';
        display = 1;
    }
});
/* 
document.getElementsByClassName('btn')[0].addEventListener('click', function() { alert('getElementsByClassName'); } );
//getElementsByClassName renvoie un tableau et on veut le 1er élément donc [0] 

 
console.log('Ceci est un message de test');
console.warn('Ceci est un message de test');
console.error('Ceci est un message de test');  

*/