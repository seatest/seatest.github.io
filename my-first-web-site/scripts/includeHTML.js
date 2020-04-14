function importHTML(id){
  
  const elmnt = document.querySelector('#'+id);

  var file = "myfile.html";

	if (file) {
	  // Make an HTTP request using the attribute value as the file name:
	  xhttp = new XMLHttpRequest();
	  xhttp.open("GET", file, true);
	  xhttp.send();

	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4) {
	      if (this.status == 200) {elmnt.innerHTML = this.responseText;}
	      if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
	    }
	  }
	  return;
	}
}