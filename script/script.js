/*
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/


/* FUNZIONE DI CREAZIONE DELLE GRIGLIE */
function createGrid(numCells, eleContainer) {
	//Pulisco il container mettendo "vuoto"
	eleContainer.innerHTML = "";
	for (let i = 1; i <= numCells; i++) {
	  eleContainer.innerHTML += `<div class="cell">${i}</div>`;
	}
  }
  
  
  function generateBomb(min, max, numbers)   {
	while (numbers.length < 16) {
	  let minesRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
	  if (!numbers.includes(minesRandom)) {
	numbers.push(minesRandom);
	}};
	console.log(numbers);
  }
  
  /* DEFINIZIONI DELLE VARIBILI */
  
  const eleBtn = document.querySelector('.btn_play');
  let points = 0;
  
  /* FUNZIONE DI ATTIVAZIONE DEL PROGRAMMA */
  eleBtn.addEventListener("click", function () {
	const eleGrid = document.querySelector(".grid");
	const eleLevel = document.querySelector("#level");
	const minesArr = [];
	let value = eleLevel.options[eleLevel.selectedIndex].value;
	console.log(value);
  
	if (value == "100") {
	  eleGrid.classList.remove("grid_easy", "grid_medium", "grid_hard");
	  eleGrid.classList.add("grid_easy");
	  createGrid(100, eleGrid);
	  generateBomb (1, 100, minesArr);
	} else if (value == "81") {
	  eleGrid.classList.remove("grid_easy", "grid_medium", "grid_hard");
	  eleGrid.classList.add("grid_medium");
	  createGrid(81, eleGrid);
	  generateBomb (1, 81, minesArr);
	} else if (value == "49") {
	  eleGrid.classList.remove("grid_easy", "grid_medium", "grid_hard");
	  eleGrid.classList.add("grid_hard");
	  createGrid(49, eleGrid);
	  generateBomb (1, 49, minesArr);
	}
  
	const eleCells = document.querySelectorAll(".cell");
	const userLose = document.querySelector(".user_lose");
	const userPoints = document.querySelector(".score");
  
	for (let i = 0; i < eleCells.length; i++) {
	  const cell = eleCells[i];
	  cell.addEventListener("click", function () {
		console.log("Hai cliccato la cella" + this.innerHTML);
		if (minesArr.includes(i + 1)) {
		  this.classList.toggle("red");
		  userLose.classList.add("user_text");
		} else {
		  this.classList.toggle("blu");
		  points++;
		  userPoints.innerHTML = points;
		}
	  });
	}
  });