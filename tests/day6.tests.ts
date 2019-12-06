import {initialize_orbit_nodes, OrbitNode} from '../src/day6'
import { expect } from 'chai';
import 'mocha';
import * as utils from "../src/utils/input_parser";


describe("day6", function() {
    describe('Part1 test 1',
        () => {
            it('Test case 1', () => {
                initialize_orbit_nodes("./inputs/day6_test1.txt");
                let total_orbit_count = 0;
                for(let orbit_node of OrbitNode.node_map){
                    let node_name = orbit_node[0];
                    if(orbit_node[1].has_ancestor("COM")){
                        total_orbit_count += orbit_node[1].get_orbits();
                    }
                }

                expect(total_orbit_count).to.equal(42);
            });
        });
    describe('Part2 test 1',
        () => {
            it('Part2 test 1', () => {
                initialize_orbit_nodes("./inputs/day6_test2.txt");
                let san_node = OrbitNode.node_map.get("SAN");
                let you_node = OrbitNode.node_map.get("YOU");
                let transfers_required = you_node.get_num_orbital_transfers(san_node.name);

                expect(transfers_required).to.equal(4);
            });
        });
});