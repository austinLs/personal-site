
var allboxes= document.querySelectorAll(".content-box");
allboxes.forEach(elem => {elem.addEventListener("click", boxClicked, false)});
allboxes.forEach(elem => {elem.addEventListener("mouseover", mouseOver, false)});
allboxes.forEach(elem => {elem.addEventListener("mouseout", mouseOut, false)});

const boxIds= ["content1", "content2", "content3", "content4", "content5", "content6"]

function boxClicked(e){
	// if box is clicked
	if(e.target.nodeName == "DIV")
		changeBox(e.target.id);
	// if text is clicked get parent
	else{
		var newTarget = e.target.parentNode;
		changeBox(newTarget.id);
	}
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
	if(selectedBox.className == "content-box hover"){
			selectedBox.className += " clicked-box";
			closeButton(selectedBox);
		}
		addTextContent(boxId);
}

function resetBoxes(){
	boxIds.forEach(Id=> {
		// Reset all boxes
			document.getElementById(Id).style.visibility ="visible";
			document.getElementById(Id).style.position ="relative";
			document.getElementById(Id).className ="content-box";
	});
	const closeButt = document.querySelector(".close-button")
	if(closeButt){
		document.querySelector(".container").removeChild(closeButt);
	}
	document.getElementById("text-content").innerText = "	"
}

function closeButton(){
	const closeButt = document.createElement("BUTTON");
	closeButt.innerText = "X";
	closeButt.className = "close-button";
	closeButt.onclick = resetBoxes;
	document.querySelector(".container").appendChild(closeButt);
}

function mouseOver(e){
	var newTarget;
	if (e.target.nodeName == "DIV"){
		newTarget = e.target;
	}
	else {
		newTarget = e.target.parentNode;
	}
		let selectedBox = document.getElementById(newTarget.id);
		if(selectedBox.className == "content-box"){
			selectedBox.className += " hover";
		}
}

function mouseOut(e){
	var newTarget;
	if (e.target.nodeName == "DIV"){
		newTarget = e.target;
	}
	else {
		newTarget = e.target.parentNode;
	}
		let selectedBox = document.getElementById(newTarget.id);
		if(selectedBox.className == "content-box hover")
			selectedBox.className = "content-box"

}

function addTextContent(boxId){
	let textContent;
	if (document.getElementById("text-content") == undefined){
		textContent = document.createElement("p");
		textContent.id = "text-content";}
	else {
		textContent = document.getElementById("text-content");
	}
	document.getElementById(boxId).appendChild(textContent);
	textContent.innerText = assembleText(boxId);

}

function assembleText(boxId){
	switch (boxId){
		case "content1":
			return "Personal placeholder";
		case "content2":
			return "Education placeholder";
		case "content3":
			return "Technologies placeholder";
		case "content4":
			return "Projects placeholder"
		case "content5":
			return "Goals placeholder";
		case "content6":
			return "Email: austinvdschultz@gmail.com"
			break;
		}
}
