import * as fs from 'fs';

export function parse_input_to_array(path: string): Array<Array<string>>{
    let contents = fs.readFileSync(path, 'utf-8');
    contents.replace('\r', '');
    let contents_lines = contents.split('\n');
    let lines_split: Array<Array<string>> = [];
    for (let line of contents_lines){
        let line_contents = line.split(',');
        lines_split.push(line_contents);
    }
    return lines_split;
}

