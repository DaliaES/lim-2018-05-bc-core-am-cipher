
describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });   

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offsett 33',()=>{
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG")
    });

    it('debería retornar "BCDEFGHIJKLMNOPQRSTUVWXYZA" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 26',()=>{
      assert.equal(cipher.encode(26,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "BCDEFGHIJKLMNOPQRSTUVWXYZA")
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33',()=>{
      assert.equal(cipher.encode(33,"abcdefghijklmnopqrstuvwxyz"), "hijklmnopqrstuvwxyzabcdefg")
    });

    it('debería retornar "bcdefghijklmnopqrstuvwxyza" para "abcdefghijklmnopqrstuvwxyz" con offset 26',()=>{
      assert.equal(cipher.encode(26,"abcdefghijklmnopqrstuvwxyz"), "bcdefghijklmnopqrstuvwxyza")
    });

    it('debería retornar "0123456789" para "0123456789" con offset 26',()=>{
      assert.equal(cipher.encode(26,"0123456789"), "0123456789")
    });
  });
    
  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "BCDEFGHIJKLMNOPQRSTUVWXYZA" con offset 26',()=>{
      assert.equal(cipher.decode(26,"BCDEFGHIJKLMNOPQRSTUVWXYZA"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offsett 33',()=>{
      assert.equal(cipher.decode(33,"hijklmnopqrstuvwxyzabcdefg"), "abcdefghijklmnopqrstuvwxyz")
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "bcdefghijklmnopqrstuvwxyza" con offsett 26',()=>{
      assert.equal(cipher.decode(26,"bcdefghijklmnopqrstuvwxyza"), "abcdefghijklmnopqrstuvwxyz")
    });

    it('debería retornar "0123456789" para "0123456789" con offset 26',()=>{
      assert.equal(cipher.decode(26,"0123456789"), "0123456789")
    });
  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado',()=>{
      assert.equal(typeof cipher.createCipherWithOffset(33),'object'); 
    });

  });
});