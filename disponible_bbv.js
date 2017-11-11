var arrayusuario=[];

function generarResultado(){
	var xmlhttp = new XMLHttpRequest();
    
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("txtHint").innerHTML = this.responseText;
		}
    };
    
    xmlhttp.open("GET", "disponibilidad.php", true);
    xmlhttp.send();
	
}

function primera(){
	alert("1");
	var plogin=document.getElementById("comprobar");
	plogin.addEventListener("click",segunda,false);
	//document.datos_usuario.addEventListener("invalid".... pongo el formulario a la escucha.
	
}

function segunda(){
	var usuario=document.getElementById("login").value;
	alert(usuario);
	
	var esta=true; // cogemos respuesta del PHP
	if (esta!=true){
		alert("NO Está disponible"+ usuario + " como login");					
	} else {
		var ultimo=arrayusuario.length;
		arrayusuario.push(usuario); //es aquí donde lo metemos al final del array
		ultimo=arrayusuario.length;
		alert(ultimo);
		var i;
		
		
		/* No hace falta recargar esta parte de la página de nuevo 
		 
		document.write("<h1>Comprobar la disponibilidad del login</h1>");
		document.write("<form name=\"datos_usuario\"><label for=\"login\"");
		document.write(">Nombre de usuario: </label> <input type=\"text\" id=\"login\"/>");
		document.write("<a id=\"comprobar\" href=\"#\" onclick=\"segunda\"> Comprobar disponibiidad ... </a></form>");*/
		
		var titulo = document.getElementById("posibles");
		var disponibles = document.createTextNode("Logins disponibles");
		titulo.appendChild(disponibles);

		var combo = document.createElement("select");
		
		document.write("Login disponibles: ");
		document.write("<select>");
		
		for (i=0; i<ultimo;i++){
			document.write("<option>");
			var b=i+1;
			document.write("<option>"+b+"-"+arrayusuario[i]+"</option>");
			document.write("</option>");
		}
		document.write("</select>");
			
	}
}
	
window.addEventListener("load",primera,false);
