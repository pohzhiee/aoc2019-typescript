import {is_possible_password, is_possible_password2} from '../src/day4'
import { expect } from 'chai';
import 'mocha';
import * as utils from "../src/utils/input_parser";


describe("day4", function() {
    describe('Part1 test 1',
        () => {
            it('Test case 1', () => {
                let is_valid_password = is_possible_password(111111);
                expect(is_valid_password).to.equal(true);
            });
        });
    describe('Part1 test 2',
        () => {
            it('Test case 2', () => {
                let is_valid_password = is_possible_password(223450);
                expect(is_valid_password).to.equal(false);
            });
        });
    describe('Part1 test 3',
        () => {
            it('Test case 3', () => {
                let is_valid_password = is_possible_password(223450);
                expect(is_valid_password).to.equal(false);
            });
        });
    describe('Part2 test 1',
        () => {
            it('Test case 1', () => {
                let is_valid_password = is_possible_password2(112233);
                expect(is_valid_password).to.equal(true);
            });
        });
    describe('Part2 test 2',
        () => {
            it('Test case 2', () => {
                let is_valid_password = is_possible_password2(123444);
                expect(is_valid_password).to.equal(false);
            });
        });
    describe('Part2 test 3',
        () => {
            it('Test case 3', () => {
                let is_valid_password = is_possible_password2(111122);
                expect(is_valid_password).to.equal(true);
            });
        });
});
