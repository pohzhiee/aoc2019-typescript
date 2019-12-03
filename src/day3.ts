import * as utils from './utils/input_parser'

class TupleMap{
    private map = new Map<string, number>();
    has(key: [number, number]): boolean{
        return this.map.has(JSON.stringify(key));
    }
    set(key: [number, number], value: number){
        this.map.set(JSON.stringify(key), value);
    }
    get(key: [number, number]): number{
        return this.map.get(JSON.stringify(key));
    }
    get size(): number{
        return this.map.size;
    }
    clear(){
        this.map.clear();
    }
    delete(key: [number, number]): boolean  {
        return this.map.delete(JSON.stringify(key));
    }

    forEach(callbackfn: (value: number, key: [number, number], map: Map<[number, number], number>) => void, thisArg?: any): void{
        this.map.forEach((value, key) => {
            callbackfn.call(thisArg, value, JSON.parse(key), this);
        });
    }

}

export function get_minimum_distance(lines: Array<Array<string>>): number{
    type coordinates = [number, number];
    let minimum_distance = -1;
    let minimum_distance2 = -1;
    let lines_coords_traversed: Array<Array<string>> = [];
    let lines_coords_dict: Array<TupleMap> = [];
    lines.forEach((line, index)=>{
        let x = 0;
        let y = 0;
        let coords_traversed: Array<string> = [];
        let coords_dict = new TupleMap();
        let dist = 0;
        line.forEach((command, index)=>{
            let first_char = command.charAt(0);
            let dx = 0;
            let dy = 0;
            switch(first_char){
                case 'U':
                    dy = 1;
                    dx = 0;
                    break;
                case 'D':
                    dy = -1;
                    dx = 0;
                    break;
                case 'L':
                    dx = -1;
                    dy = 0;
                    break;
                case 'R':
                    dx = 1;
                    dy = 0;
                    break;
                case '':
                    break;
                default:
                    throw new Error(`Unexpected directional character encountered: ${first_char}, expected U, D, L or R only`);
            }
            let command_count = parseInt(command.substring(1));
            for(let i = 0;i<command_count;i++){
                x += dx;
                y += dy;
                dist +=1;
                coords_traversed.push(JSON.stringify([x,y]));
                if(!coords_dict.has([x,y])){
                    coords_dict.set([x,y], dist);
                }
            }
        });
        lines_coords_traversed.push(coords_traversed);
        lines_coords_dict.push(coords_dict);
    });
    let intersections: Array<string> = [];
    for(let i = 0;i<lines_coords_traversed.length;i++){
        for(let j = i;j<lines_coords_traversed.length;j++){
            if(i == j){
                continue;
            }
            let intersections_temp = lines_coords_traversed[i].filter(x => lines_coords_traversed[j].includes(x));
            intersections = intersections.concat(intersections_temp);
        }
    }

    for (let pair of intersections){
        let coords_val: [number, number] = JSON.parse(pair);
        let dist = Math.abs(coords_val[0]) + Math.abs(coords_val[1]);
        if(dist < minimum_distance || minimum_distance == -1){
            minimum_distance = dist;
        }
        // This part is hardcoded to work on 2 lines only, want to sleep
        let dist1 = lines_coords_dict[0].get(coords_val);
        let dist2 = lines_coords_dict[1].get(coords_val);
        let dist_part2 = dist1+dist2;
        if(dist_part2 < minimum_distance2 || minimum_distance2 == -1){
            minimum_distance2 = dist_part2;
        }


    }

    return minimum_distance;
}


export function get_minimum_distance2(lines: Array<Array<string>>): number{
    type coordinates = [number, number];
    let minimum_distance = -1;
    let minimum_distance2 = -1;
    let lines_coords_traversed: Array<Array<string>> = [];
    let lines_coords_dict: Array<TupleMap> = [];
    lines.forEach((line, index)=>{
        let x = 0;
        let y = 0;
        let coords_traversed: Array<string> = [];
        let coords_dict = new TupleMap();
        let dist = 0;
        line.forEach((command, index)=>{
            let first_char = command.charAt(0);
            let dx = 0;
            let dy = 0;
            switch(first_char){
                case 'U':
                    dy = 1;
                    dx = 0;
                    break;
                case 'D':
                    dy = -1;
                    dx = 0;
                    break;
                case 'L':
                    dx = -1;
                    dy = 0;
                    break;
                case 'R':
                    dx = 1;
                    dy = 0;
                    break;
                case '':
                    break;
                default:
                    throw new Error(`Unexpected directional character encountered: ${first_char}, expected U, D, L or R only`);
            }
            let command_count = parseInt(command.substring(1));
            for(let i = 0;i<command_count;i++){
                x += dx;
                y += dy;
                dist +=1;
                coords_traversed.push(JSON.stringify([x,y]));
                if(!coords_dict.has([x,y])){
                    coords_dict.set([x,y], dist);
                }
            }
        });
        lines_coords_traversed.push(coords_traversed);
        lines_coords_dict.push(coords_dict);
    });
    let intersections: Array<string> = [];
    for(let i = 0;i<lines_coords_traversed.length;i++){
        for(let j = i;j<lines_coords_traversed.length;j++){
            if(i == j){
                continue;
            }
            let intersections_temp = lines_coords_traversed[i].filter(x => lines_coords_traversed[j].includes(x));
            intersections = intersections.concat(intersections_temp);
        }
    }

    for (let pair of intersections){
        let coords_val: [number, number] = JSON.parse(pair);
        let dist = Math.abs(coords_val[0]) + Math.abs(coords_val[1]);
        if(dist < minimum_distance || minimum_distance == -1){
            minimum_distance = dist;
        }
        // This part is hardcoded to work on 2 lines only, want to sleep
        let dist1 = lines_coords_dict[0].get(coords_val);
        let dist2 = lines_coords_dict[1].get(coords_val);
        let dist_part2 = dist1+dist2;
        if(dist_part2 < minimum_distance2 || minimum_distance2 == -1){
            minimum_distance2 = dist_part2;
        }


    }

    return minimum_distance2;
}


export function day3_part1() : void{
    let lines = utils.parse_input_to_array("./inputs/day3.txt");
    let min_dist = get_minimum_distance(lines);
    console.log(`[Day3-1]Minimum distance is: ${min_dist}`);
}

export function day3_part2() : void{
    let lines = utils.parse_input_to_array("./inputs/day3.txt");
    let min_dist = get_minimum_distance2(lines);
    console.log(`[Day3-2]Minimum steps is: ${min_dist}`);
}