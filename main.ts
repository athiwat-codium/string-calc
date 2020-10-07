class abc {
  testStr: string;
  delimiters: string[] = [];
  prefixDelimiterPos: number | undefined;
  suffixDelimiterPos: number | undefined;

  constructor(str: string) {
    this.testStr = str;
    this.getDelimiter(str);
  }

  Add(numbers: string, delimiter: string): any {
    console.log('numbers', numbers);
    const numberArr = numbers.split(new RegExp(delimiter, 'g'));
    console.log('numberArr', numberArr);
    return numberArr.reduce((sum, curr) => {
      const adder = Number(curr);
      if (Number.isNaN(adder)) {
        throw 'There is NaN number';
      }
      return (sum += adder);
    }, 0);
  }

  getDelimiter(str: string) {
    this.prefixDelimiterPos = str.search('//');
    this.suffixDelimiterPos = str.search('\n');
    if (this.prefixDelimiterPos === 0 && this.suffixDelimiterPos > 2) {
      const delimiterGroup = str.slice(
        this.prefixDelimiterPos + 2,
        this.suffixDelimiterPos
      );
      const delimiterGroups = delimiterGroup.match(/\[.\]/g);
      if (!delimiterGroups) {
        throw '';
      }
      if (delimiterGroups.length > 0) {
        this.delimiters = delimiterGroups.map((delimiterGroup) => {
          return delimiterGroup.replace(/\[/g, '').replace(/\]/g, '');
        });
      } else {
        this.delimiters = [delimiterGroup];
      }
    }
  }

  getNumber() {
    if (!this.suffixDelimiterPos) {
      throw 'There is no suffix delimiter position';
    }
    return this.testStr.slice(this.suffixDelimiterPos + 1, this.testStr.length);
  }

  summary() {
    const allDelimiter = this.delimiters.join('|');
    console.log('allDelimiter', allDelimiter);
    return this.Add(this.getNumber(), allDelimiter);
  }
}

console.log(new abc(`//[;][,]\n1;2`).summary());
