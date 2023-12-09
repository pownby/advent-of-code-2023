const Translation = require('./Translation');

module.exports = class Mapp {
  constructor(source, dest) {
    this.source = source;
    this.dest = dest;
    this.translations = [];
  }

  add(translation) {
    this.translations.push(new Translation(translation));
  }

  tryTranslate(n) {
    for(let i = 0; i < this.translations.length; i++) {
      const translation = this.translations[i];
      const result = translation.translate(n);
      if (result !== null) {
        return result;
      }
    }
    return null;
  }

  translate(n) {
    const result = this.tryTranslate(n);
    return result ?? n;
  }
}