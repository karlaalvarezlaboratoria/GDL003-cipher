window.cipher= {

encode : (offsetCode, string1) => {

  let i =0;
  let cifrado = "";

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
    cifrado += espacio;
  }
 }
 return cifrado;
},


decode : (offsetDecode, string2) => {

let i=0;
let descifrado = "";

for (i=0; i< string2.length; i++) {

  let valorCodeAscii = string2.charCodeAt(i);
  if (valorCodeAscii >= 65 && valorCodeAscii <= 90){

    let valorMayCode = (valorCodeAscii + 65 -  offsetDecode) % 26 + 65;
    let mensCodeMay = String.fromCharCode (valorMayCode);
    descifrado+= mensCodeMay;
  }

  else if (valorCodeAscii >=97 && valorCodeAscii <=122) {

    let valorMinCode = (valorCodeAscii + 97 - offsetDecode +14) % 26 + 97;
    let mensCodeMinus = String.fromCharCode (valorMinCode);
    descifrado+= mensCodeMinus;
  }

  else if (valorCodeAscii == 32){

    let espacio = " ";
    descifrado+=espacio;
  }
  }
  return descifrado;

 }
};
