window.cipher= {

encode : (offsetCode, textToEncode) => {

  let letter =0;
  let cipherText = "";

for (letter=0; letter< textToEncode.length; letter++) {

  let valorCodeAscii = textToEncode.charCodeAt(letter);

  if (valorCodeAscii >= 65 && valorCodeAscii <= 90){

    let valorMayCode = (valorCodeAscii - 65 +  offsetCode) % 26 + 65;
    let mensCodeMay = String.fromCharCode (valorMayCode);
    cipherText+= mensCodeMay;
  }

  else if (valorCodeAscii >=97 && valorCodeAscii <=122) {

    let valorMinCode = (valorCodeAscii - 97 + offsetCode) % 26 + 97;
    let mensCodeMinus = String.fromCharCode (valorMinCode);
    cipherText+= mensCodeMinus;
  }

  else if (valorCodeAscii == 32){

    let space = " ";
    cipherText += space;
  }
 }
 return cipherText;
},


decode : (offsetDecode, textToDecode) => {

let letter=0;
let descipherText = "";

for (letter=0; letter< textToDecode.length; letter++) {

  let valorCodeAscii = textToDecode.charCodeAt(letter);
  if (valorCodeAscii >= 65 && valorCodeAscii <= 90){

    let valorMayCode = (valorCodeAscii + 65 -  offsetDecode) % 26 + 65;
    let mensCodeMay = String.fromCharCode (valorMayCode);
    descipherText+= mensCodeMay;
  }

  else if (valorCodeAscii >=97 && valorCodeAscii <=122) {

    let valorMinCode = (valorCodeAscii -122 - offsetDecode) % 26 + 122;
    let mensCodeMinus = String.fromCharCode (valorMinCode);
    descipherText+= mensCodeMinus;
  }

  else if (valorCodeAscii == 32){

    let space = " ";
    descipherText+=space;
  }
  }
  return descipherText;

 }
};
