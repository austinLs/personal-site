console.log("Script loaded");

var allboxes= document.querySelector(".container");
allboxes.addEventListener("click", boxClicked, false);

const boxIds= ['content1', 'content2', 'content3', 'content4', 'content5', 'content6']

function boxClicked(e){
	changeBox(e.target.id)
}

function changeBox(boxID){
	boxIds.forEach(Id=> {
		if (Id != boxID){
			document.getElementById(Id).style.visibility ='hidden';
			document.getElementById(Id).style.position ='absolute';
		}
	});
	document.getElementById(boxID).className += " ClickedBox"
	console.log(document.getElementById(boxID).className)
}