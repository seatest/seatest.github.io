let myIMG = document.querySelector('#myImg');


myIMG.onclick = function(){
	let mySrc = myIMG.getAttribute('src');
	if(mySrc === 'images/firefox-logo1.png') {myIMG.setAttribute('src', 'images/firefox-logo3.png');}
	else {myIMG.setAttribute('src', 'images/firefox-logo1.png');}
}

// personalize the header

document.querySelector('button').onclick = function(){setUserName();};


function setHeader(name){document.querySelector('h1').textContent = "How are you, " + name + "?";}

function setUserName(){
	let name = prompt("Please type in you name.");
	if(name === null || name === "") setUserName();
	else
	{
		localStorage.setItem('name', name);
		setHeader(name);
	}
}

let name = localStorage.getItem('name');

if(!name){
	setUserName();
} else {
	setHeader(name);
}