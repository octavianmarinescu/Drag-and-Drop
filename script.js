const redCircle = document.getElementById('red-circle');
const redSqr = document.getElementById('red-sqr');

const blueCircle = document.getElementById('blue-circle');
const blueSqr = document.getElementById('blue-sqr');

redCircle.addEventListener("dragstart", dragStartRed);
redCircle.addEventListener("dragend", dragEnd);
blueCircle.addEventListener("dragstart", dragStartBlue);
blueCircle.addEventListener("dragend", dragEnd);



function dragStartRed() {
	event.dataTransfer.setData("text1", event.target.id);
	if (!redSqr.contains(redCircle)) {
		setTimeout(() => this.className = 'invisible', 0);
	}
}

function dragEnd() {
	this.classList.remove('invisible');
}

function dragStartBlue() {
	event.dataTransfer.setData("text2", event.target.id);
	if (!blueSqr.contains(blueCircle)) {
		setTimeout(() => this.className = 'invisible', 0);
	}
    	
}

redSqr.addEventListener("dragover", dragOver);
redSqr.addEventListener("drop", dragDropRed);

blueSqr.addEventListener("dragover", dragOver);
blueSqr.addEventListener("drop", dragDropBlue);

function dragOver(e) {
    e.preventDefault();
}

function dragDropRed(e) {
	var data = event.dataTransfer.getData("text1");
	event.target.appendChild(document.getElementById(data));
	this.classList.add("centered");
	redCircle.setAttribute('draggable', 'false');
}

function dragDropBlue(e) {
	var data = event.dataTransfer.getData("text2");
	event.target.appendChild(document.getElementById(data));
	this.classList.add("centered");
	blueCircle.setAttribute('draggable', 'false');
}