import {
  parseMoneyValue,
  generateRandomNum,
  commaAppend,
  sizeScale,
} from '../src/utils/index';
import 'jest-extended';

const amount = 5000;

describe('a utility function for parsing numbers to to add a .00 decimal if the number has no decimal value', () => {
  it('should parse a number into a string', () => {
    expect(parseMoneyValue(amount)).toBeString();
  });
  it('should parse a number into a string with .00 decimal if the number doesn\t contain any', () => {
    expect(parseMoneyValue(amount)).toEqual(`${amount}.00`);
  });
  it('should parse a number with a decimal into a string, retaining the decimal', () => {
    expect(parseMoneyValue(500.432)).toEqual('500.432');
  });
});

describe('a utility function for generating random numbers to use as ID', () => {
  it('should return a string', () => {
    expect(generateRandomNum()).toBeString();
  });
});

describe('a utility function for appending comma to a string of numbers after every three numbers', () => {
  it('should return a string', () => {
    expect(commaAppend(String(amount))).toBeString();
  });
  it('should return a string with comma separators', () => {
    expect(commaAppend(String(amount))).toInclude(',');
  });
});

describe('a utility function for scaling components view style', () => {
  const size = 3;
  const unit = 'px';
  it('should return a string', () => {
    expect(sizeScale(2, 'px')).toBeString();
  });
  it('should return the size and css unit as a string', () => {
    expect(sizeScale(3, 'px')).toIncludeMultiple([String(size), unit]);
  });
});
