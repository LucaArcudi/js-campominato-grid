// Consegna:
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.

let buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", function(){

    for(let i = 1; i <= 100; i++){
        let divSquareElement = document.createElement("div");
        divSquareElement.classList.add("square", "square-width", "text-center", "p-1");
        divSquareElement.innerHTML = (i);
        // console.log(divSquareElement);
    
        let divSquareParentElement = document.querySelector("main.container-fluid div.row");
    
        divSquareParentElement.appendChild(divSquareElement);
    }

})

