import * as rd from 'readline'
import {calculate_fuel1, calculate_fuel2} from '../src/day1'
import { expect } from 'chai';
import 'mocha';

describe("day1", function(){
    describe('Calculate fuel 1',
        () => {
            it('should return true', () => {
                const result = calculate_fuel1(100);
                expect(result).to.equal(31);
            });
        });
    describe('Calculate fuel 2',
        () => {
            it('should return true', () => {
                const result = calculate_fuel2(100756);
                expect(result).to.equal(50346);
            });
        });

});

