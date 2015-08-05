//
// helpers.base64
//
'use strict';

class Base64 {

  isBase64(string) {
    const regex = /^[a-z0-9\+\/\s]+\={0,2}$/i;

    if (!string) {
      return false;
    }

    if (!regex.test(string) || string.length % 4 > 0) {
      return false;
    }

    return true;
  }

  decode(string) {
    const digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    const result = [];
    let cur = 0;
    let prev = 0;
    let digitNum = 0;
    let i = 0;

    string = string.replace(/\s/g, '');

    if (!this.isBase64(string)) {
      return null;
    }

    string = string.replace(/\=/g, '');

    /*jshint bitwise:false */
    while (i < string.length) {
      cur = digits.indexOf(string.charAt(i));
      digitNum = i % 4;

      switch (digitNum) {
      case 1: //second digit
        result.push(prev << 2 | cur >> 4);
        break;
      case 2: //third digit
        result.push((prev & 0x0f) << 4 | cur >> 2);
        break;
      case 3: //fourth digit
        result.push((prev & 3) << 6 | cur);
        break;
      }

      prev = cur;
      i++;
    }
    /*jshint bitwise:true */

    return result;
  }

  toString(string) {
    return String.fromCharCode.apply(this, this.decode(string));
  }

  toObject(string) {
    try {
      return JSON.parse(this.toString(string));
    } catch (e) {
      throw new Error('Invalid JSON');
    }
  }
}

export default new Base64();
