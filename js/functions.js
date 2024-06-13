// funzione per generare caselle al click del bottone+aggiungere classe clicked al bottone cliccato

function generateGrid(LastGrid, containerClass){
    // creo il ciclo per creare le x caselle all'interno dell'elemento containerClass
    for(let i = 1; i <= LastGrid; i++){
        let square= document.createElement('div');
        square.classList.add('square');
        square.textContent=i;
        containerClass.appendChild(square);

        // aggiungo classe .clicked a ogni 
        square.addEventListener('click',
            function(){
                square.classList.add('clicked')
                console.log(i);
            }
        )
    }
}