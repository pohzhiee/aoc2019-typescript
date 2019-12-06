import * as utils from './utils/input_parser'

export class IntcodeComputer1{
    private codes: Array<number>;
    private current_index: number = 0;
    private input: number;
    private output: number;
    public constructor(codes: Array<number>, input: number) {
        this.codes = codes;
        this.input = input;
    }
    public run(): number{
        while(this.current_index < this.codes.length){
            this.run_command();
        }
        return this.output;
    }
    private run_command(){
        let command = this.codes[this.current_index] % 100;
        switch(command){
            case 1:
                this.op_code1();
                break;
            case 2:
                this.op_code2();
                break;
            case 3:
                this.op_code3();
                break;
            case 4:
                this.op_code4();
                break;
            case 99:
                this.op_code99();
                break;
        }
    }

    private get_param_codes(num_params: number): Array<number>{
        let command = this.codes[this.current_index];
        let command_str = command.toString(10);
        let param_code_str = command_str.split('').reverse().join('').substring(2);
        while(param_code_str.length < num_params){
            param_code_str += "0";
        }
        return param_code_str.split('').map((str) => parseInt(str));
    }

    private get_value(param_code: number, param_index: number){
        if(param_code == 0){
            let value_index = this.codes[this.current_index+param_index+1];
            return this.codes[value_index];
        }
        else if(param_code == 1){
            return this.codes[this.current_index+param_index+1];
        }
        else{
            throw new Error(`Unexpected param code: ${param_code}`);
        }
    }

    private set_value(value: number, param_code: number, param_index: number){
        if(param_code == 0){
            let value_index = this.codes[this.current_index+param_index+1];
            this.codes[value_index] = value;
        }
        else if(param_code == 1){
            this.codes[this.current_index+param_index+1] = value;
        }
        else{
            throw new Error(`Unexpected param code: ${param_code}`);
        }

    }

    private op_code1(){
        let param_codes = this.get_param_codes(3);
        let a = this.get_value(param_codes[0], 0);
        let b = this.get_value(param_codes[1], 1);
        this.set_value(a+b, param_codes[2], 2);
        this.current_index += 4;
    }

    private op_code2(){
        let param_codes = this.get_param_codes(3);
        let a = this.get_value(param_codes[0], 0);
        let b = this.get_value(param_codes[1], 1);
        this.set_value(a*b, param_codes[2], 2);
        this.current_index += 4;
    }

    private op_code3(){
        let param_codes = this.get_param_codes(1);
        this.set_value(this.input, param_codes[0], 0);
        this.current_index += 2;
    }
    private op_code4(){
        let param_codes = this.get_param_codes(1);
        this.output = this.get_value(param_codes[0], 0);
        console.log(`Output: ${this.output}`);
        // if(this.output != 0){
        //     throw new Error("Test fail, function not working correctly")
        // }
        this.current_index += 2;
    }
    private op_code99(){
        this.current_index = this.codes.length; //terminate the while loop
    }
}
export class IntcodeComputer2{
    private codes: Array<number>;
    private current_index: number = 0;
    private input: number;
    private output: number;
    public constructor(codes: Array<number>, input: number) {
        this.codes = codes;
        this.input = input;
    }
    public run(): number{
        while(this.current_index < this.codes.length){
            this.run_command();
        }
        return this.output;
    }
    private run_command(){
        let command = this.codes[this.current_index] % 100;
        switch(command){
            case 1:
                this.op_code1();
                break;
            case 2:
                this.op_code2();
                break;
            case 3:
                this.op_code3();
                break;
            case 4:
                this.op_code4();
                break;
            case 5:
                this.op_code5();
                break;
            case 6:
                this.op_code6();
                break;
            case 7:
                this.op_code7();
                break;
            case 8:
                this.op_code8();
                break;
            case 99:
                this.op_code99();
                break;
        }
    }

    private get_param_codes(num_params: number): Array<number>{
        let command = this.codes[this.current_index];
        let command_str = command.toString(10);
        let param_code_str = command_str.split('').reverse().join('').substring(2);
        while(param_code_str.length < num_params){
            param_code_str += "0";
        }
        return param_code_str.split('').map((str) => parseInt(str));
    }

