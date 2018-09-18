
var allboxes= document.querySelectorAll(".content-box");
allboxes.forEach(elem => {elem.addEventListener("click", boxClicked, false)});

const boxIds= ["content1", "content2", "content3", "content4", "content5", "content6"]

function boxClicked(e){
	changeBox(e.target.id)
}

function changeBox(boxId){
	boxIds.forEach(Id=> {
		// Hide all boxes that aren't clicked
		if (Id != boxId){
			document.getElementById(Id).style.visibility ="hidden";
			document.getElementById(Id).style.position ="absolute";
		}
	});
	//Modify class of clicked box to expand
	let selectedBox = document.getElementById(boxId);
	if(selectedBox.className == "content-box"){
			selectedBox.className += " clicked-box"
			closeButton(selectedBox);
		}
}

function resetBoxes(){
	boxIds.forEach(Id=> {
		// Reset all boxes
			document.getElementById(Id).style.visibility ="visible";
			document.getElementById(Id).style.position ="relative";
			document.getElementById(Id).className ="content-box";
	});
	const closeButt = document.querySelector(".close-button")
	if(closeButt)
		document.querySelector(".container").removeChild(closeButt);
}

function closeButton(){
	const closeButt = document.createElement("BUTTON");
	closeButt.innerText = "X";
	closeButt.className = "close-button";
	closeButt.onclick = resetBoxes;
	document.querySelector(".container").appendChild(closeButt);
}