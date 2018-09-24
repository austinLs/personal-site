
var allboxes= document.querySelectorAll(".content-box");
allboxes.forEach(elem => {elem.addEventListener("click", changeBox, false)});
allboxes.forEach(elem => {elem.addEventListener("mouseover", mouseOver, false)});
allboxes.forEach(elem => {elem.addEventListener("mouseout", mouseOut, false)});

const boxIds= ["content1", "content2", "content3", "content4", "content5", "content6"]

//Hide all content paragraphs
toggleElements("p","visibility","hidden");

function getMainDiv(e){
	// if box is clicked
	if(e.target.nodeName == "DIV")
		return e.target.id
	// if child is clicked get parent
	else
		return e.target.parentNode.id;
}

function changeBox(e){
	var newTarget = getMainDiv(e)
	boxIds.forEach(Id=> {
		// Hide all boxes that aren't clicked
		if (Id != newTarget){
			document.getElementById(Id).style.visibility ="hidden";
			document.getElementById(Id).style.position ="absolute";
		}
	});
	//Modify class of clicked box to expand
	let selectedBox = document.getElementById(newTarget);
	//Prevent duplicate class
	if(selectedBox.className == "content-box hover"){
			selectedBox.className += " clicked-box";
			closeButton(selectedBox);
		}
		//Slice id to get matching border and hide
		toggleElements("img","visibility","hidden");
		toggleElements("h1","padding-top","10px");
		addTextContent(newTarget);
}

function resetBoxes(){
	boxIds.forEach(Id=> {
		// Reset all boxes
			document.getElementById(Id).style.visibility = "visible";
			document.getElementById(Id).style.position = "relative";
			document.getElementById(Id).className = "content-box";
	});
	const closeButt = document.querySelector(".close-button")
	if(closeButt){
		document.querySelector(".container").removeChild(closeButt);
	}
	toggleElements("img","visibility","visible");
	toggleElements("h1","padding-top","105px");
	toggleElements("p","visibility","hidden")
}

function toggleElements(element, property, status){
	var elements =document.getElementsByTagName(element)
	for (var i=0; i< elements.length; i++){
		elements[i].style[property] = status;
	}
}

function closeButton(){
	const closeButt = document.createElement("BUTTON");
	closeButt.innerText = "X";
	closeButt.className = "close-button";
	closeButt.onclick = resetBoxes;
	document.querySelector(".container").appendChild(closeButt);
}

function mouseOver(e){
	var newTarget = getMainDiv(e)
		let selectedBox = document.getElementById(newTarget);
		if(selectedBox.className == "content-box"){
			selectedBox.className += " hover";
		}
		document.getElementById("border"+newTarget.slice(7)).style.transform +="rotate(90deg)"
}

function mouseOut(e){
	var newTarget = getMainDiv(e)
		let selectedBox = document.getElementById(newTarget);
		if(selectedBox.className == "content-box hover"){
			selectedBox.className = "content-box"
			}
			document.getElementById("border"+newTarget.slice(7)).style.transform ="rotate(0deg)"
}

function addTextContent(boxId){
	document.getElementById("paragraph"+boxId.slice(7)).style.visibility="visible";
}
