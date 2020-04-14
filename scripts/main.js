let myImg = document.querySelector("#myImg");

let intID;
let rotating = false;

myImg.onclick = function()
{
	if(!rotating)
	{
		rotating = true;
		intID = setInterval(rotate, 100);
	}

	else
	{
		rotating = false;
		clearInterval(intID);
		myImg.setAttribute('src', "images/firefox-logo1.png");
	}
}

function rotate()
{
	let mySrc = myImg.getAttribute('src');

	if(mySrc === "images/firefox-logo1.png") {myImg.setAttribute('src', "images/firefox-logo2.png");}
	if(mySrc === "images/firefox-logo2.png") {myImg.setAttribute('src', "images/firefox-logo3.png");}
	if(mySrc === "images/firefox-logo3.png") {myImg.setAttribute('src', "images/firefox-logo4.png");}
	if(mySrc === "images/firefox-logo4.png") {myImg.setAttribute('src', "images/firefox-logo1.png");}
}

// Adding user name
theButton = document.querySelector('button');

function setHeader(name){document.querySelector('h1').textContent = name + ", нажми на лисичку :)";}
theButton.onclick = function(){setUserName();};

function setUserName()
{
	let newName = prompt("ВВЕДИ СВОЁ ИМЯ");
	if(newName == null || newName == 'null' || newName == '')
	{
		setUserName();
  }	else {
		localStorage.setItem('name', newName);
    setHeader(newName);
	}
	
}

let oldName = localStorage.getItem('name');

if(oldName == null || oldName == 'null' || oldName == ''){
	setUserName();
} else {
	setHeader(oldName);
}


