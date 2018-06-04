//fncion para cifrar el mensaje
let encuentraAscii = (num) => {
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
}
 let nextAscii = (text, numero) => {
  let slide = (numero) % 26;
  if (slide == 0) {
      slide = 1;
  }
  let next = text + slide;
  if (next > 122 && (text >= 97 && text <= 122)) {
      next = 96 + Math.abs((122 - text) - slide);
  }
  if (next > 90 && (text >= 65 && text <= 90)) {
      next = 64 + Math.abs((90 - text) - slide);
  }
  return String.fromCharCode(next);
}
let backAscii = (text, numero) => {
  let slide = (numero) % 26;
  if (slide == 0) {
      slide = 1;
  }
  let back = text - slide;
  if (back < 97 && (text >= 97 && text <= 122)) {
      back = 123 - Math.abs((text - 97) - slide);
  }
  if (back < 65 && (text >= 65 && text <= 90)) {
      back = 91 - Math.abs((text - 65) - slide);
  }
  return String.fromCharCode(back);
}

window.cipher = {
  encode: (offset, string) => {
      let msgcipher = ''
      let number = parseInt(offset)
      cipher.createCipherWithOffset(4)
      for (let i = 0; i < string.length; i++) {
          if (encuentraAscii(string.charCodeAt(i))) {
              msgcipher += nextAscii(string.charCodeAt(i), number)
          } else {
              msgcipher += String.fromCharCode(string.charCodeAt(i))
          }
      }
      return msgcipher
  },
  //funcion para descifrar
  decode: (offset, string) => {
      let msgdescipher = ''
      let number = parseInt(offset)
      for (let i = 0; i < string.length; i++) {
          if (encuentraAscii(string.charCodeAt(i))) {
              msgdescipher += backAscii(string.charCodeAt(i), number)
          } else {
              msgdescipher += String.fromCharCode(string.charCodeAt(i))
          }
      }
      return msgdescipher
  },
  createCipherWithOffset: (offset) => {
    let output = {
            encode: (string)=>{
                return cipher.encode(offset,string)
            },
            decode: (string)=>{
                return cipher.decode(offset,string)
            }
        }

        return output
    }
  }