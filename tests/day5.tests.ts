import {IntcodeComputer2} from '../src/day5'
import { expect } from 'chai';
import 'mocha';
import * as utils from "../src/utils/input_parser";


describe("day5", function() {
    describe('Part2 test 1',
        () => {
            it('Test case 1', () => {
                let lines = utils.parse_input_to_array("./inputs/day5_tests/day5_test1.txt");
                let codes = lines[0];
                let codes_int = codes.map(str => parseInt(str));
                for (let i = 0; i < 10; i++) {
                    let computer = new IntcodeComputer2(codes_int, i);
                    let result = computer.run();
                    if (i != 8) {
                    } else {
                        expect(result).to.equal(1);
                    }
                }
            });
        });

    describe('Part2 test 1 (compare)',
        () => {
            it('Test case 1 (compare)', () => {
                let lines = utils.parse_input_to_array("./inputs/day5_tests/day5_test1.txt");
                let codes = lines[0];
                let codes_int = codes.map(str => parseInt(str));
                for (let i = 0; i < 10; i++) {
                    let computer = new IntcodeComputer2(codes_int, i);
                    let result = computer.run();
                    if (i != 8) {
                        expect(result).to.equal(0);
                    } else {
                        expect(result).to.equal(1);
                    }
                }
            });
        });


    describe('Part2 test 2 (compare)',
        () => {
            it('Test case 2 (compare)', () => {
                let lines = utils.parse_input_to_array("./inputs/day5_tests/day5_test2.txt");
                let codes = lines[0];
                let codes_int = codes.map(str => parseInt(str));
                for (let i = 0; i < 10; i++) {
                    let computer = new IntcodeComputer2(codes_int, i);
                    let result = computer.run();
                    if (i < 8) {
                        expect(result).to.equal(1);
                    } else {
                        expect(result).to.equal(0);
                    }
                }
            });
        });


    describe('Part2 test 3 (compare)',
        () => {
            it('Test case 3 (compare)', () => {
                let lines = utils.parse_input_to_array("./inputs/day5_tests/day5_test3.txt");
                let codes = lines[0];
                let codes_int = codes.map(str => parseInt(str));
                for (let i = 0; i < 10; i++) {
                    let computer = new IntcodeComputer2(codes_int, i);
                    let result = computer.run();
                    if (i == 8) {
                        expect(result).to.equal(1);
                    } else {
                        expect(result).to.equal(0);
                    }
                }
            });
        });

    describe('Part2 test 4 (compare)',
        () => {
            it('Test case 4 (compare)', () => {
                let lines = utils.parse_input_to_array("./inputs/day5_tests/day5_test4.txt");
                let codes = lines[0];
                let codes_int = codes.map(str => parseInt(str));
                for (let i = 0; i < 10; i++) {
                    let computer = new IntcodeComputer2(codes_int, i);
                    let result = computer.run();
                    if (i < 8) {
                        expect(result).to.equal(1);
                    } else {
                        expect(result).to.equal(0);
                    }
                }
            });
        });


    describe('Part2 test 5 (jump)',
        () => {
            it('Test case 5 (jump)', () => {
                for (let i = 0; i < 10; i++) {
                    let lines = utils.parse_input_to_array("./inputs/day5_tests/day5_test5.txt");
                    let codes = lines[0];
                    let codes_int = codes.map(str => parseInt(str));
                    let computer = new IntcodeComputer2(codes_int, i);
                    let result = computer.run();
                    if(result == 2){
                        console.log("HELLO");
                    }
                    if (i == 0) {
                        expect(result).to.equal(0);
                    } else {
                        expect(result).to.equal(1);
                    }
                }
            });
        });


    describe('Part2 test 6 (jump)',
        () => {
            it('Test case 6 (jump)', () => {
                for (let i = 0; i < 10; i++) {
                    let lines = utils.parse_input_to_array("./inputs/day5_tests/day5_test6.txt");
                    let codes = lines[0];
                    let codes_int = codes.map(str => parseInt(str));
                    let computer = new IntcodeComputer2(codes_int, i);
                    let result = computer.run();
                    if (i == 0) {
                        expect(result).to.equal(0);
                    } else {
                        expect(result).to.equal(1);
                    }
                }
            });
        });


    describe('Part2 test 7',
        () => {
            it('Test case 7', () => {
                let lines = utils.parse_input_to_array("./inputs/day5_tests/day5_test1.txt");
                let codes = lines[0];
                let codes_int = codes.map(str => parseInt(str));
                for (let i = 0; i < 10; i++) {
                    let computer = new IntcodeComputer2(codes_int, i);
                    let result = computer.run();
                    if (i != 8) {
                    } else {
                        expect(result).to.equal(1);
                    }
                }
            });
        });


});