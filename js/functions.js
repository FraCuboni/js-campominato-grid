// funzione per generare caselle al click del bottone+aggiungere classe clicked al bottone cliccatosmileButton.addEventListener('click',
// smileButton.addEventListener('click',
//     function(){
//         boxGame.innerHTML='';
//         for(let i=1; i<=100; i++){
//             // genero le caselle    
//             let square= document.createElement('div');
//             square.classList.add('square');
//             square.textContent= i;
//             // le aggiungo a boxGame
//             boxGame.appendChild(square);
//             square.addEventListener('click',
//                 function(){
//                     square.classList.add('clicked');
//                     console.log(i);
//                 }
//             );
//     }
// });

function generateGrid(LastGrid,containerClass){
    for(let i=1; i<=100; i++){
        let square= document.createElement('div');
        square.classList.add(square);
        square.textContent=i;
        containerClass.appendChild(square);
    }
}