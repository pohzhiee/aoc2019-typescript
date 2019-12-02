import * as fs from 'fs';
import * as rd from 'readline'


export function day2_part1(): void{
    let line = fs.readFileSync("./inputs/day2.txt", 'utf-8');
    let codes = line.split(',');
    let codes_int = codes.map(str => parseInt(str));
    codes_int[1] = 12;
    codes_int[2] = 2;
    for (let i=0;i<codes_int.length;i++){
        let opcode = codes_int[i*4];
        if(opcode == 1){
            let index1 = codes_int[i*4+1];
            let index2 = codes_int[i*4+2];
            let index3 = codes_int[i*4+3];
            codes_int[index3] = codes_int[index1] + codes_int[index2];
        }
        else if(opcode == 2){
            let index1 = codes_int[i*4+1];
            let index2 = codes_int[i*4+2];
            let index3 = codes_int[i*4+3];
            codes_int[index3] = codes_int[index1] * codes_int[index2];
        }
        else if(opcode == 99){
            console.log(`[Day2-1]Final value at position 0: ${codes_int[0]}`);
        }
    }

}