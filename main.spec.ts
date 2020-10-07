//
// Sample outputs
//

import { Add } from './main'
import { expect} from 'chai';
import 'mocha'


describe('Test', () => {
  it('add 1,2', () => {
    const test1 = '1,2';
    const result = Add(test1);
    expect(result).equals(3);
  });
  it('Add 1-2-3', () => {
    const test2 = '1,2,3';
    const result = Add(test2);
    expect(result).equals(6);
  });
  it('Add 1-2-3-4-5', () => {
    const test3 = '1,2,3,4,5';
    const result = Add(test3);
    expect(result).equals(15);
  });



      /*
      also include \n characters as seperators


       */


});
