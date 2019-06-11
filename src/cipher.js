window.cipher= {

encode : () => {

  let i =0;
  let string1 = document.getElementById ("message").value;
  let offsetCode = parseInt(document.getElementById ("offsetCode").value);
  let cifrado = " ";

for (i=0; i< string1.length; i++) {

  let valorCodeAscii = string1.charCodeAt(i);

  if (valorCodeAscii >= 65 && valorCodeAscii <= 90){

    let valorMayCode = (valorCodeAscii - 65 +  offsetCode) % 26 + 65;
    let mensCodeMay = String.fromCharCode (valorMayCode);
    cifrado+= mensCodeMay;
  }

  else if (valorCodeAscii >=97 && valorCodeAscii <=122) {

    let valorMinCode = (valorCodeAscii - 97 + offsetCode) % 26 + 97;
    let mensCodeMinus = String.fromCharCode (valorMinCode);
    cifrado+= mensCodeMinus;
  }

  else if (valorCodeAscii == 32){

    let espacio = " ";
    cifrado+=espacio;
    console.log ("cifrado");
  }
 }
 return cifrado;
},



decode : () => {

let i=0;
let string2 = document.getElementById("messageCifrado").value;
let offsetDecode = parseInt(document.getElementById ("offsetDecode").value);
let descifrado = " ";

for (i=0; i< string2.length; i++) {

  let valorCodeAscii = string2.charCodeAt(i);
  if (valorCodeAscii >= 65 && valorCodeAscii <= 90){

    let valorMayCode = (valorCodeAscii + 65 -  offsetDecode) % 26 + 65;
    let mensCodeMay = String.fromCharCode (valorMayCode);
    descifrado+= mensCodeMay;
  }

  else if (valorCodeAscii >=97 && valorCodeAscii <=122) {

    let valorMinCode = (valorCodeAscii + 97 - offsetDecode +14 ) % 26 + 97;
    let mensCodeMinus = String.fromCharCode (valorMinCode);
    descifrado+= mensCodeMinus;
  }

  else if (valorCodeAscii == 32){

    let espacio = " ";
    descifrado+=espacio;
  }
  }
  console.log("decode");
  return descifrado;

 }
};

/*Decodificar
let valorMayCode = (valorCodeAscii + 65 - offsetCode) % 26 + 65;
*/
