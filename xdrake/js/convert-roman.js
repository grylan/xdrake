
$("#errore").hide();

var lista = new Array("lol1");

lista[0] = "lol1";

var aggiungi = function add_link() {
	alert("3");    
};

function converti() {
	var numero_romano = "";
	var n = parseInt(document.getElementById("numero").value);

	if (n > 4999 || n < 0) {
		$("#errore").show("slow");
		/*    alert("Numero Errato non compreso tra 0 e 4999!!!! "+
		"\ni numeri romani arrivano fino a 5000 escluso!<br>Reinserisci un numero valido! ");
	*/}
	else {
		$("#errore").hide();
		do {
			if (n > 10 && n < 40) {
				numero_romano = numero_romano + 'X';// document.write("X");
				n = n - 10;
			}
			if (n >= 40 && n < 50) {
				numero_romano = numero_romano + 'XL';//  document.write("XL");
				n = n - 40;
			}
			if (n >= 50 && n < 90) {
				numero_romano = numero_romano + 'L'; // document.write("L");
				n = n - 50;
			}
			if (n >= 90 && n < 100) {
				numero_romano = numero_romano + 'XC';//  document.write("XC");
				n = n - 90;
			}
			if (n >= 100 && n < 400) {
				numero_romano = numero_romano + 'C';// document.write("C");
				n = n - 100;
			}
			if (n >= 400 && n < 500) {
				numero_romano = numero_romano + 'CD';//  document.write("CD");
				n = n - 400;
			}
			if (n >= 500 && n < 900) {
				numero_romano = numero_romano + 'D';//   document.write("D");
				n = n - 500;
			}
			if (n >= 900 && n < 1000) {
				numero_romano = numero_romano + 'CM';  // document.write("CM");
				n = n - 900;
			}
			if (n >= 1000 && n < 10000) {
				numero_romano = numero_romano + 'M'; // document.write("M");
				n = n - 1000;
			}
			switch (n) {
				case 1:
					numero_romano = numero_romano + 'I';// document.write("I");
					break;
				case 2:
					numero_romano = numero_romano + 'II';//document.write("II");
					break;
				case 3:
					numero_romano = numero_romano + 'III';// document.write("III");
					break;
				case 4:
					numero_romano = numero_romano + 'IV';//  document.write("IV");
					break;
				case 5:
					numero_romano = numero_romano + 'V';  //document.write("V");
					break;
				case 6:
					numero_romano = numero_romano + 'VI';  // document.write("VI");
					break;
				case 7:
					numero_romano = numero_romano + 'VII';//  document.write("VII");
					break;
				case 8:
					numero_romano = numero_romano + 'VIII';// document.write("VIII");
					break;
				case 9:
					numero_romano = numero_romano + 'IX'; // document.write("IX");
					break;
				case 10:
					numero_romano = numero_romano + 'X';//  document.write("X");
					break;
			}		
		}
		while (n > 10); 
	}
	$("[id|='num_romano']").text(numero_romano);
}