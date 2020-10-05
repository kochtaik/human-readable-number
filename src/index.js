module.exports = function toReadable (number) {
  if (number < 0 || number > 999) throw new RangeError('Parametrs should be between 0 and 999');

  const irregularNums = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  }
  const tens = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  }

  if (irregularNums.hasOwnProperty(number)) return irregularNums[number];

  const numToArr = Array.from(String(number), Number);

  const tensToReadable = (ten) => {
    const tenToArr = Array.from(String(ten), Number);
    if (tenToArr[1] === 0) return tens[tenToArr[0]];
    return `${tens[tenToArr[0]]} ${irregularNums[tenToArr[1]]}`;
  }

  const hundredsToReadable = () => {
    const hundreds = irregularNums[numToArr[0]];
    const ten = Number(numToArr.slice(1).join(''));
    if (ten === 0) return `${hundreds} hundred`;
    if (ten <= 19) return `${hundreds} hundred ${irregularNums[ten]}`;

    return `${hundreds} hundred ${tensToReadable(ten)}`;
  }

  if (number >= 20 && number < 100) return tensToReadable(number);

  if (number >= 100) return hundredsToReadable();
}
