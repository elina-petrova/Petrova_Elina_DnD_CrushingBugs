(() => {
	// set up the puzzle pieces and boards

	const puzzleButtons = document.querySelectorAll('#buttonHolder img'),
				puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
				dropZones = document.querySelectorAll('.drop-zone'),
				gameBoard = document.querySelector('.puzzle-board');
	const pieceName =["topLeft", "topRight", "bottomLeft", "bottomRight"];
	function changeImageSet () {
		//change all the image elements on the page -> draggable image sources,

		//change the image elements on the left to match the seletecd puzzle
		pieceName.forEach((piece, index) => {
		puzzlePieces[index].src = `images/${piece + this.dataset.puzzleref}.jpg` ;
		puzzlePieces[index].id =`${piece + this.dataset.puzzleref}`;

	});


		//and set the drop zone background image on the puzzle the user selects
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleref}.jpg)`;
		//debugger;
	}
	function allowDrag(event) {
		console.log('started draggin an image');

		event.dataTransfer.setData("text/plain", this.id);
	}
	function allowDragOver(event) {
		event.preventDefault();
		console.log('dragged over a drop zone');
	}
	function allowDrop(event) {
		//event.prevenDefault();
		console.log('dropped on a drop zone');
		//go and get the dragged element's ID from the data transfer
		let currentImage = event.dataTransfer.getData("text/plain");

		//add that image to whatever drop zone we're dropping out image on
		event.target.appendChild(document.querySelector(`#${currentImage}`));
	}
	//add event handling here




	//click on the bottom buttons to change the puzzle image we're woking with
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));

	puzzlePieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));


	dropZones.forEach(zone => {
		zone.addEventListener('dragover', allowDragOver);
		zone.addEventListener('drop', allowDrop);
	});

	//call the function and pass in the first nav button as a reference
// research call, apply and blind -> look at MDN
	changeImageSet.call(puzzleButtons[0]);
})();
