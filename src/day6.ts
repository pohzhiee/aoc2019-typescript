import * as utils from './utils/input_parser'

export class OrbitNode{
    get name(): string {
        return this._name;
    }
    get parent(): OrbitNode {
        return this._parent;
    }
    public static node_map: Map<string, OrbitNode> = new Map<string, OrbitNode>();
    private _parent: OrbitNode;
    private children: Array<OrbitNode> = new Array<OrbitNode>();
    private readonly _name: string;

    public constructor(name: string, parent: string = null){
        this._name = name;
        OrbitNode.node_map.set(name, this);
        // Checks if is topmost node
        if(parent == null){
            return;
        }
        this.add_parent(parent);
    }
    public add_child(child: OrbitNode){
        child._parent = this;
        this.children.push(child);
    }
    public add_parent(parent_str: string){
        if(this._parent != null){
            throw new Error(`Already has parent: ${this._parent._name}`);
        }
        // Get parent node
        let parent_node : OrbitNode = null;
        if(OrbitNode.node_map.has(parent_str)){
            parent_node = OrbitNode.node_map.get(parent_str);
        }
        else{
            parent_node = new OrbitNode(parent_str);
        }

        this._parent = parent_node;
        let contain_child = parent_node.children.find((value, index) => value._name == this._name);
        if(!contain_child){
            parent_node.children.push(this);
        }
        else{
            throw new Error(`Parent(${this._parent._name}) already has child ${this._name}`);
        }
    }

    public get_orbits(): number{
        let parent_count = 0;
        let parent = this._parent;
        while(parent != null){
            parent = parent._parent;
            parent_count+=1;
        }
        return parent_count;
    }

    public get_orbiting_children(): number{
        let orbit_children_count = 0;
        let children = this.children;
        for(let child of children){
            orbit_children_count += child.get_orbiting_children();
        }
        return orbit_children_count += this.children.length;
    }

    public has_ancestor(ancestor_name: string): boolean{
        if(this.get_dist_to_ancestor(ancestor_name) < 0){
            return false;
        }
        return true;
    }

    public get_dist_to_ancestor(ancestor_name: string): number{
        let parent = this._parent;
        let dist = 0;
        while(parent != null){
            dist += 1;
            if(parent._name == ancestor_name){
                return dist;
            }
            parent = parent._parent;
        }
        return -1;
    }

    public get_ancestor_list(): Array<string>{
        let parent = this._parent;
        let ancestor_list = []
        while(parent != null){
            ancestor_list.push(parent._name);
            parent = parent._parent;
        }
        return ancestor_list;

    }

    public get_num_orbital_transfers(destination: string){
        // Check for common ancestors and find the least distance
        let this_ancestor_list = this.get_ancestor_list();
        let destination_node = OrbitNode.node_map.get(destination);
        let dest_ancestor_list = destination_node.get_ancestor_list();
        let common_ancestors = this_ancestor_list.filter(x => dest_ancestor_list.includes(x));
        let distances: Array<number> = [];
        for(let common_ancestor of common_ancestors){
            let distance = this.get_dist_to_ancestor(common_ancestor) + destination_node.get_dist_to_ancestor(common_ancestor);
            distances.push(distance);
        }
        let min_dist = Math.min.apply(null, distances);
        // both the target and the source do not need to move the 1 extra distance to transfer, so -2
        let closest_common_ancestor_index = distances.indexOf(Math.min.apply(null, distances));
        let closest_common_ancestor = common_ancestors[closest_common_ancestor_index];
        console.log(`[Day6-2]Closest common ancestor: ${closest_common_ancestor}`);
        console.log(`[Day6-2]Dist from ${this.name} to ${closest_common_ancestor}: ${this.get_dist_to_ancestor(closest_common_ancestor)}`);
        console.log(`[Day6-2]Dist from ${destination_node.name} to ${closest_common_ancestor}: ${destination_node.get_dist_to_ancestor(closest_common_ancestor)}`);
        return min_dist -2;
    }

}

export function initialize_orbit_nodes(input_file_path: string){
    OrbitNode.node_map.clear();
    let orbits = utils.parse_input_to_array(input_file_path).map(arr => arr[0]);
    for(let orbit of orbits){
        let planets = orbit.split(')');
        let parent = planets[0];
        let child = planets[1];
        if(!OrbitNode.node_map.has(child)){
            new OrbitNode(child, parent);
        }
        else{
            OrbitNode.node_map.get(child).add_parent(parent);
        }
    }
}

export function day6_part1(): void {
    initialize_orbit_nodes("./inputs/day6.txt");
    let total_orbit_count = 0;
    for(let orbit_node of OrbitNode.node_map){
        let node_name = orbit_node[0];
        if(orbit_node[1].has_ancestor("COM")){
            total_orbit_count += orbit_node[1].get_orbits();
        }
    }

    console.log(`[Day6-1]Total orbit count: ${total_orbit_count}`);
}

export function day6_part2(): void {
    initialize_orbit_nodes("./inputs/day6.txt");
    let san_node = OrbitNode.node_map.get("SAN");
    let you_node = OrbitNode.node_map.get("YOU");
    let transfers_required = you_node.get_num_orbital_transfers(san_node.name);
    console.log(`[Day6-2]Transfers required: ${transfers_required}`);
}