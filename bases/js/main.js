const myButton = document.getElementById('bouton1');

if (myButton != null) { //si l'élément du dom existe (si pas il renvoie null)'
    let toggle = '1';
    myButton.addEventListener('click', function () {
        /* alert('Message') */
        if (toggle === '1') {
            myButton.classList.remove('btn-success');
            myButton.classList.add('btn-warning');
            myButton.textContent = 'Bouton Jaune';
            toggle = '2';
        }
        else if (toggle === '2') {
            myButton.classList.remove('btn-warning');
            myButton.classList.add('btn-success');
            myButton.textContent = 'Bouton Vert';
            toggle = '3';
        } else if (toggle === '3') {
            myButton.classList.remove('btn-success');
            myButton.classList.add('btn-primary');
            myButton.textContent = 'Bouton Bleu';
            toggle = '1';
        }
    })
}

let display = 1;
document.getElementById('bouton2').addEventListener('click', function () {
    if (display === 1) {
        document.getElementsByTagName('table')[0].style = 'display: none;';
        display = 2;
    } else if (display === 2) {
        document.getElementsByTagName('table')[0].style = 'display: display;';
        display = 1;
    }
});


/* 
//Code en JQuery pour supprimer la dernière ligne du tableau avec le bouton 
$('#bouton3').on('click', function () {
    $('table').find('tr').last().remove();
}); 
 */
//Code en javascript normal pour supprimer la dernière ligne du tableau avec le bouton  
document.getElementById('bouton3').addEventListener('click', function () {
    document.getElementsByTagName('tbody')[0].lastElementChild.remove();
    //
});

