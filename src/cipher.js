//fncion para cifrar el mensaje
let encuentraAscii = (num) =>{
  let encuentra = false;
  for (let i = 97; i <= 122; i++) {
    if (num == i) {
      encuentra = true;
    }
  }
  for (let i = 65; i <= 90; i++) {
    if (num == i) {
    encuentra = true;
    }
  }
  return encuentra;
};
let nextAscii = (value, numero) =>{
  let next = value + numero;
  for (let i = 97; i <= 122; i++) {
    if (i == value && next > 122) {
      next = 96 + (next - 122);
    }
  }
  for (let i = 65; i <= 90; i++) {
    if (i == value && next > 90) {
      next = 64 + (next - 90);
    }
  }
  return String.fromCharCode(next);
};
let backAscii = (value, numero) => {
  let back = value - numero;
  for (let i = 97; i <= 122; i++) {
    if (i == value && back < 97) {
      back = 123 - (97 - back);
    }
  }
  for (let i = 65; i <= 90; i++) {
    if (i == value && back < 65) {
      back = 91 - (65 - back);
    }
  }
  return String.fromCharCode(back);
  };
window.cipher = { 
  encode : (offset,string) => {
    let msgcipher = "";
    let number = parseInt(offset);
    for ( let i = 0; i < string.length; i++) {
      if (encuentraAscii(string.charCodeAt(i))) {
        msgcipher += nextAscii(string.charCodeAt(i), number);
      } else {
          msgcipher += String.fromCharCode(string.charCodeAt(i));
        }
    }
    return msgcipher;
  },
//funcion para descifrar
  decode : (offset,string) => {
    let msgdescipher = "";
    let number = parseInt(offset);
    for (let i = 0; i < string.length; i++) {
      if (encuentraAscii(string.charCodeAt(i))) {
        msgdescipher += backAscii(string.charCodeAt(i), number);
      } else {
          msgdescipher += String.fromCharCode(string.charCodeAt(i));
        }
    }
    return msgdescipher;
    
  }
}
