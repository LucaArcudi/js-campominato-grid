// Consegna:
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.



let buttonElement = document.querySelector("a");

buttonElement.addEventListener("click", function(){

        let divSquareParentElement = document.getElementById("game-container");
        divSquareParentElement.classList.remove("d-none");

        divSquareParentElement.innerHTML = "";

        for(let i = 1; i <= 100; i++){

            const divSquareElement = getNewSquare();
    
            divSquareElement.innerHTML = `<span class="m-auto">${i}</span>`;

            

            divSquareElement.addEventListener("click", function (){

                divSquareElement.classList.toggle("square-clicked");
                console.log("");
                console.log(`${"Hai cliccato la cella numero:"} ${i}`);

            })
    
            divSquareParentElement.appendChild(divSquareElement);
    
        }

    
})

function getNewSquare () {

    const divNewSquare = document.createElement("div");

    divNewSquare.classList.add("square", "d-flex");
    
    


    return divNewSquare;

}


