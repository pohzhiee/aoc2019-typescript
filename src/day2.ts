import * as fs from 'fs';
import * as rd from 'readline'

export function run_computer(codes: Array<number>, noun: number, verb: number): number {
    codes[1] = noun;
    codes[2] = verb;
    for (let i = 0; i < codes.length; i++) {
        let opcode = codes[i * 4];
        if (opcode == 1) {
            let index1 = codes[i * 4 + 1];
            let index2 = codes[i * 4 + 2];
            let index3 = codes[i * 4 + 3];
            codes[index3] = codes[index1] + codes[index2];
        } else if (opcode == 2) {
            let index1 = codes[i * 4 + 1];
            let index2 = codes[i * 4 + 2];
            let index3 = codes[i * 4 + 3];
            codes[index3] = codes[index1] * codes[index2];
        } else if (opcode == 99) {
            return codes[0]
        }
    }
}

export function get_noun_verb(expected_value: number): [number, number] {
    for (let i = 0; i < 99; i++) {
        for (let j = 0; j < 99; j++) {
            let codes = parse_file("./inputs/day2.txt");
            let value = run_computer(codes, i, j);
            if (value == 19690720) {
                return [i,j];
            }
        }
    }
    console.log(`No noun-verb combination found to satisfy result`);
    return [-1,-1];
}


function parse_file(path: string) {
    let line = fs.readFileSync(path, 'utf-8');
    let codes = line.split(',');
    let codes_int = codes.map(str => parseInt(str));
    return codes_int;
}

export function day2_part1(): void {
    let codes = parse_file("./inputs/day2.txt");
    let value = run_computer(codes, 12, 2);
    console.log(`[Day2-1]Final value at position 0: ${value}`);
}

export function day2_part2(): void {
    let [noun, verb] = get_noun_verb(19690720);
    console.log(`[Day2-2]Noun: ${noun}, verb: ${verb}, 100*noun+verb=${100*noun+verb}`)
}