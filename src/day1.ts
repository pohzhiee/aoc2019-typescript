import * as fs from 'fs';
import * as rd from 'readline'

export function calculate_fuel1(mass: number): number{
    return Math.floor(mass/3) -2
}

export function calculate_fuel2(mass: number): number{
    if(mass <=8 ){
        return 0;
    }
    else{
        let added_mass = calculate_fuel1(mass);
        return added_mass + calculate_fuel2(added_mass);
    }
}

export function day1_part1(): void{
    let sum: number = 0;
    const reader = rd.createInterface(fs.createReadStream("./inputs/day1.txt", 'utf-8'));

    reader.on("line",
        (l: string) => {
            const nr = parseInt(l);
            sum += calculate_fuel1(nr);
        });
    reader.on("close",
        () => {
            console.log(`[Day1-1]Fuel required: ${sum}`);
        });
}

export function day1_part2(): void{
    let sum: number = 0;
    const reader = rd.createInterface(fs.createReadStream("./inputs/day1.txt", 'utf-8'));

    reader.on("line",
        (l: string) => {
            const nr = parseInt(l);
            sum += calculate_fuel2(nr);
        });
    reader.on("close",
        () => {
            console.log(`[Day1-2]Fuel required: ${sum}`);
        });
}