    private get_value(param_code: number, param_index: number){
        if(param_code == 0){
            let value_index = this.codes[this.current_index+param_index+1];
            return this.codes[value_index];
        }
        else if(param_code == 1){
            return this.codes[this.current_index+param_index+1];
        }
        else{
            throw new Error(`Unexpected param code: ${param_code}`);
        }
    }

    private set_value(value: number, param_code: number, param_index: number){
        if(param_code == 0){
            let value_index = this.codes[this.current_index+param_index+1];
            this.codes[value_index] = value;
        }
        else if(param_code == 1){
            this.codes[this.current_index+param_index+1] = value;
        }
        else{
            throw new Error(`Unexpected param code: ${param_code}`);
        }

    }

    private op_code1(){
        let param_codes = this.get_param_codes(3);
        let a = this.get_value(param_codes[0], 0);
        let b = this.get_value(param_codes[1], 1);
        this.set_value(a+b, param_codes[2], 2);
        this.current_index += 4;
    }

    private op_code2(){
        let param_codes = this.get_param_codes(3);
        let a = this.get_value(param_codes[0], 0);
        let b = this.get_value(param_codes[1], 1);
        this.set_value(a*b, param_codes[2], 2);
        this.current_index += 4;
    }

    private op_code3(){
        let param_codes = this.get_param_codes(1);
        this.set_value(this.input, param_codes[0], 0);
        this.current_index += 2;
    }
    private op_code4(){
        let param_codes = this.get_param_codes(1);
        this.output = this.get_value(param_codes[0], 0);
        // console.log(`Output: ${this.output}`);
        // if(this.output != 0){
        //     throw new Error("Test fail, function not working correctly")
        // }
        this.current_index += 2;
    }
    private op_code5(){
        let param_codes = this.get_param_codes(2);
        let param1 = this.get_value(param_codes[0], 0);
        let param2 = this.get_value(param_codes[1], 1);
        if(param1 != 0){
            this.current_index = param2;
            // this.codes[this.current_index] = param2;
        }
        else{
            this.current_index += 3;
        }
    }
    private op_code6(){
        let param_codes = this.get_param_codes(2);
        let param1 = this.get_value(param_codes[0], 0);
        let param2 = this.get_value(param_codes[1], 1);
        if(param1 == 0){
            this.current_index = param2;
            // this.codes[this.current_index] = param2;
        }
        else{
            this.current_index += 3;
        }
    }
    private op_code7(){
        let param_codes = this.get_param_codes(3);
        let param1 = this.get_value(param_codes[0], 0);
        let param2 = this.get_value(param_codes[1], 1);
        if(param1 < param2){
            this.set_value(1, param_codes[2], 2);
        }
        else{
            this.set_value(0, param_codes[2], 2);
        }
        this.current_index += 4;
    }
    private op_code8(){
        let param_codes = this.get_param_codes(3);
        let param1 = this.get_value(param_codes[0], 0);
        let param2 = this.get_value(param_codes[1], 1);
        if(param1 == param2){
            this.set_value(1, param_codes[2], 2);
        }
        else{
            this.set_value(0, param_codes[2], 2);
        }
        this.current_index += 4;
    }
    private op_code99(){
        this.current_index = this.codes.length; //terminate the while loop
    }
}


export function day5_part1(): void {
    let lines = utils.parse_input_to_array("./inputs/day5.txt");
    let codes = lines[0];
    let codes_int = codes.map(str => parseInt(str));
    let computer = new IntcodeComputer1(codes_int, 1);
    let output = computer.run();
    console.log(`[Day5-1]Output: ${output}`);
}


export function day5_part2(): void {
    let lines = utils.parse_input_to_array("./inputs/day5.txt");
    let codes = lines[0];
    let codes_int = codes.map(str => parseInt(str));
    let computer = new IntcodeComputer2(codes_int, 5);
    let output = computer.run();
    console.log(`[Day5-2]Output: ${output}`);
}