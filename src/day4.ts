import * as utils from './utils/input_parser'

export function is_possible_password(num: number): boolean {
    let num_str = num.toString(10);
    if (num_str.length != 6) return false;
    let prev_digit = '\n';
    let has_same_digit = false;
    for (let digit of num_str) {
        if (prev_digit == '\n') {
            prev_digit = digit;
        } else {
            let prev_digit_int = parseInt(prev_digit);
            let digit_int = parseInt(digit);
            if (prev_digit_int > digit_int) {
                return false;
            } else if (prev_digit_int == digit_int) {
                has_same_digit = true;
            }
            prev_digit = digit;
        }
    }
    return has_same_digit;
}

export function is_possible_password2(num: number): boolean {
    let num_str = num.toString(10);
    if (num_str.length != 6) return false;
    let prev_digit = '\n';
    let num_same_digit = 1;
    let has_two_same_digit = false;
    for (let digit of num_str) {
        if (prev_digit == '\n') {
            prev_digit = digit;
        } else {
            let prev_digit_int = parseInt(prev_digit);
            let digit_int = parseInt(digit);
            if (prev_digit_int > digit_int) {
                return false;
            } else if (prev_digit_int == digit_int) {
                num_same_digit += 1;
            } else {
                if(num_same_digit == 2){
                    has_two_same_digit = true;
                }
                num_same_digit = 1;
            }
            prev_digit = digit;
        }
    }
    if(num_same_digit == 2){
        has_two_same_digit = true;
    }
    return has_two_same_digit;
}


export function get_num_possible_passwords(min: number, max: number): number {
    let count = 0;
    for (let num = min; num < max; num++) {
        if (is_possible_password(num)) count += 1;
    }
    return count;
}

export function get_num_possible_passwords2(min: number, max: number): number {
    let count = 0;
    for (let num = min; num < max; num++) {
        if (is_possible_password2(num)) count += 1;
    }
    return count;
}


export function day4_part1(): void {
    let lines = utils.parse_input_to_array("./inputs/day4.txt");
    let line = lines[0][0];
    let min_max = line.split('-');
    let min = parseInt(min_max[0]);
    let max = parseInt(min_max[1]);
    let num_possible_passwords = get_num_possible_passwords(min, max);
    console.log(`[Day4-1]Number of possible passwords from ${min}-${max} = ${num_possible_passwords}`);
}

export function day4_part2(): void {
    let lines = utils.parse_input_to_array("./inputs/day4.txt");
    let line = lines[0][0];
    let min_max = line.split('-');
    let min = parseInt(min_max[0]);
    let max = parseInt(min_max[1]);
    let num_possible_passwords = get_num_possible_passwords2(min, max);
    console.log(`[Day4-2]Number of possible passwords from ${min}-${max} = ${num_possible_passwords}`);
}