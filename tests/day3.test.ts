import * as rd from 'readline'
import {get_minimum_distance, get_minimum_distance2} from '../src/day3'
import { expect } from 'chai';
import 'mocha';
import * as utils from "../src/utils/input_parser";

describe("day3", function(){
    describe('Part1 test 1',
        () => {
            it('Test case 1 from problem description', () => {
                let lines = utils.parse_input_to_array("./inputs/day3_test.txt");
                let min_dist = get_minimum_distance(lines);
                expect(min_dist).to.equal(159);
            });
        });
    describe('Part1 test 2',
        () => {
            it('Test case 2 from problem description', () => {
                let lines = utils.parse_input_to_array("./inputs/day3_test2.txt");
                let min_dist = get_minimum_distance(lines);
                expect(min_dist).to.equal(135);
            });
        });
    describe('Part2 test 1',
        () => {
            it('Test case 1 from problem description', () => {
                let lines = utils.parse_input_to_array("./inputs/day3_test.txt");
                let min_dist = get_minimum_distance2(lines);
                expect(min_dist).to.equal(610);
            });
        });
    describe('Part2 test 1',
        () => {
            it('Test case 2 from problem description', () => {
                let lines = utils.parse_input_to_array("./inputs/day3_test2.txt");
                let min_dist = get_minimum_distance2(lines);
                expect(min_dist).to.equal(410);
            });
        });
});

